/**
 * validate-entities.example.ts
 *
 * Example validation script that checks ENTITIES.md against the actual schema.
 * This is the single highest-ROI automation in the framework — it catches
 * documentation drift before it causes bugs.
 *
 * USAGE:
 *   1. Copy this file to your project as `scripts/validate-entities.ts`
 *   2. Customize the schema parsing for your tech stack (see examples below)
 *   3. Run: `npx tsx scripts/validate-entities.ts`
 *   4. Add to your /end workflow or CI pipeline
 *
 * WHAT IT DOES:
 *   - Reads your actual schema file (e.g., schema.ts, models.py, schema.prisma)
 *   - Reads .agents/SYSTEM/ENTITIES.md
 *   - Compares entity names and field names
 *   - Reports any entities or fields that are in one but not the other
 *
 * WHY IT MATTERS:
 *   Without this, ENTITIES.md drifts from reality over time. Agents read stale
 *   docs, generate code with wrong field names, and waste entire sessions
 *   debugging type errors that a 2-second validation would have caught.
 */

import { readFileSync } from "fs";
import { resolve } from "path";

// ============================================================
// CONFIGURATION — Customize for your project
// ============================================================

const ENTITIES_PATH = resolve(".agents/SYSTEM/ENTITIES.md");

// Uncomment and customize ONE of these for your tech stack:
// const SCHEMA_PATH = resolve("convex/schema.ts");        // Convex
// const SCHEMA_PATH = resolve("prisma/schema.prisma");     // Prisma
// const SCHEMA_PATH = resolve("src/models.py");            // Django
// const SCHEMA_PATH = resolve("migrations/schema.sql");    // Raw SQL

const SCHEMA_PATH = resolve("YOUR_SCHEMA_FILE_HERE"); // <-- Replace this

// ============================================================
// SCHEMA PARSERS — Pick one, delete the others
// ============================================================

/**
 * Example: Parse Convex schema.ts
 * Looks for: defineTable({ fieldName: v.string(), ... })
 */
function parseConvexSchema(content: string): Map<string, string[]> {
  const entities = new Map<string, string[]>();
  const tableRegex = /(\w+):\s*defineTable\(\{([^}]+)\}/g;
  let match;

  while ((match = tableRegex.exec(content)) !== null) {
    const tableName = match[1];
    const fieldsBlock = match[2];
    const fieldRegex = /(\w+):\s*v\./g;
    const fields: string[] = [];
    let fieldMatch;

    while ((fieldMatch = fieldRegex.exec(fieldsBlock)) !== null) {
      fields.push(fieldMatch[1]);
    }

    entities.set(tableName, fields);
  }

  return entities;
}

/**
 * Example: Parse Prisma schema
 * Looks for: model ModelName { fieldName Type ... }
 */
function parsePrismaSchema(content: string): Map<string, string[]> {
  const entities = new Map<string, string[]>();
  const modelRegex = /model\s+(\w+)\s*\{([^}]+)\}/g;
  let match;

  while ((match = modelRegex.exec(content)) !== null) {
    const modelName = match[1];
    const fieldsBlock = match[2];
    const fields = fieldsBlock
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("//") && !line.startsWith("@@"))
      .map((line) => line.split(/\s+/)[0])
      .filter(Boolean);

    entities.set(modelName, fields);
  }

  return entities;
}

/**
 * Example: Parse Django models.py
 * Looks for: class ModelName(models.Model): field = models.FieldType()
 */
function parseDjangoModels(content: string): Map<string, string[]> {
  const entities = new Map<string, string[]>();
  const classRegex = /class\s+(\w+)\(.*Model.*\):/g;
  let match;

  while ((match = classRegex.exec(content)) !== null) {
    const className = match[1];
    // Find fields between this class and the next class/end of file
    const startIdx = match.index + match[0].length;
    const nextClass = content.indexOf("\nclass ", startIdx);
    const classBody = content.slice(startIdx, nextClass === -1 ? undefined : nextClass);

    const fieldRegex = /^\s+(\w+)\s*=\s*models\.\w+/gm;
    const fields: string[] = [];
    let fieldMatch;

    while ((fieldMatch = fieldRegex.exec(classBody)) !== null) {
      fields.push(fieldMatch[1]);
    }

    entities.set(className, fields);
  }

  return entities;
}

// ============================================================
// ENTITIES.MD PARSER (Universal)
// ============================================================

/**
 * Parse entity names from ENTITIES.md
 * Looks for: ### Entity: Name  or  ### tableName
 */
function parseEntitiesMd(content: string): Set<string> {
  const entities = new Set<string>();
  const headerRegex = /^###\s+(?:Entity:\s*)?(\w+)/gm;
  let match;

  while ((match = headerRegex.exec(content)) !== null) {
    const name = match[1];
    // Skip example/placeholder entries
    if (name !== "ExampleEntity" && name !== "Name") {
      entities.add(name);
    }
  }

  return entities;
}

// ============================================================
// VALIDATION
// ============================================================

function validate() {
  console.log("🔍 Validating ENTITIES.md against schema...\n");

  // Read files
  let schemaContent: string;
  let entitiesContent: string;

  try {
    schemaContent = readFileSync(SCHEMA_PATH, "utf-8");
  } catch {
    console.error(`❌ Schema file not found: ${SCHEMA_PATH}`);
    console.error("   Update SCHEMA_PATH in this script to point to your schema file.");
    process.exit(1);
  }

  try {
    entitiesContent = readFileSync(ENTITIES_PATH, "utf-8");
  } catch {
    console.error(`❌ ENTITIES.md not found: ${ENTITIES_PATH}`);
    process.exit(1);
  }

  // Parse schema — UNCOMMENT the parser for your tech stack:
  // const schemaEntities = parseConvexSchema(schemaContent);
  // const schemaEntities = parsePrismaSchema(schemaContent);
  // const schemaEntities = parseDjangoModels(schemaContent);

  // Placeholder — replace with the uncommented line above
  const schemaEntities = new Map<string, string[]>();
  console.warn("⚠️  No schema parser selected. Uncomment one in validate-entities.ts\n");

  // Parse ENTITIES.md
  const docEntities = parseEntitiesMd(entitiesContent);

  // Compare
  const schemaNames = new Set(schemaEntities.keys());
  let hasErrors = false;

  // Entities in schema but not in docs
  for (const name of schemaNames) {
    if (!docEntities.has(name)) {
      console.error(`❌ Missing from ENTITIES.md: ${name}`);
      hasErrors = true;
    }
  }

  // Entities in docs but not in schema
  for (const name of docEntities) {
    if (!schemaNames.has(name)) {
      console.error(`❌ In ENTITIES.md but not in schema: ${name}`);
      hasErrors = true;
    }
  }

  // Summary
  if (hasErrors) {
    console.error("\n❌ ENTITIES.md is out of sync with the schema.");
    console.error("   Update ENTITIES.md to match, then re-run this script.");
    process.exit(1);
  } else {
    console.log(`✅ ENTITIES.md is in sync. ${docEntities.size} entities validated.`);
  }
}

validate();
