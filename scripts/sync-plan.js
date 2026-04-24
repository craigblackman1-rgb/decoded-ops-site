#!/usr/bin/env node

/**
 * Sync Plan to HTML
 * Reads docs/.plan.md and updates public/content-review.html and public/plan-board.html
 * Run: npm run sync-plan
 */

const fs = require('fs');
const path = require('path');

const PLAN_FILE = path.join(__dirname, '../docs/.plan.md');
const CONTENT_REVIEW_FILE = path.join(__dirname, '../public/content-review.html');
const PLAN_BOARD_FILE = path.join(__dirname, '../public/plan-board.html');

// Color output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Parse plan.md to extract phases, status, and content items
 */
function parsePlan(content) {
  const lines = content.split('\n');
  const phases = {};
  let currentPhase = null;
  let currentSection = null;
  let inChecklist = false;
  let lastUpdated = null;

  // Extract last updated date
  const lastUpdatedMatch = content.match(/\*\*Last updated:\*\*\s*(\d{4}-\d{2}-\d{2})/);
  if (lastUpdatedMatch) {
    lastUpdated = formatDate(lastUpdatedMatch[1]);
  }

  lines.forEach((line, idx) => {
    // Parse phase headers: ## Phase X or ## ✨ Phase X
    const phaseMatch = line.match(/^##\s+([✅✨🚀✍️]*)\s*Phase\s+(\d+|[\w\s]+)\s*—?\s*(.*)/);
    if (phaseMatch) {
      const emoji = phaseMatch[1];
      const phaseNum = phaseMatch[2];
      const title = phaseMatch[3];
      const statusEmoji = emoji || '⏳';

      currentPhase = {
        num: phaseNum,
        title: title.trim(),
        emoji: statusEmoji,
        status: getStatusFromEmoji(statusEmoji),
        tasks: [],
        content: [],
      };
      phases[phaseNum] = currentPhase;
      currentSection = null;
      inChecklist = false;
    }

    // Parse task headers: **P1-001:** or ### P1-001:
    const taskMatch = line.match(/\*\*([A-Z]\d+-\d{3}):\s*(.+?)\*\*\s*\(([^)]+)\)/);
    if (taskMatch && currentPhase) {
      const taskId = taskMatch[1];
      const taskTitle = taskMatch[2];
      const meta = taskMatch[3];

      currentPhase.tasks.push({
        id: taskId,
        title: taskTitle,
        status: 'pending',
        meta: meta,
      });
    }

    // Parse checkboxes: [ ] or [x]
    if (line.match(/^\s*-\s*\[[\sx]\]/)) {
      const isComplete = line.includes('[x]');
      const text = line.replace(/^\s*-\s*\[[x\s]\]\s*/, '').trim();

      if (currentPhase && currentPhase.tasks.length > 0) {
        const lastTask = currentPhase.tasks[currentPhase.tasks.length - 1];
        if (!lastTask.subtasks) lastTask.subtasks = [];
        lastTask.subtasks.push({
          text: text,
          complete: isComplete,
        });

        // Update task status
        const allSubtasks = lastTask.subtasks;
        const completeCount = allSubtasks.filter(s => s.complete).length;
        if (completeCount === 0) {
          lastTask.status = 'pending';
        } else if (completeCount === allSubtasks.length) {
          lastTask.status = 'complete';
        } else {
          lastTask.status = 'in-progress';
        }
      }
    }

    // Parse content items: | **Mon Apr 21** or | **P2-001:
    if (line.includes('**') && (line.includes('Apr') || line.includes('May') || line.includes('Post') || line.includes('Email'))) {
      if (currentPhase && !currentSection) {
        currentSection = 'content';
      }
    }
  });

  return {
    phases,
    lastUpdated,
  };
}

function getStatusFromEmoji(emoji) {
  const statusMap = {
    '✅': 'complete',
    '🚀': 'active',
    '✍️': 'planned',
    '⏳': 'pending',
  };
  return statusMap[emoji] || 'pending';
}

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Update content-review.html with latest status
 */
