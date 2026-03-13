# Contributing to the AI-First Development Framework

Thanks for your interest in improving the framework! This document explains how to contribute.

---

## How the Framework Develops Itself

This repo uses its own framework to track improvements. The key mechanism is the **META/ pattern**:

- `.agents/META/` contains SUMMARY.md, DECISIONS.md, and INBOX.md for framework development tracking
- META/ is gitignored — it never reaches GitHub
- `/start` and `/end` detect META/ and route session tracking there instead of the SYSTEM/ templates
- This keeps the skeleton templates clean while giving you a full session lifecycle

See the "Developing This Framework" section in `.agents/FRAMEWORK.md` for the full explanation.

---

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/melvenac/AI-First-Development-Framework.git
   cd AI-First-Development-Framework
   ```

2. **Create your META/ directory**
   ```bash
   mkdir -p .agents/META
   ```
   Then create `SUMMARY.md`, `DECISIONS.md`, and `INBOX.md` inside it. You can copy the format from `SYSTEM/` templates or from a previous contributor's session.

3. **Start a session**
   ```
   /start
   ```
   The agent detects META/ and reads from there. Pick a task from the backlog and go.

---

## What to Contribute

### High Value
- **New tech stack examples** in SYSTEM/ templates (PRD, ENTITIES, RULES, RUNBOOK, SECURITY)
- **New skill skeletons** that are universal or broadly useful
- **Bug fixes** in workflows or slash commands
- **Improvements** to template clarity or structure

### Lower Priority
- Typo fixes (welcome but don't need a full PR)
- Cosmetic formatting changes

### Please Don't
- Add project-specific content to SYSTEM/ templates (use HTML comment examples instead)
- Remove existing tech stack examples (add alongside them)
- Change the fundamental directory structure without discussion

---

## Contribution Workflow

1. **Fork** the repo
2. **Create a branch** (`feature/add-rails-examples`, `fix/end-workflow-typo`)
3. **Make changes** — use `/start` and `/end` if you want session tracking (optional)
4. **Test** — verify the skeleton still makes sense as a blank template
5. **Submit a PR** with:
   - What you changed and why
   - Which tech stacks or sections are affected
   - Whether you tested by cloning into a fresh project

---

## Style Guidelines

### Template Content
- Placeholder fields are empty (not filled with example data)
- Examples go in `<!-- EXAMPLE: ... -->` HTML comment blocks
- Include examples for multiple tech stacks where applicable
- Keep templates scannable — use tables and short bullet points

### Skills
- Each skill gets its own directory: `.agents/skills/<name>/SKILL.md`
- Skills must be registered in `.agents/skills/INDEX.md`
- Include: trigger, steps, gotchas, examples, and validation criteria
- Mark project-specific sections with `<!-- CUSTOMIZE -->` comments

### Workflows & Commands
- Workflows live in `.agents/workflows/`
- Claude commands mirror workflows in `.claude/commands/`
- Gemini commands mirror workflows in `.gemini/commands/`
- All three locations must stay in sync

### Commit Messages
- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`
- Keep the first line under 70 characters
- Add detail in the body if needed

---

## Questions?

Open an issue on GitHub. Include context about what you're trying to do and which part of the framework is involved.
