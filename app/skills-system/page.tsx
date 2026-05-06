import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Decoded Ops Skills System Dashboard',
  description: 'A marketing-facing skills system dashboard for Decoded Ops, showing 38 skills across 8 phases and the execution toolkit.',
};

const phases = [
  {
    number: 1,
    title: 'Research & Discovery',
    duration: 'Week 1-4',
    description: 'Understand market, customer, competitors, opportunity',
    alwaysLoad: ['product-marketing-context'],
    loadInParallel: ['customer-research', 'competitor-alternatives', 'keyword-research-planning'],
  },
  {
    number: 2,
    title: 'Strategy & Planning',
    duration: 'Week 5-8',
    description: 'Design what to build and how to structure it',
    alwaysLoad: ['site-architecture', 'content-strategy'],
    loadInParallel: ['pricing-strategy', 'sales-enablement'],
  },
  {
    number: 3,
    title: 'Build Core Assets',
    duration: 'Week 9-14',
    description: 'Create all marketing copy, content, and brand assets',
    alwaysLoad: ['copywriting', 'copy-editing'],
    loadInParallel: ['lead-magnets', 'linkedin-post-writer-2', 'social-content', 'programmatic-seo', 'free-tool-strategy'],
  },
  {
    number: 4,
    title: 'Technical Implementation',
    duration: 'Week 15-18',
    description: 'Analytics, audits, schema, AI-SEO setup',
    alwaysLoad: ['analytics-tracking', 'seo-audit', 'schema-markup', 'ai-seo'],
    loadInParallel: [],
  },
  {
    number: 5,
    title: 'Conversion Optimization',
    duration: 'Week 19-22',
    description: 'Optimize forms, popups, onboarding, pricing',
    alwaysLoad: [],
    loadInParallel: ['form-cro', 'popup-cro', 'onboarding-cro', 'paywall-upgrade-cro', 'page-cro'],
  },
  {
    number: 6,
    title: 'Growth Channels',
    duration: 'Week 23-25',
    description: 'Paid ads, content marketing, partnerships',
    alwaysLoad: [],
    loadInParallel: ['paid-ads', 'marketing-ideas', 'referral-program', 'launch-strategy'],
  },
  {
    number: 7,
    title: 'Launch',
    duration: 'Week 26-27',
    description: 'Go live with monitoring and optimization',
    alwaysLoad: ['ab-test-setup', 'analytics-tracking'],
    loadInParallel: [],
  },
  {
    number: 8,
    title: 'Operations & Growth',
    duration: 'Week 28+',
    description: 'Ongoing management, optimization, scaling',
    alwaysLoad: ['churn-prevention', 'revops', 'marketing-ideas', 'ab-test-setup'],
    loadInParallel: [],
  },
];

const documents = [
  {
    title: 'Project-Workflow-Guide.html ⭐',
    description: 'Master roadmap for all 38 skills, 8 phases with timing, blockers, and prerequisites',
    use: 'START WITH THIS - Beginning of any project',
  },
  {
    title: 'Project-Execution-Roadmap.html 📋',
    description: 'Visual week-by-week timeline with printable checklists and phase dependencies',
    use: 'PRINT & POST on your desk',
  },
  {
    title: 'Skills-Workflow-Visual.md 🔄',
    description: 'Overall project flow diagrams, phase-by-phase skill flows, and dependency visualizations',
    use: 'Reference when confused about skill order',
  },
  {
    title: 'Phase-Execution-Checklists.html ✓',
    description: 'Printable, fill-in-the-blank checklists for Phases 1-4 with detailed task breakdowns',
    use: 'PRINT per phase, check off during execution',
  },
  {
    title: 'SKILLS_INDEX_v2.md 📖',
    description: 'All 38 skills organized by phase with timing estimates, optional vs required skills',
    use: 'Look up which skill to use & when',
  },
  {
    title: 'SEO-Consolidated-Template/',
    description: 'Complete project template with WORKFLOW.md and phase-4-audit-checklist.md',
    use: 'COPY for each new project',
  },
];

const quickStart = [
  'Day 1: Read Project-Workflow-Guide.md and pick your timeline (MVP/Standard/Full)',
  'Copy Template: Copy SEO-Consolidated-Template → Projects/[client]/Website',
  'Print Roadmap: Print Project-Execution-Roadmap.md and post on your desk',
  'Print Checklists: Print Phase-Execution-Checklists.md Phase 1',
  'Load Skills: Load skills listed for Phase 1 in your AI assistant',
  'Execute: Follow Phase 1 checklist + reference diagrams as needed',
  'Progress: Complete phases in order, checking blockers before advancing',
  'Launch: Phases 1-4 complete = ready to launch; 5-6 optional for MVP',
];

export default function SkillsSystemPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>🚀 Decoded Ops Skills System Dashboard</h1>
        <p>Your complete guide to executing projects with 38 specialized skills across 8 phases</p>
      </div>

      <section className={styles.timeline}>
        <h2>📅 8-Phase Project Timeline</h2>
        <div className={styles.timelineGrid}>
          {phases.map(phase => (
            <article
              key={phase.number}
              className={`${styles.phaseCard} ${phase.number === 1 ? styles.phaseCardActive : ''}`}
            >
              <div className={styles.phaseNumber}>{phase.number}</div>
              <div className={styles.phaseTitle}>{phase.title}</div>
              <div className={styles.phaseDuration}>{phase.duration}</div>
              <div className={styles.phaseDescription}>{phase.description}</div>
              <div className={styles.skillsList}>
                {phase.alwaysLoad.length > 0 && (
                  <>
                    <strong>Always Load:</strong>
                    <ul>
                      {phase.alwaysLoad.map(skill => (
                        <li key={skill} className={styles.skillsListItem}>{skill}</li>
                      ))}
                    </ul>
                  </>
                )}
                {phase.loadInParallel.length > 0 && (
                  <>
                    <strong>{phase.alwaysLoad.length > 0 ? 'Load in Parallel:' : 'Optional for MVP:'}</strong>
                    <ul>
                      {phase.loadInParallel.map(skill => (
                        <li key={skill} className={styles.skillsListItem}>{skill}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className={styles.criticalBlockers}>
          <strong>Critical Blockers:</strong> Phase 1 → Phase 2 → Phase 3 → Phase 4 → Launch<br />
          <em>Phases 5-6 optional for MVP launches</em>
        </div>
      </section>

      <section className={styles.documentsSection}>
        <h2>📚 Your Execution Toolkit</h2>
        <div className={styles.documentsGrid}>
          {documents.map(doc => (
            <div key={doc.title} className={styles.documentCard}>
              <div className={styles.documentTitle}>{doc.title}</div>
              <div className={styles.documentDescription}>{doc.description}</div>
              <div className={styles.documentUse}>{doc.use}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.quickStart}>
        <h2>🚀 Quick Start Guide</h2>
        <ol>
          {quickStart.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <footer className={styles.footer}>
        <p>📍 All documents located in <code>D:\Claude\Projects\_Systems\</code></p>
        <p>Built with ❤️ for systematic project execution</p>
      </footer>
    </main>
  );
}
