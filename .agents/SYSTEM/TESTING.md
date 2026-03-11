# Testing Strategy

> **Derived from:** PRD §3 (Tech Stack) + Core Features  
> **Last Updated:** Session 0 (Initial Setup)  
> **Status:** Placeholder — flesh out after first feature ships

---

## Testing Philosophy

<!-- Define your testing approach -->

_Not yet defined. Populate after the PRD is written and the first feature ships._

---

## Test Stack

| Tool | Purpose |
|---|---|
| | Unit tests |
| | Integration tests |
| | E2E tests |
| | Mocking |

---

## Test Structure

```
tests/
├── unit/           ← Pure logic tests
├── integration/    ← API / DB tests
└── e2e/            ← Full user flow tests
```

---

## Coverage Goals

| Type | Target | Current |
|---|---|---|
| Unit | 80% | 0% |
| Integration | 60% | 0% |
| E2E | Critical paths | 0% |

---

## Testing Conventions

1. Test file naming: `[filename].test.[ext]` or `[filename].spec.[ext]`
2. Each test should be independent — no shared mutable state
3. Use descriptive test names: `should [expected behavior] when [condition]`
4. Mock external services, not internal logic
5. Run tests before every commit

---

## CI/CD Integration

<!-- Define how tests run in your pipeline -->

_Not yet configured._
