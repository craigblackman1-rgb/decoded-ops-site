'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Circle, AlertCircle, Upload, ChevronDown, ChevronRight } from 'lucide-react';

export interface Task {
  id: string;
  title: string;
  status: string;
  assigned_to: string;
  due_date: string | null;
}

export interface Milestone {
  id: string;
  title: string;
  target_date: string | null;
  status: string;
  critical: boolean;
}

export interface Phase {
  id: string;
  name: string;
  status: string;
  start_date: string;
  end_date: string;
  milestones: Milestone[];
  client_tasks: Task[];
}

export interface UploadRecord {
  id: string;
  filename: string;
  file_size: number | null;
  mime_type: string | null;
  uploaded_at: string;
  task_id: string | null;
}

interface Props {
  projectName: string;
  projectId: string;
  startDate: string;
  endDate: string;
  phases: Phase[];
  initialUploads: UploadRecord[];
  clientId: string;
  hubUrl: string;
}

const PHASE_STATUS: Record<string, { label: string; color: string; bg: string }> = {
  active:    { label: 'In Progress', color: '#219EBC', bg: 'rgba(33,158,188,0.12)' },
  upcoming:  { label: 'Upcoming',    color: '#5a7d8f', bg: 'rgba(90,125,143,0.1)'  },
  completed: { label: 'Complete',    color: '#16A34A', bg: 'rgba(22,163,74,0.1)'   },
};

const MS_STATUS: Record<string, { icon: typeof CheckCircle; color: string }> = {
  completed: { icon: CheckCircle, color: '#16A34A' },
  'at-risk': { icon: AlertCircle, color: '#FB8500' },
  upcoming:  { icon: Circle,      color: '#8ECAE6' },
};

