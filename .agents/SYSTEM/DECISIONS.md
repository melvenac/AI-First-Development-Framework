# Architectural Decision Log

> **Purpose:** Record significant architectural and technical decisions so future sessions have context on WHY things are the way they are.

---

## How to Use This Document

When a significant decision is made (technology choice, pattern adoption, trade-off), add an entry below using this format:

```markdown
### ADR-NNN: [Title]
- **Date:** YYYY-MM-DD
- **Session:** N
- **Status:** Accepted | Superseded | Deprecated
- **Context:** What situation prompted this decision?
- **Decision:** What did we decide?
- **Alternatives Considered:** What else was on the table?
- **Consequences:** What are the trade-offs?
```

---

## Decisions

### ADR-001: Adopt AI-First Development Framework
- **Date:** Initial Setup
- **Session:** 0
- **Status:** Accepted
- **Context:** Need a structured way to give AI coding agents persistent memory and consistent behavior across sessions.
- **Decision:** Adopted the AI-First Development Framework with SYSTEM/TASKS/SESSIONS architecture.
- **Alternatives Considered:** No framework (cold-start each session), custom per-agent configs
- **Consequences:** Slight overhead in maintaining docs, but significant gains in session continuity and code quality.
