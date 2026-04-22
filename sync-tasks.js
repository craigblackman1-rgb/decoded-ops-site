#!/usr/bin/env node
/**
 * Task Sync System
 * Reads task completion status from COMPLETE_TASK_BREAKDOWN.md
 * Updates plan.md and plan-board.html automatically
 *
 * Usage: node sync-tasks.js
 *
 * How it works:
 * 1. Reads COMPLETE_TASK_BREAKDOWN.md and parses task status (✅, 🚀, [ ], [x])
 * 2. Updates plan.md with matching task completion markers
 * 3. Updates plan-board.html story cards with visual indicators
 * 4. Generates summary report of completed/pending tasks
 */

const fs = require('fs');
const path = require('path');

const BREAKDOWN_FILE = path.join(__dirname, 'COMPLETE_TASK_BREAKDOWN.md');
const PLAN_FILE = path.join(__dirname, '.plan.md');
const DASHBOARD_FILE = path.join(__dirname, 'public', 'plan-board.html');

// Task status indicators
const STATUS = {
  COMPLETE: '✅',
  ACTIVE: '🚀',
  PENDING: '⏳',
  CHECKED: '[x]',
  UNCHECKED: '[ ]',
};

/**
 * Parse task status from breakdown file
 * Returns map of taskId -> { status, phase, title, completed }
 */
function parseBreakdownFile() {
  const content = fs.readFileSync(BREAKDOWN_FILE, 'utf-8');
  const tasks = new Map();

  // Match patterns like:
  // - [x] P3-Setup-001: Configure Apollo campaign
  // - [ ] P3-Setup-002: Verify email & tracking
  // - ✅ P2-Review-001: Review Week 1 introduction posts

  const taskPattern = /^[\s]*[-•]?\s*(?:\[x\]|\[ \]|✅|🚀|⏳)?\s*(P\d+-[\w-]+):\s*(.+?)$/gm;
  let match;

  while ((match = taskPattern.exec(content)) !== null) {
    const taskId = match[1];
    const title = match[2].trim();
    const line = match[0];

    // Determine status from checkbox or emoji
    const isChecked = line.includes('[x]') || line.includes('✅');
    const isActive = line.includes('🚀');
    const isPending = line.includes('[ ]') || line.includes('⏳');

    tasks.set(taskId, {
      taskId,
      title,
      status: isChecked ? 'complete' : isActive ? 'active' : 'pending',
      completed: isChecked,
      line: match[0],
    });
  }

  return tasks;
}

/**
 * Update plan.md with task completion status
 */
function updatePlanFile(tasks) {
  let content = fs.readFileSync(PLAN_FILE, 'utf-8');
  let updated = false;

  for (const [taskId, task] of tasks) {
    // Look for task checklist items in plan.md
    const patterns = [
      new RegExp(`\\[\\s*\\]\\s+${taskId.replace(/\-/g, '\\-')}:`, 'g'),
      new RegExp(`\\[x\\]\\s+${taskId.replace(/\-/g, '\\-')}:`, 'g'),
    ];

    for (const pattern of patterns) {
      if (pattern.test(content)) {
        const replacement = task.completed ? `[x] ${taskId}:` : `[ ] ${taskId}:`;
        const newContent = content.replace(pattern, replacement);

        if (newContent !== content) {
          content = newContent;
          updated = true;
        }
      }
    }
  }

  if (updated) {
    fs.writeFileSync(PLAN_FILE, content, 'utf-8');
    console.log('✅ Updated: .plan.md');
  }

  return updated;
}

/**
 * Update plan-board.html story cards with task status
 */
function updateDashboard(tasks) {
  let content = fs.readFileSync(DASHBOARD_FILE, 'utf-8');
  let updated = false;

  for (const [taskId, task] of tasks) {
    // Look for story cards with data-task-id attribute
    const storyPattern = new RegExp(
      `<div[^>]*data-task-id="${taskId.replace(/\-/g, '\\-')}"[^>]*>([\\s\\S]*?)<\\/div>`,
      'g'
    );

    if (storyPattern.test(content)) {
      // Update the story card's status class
      const statusClass = task.completed ? 'done' : task.status === 'active' ? 'active' : 'pending';
      const badge = task.completed ? '✅ DONE' : task.status === 'active' ? '🚀 IN PROGRESS' : '⏳ PENDING';

      // Replace story card with updated status
      const replacement = `<div class="story ${statusClass}" data-task-id="${taskId}"><span class="badge">${badge}</span>`;
      content = content.replace(
        new RegExp(`<div[^>]*data-task-id="${taskId.replace(/\-/g, '\\-')}"[^>]*><span[^>]*class="badge"[^>]*>[^<]*</span>`),
        replacement
      );

      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(DASHBOARD_FILE, content, 'utf-8');
    console.log('✅ Updated: public/plan-board.html');
  }

  return updated;
}

/**
 * Generate summary report
 */
function generateReport(tasks) {
  const complete = Array.from(tasks.values()).filter(t => t.completed).length;
  const active = Array.from(tasks.values()).filter(t => t.status === 'active').length;
  const pending = Array.from(tasks.values()).filter(t => t.status === 'pending').length;
  const total = tasks.size;

  console.log('\n' + '='.repeat(60));
  console.log('TASK SYNC REPORT');
  console.log('='.repeat(60));
  console.log(`Total Tasks: ${total}`);
  console.log(`✅ Complete: ${complete} (${Math.round(complete/total*100)}%)`);
  console.log(`🚀 Active: ${active}`);
  console.log(`⏳ Pending: ${pending}`);
  console.log('='.repeat(60) + '\n');

  // Show recently completed tasks
  const completed = Array.from(tasks.values())
    .filter(t => t.completed)
    .slice(0, 5);

  if (completed.length > 0) {
    console.log('Recently Completed:');
    completed.forEach(t => {
      console.log(`  ✅ ${t.taskId}: ${t.title}`);
    });
  }

  // Show active tasks
  const active_tasks = Array.from(tasks.values())
    .filter(t => t.status === 'active')
    .slice(0, 5);

  if (active_tasks.length > 0) {
    console.log('\nActive Tasks:');
    active_tasks.forEach(t => {
      console.log(`  🚀 ${t.taskId}: ${t.title}`);
    });
  }
}

/**
 * Main sync function
 */
function syncTasks() {
  console.log('🔄 Starting task sync...\n');

  try {
    // Parse breakdown file
    const tasks = parseBreakdownFile();
    console.log(`📖 Parsed ${tasks.size} tasks from COMPLETE_TASK_BREAKDOWN.md`);

    // Update plan.md
    updatePlanFile(tasks);

    // Update dashboard
    updateDashboard(tasks);

    // Generate report
    generateReport(tasks);

    console.log('✅ Sync complete!');
    console.log(`Last synced: ${new Date().toLocaleString()}`);

  } catch (error) {
    console.error('❌ Sync failed:', error.message);
    process.exit(1);
  }
}

// Run sync
syncTasks();
