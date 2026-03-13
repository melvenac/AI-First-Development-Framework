# AI-First Development Framework
**Version 1.0 — Portable Agent Architecture**

> This document explains the framework, how to use it, and how to duplicate it for any project with any tech stack.

---

## New Project Setup

Get started with a new project in under 5 minutes:

### 1. Clone This Repo

```bash
git clone https://github.com/melvenac/AI-First-Development-Framework.git my-new-project
cd my-new-project
```

### 2. Reset Git History

Remove the framework repo's history and start fresh:

```bash
rm -rf .git
git init
git add -A
git commit -m "Initial commit: AI-First Development Framework scaffold"
```

### 3. Write Your PRD

This is the most important step. Open `.agents/SYSTEM/PRD.md` and define your project — what you're building, the tech stack, features, data model, etc. See [Phase 2: Write the PRD](#phase-2-write-the-prd-30-60-minutes) for the full template.

**Tip:** You can ask your AI agent to help draft the PRD. Give it your idea and ask it to produce a structured PRD following the template format.

### 4. Start Your First Session

```
/start
```

The AI reads the framework, understands the structure, and helps you fill in the remaining SYSTEM docs (ENTITIES.md, RULES.md, SUMMARY.md) from your PRD. From here, you're building.

### What You Get Out of the Box

| File | Purpose | Action Needed |
|---|---|---|
| `.agents/FRAMEWORK.md` | Framework guide | Read-only reference |
| `.agents/SYSTEM/PRD.md` | Product requirements | **Write this first** |
| `.agents/SYSTEM/SUMMARY.md` | Current project state | AI updates each session |
| `.agents/SYSTEM/ENTITIES.md` | Data model docs | Derive from PRD |
| `.agents/SYSTEM/RULES.md` | Coding standards | Customize for your stack |
| `.agents/SYSTEM/DECISIONS.md` | Decision log | Fills up as you build |
| `.agents/TASKS/INBOX.md` | Task backlog | Create from PRD features |
| `.agents/workflows/` | Session lifecycle | Works as-is |
| `.claude/commands/` | Claude Code slash commands | Works as-is |
| `.gemini/commands/` | Gemini slash commands | Works as-is |
| `CLAUDE.md` | Claude Code entry point | Works as-is |

---

## What Is This?

This is an **AI-first development framework** — a structured set of markdown documents, workflows, and validation scripts that give AI coding agents (Cline, Claude Code, Gemini, Cursor, etc.) persistent memory, consistent behavior, and guardrails across sessions.

Without this framework, every AI session starts from zero. With it, agents:
- Know what was built, what's broken, and what's next
- Follow consistent coding standards
- Don't repeat mistakes (gotchas are documented)
- Update their own documentation as they work
- Can be validated for protocol compliance

---

## Framework Architecture

```
.agents/                          ← Agent-readable project brain
├── FRAMEWORK.md                  ← This file (how to use & duplicate)
├── SYSTEM/                       ← Project truth documents
│   ├── PRD.md                    ← Product requirements
│   ├── SUMMARY.md                ← Current state (overwritten each session)
│   ├── ENTITIES.md               ← Data model documentation
│   ├── DECISIONS.md              ← Architectural decision log
│   ├── RULES.md                  ← Coding standards & conventions
│   ├── TESTING.md                ← Testing strategy
│   ├── RUNBOOK.md                ← Production operations
│   └── SECURITY.md               ← Security audit checklist
├── TASKS/                        ← Work tracking
│   ├── INBOX.md                  ← Prioritized task backlog
│   └── task.md                   ← Current sprint/focus
├── SESSIONS/                     ← Session history
│   ├── SESSION_TEMPLATE.md       ← Template for new sessions
│   └── Session_N.md              ← Individual session logs
├── skills/                       ← Reusable agent skills
│   ├── INDEX.md                  ← Skill registry
│   └── <skill-name>/SKILL.md    ← Individual skill instructions
└── workflows/                    ← Lifecycle commands
    ├── start.md                  ← Session start protocol
    ├── end.md                    ← Session end protocol
    ├── test.md                   ← Zero-token E2E testing protocol
    └── task.md                   ← Next task selection protocol

.claude/commands/                 ← Claude Code slash commands (mirrors workflows/)
.gemini/commands/                 ← Gemini slash commands (mirrors workflows/)
.clinerules/                      ← Cline-specific rules
CLAUDE.md                         ← Claude Code entry point
```

### The Three Layers

