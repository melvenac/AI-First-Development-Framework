# AI-First Development Framework
**Version 1.0 — Portable Agent Architecture**

> A structured set of markdown documents, workflows, and skills that give AI coding agents persistent memory, consistent behavior, and guardrails across sessions.

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
git commit -m "Initial commit: AI-First Development Framework scaffold"
```

### 3. Write Your PRD

Open `.agents/SYSTEM/PRD.md` and define your project — what you're building, the tech stack, features, data model, etc. Every section has inline examples to guide you.

**Tip:** Ask your AI agent to help draft the PRD. Give it your idea and the template format.

### 4. Start Your First Session

```
/start
```

The AI reads the framework, understands the structure, and helps you fill in the remaining SYSTEM docs (ENTITIES.md, RULES.md, SUMMARY.md) from your PRD. From here, you're building.

---

## What You Get Out of the Box

```
.agents/                          ← Agent-readable project brain
├── FRAMEWORK.md                  ← Full framework guide (start here)
├── SYSTEM/                       ← Project truth documents
│   ├── PRD.md                    ← Product requirements (with examples)
│   ├── SUMMARY.md                ← Current state (overwritten each session)
│   ├── ENTITIES.md               ← Data model (Convex/Prisma/Django/SQL examples)
│   ├── DECISIONS.md              ← Architectural decision log
│   ├── RULES.md                  ← Coding standards (multi-stack examples)
│   ├── TESTING.md                ← Testing strategy + zero-token E2E
│   ├── RUNBOOK.md                ← Production operations (multi-stack examples)
│   └── SECURITY.md               ← Security checklist (stack-specific items)
├── TASKS/                        ← Work tracking
│   ├── INBOX.md                  ← Prioritized task backlog
│   └── task.md                   ← Current sprint/focus
├── SESSIONS/                     ← Session history
│   ├── SESSION_TEMPLATE.md       ← Template for new sessions
│   └── Session_N.md              ← Individual session logs (gitignored)
├── skills/                       ← Reusable agent skills
│   ├── INDEX.md                  ← Skill registry
│   ├── session-manager/SKILL.md  ← Universal session lifecycle skill
│   └── playwright-tester/SKILL.md ← Zero-token E2E testing skill
└── workflows/                    ← Lifecycle commands
    ├── start.md                  ← Session start protocol
    ├── end.md                    ← Session end protocol
    ├── test.md                   ← Zero-token E2E testing
    └── task.md                   ← Next task selection

.claude/commands/                 ← Claude Code slash commands
.gemini/commands/                 ← Gemini slash commands
.clinerules/                      ← Cline-specific rules
CLAUDE.md                         ← Claude Code entry point
```

| File | Action Needed |
|---|---|
| `.agents/FRAMEWORK.md` | Read-only reference — **read this for the full guide** |
| `.agents/SYSTEM/PRD.md` | **Write this first** |
| `.agents/SYSTEM/SUMMARY.md` | AI updates each session |
| `.agents/SYSTEM/ENTITIES.md` | Derive from PRD |
| `.agents/SYSTEM/RULES.md` | Customize for your stack |
| `.agents/SYSTEM/DECISIONS.md` | Fills up as you build |
| `.agents/TASKS/INBOX.md` | Create from PRD features |
| Workflows + commands | Work as-is |
| Skills | Session-manager + playwright-tester included; add your own |

---

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

### Skills

Skills are reusable patterns that emerge during development. This skeleton includes two universal skills:
- **session-manager** — Enforces /start and /end protocols
- **playwright-tester** — Zero-token E2E testing (AI writes tests, Playwright runs them natively)

Create your own when you've repeated a pattern 3+ times.

---

## Full Documentation

For the complete guide — duplication instructions, tech stack customization, zero-token testing details, anti-patterns, and the quick start checklist — see:

**[`.agents/FRAMEWORK.md`](.agents/FRAMEWORK.md)**

---

## Developing This Framework

If you're improving the framework itself (not using it for a project), create a `.agents/META/` directory. The `/start` and `/end` workflows detect META/ and route session tracking there instead of the SYSTEM/ templates. This keeps the skeleton clean while letting you use the full session lifecycle. See the "Developing This Framework" section in FRAMEWORK.md for details.
