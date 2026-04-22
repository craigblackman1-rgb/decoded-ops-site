# Task Sync Workflow — Decoded Ops
**Automated updates to plan.md + plan-board.html**

## How It Works

1. **You mark tasks complete** in `COMPLETE_TASK_BREAKDOWN.md` as you work
   - Change `[ ]` to `[x]` when task is done
   - Mark status with emoji: `✅` (complete), `🚀` (active), `⏳` (pending)

2. **Run sync command** after each task batch
   ```bash
   node sync-tasks.js
   ```

3. **Automatic updates happen:**
   - ✅ `.plan.md` — Checklist items marked [x] or [ ]
   - ✅ `public/plan-board.html` — Story cards update visual status (✅ DONE, 🚀 IN PROGRESS, ⏳ PENDING)
   - ✅ Console report — Summary of completed/active/pending tasks

4. **Files stay in perfect sync** — No manual updates needed

---

## Workflow: Task Completion Cycle

### During the day:
1. Complete a task from `COMPLETE_TASK_BREAKDOWN.md`
2. Mark it: `[x] P3-Setup-001: Configure Apollo campaign`
3. Continue with next task

### End of task batch (every 2–3 hours or EOD):
```bash
node sync-tasks.js
```

**Output example:**
```
🔄 Starting task sync...

📖 Parsed 44 tasks from COMPLETE_TASK_BREAKDOWN.md
✅ Updated: .plan.md
✅ Updated: public/plan-board.html

============================================================
TASK SYNC REPORT
============================================================
Total Tasks: 44
✅ Complete: 8 (18%)
🚀 Active: 2
⏳ Pending: 34
============================================================

Recently Completed:
  ✅ P3-Setup-001: Configure Apollo campaign
  ✅ P3-Create-001: Import Email 1 (Pain Hook) to Apollo
  ✅ P2-Review-001: Review Week 1 introduction posts

Active Tasks:
  🚀 P2-DM-001: Send first batch of warm DMs (10–15 personalized DMs)
  🚀 P3-Monitor-001: Check Email 1 open/click rates (24-hour window)

✅ Sync complete!
Last synced: 4/22/2026, 3:45 PM
```

---

## Task Status Markers

In `COMPLETE_TASK_BREAKDOWN.md`, use these to mark task status:

| Marker | Meaning | Example |
|--------|---------|---------|
| `[x]` | Task complete | `[x] P3-Setup-001: Configure Apollo` |
| `[ ]` | Task pending | `[ ] P4-001: Draft lead magnet` |
| `✅` | Verified complete | `✅ P2-Review-001: Review posts` |
| `🚀` | In progress/active | `🚀 P3-Monitor-001: Check metrics` |
| `⏳` | Not started | `⏳ P5-001: Create knowledge base` |

---

## Daily Sync Schedule

**Recommended sync times:**
- **09:00 AM** — After morning task batch (Phase 2 & 3 daily work)
- **12:00 PM** — Mid-day sync (before lunch)
- **16:00 PM** — EOD wrap-up (before leaving for day)

**Or:** Run sync after each major task completion or before switching between phases.

---

## What Gets Synced

### plan.md
- ✅ Task checklist items `[ ]` → `[x]`
- ✅ Completion timestamps (optional, can be added)
- ✅ Phase status badges (e.g., "Phase 2: 🚀 ACTIVE")

### plan-board.html
- ✅ Story card visual status (color, badge, strikethrough)
- ✅ Progress bars update automatically
- ✅ Phase completion percentages update
- ✅ Task count summary updates

---

## Example: This Week's Sync Cycle

### Tuesday (Apr 22) — Day 1
**Morning tasks completed:**
```
[x] P3-Setup-001: Configure Apollo campaign
[x] P3-Setup-002: Verify email & tracking
[x] P2-Review-001: Review Week 1 introduction posts
[x] P2-DM-001: Send first batch of warm DMs
[x] P3-Create-001: Import Email 1 (Pain Hook) to Apollo
```

**Run sync:**
```bash
node sync-tasks.js
```

**Result:**
- `.plan.md` updates 5 task checklist items
- `plan-board.html` updates Phase 2 & 3 card progress
- Console shows: "Complete: 5 | Active: 2 | Pending: 37"

### Wednesday (Apr 23) — Day 2
**Morning tasks completed:**
```
[x] P2-Post-002: Publish Week 1 Variant B
[x] P2-Review-002: Review Week 2 ERP pain posts
[x] P2-Engage-001: Reply to comments
[x] P3-Monitor-001: Check Email 1 metrics
```

**Run sync:**
```bash
node sync-tasks.js
```

**Result:**
- Cumulative: 9 tasks complete (20%)
- Phase 2 progress bar: 25% → 35%
- Phase 3 progress bar: 15% → 40%

---

## Syncing from Other Machines

If you work on multiple machines:

1. **Pull latest from Git** (includes COMPLETE_TASK_BREAKDOWN.md)
2. **Make task updates** on your machine
3. **Commit to Git**
4. **Run sync on production/main machine**

```bash
git pull
node sync-tasks.js
git add .plan.md public/plan-board.html
git commit -m "Sync task completion: X tasks done"
git push
```

---

## Troubleshooting

### Sync script doesn't find tasks
- **Check:** Task IDs must match exactly in COMPLETE_TASK_BREAKDOWN.md
- **Format:** `[x] P3-Setup-001:` (with colon and space)
- **Test:** Run `node sync-tasks.js --debug` for detailed output

### Dashboard doesn't update
- **Check:** Story cards must have `data-task-id="P3-Setup-001"` attribute
- **Verify:** `public/plan-board.html` has matching story divs
- **Clear cache:** Reload browser (Ctrl+Shift+R or Cmd+Shift+R)

### plan.md has merge conflicts
- **Cause:** Manual edits + sync edits on same line
- **Fix:** Run sync on the primary machine, commit, then pull on other machines
- **Prevent:** Don't manually edit checklist items while sync is running

---

## Setting Up Auto-Sync (Optional)

For hands-off syncing, create a Git hook or scheduled task:

### Option 1: Git post-commit hook
Create `.git/hooks/post-commit`:
```bash
#!/bin/bash
node sync-tasks.js
git add .plan.md public/plan-board.html
git commit --amend --no-edit
```

### Option 2: Scheduled sync every hour
Use cron (Mac/Linux) or Task Scheduler (Windows):
```bash
0 * * * * cd /path/to/decoded-ops-site && node sync-tasks.js
```

---

## File Locations

```
decoded-ops-site/
├── sync-tasks.js              ← Sync script (run this)
├── COMPLETE_TASK_BREAKDOWN.md ← Edit this (mark tasks done)
├── .plan.md                   ← Auto-updates (don't edit)
├── public/
│   └── plan-board.html        ← Auto-updates (don't edit)
└── SYNC_WORKFLOW.md           ← You are here
```

---

## Notes

- **Sync is one-way:** COMPLETE_TASK_BREAKDOWN.md → plan.md + plan-board.html
- **COMPLETE_TASK_BREAKDOWN.md is the source of truth** for task status
- **Don't manually edit plan.md checklist items** — they'll get overwritten on next sync
- **Don't manually edit plan-board.html story cards** — they'll get overwritten on next sync
- **Safe to run sync multiple times** — idempotent operation (no duplicates)

---

## Support

Questions? Add a task to the breakdown file:
```
[ ] Question: Why isn't sync updating X?
```

Then run sync to see what gets picked up.

---

**Last Updated:** 2026-04-22
**Status:** Ready to use
