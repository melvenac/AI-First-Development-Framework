# Coding Standards & Conventions

> **Derived from:** PRD §3 (Tech Stack)  
> **Last Updated:** Session 0 (Initial Setup)

---

## General Rules (Universal)

1. **No hardcoded secrets** — Use environment variables for all API keys, tokens, and credentials.
2. **Descriptive naming** — Variables, functions, and files should be self-documenting.
3. **Small, focused functions** — Each function does one thing well.
4. **Error handling** — Never swallow errors silently. Log or propagate.
5. **Comments for WHY, not WHAT** — Code should be readable; comments explain intent.

---

## Tech-Stack-Specific Rules

<!-- Customize this section based on your PRD §3 tech stack -->

_Not yet defined. Populate after writing the PRD and choosing a tech stack._

### Frontend Rules
- 

### Backend Rules
- 

### Database Rules
- 

### Testing Rules
- 

---

## File & Folder Conventions

| Convention | Rule |
|---|---|
| Component files | |
| Utility files | |
| Test files | |
| Style files | |

---

## Git Conventions

- **Branch naming:** `feature/`, `fix/`, `chore/`
- **Commit messages:** Use conventional commits (`feat:`, `fix:`, `docs:`, `chore:`)
- **PR size:** Keep PRs small and focused (< 400 lines when possible)

---

## Agent-Specific Rules

1. Always read `SUMMARY.md` at session start
2. Always update `SUMMARY.md` at session end
3. Log gotchas in the session log — don't let hard-won knowledge disappear
4. When modifying the data model, update `ENTITIES.md` immediately
5. When making architectural decisions, log them in `DECISIONS.md`
