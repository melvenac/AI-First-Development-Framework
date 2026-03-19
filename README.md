# {{PROJECT_NAME}}
**{{PROJECT_DESCRIPTION}}**

---

## Getting Started

This project uses the [AI-First Development Framework](https://github.com/melvenac/AI-First-Development-Framework) for AI-assisted development.

### 1. Write Your PRD

Open `.agents/SYSTEM/PRD.md` and define your project — what you're building, the tech stack, features, data model, etc. Every section has inline examples to guide you.

**Tip:** Ask your AI agent to help draft the PRD. Give it your idea and the template format.

### 2. Start Your First Session

```
/start
```

The AI reads the framework, understands the structure, and helps you fill in the remaining SYSTEM docs (ENTITIES.md, RULES.md, SUMMARY.md) from your PRD. From here, you're building.

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
