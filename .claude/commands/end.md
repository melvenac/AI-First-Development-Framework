# /end — Session End

Follow the session end protocol defined in `.agents/workflows/end.md`.

## Quick Reference

1. Update session log (`.agents/SESSIONS/Session_N.md`)
2. Update `.agents/SYSTEM/SUMMARY.md` with current state
3. Update `.agents/SYSTEM/DECISIONS.md` (if applicable)
4. Update `.agents/SYSTEM/ENTITIES.md` (if schema changed)
5. Run entity validation (if schema changed)
6. Update `.agents/TASKS/INBOX.md` (mark done, add new)
7. Run post-session validation (if configured)
8. Present summary to user

> **Never skip /end.** The next session depends on it.
