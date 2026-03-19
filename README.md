# AI-First Development Framework
**A portable project scaffold that gives AI coding agents persistent memory, consistent behavior, and guardrails across sessions.**

Works with **Claude Code, Cline, Gemini, Cursor**, and any AI agent that can read files.

---

## New Project Setup

Get started with a new project in under 5 minutes:

### Option A: Use as GitHub Template (Recommended)

Click the **"Use this template"** button on GitHub, or:

```bash
gh repo create my-new-project --template melvenac/AI-First-Development-Framework --clone
cd my-new-project
```

This creates a fresh repo with no commit history from the template.

### Option B: Clone and Reset

```bash
git clone https://github.com/melvenac/AI-First-Development-Framework.git my-new-project
cd my-new-project
rm -rf .git
git init
git add -A
git commit -m "Initial commit from AI-First Development Framework"
```

### After Setup

1. **Replace this README** — Update the title, description, and remove the setup instructions above. A project README template is below the divider.
2. **Write your PRD** — Open `.agents/SYSTEM/PRD.md` and define your project
3. **Start your first session** — Run `/start` and the AI will help fill in the rest

---
---

<!-- ====== PROJECT README TEMPLATE (keep everything below) ====== -->

# {{PROJECT_NAME}}
**{{PROJECT_DESCRIPTION}}**

Built with the [AI-First Development Framework](https://github.com/melvenac/AI-First-Development-Framework).

---

## Project Structure

```
.agents/                          ← Agent-readable project brain
├── FRAMEWORK.md                  ← Full framework guide (start here)
├── SYSTEM/                       ← Project truth documents
│   ├── PRD.md                    ← Product requirements (with examples)
│   ├── SUMMARY.md                ← Current state (overwritten each session)
│   ├── ENTITIES.md               ← Data model
│   ├── DECISIONS.md              ← Architectural decision log
│   ├── RULES.md                  ← Coding standards
│   ├── TESTING.md                ← Testing strategy
│   ├── RUNBOOK.md                ← Production operations
│   └── SECURITY.md               ← Security checklist
├── TASKS/                        ← Work tracking
│   ├── INBOX.md                  ← Prioritized task backlog
│   └── task.md                   ← Current sprint/focus
├── SESSIONS/                     ← Session history
├── skills/                       ← Reusable agent skills
└── workflows/                    ← Lifecycle commands
    ├── start.md                  ← Session start protocol
    ├── end.md                    ← Session end protocol
    ├── test.md                   ← Zero-token E2E testing
    └── task.md                   ← Next task selection
```

## Key Concepts

### The Three Layers

| Layer | Purpose | Changes How Often |
|---|---|---|
| **SYSTEM/** | Project truth — what the project IS | Rarely (PRD, RULES) to every session (SUMMARY) |
| **TASKS/** | What needs to be DONE | Every session |
| **SESSIONS/** | What WAS done | Append-only log |

### The Session Lifecycle

```
/start → Read state, pick task, get approval
  ↓
... build ...
  ↓
/test  → Zero-token Playwright E2E (optional)
  ↓
/end   → Update docs, log gotchas, present summary
```

---

## Full Documentation

See **[`.agents/FRAMEWORK.md`](.agents/FRAMEWORK.md)** for the complete guide.