| Layer | Purpose | Changes How Often |
|---|---|---|
| **SYSTEM/** | Project truth — what the project IS | Rarely (PRD, RULES) to every session (SUMMARY) |
| **TASKS/** | What needs to be DONE | Every session |
| **SESSIONS/** | What WAS done | Append-only log |

**Skills** are reusable patterns. **Workflows** are lifecycle hooks.

---

## How to Duplicate This Framework for a New Project

### Phase 1: Scaffold (5 minutes)

Copy the framework skeleton. Everything below is **tech-stack agnostic**:

```bash
mkdir -p .agents/SYSTEM .agents/TASKS .agents/SESSIONS .agents/skills .agents/workflows
mkdir -p .claude/commands .gemini/commands
```

Copy these files **as-is** (they're universal):
- `.agents/SESSIONS/SESSION_TEMPLATE.md`
- `.agents/workflows/start.md`
- `.agents/workflows/end.md`
- `.claude/commands/start.md` and `end.md`
- `.gemini/commands/start.md` and `end.md`

### Phase 2: Write the PRD (30-60 minutes)

**This is the most important step.** The PRD is the foundation everything else derives from.

Create `.agents/SYSTEM/PRD.md` with:
1. **Project overview** — What are we building? For whom?
2. **Core features** — Numbered list of must-have features
3. **Tech stack** — What technologies are we using?
4. **User roles** — Who uses the system and what can they do?
5. **Pages/Routes** — What pages exist?
6. **Data model sketch** — What are the main entities? (This becomes ENTITIES.md)
7. **Third-party integrations** — What external services are involved?
8. **Non-functional requirements** — Performance, security, accessibility

**Tip**: You can have an AI agent help you write the PRD. Give it your idea and ask it to produce a structured PRD following this format.

### Phase 3: Derive the SYSTEM Documents (from PRD)

Once the PRD exists, create the remaining SYSTEM docs **in this order**:

| Order | Document | Derived From | When to Customize |
|---|---|---|---|
| 1 | `PRD.md` | Your brain | Before anything else |
| 2 | `ENTITIES.md` | PRD §6 (data model) | After PRD, before coding |
| 3 | `RULES.md` | PRD §3 (tech stack) | After PRD, before coding |
| 4 | `SUMMARY.md` | PRD (initial state) | After PRD, updated every session |
| 5 | `DECISIONS.md` | Empty initially | As decisions are made |
| 6 | `TESTING.md` | Tech stack + features | After first feature ships |
| 7 | `RUNBOOK.md` | Infrastructure choices | Before production deploy |
| 8 | `SECURITY.md` | Auth + payment + data | Before production deploy |

### Phase 4: Create Skills (Iterative — NOT Upfront)

**Do NOT try to create all skills before coding.** Skills emerge from patterns you discover during development.

#### When to Create a Skill

| Trigger | Example |
|---|---|
| You explain the same pattern to the AI 3+ times | "Always use lazy init for Stripe in Convex Actions" → `stripe-lazy-init` skill |
| A technology has project-specific conventions | "We use shadcn/ui with a dark theme" → `shadcn-ui` skill |
| A workflow has more than 5 steps | "Creating a new Convex component" → `convex-component-authoring` skill |
| An integration has gotchas | "FullCalendar + Convex real-time" → `fullcalendar-convex` skill |
| You want to prevent a class of bugs | "Schema changes must update ENTITIES.md" → `convex-schema-guard` skill |

#### Skill Creation Timeline

```
PRD written
  ↓
Start coding (Session 1-3)
  → Create: session-manager skill (universal)
  → Create: 1-2 tech-stack skills (e.g., your DB framework, your UI library)
  ↓
Features shipping (Session 4-8)
  → Create skills as patterns emerge
  → Don't force it — if you haven't repeated a pattern, you don't need a skill
  ↓
Stabilizing (Session 8+)
  → Create: playwright-tester skill (zero-token E2E testing)
  → Create: deployment skill
  → Flesh out placeholder skills
  → Add validation scripts
```

### Phase 5: Wire Up Validation (Optional but Recommended)

If your project has a data model documentation file (like ENTITIES.md), create a validation script that checks it against the actual schema. This is the single highest-ROI automation in the framework.

---

## Customizing for Different Tech Stacks

The framework is **90% tech-agnostic**. Here's what changes per stack:

### What's Universal (Copy As-Is)
- Session lifecycle (start/end workflows)
- SUMMARY.md structure
- DECISIONS.md format
- TASKS/ structure
- SESSION_TEMPLATE.md
- SECURITY.md structure (customize the checklist items)

### What's Tech-Specific (Must Customize)

| Document | What Changes | Example |
|---|---|---|
| `RULES.md` | Coding standards section | React rules vs. Vue rules vs. Python rules |
| `ENTITIES.md` | Schema format | Convex validators vs. Prisma schema vs. SQL DDL |
| `TESTING.md` | Testing tools & patterns | Vitest vs. Jest vs. pytest |
| `RUNBOOK.md` | Deploy steps & infrastructure | Vercel vs. Docker vs. AWS |
| Skills | Entirely project-specific | Different skills for every project |

### Example: Same Framework, Different Stack

**This project** (Next.js + Convex + Clerk + Stripe):
- Skills: `convex-schema-guard`, `stripe-lazy-init`, `shadcn-ui`, `fullcalendar-convex`, `playwright-tester`
- Testing: Zero-token Playwright E2E (53 tests across 7 spec files, `npx playwright test tests/e2e/`)
- Validation: `validate-entities.ts` (parses Convex schema.ts files)
- Rules: Server Components default, Convex validators, Tailwind dark theme

**A Django + PostgreSQL + HTMX project** would have:
- Skills: `django-models`, `htmx-patterns`, `celery-tasks`
- Validation: Script that parses Django models.py and checks ENTITIES.md
- Rules: Class-based views, Django ORM conventions, template naming

**A Go + gRPC + Kubernetes project** would have:
- Skills: `protobuf-schema`, `k8s-manifests`, `go-error-handling`
- Validation: Script that parses .proto files and checks ENTITIES.md
- Rules: Go naming conventions, error wrapping, context propagation

---

## The Session Lifecycle

Every development session follows this pattern:

```
/start
  ├── Read SUMMARY.md (current state)
  ├── Read INBOX.md (priorities)
  ├── Read ENTITIES.md (if schema work)
  ├── Create session log
  ├── Run validate:session:pre
  └── State objective → get approval → code

... development work ...

/test (optional — after feature work or before deploy)
  ├── Assess project structure
  ├── Author .spec.ts files (zero-token — deterministic scripts)
  ├── Execute via Playwright CLI (zero AI tokens)
  ├── Fix loop (max 3 attempts per failure)
  └── Report → feeds into /end session summary

/end
  ├── Update session log (accomplishments, files, gotchas)
  ├── Update SUMMARY.md (current state block)
  ├── Update DECISIONS.md (if applicable)
  ├── Update ENTITIES.md (if schema changed)
  ├── Run validate:entities (if schema changed)
  ├── Mark tasks done in INBOX.md
  ├── Run validate:session:post
  └── Present summary to user
```

This lifecycle is what gives agents **continuity across sessions**. Without it, every session is a cold start.

---

## Zero-Token E2E Testing

The framework includes a **zero-token testing strategy** that uses AI only to *write* deterministic test scripts, then runs them natively with Playwright at zero token cost.

### Why Zero-Token?

Traditional AI-driven testing (screenshot analysis, Playwright MCP server) consumes massive tokens per run. This approach splits testing into two phases:

1. **Write phase** (AI tokens) — The agent reads your project structure, understands routes/components/auth gates, and generates `.spec.ts` test files organized by strategy
2. **Run phase** (zero tokens) — Playwright executes those scripts natively via CLI. No AI judgment needed at runtime

### The 5-Phase Workflow

```
/test (or invoke playwright-tester skill)
  ├── Phase 1: Assess    — Read project structure (framework, routing, entry points)
  ├── Phase 2: Author    — Write independent .spec.ts files by strategy
  ├── Phase 3: Execute   — Run tests natively via Playwright CLI
  ├── Phase 4: Fix Loop  — Auto-repair failures (max 3 attempts)
  └── Phase 5: Report    — Results table, bugs found/fixed, suggested coverage
```

### Test Strategy Categories

| File | Strategy | What it covers |
|---|---|---|
| `happy_path.spec` | Core user journeys | The flows that must always work |
| `validation.spec` | Form validation | Required fields, error states, success states |
| `navigation.spec` | Routing & links | All routes resolve, nav links work, 404 handling |
| `auth_gates.spec` | Auth boundaries | Protected routes redirect, public routes stay open |
| `responsive.spec` | Viewport rendering | Mobile, tablet, desktop breakpoints |
| `[feature].spec` | Feature-specific | Booking flow, membership flow, etc. |

### Integration with the Framework

| Framework Layer | Testing Integration |
|---|---|
| `skills/playwright-tester/SKILL.md` | The skill file — 5-phase playbook with project-specific details |
| `SYSTEM/TESTING.md` | Documents the zero-token strategy as an official testing layer |
| `SYSTEM/RULES.md` | Add rule: "Tests are `.spec.ts` files, run natively, zero AI tokens at execution" |
| `skills/INDEX.md` | Register the `playwright-tester` skill |
| `playwright.config.ts` | Project root — Playwright configuration |
| `tests/e2e/` | Test files live here, organized by strategy |

### The Fix Loop

The fix loop is what makes this self-repairing:

1. Run tests → some fail
2. Agent reads error output and failure screenshots
3. Determines if failure is a **test bug** (bad selector, timing) or an **app bug** (broken UI, backend error)
4. Fixes the issue, re-runs
5. **Max 3 attempts** per failing test — prevents infinite loops
6. Final report lists all bugs found/fixed and suggests additional coverage

### When to Create the Testing Skill

Following the framework's skill creation philosophy ("create when you've repeated a pattern 3+ times"), the testing skill fits naturally in the **Stabilizing** phase:

```
Stabilizing (Session 8+)
  → Create: playwright-tester skill
  → Install: @playwright/test + playwright.config.ts
  → Author initial test suite (happy path + navigation)
  → Expand coverage as features stabilize
```

### Duplicating for Other Projects

The testing skill is **90% portable**. When duplicating for a new project:

1. Copy `skills/playwright-tester/SKILL.md` as a starting template
2. Update Phase 1 (Assess) with the new project's framework/routing conventions
3. Update Phase 2 (Author) test categories to match the new project's features
4. The Fix Loop and Report phases are universal — copy as-is
5. Create a new `playwright.config.ts` pointing to the project's dev server

The test *files* themselves are project-specific and get regenerated by the skill each time.

---

## Anti-Patterns to Avoid

| Anti-Pattern | Why It's Bad | Do This Instead |
|---|---|---|
| Writing all skills upfront | Skills without real usage are speculative and wrong | Create skills when you've repeated a pattern 3+ times |
| Putting code in SYSTEM docs | SYSTEM docs are for agents to READ, not execute | Keep code in `src/scripts/`, reference from docs |
| Skipping /end | Next session starts from zero, loses all context | Always run /end, even for short sessions |
| Making SUMMARY.md too long | Agents waste tokens reading history | Archive old milestones, keep SUMMARY focused on NOW |
| Tech-specific rules in universal docs | Makes the framework non-portable | Keep tech rules in RULES.md and skills, not in workflows |
| One giant RULES.md | Too much to read every session | Split into RULES.md (always read) + skills (read on demand) |

---

## Quick Start Checklist for a New Project

```markdown
- [ ] Copy framework skeleton (mkdir + copy universal files)
- [ ] Write PRD.md (the foundation — spend time here)
- [ ] Create ENTITIES.md from PRD data model section
- [ ] Create RULES.md with tech-stack-specific coding standards
- [ ] Create SUMMARY.md with initial project state
- [ ] Create empty DECISIONS.md
- [ ] Create INBOX.md with initial task backlog from PRD
- [ ] Create skills/INDEX.md (empty table, fill as skills emerge)
- [ ] Create session-manager skill (universal)
- [ ] Wire up CLAUDE.md / .clinerules to point to .agents/
- [ ] Start Session 1 with /start
- [ ] Create first tech-specific skill after Session 2-3
- [ ] Add validation scripts after Session 5+
- [ ] Create TESTING.md after first feature ships
- [ ] Create playwright-tester skill after Session 8+ (stabilizing phase)
- [ ] Run initial zero-token test suite and iterate through fix loop
- [ ] Create RUNBOOK.md before production deploy
- [ ] Create SECURITY.md before production deploy
```

---

## Versioning This Framework

As you use this across projects, you'll improve it. Keep a "framework template" repo:

```
ai-first-framework/
├── .agents/           ← Universal skeleton (no project-specific content)
├── .claude/           ← Universal slash commands
├── .gemini/           ← Universal slash commands
├── CLAUDE.md          ← Universal entry point template
├── README.md          ← This FRAMEWORK.md content
└── examples/
    ├── nextjs-convex/  ← Skills & rules for this stack
    ├── django-postgres/ ← Skills & rules for this stack
    └── go-grpc/        ← Skills & rules for this stack
```

Then for each new project: copy the skeleton, write the PRD, and let the framework grow organically.
