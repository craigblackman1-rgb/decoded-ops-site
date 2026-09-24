# Lane notes — web-e-build-d17-fix1

Added `import '@/app/d17-apps-cases.css';` to the four case-study pages that were missing it (case-study-01, 02, 03, eternal-fitness). Each page already had the `d17-global.css` import; the batch stylesheet import was simply absent. tsc clean, one commit.