function fmtDate(d: string | null) {
  if (!d) return '';
  return new Date(d.length === 10 ? d + 'T00:00:00' : d)
    .toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function fmtBytes(n: number | null) {
  if (!n) return '';
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ProjectView({ projectName, projectId, startDate, endDate, phases, initialUploads, clientId, hubUrl }: Props) {
  const activePhase = phases.find(p => p.status === 'active');
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    activePhase ? { [activePhase.id]: true } : {}
  );
  const [uploads, setUploads] = useState<UploadRecord[]>(initialUploads);
  const [uploadStatus, setUploadStatus] = useState<Record<string, 'idle' | 'uploading' | 'done' | 'error'>>({});
  const fileRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const allClientTasks = phases.flatMap(p => p.client_tasks);
  const openTasks = allClientTasks.filter(t => t.status !== 'done');

  const handleUpload = async (taskId: string, file: File) => {
    setUploadStatus(s => ({ ...s, [taskId]: 'uploading' }));
    try {
      const body = new FormData();
      body.append('file', file);
      const res = await fetch(
        `${hubUrl}/api/public/client-uploads?clientId=${clientId}&projectId=${projectId}&taskId=${taskId}`,
        { method: 'POST', body }
      );
      if (!res.ok) throw new Error();
      const { upload } = await res.json();
      setUploads(u => [upload, ...u]);
      setUploadStatus(s => ({ ...s, [taskId]: 'done' }));
      setTimeout(() => setUploadStatus(s => ({ ...s, [taskId]: 'idle' })), 3000);
    } catch {
      setUploadStatus(s => ({ ...s, [taskId]: 'error' }));
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/clients/dashboard" className="inline-flex items-center gap-1.5 text-sm text-[#5a7d8f] hover:text-[#023047] transition-colors mb-8">
          <ArrowLeft size={14} /> Back to dashboard
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#023047] mb-2">{projectName}</h1>
          <p className="text-[#5a7d8f] text-sm">{fmtDate(startDate)} – {fmtDate(endDate)}</p>
        </div>

        {openTasks.length > 0 && (
          <div className="mb-8 p-4 rounded-xl border border-[#FB8500]/30 bg-[#FB8500]/5 flex items-start gap-3">
            <AlertCircle size={18} className="text-[#FB8500] mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#023047] mb-1">
                {openTasks.length} action{openTasks.length > 1 ? 's' : ''} needed from you
              </p>
              <p className="text-xs text-[#5a7d8f]">Complete these tasks to keep the project on track.</p>
            </div>
          </div>
        )}

        <div className="space-y-4 mb-12">
          {phases.map((phase, i) => {
            const pStatus = PHASE_STATUS[phase.status] || PHASE_STATUS.upcoming;
            const isExpanded = expanded[phase.id] ?? false;
            const tasksDone = phase.client_tasks.filter(t => t.status === 'done').length;
            const tasksOpen = phase.client_tasks.filter(t => t.status !== 'done').length;

            return (
              <div key={phase.id} className="rounded-xl overflow-hidden border border-[#d4e8f0] bg-white">
                <button
                  onClick={() => setExpanded(e => ({ ...e, [phase.id]: !e[phase.id] }))}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F8F9FA] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#023047] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-[#023047] text-base">{phase.name}</div>
                      <div className="text-xs text-[#5a7d8f] mt-0.5">
                        {fmtDate(phase.start_date)} – {fmtDate(phase.end_date)}
                        {tasksOpen > 0 && <span className="ml-2 text-[#FB8500] font-semibold">{tasksOpen} action{tasksOpen > 1 ? 's' : ''} needed</span>}
                        {tasksOpen === 0 && tasksDone > 0 && <span className="ml-2 text-[#16A34A] font-semibold">All done</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: pStatus.bg, color: pStatus.color }}>
                      {pStatus.label}
                    </span>
                    {isExpanded ? <ChevronDown size={16} className="text-[#5a7d8f]" /> : <ChevronRight size={16} className="text-[#5a7d8f]" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-[#d4e8f0]">
                    {phase.milestones.length > 0 && (
                      <div className="mt-4 mb-5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#5a7d8f] mb-3">Milestone</div>
                        {phase.milestones.map(m => {
                          const Icon = MS_STATUS[m.status]?.icon || Circle;
                          const color = MS_STATUS[m.status]?.color || '#8ECAE6';
                          return (
                            <div key={m.id} className="flex items-start gap-3 py-2.5 border-b border-[#d4e8f0] last:border-0">
                              <Icon size={16} style={{ color }} className="shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-[#023047]">{m.title}</p>
                                {m.target_date && <p className="text-xs text-[#5a7d8f] mt-0.5">Target: {fmtDate(m.target_date)}</p>}
                              </div>
                            </div>
                          );
                        })}
                        <div className="h-px bg-[#d4e8f0] mt-4" />
                      </div>
                    )}

                    {phase.client_tasks.length > 0 && (
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#5a7d8f] mb-3 mt-4">Your actions</div>
                        <div className="space-y-2">
                          {phase.client_tasks.map(task => {
                            const done = task.status === 'done';
                            const taskUploads = uploads.filter(u => u.task_id === task.id);
                            const uStatus = uploadStatus[task.id] || 'idle';
                            return (
                              <div key={task.id} className={`p-3 rounded-lg border ${done ? 'border-[#d4e8f0] bg-[#F8F9FA]' : 'border-[#FB8500]/20 bg-orange-50/30'}`}>
                                <div className="flex items-start gap-3">
                                  <div className="mt-0.5 shrink-0">
                                    {done ? <CheckCircle size={16} className="text-[#16A34A]" /> : <Circle size={16} className="text-[#d4e8f0]" />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className={`text-sm font-medium ${done ? 'text-[#5a7d8f] line-through' : 'text-[#023047]'}`}>{task.title}</p>
                                    {task.due_date && !done && <p className="text-xs text-[#5a7d8f] mt-0.5">Due: {fmtDate(task.due_date)}</p>}
                                    {taskUploads.length > 0 && (
                                      <div className="mt-2 space-y-1">
                                        {taskUploads.map(u => (
                                          <div key={u.id} className="flex items-center gap-2 text-xs text-[#5a7d8f]">
                                            <Upload size={11} /><span className="truncate">{u.filename}</span><span>{fmtBytes(u.file_size)}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                  {!done && (
                                    <div className="shrink-0">
                                      <input type="file" className="hidden" ref={el => { fileRefs.current[task.id] = el; }}
                                        onChange={e => { const f = e.target.files?.[0]; if (f) handleUpload(task.id, f); e.target.value = ''; }} />
                                      <button
                                        onClick={() => fileRefs.current[task.id]?.click()}
                                        disabled={uStatus === 'uploading'}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium border border-[#d4e8f0] rounded-lg text-[#5a7d8f] hover:border-[#219EBC]/40 hover:text-[#219EBC] transition-colors disabled:opacity-50"
                                      >
                                        <Upload size={11} />
                                        {uStatus === 'uploading' ? 'Uploading…' : uStatus === 'done' ? 'Uploaded ✓' : 'Upload file'}
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {phase.client_tasks.length === 0 && phase.milestones.length === 0 && (
                      <p className="text-sm text-[#5a7d8f] mt-4">No client actions for this phase.</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {uploads.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-[#5a7d8f] uppercase tracking-wider mb-4">Your uploads</h2>
            <div className="space-y-2">
              {uploads.map(u => (
                <div key={u.id} className="flex items-center gap-3 p-3 bg-white border border-[#d4e8f0] rounded-lg">
                  <Upload size={14} className="text-[#219EBC] shrink-0" />
                  <span className="text-sm text-[#023047] flex-1 truncate">{u.filename}</span>
                  <span className="text-xs text-[#5a7d8f] shrink-0">{fmtBytes(u.file_size)}</span>
                  <span className="text-xs text-[#5a7d8f] shrink-0">{fmtDate(u.uploaded_at)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
