# Security Audit Checklist

> **Derived from:** Auth + Payment + Data handling  
> **Last Updated:** Session 0 (Initial Setup)  
> **Status:** Placeholder — flesh out before production deploy

---

## Authentication & Authorization

- [ ] All routes require authentication (unless explicitly public)
- [ ] Role-based access control (RBAC) is enforced server-side
- [ ] Session tokens have appropriate expiration
- [ ] Password requirements meet minimum standards
- [ ] OAuth flows use state parameter to prevent CSRF
- [ ] Failed login attempts are rate-limited

---

## Data Protection

- [ ] Sensitive data is encrypted at rest
- [ ] Sensitive data is encrypted in transit (HTTPS everywhere)
- [ ] PII is identified and handled per privacy policy
- [ ] Database access is restricted to application service accounts
- [ ] Backups are encrypted
- [ ] Data retention policy is defined and enforced

---

## API Security

- [ ] All API endpoints validate input
- [ ] SQL injection / NoSQL injection prevention
- [ ] XSS prevention (output encoding)
- [ ] CSRF protection on state-changing requests
- [ ] Rate limiting on public endpoints
- [ ] API keys are not exposed in client-side code
- [ ] CORS is configured restrictively

---

## Infrastructure

- [ ] Environment variables for all secrets (no hardcoded credentials)
- [ ] Secrets are stored in a secrets manager (not .env in production)
- [ ] Dependencies are regularly audited for vulnerabilities
- [ ] Docker images use minimal base images
- [ ] Production logs don't contain sensitive data
- [ ] Error messages don't leak internal details to users

---

## Payment Security (if applicable)

- [ ] PCI compliance requirements identified
- [ ] Payment processing uses a certified provider (Stripe, etc.)
- [ ] No credit card data stored on our servers
- [ ] Webhook signatures are verified
- [ ] Refund/dispute handling is documented

---

## Monitoring & Incident Response

- [ ] Security events are logged and monitored
- [ ] Alerting is configured for suspicious activity
- [ ] Incident response plan is documented
- [ ] Security contact is defined
- [ ] Breach notification process is documented

---

## Compliance

| Requirement | Status | Notes |
|---|---|---|
| GDPR | | |
| SOC 2 | | |
| HIPAA | | |
| PCI DSS | | |

---

## Audit Log

| Date | Auditor | Findings | Remediation |
|---|---|---|---|
| | | | |
