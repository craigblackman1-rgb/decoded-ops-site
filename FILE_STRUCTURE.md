# Decoded Ops Site - File Structure

## Directory Organization

```
decoded-ops-site/
├── docs/                          # Project documentation & planning
│   ├── .plan.md                  # Main project plan
│   ├── AGENTS.md                 # Agent instructions
│   ├── CLAUDE.md                 # Claude Code configuration
│   ├── COMPLETE_TASK_BREAKDOWN.md # Detailed task breakdown
│   ├── CONTENT_ADDED.md          # Content log
│   ├── LEGAL_NOTES.md            # Legal documentation
│   └── SYNC_WORKFLOW.md          # Task sync workflow documentation
│
├── content/                        # Marketing content organized by phase
│   ├── phase-1/                  # Phase 1 content (to be added)
│   ├── phase-2/                  # Phase 2 LinkedIn & email content
│   │   ├── POSTS_WEEK_1_*.md    # Weekly post content
│   │   ├── POSTS_WEEK_2_*.md
│   │   ├── POSTS_WEEK_3_*.md
│   │   ├── POSTS_WEEK_4_*.md
│   │   ├── P2-002_Week2_*.md    # Detailed post templates
│   │   ├── P2-003_Week3_*.md
│   │   ├── P2-004_Week4_*.md
│   │   ├── P2-005_12Week_*.md   # 12-week content calendar
│   │   ├── P2-006_Warm_DM_*.md  # DM templates
│   │   ├── DM_TEMPLATES.md      # Messaging templates
│   │   ├── CONTENT_CALENDAR_12_WEEKS.md
│   │   ├── PUBLISHING_TIMELINE.md
│   │   ├── P3_EXECUTION.md      # Phase 3 cold email sequence
│   │   ├── COMPLETION_SUMMARY.md
│   │   └── README.md
│   └── phase-3/                  # Phase 3 content (to be added)
│
├── dashboards/                     # Dashboard & tracking tools
│   ├── plan-board.html           # Current interactive plan dashboard
│   └── plan-board-old.html       # Previous version (archive)
│
├── app/                            # Next.js application (Pages & Routes)
│   ├── layout.tsx
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx
│   ├── audit/page.tsx
│   ├── blog/                     # Blog pages
│   ├── contact/                  # Contact page & actions
│   ├── pricing/page.tsx          # Pricing with 3-tier model
│   ├── problems/                 # Problem pages by sector
│   ├── sectors/                  # Sector expertise pages
│   └── ...more pages
│
├── components/                     # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CookieConsent.tsx
│   ├── ProblemPage.tsx
│   ├── SectorPage.tsx
│   └── graphics/                 # SVG/visual components
│       ├── AuditWheelGraphic.tsx
│       ├── CostChartGraphic.tsx
│       ├── FractionalModelGraphic.tsx
│       └── ...more graphics
│
├── public/                         # Static assets (images, icons, fonts)
│   ├── next.svg
│   ├── vercel.svg
│   └── ...SVG files
│
├── .claude/                        # Claude Code configuration
│   ├── launch.json               # Dev server config
│   └── settings.local.json       # Local settings & permissions
│
├── package.json                    # Dependencies
├── next.config.ts                 # Next.js config
├── tsconfig.json                 # TypeScript config
└── README.md                      # Project README

```

## Purpose of Each Directory

### `/docs` - Project Documentation
- Planning and strategic documentation
- Project instructions and configuration notes
- Task breakdowns and workflows
- Legal documentation

### `/content` - Marketing Content Library
Organized by phase for systematic execution:
- **Phase 1**: Foundational content (if applicable)
- **Phase 2**: LinkedIn & warm outreach content (active)
- **Phase 3**: Cold email sequences and apollo integration
Each phase contains posts, templates, calendars, and execution guides.

### `/dashboards` - Tracking & Monitoring
Interactive HTML dashboards for:
- Project progress tracking
- Task completion monitoring
- Plan-board for phase status visualization

### `/app` - Next.js Application Code
Main application pages and routes following Next.js 14+ App Router structure.

### `/components` - React Components
Reusable React components including:
- Layout components (Header, Footer)
- Page-specific components
- SVG graphics and visualizations

### `/public` - Static Assets
Images, icons, and SVG files served as static assets (not dashboards).

## Navigation

- **For planning**: See `/docs/.plan.md`
- **For content**: Browse `/content/phase-2/` for active Phase 2 materials
- **For task tracking**: Open `/dashboards/plan-board.html` in browser
- **For app code**: Navigate to `/app` for pages or `/components` for components

## Updates & Maintenance

When adding new content or documentation:
1. Place planning/strategy docs in `/docs/`
2. Place marketing content in appropriate `/content/phase-X/` folder
3. Keep static assets in `/public/` only
4. Keep application code in `/app` and `/components/`
5. Update dashboards in `/dashboards/` as needed
