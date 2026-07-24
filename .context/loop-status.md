2026-07-24T14:10:00+01:00 | Lane C | app/clients/documents/view/[id]/SignPanel.tsx | built: sign panel client component with name/date/signature/agree inputs, submit, success state
2026-07-24T14:10:00+01:00 | Lane C | app/api/clients/documents/[id]/sign/route.ts | built: API proxy route, auth-gated, forwards POST to hub's /api/public/client-docs/{docNumber}/sign
2026-07-24T14:10:00+01:00 | Lane C | app/clients/documents/view/[id]/page.tsx | updated: integrated SignPanel for unsigned docs, read-only "signed by X on Y" notice for signed docs, status badge in header
2026-07-24T14:10:00+01:00 | Lane C | app/clients/documents/page.tsx | updated: added StatusBadge component, added optional status fields to HubDoc interface, defensively renders badges only when status present
