# Fix pass 2: contact page mobile overflow (same rules as web-c-build-d17.md)
At a 390px viewport /contact is 597px wide (also true on the live site today). The contact form (app/contact/ContactClient.tsx and
its CSS) keeps its two-column input rows side by side on mobile, and a wrapper div (~259px wide) sits to the right of the viewport.
Fix: below 640px, the form's two-column rows stack to one column, every form field and wrapper is width:100% with
min-width:0 / box-sizing:border-box, and nothing inside the contact section is wider than its container. Check the whole page
(contact info cards, DO-ART-920 panel) the same way. Do not change desktop layout or any copy.
Then `npx tsc --noEmit`; one commit "fix(web): contact page stacks on mobile (no horizontal overflow)". Report file:line.