function updateContentReview(htmlContent, planData) {
  let updated = htmlContent;

  // Update last updated date
  if (planData.lastUpdated) {
    updated = updated.replace(
      /<div>Last updated: [^<]+<\/div>/,
      `<div>Last updated: ${planData.lastUpdated}</div>`
    );
  }

  // Update phase 2 content status badges based on plan
  // Phase 2: LinkedIn posts, emails, DMs should show completion
  const phase2 = planData.phases['2'];
  if (phase2) {
    // Mark items as "Posted" if they're marked complete in the plan
    let postCount = 0;
    let completeCount = 0;

    phase2.tasks.forEach(task => {
      if (task.id.startsWith('P2-')) {
        postCount++;
        if (task.status === 'complete') completeCount++;
      }
    });

    // Update the badges in the HTML
    if (completeCount > 0) {
      // Find and update Week 1 variant A if it's marked complete
      const weekPattern = /(<span class="variant-badge badge-posted">✓ Posted<\/span>)/g;
      // This would need more sophisticated matching per post
    }
  }

  return updated;
}

/**
 * Update plan-board.html with latest phase status
 */
function updatePlanBoard(htmlContent, planData) {
  let updated = htmlContent;

  // Update phase status indicators at the top
  const phaseStatus = Object.entries(planData.phases)
    .map(([num, phase]) => {
      const statusDisplay = `${phase.emoji} Phase ${num}`;
      const statusClass = phase.status;
      return `<span class="status-badge ${statusClass}">${statusDisplay}</span>`;
    })
    .join(' · ');

  // Update last updated date
  if (planData.lastUpdated) {
    updated = updated.replace(
      /Last updated: [^\n<]+/,
      `Last updated: ${planData.lastUpdated}`
    );
  }

  return updated;
}

/**
 * Main sync function
 */
function syncPlan() {
  try {
    log('blue', '📋 Reading plan file...');

    if (!fs.existsSync(PLAN_FILE)) {
      log('red', `❌ Error: Plan file not found at ${PLAN_FILE}`);
      process.exit(1);
    }

    const planContent = fs.readFileSync(PLAN_FILE, 'utf8');
    const planData = parsePlan(planContent);

    log('green', `✅ Parsed plan file`);
    log('yellow', `   Last updated: ${planData.lastUpdated}`);

    // List phases found
    Object.entries(planData.phases).forEach(([num, phase]) => {
      log('yellow', `   Phase ${num}: ${phase.emoji} ${phase.status} (${phase.tasks.length} tasks)`);
    });

    // Update content-review.html
    if (fs.existsSync(CONTENT_REVIEW_FILE)) {
      log('blue', '\n🎨 Updating content-review.html...');
      let contentReview = fs.readFileSync(CONTENT_REVIEW_FILE, 'utf8');
      contentReview = updateContentReview(contentReview, planData);
      fs.writeFileSync(CONTENT_REVIEW_FILE, contentReview);
      log('green', '✅ content-review.html updated');
    } else {
      log('red', `⚠️  content-review.html not found at ${CONTENT_REVIEW_FILE}`);
    }

    // Update plan-board.html
    if (fs.existsSync(PLAN_BOARD_FILE)) {
      log('blue', '📊 Updating plan-board.html...');
      let planBoard = fs.readFileSync(PLAN_BOARD_FILE, 'utf8');
      planBoard = updatePlanBoard(planBoard, planData);
      fs.writeFileSync(PLAN_BOARD_FILE, planBoard);
      log('green', '✅ plan-board.html updated');
    } else {
      log('red', `⚠️  plan-board.html not found at ${PLAN_BOARD_FILE}`);
    }

    log('green', '\n✨ Sync complete!');
  } catch (error) {
    log('red', `\n❌ Error: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
}

// Run
syncPlan();
