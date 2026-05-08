'use client';

import { useState, useEffect, useRef } from 'react';

interface NodeData {
  x: number;
  y: number;
  label: string;
  color: string;
  r: number;
}

interface Edge {
  f: string;
  t: string;
  c: string;
  label?: string;
}

export interface SystemsDiagramData {
  chaosNodes: string[];
  cleanNodes: string[];
  nodes: Record<string, NodeData>;
  chaosEdges: Edge[];
  chaosDescription: string;
  cleanEdges: Edge[];
  cleanDescription: string;
}

// ── TackleBag hardcoded fallback ────────────────────────────────────────────

const TB_NODES: Record<string, NodeData> = {
  symphony:  { x: 400, y: 170, label: 'Symphony',       color: '#219EBC', r: 36 },
  tracker:   { x: 400, y: 170, label: 'Tracker ERP',    color: '#219EBC', r: 38 },
  website:   { x: 110, y: 90,  label: 'TackleBag.co.uk',color: '#8ECAE6', r: 30 },
  qb:        { x: 680, y: 90,  label: 'QuickBooks',     color: '#4ade80', r: 30 },
  ship:      { x: 685, y: 240, label: 'ShipStation',    color: '#a78bfa', r: 30 },
  excel:     { x: 110, y: 245, label: 'Excel/OneDrive', color: '#FB8500', r: 30 },
  email:     { x: 215, y: 310, label: 'Email/Manual',   color: '#f87171', r: 28 },
  crm:       { x: 555, y: 300, label: 'CRM',            color: '#34d399', r: 28 },
  jobsheet:  { x: 220, y: 270, label: 'Job Sheets',     color: '#FFB703', r: 26 },
};

const TB_CHAOS_EDGES: Edge[] = [
  { f: 'website', t: 'symphony', c: '#FFB703' },
  { f: 'symphony', t: 'qb',     c: '#f87171' },
  { f: 'symphony', t: 'ship',   c: '#a78bfa' },
  { f: 'excel',   t: 'email',   c: '#FB8500' },
  { f: 'email',   t: 'qb',      c: '#f87171' },
  { f: 'excel',   t: 'symphony',c: '#FB8500' },
  { f: 'website', t: 'excel',   c: '#FB8500' },
  { f: 'website', t: 'email',   c: '#f87171' },
  { f: 'email',   t: 'ship',    c: '#f87171' },
  { f: 'excel',   t: 'qb',      c: '#FB8500' },
];

const TB_CLEAN_EDGES: Edge[] = [
  { f: 'website', t: 'tracker', c: '#219EBC', label: 'orders' },
  { f: 'tracker', t: 'qb',      c: '#4ade80', label: 'invoicing' },
  { f: 'tracker', t: 'ship',    c: '#a78bfa', label: 'dispatch' },
  { f: 'tracker', t: 'crm',     c: '#34d399', label: 'customers' },
  { f: 'tracker', t: 'jobsheet',c: '#FFB703', label: 'production' },
];

const TB_DATA: SystemsDiagramData = {
  chaosNodes: ['symphony', 'website', 'qb', 'ship', 'excel', 'email'],
  cleanNodes: ['tracker', 'website', 'qb', 'ship', 'crm', 'jobsheet'],
  nodes: TB_NODES,
  chaosEdges: TB_CHAOS_EDGES,
  chaosDescription: 'Manual processes connecting every system — every line is a person filling a gap',
  cleanEdges: TB_CLEAN_EDGES,
  cleanDescription: 'Tracker ERP as the central hub — orders, production, dispatch, accounts all connected',
};

// ── Component ───────────────────────────────────────────────────────────────

export default function SystemsDiagram({ data }: { data?: SystemsDiagramData }) {
  const [mode, setMode] = useState<'chaos' | 'clean'>('chaos');
  const svgRef = useRef<SVGSVGElement>(null);
  const d = data || TB_DATA;

  useEffect(() => {
    buildSVG(mode);
  }, [mode, d]);

  function buildSVG(currentMode: 'chaos' | 'clean') {
    const svg = svgRef.current;
    if (!svg) return;

    svg.innerHTML = '';

    // Defs
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    ['arrowh', 'arrowc'].forEach((id, i) => {
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
      marker.setAttribute('id', id);
      marker.setAttribute('markerWidth', '8');
      marker.setAttribute('markerHeight', '8');
      marker.setAttribute('refX', '7');
      marker.setAttribute('refY', '3');
      marker.setAttribute('orient', 'auto');
      const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      poly.setAttribute('points', '0,0 8,3 0,6');
      poly.setAttribute('fill', i === 0 ? '#FFB703' : '#4ade80');
      marker.appendChild(poly);
      defs.appendChild(marker);
    });
    svg.appendChild(defs);

    const edges = currentMode === 'chaos' ? d.chaosEdges : d.cleanEdges;
    const activeNodes = currentMode === 'chaos' ? d.chaosNodes : d.cleanNodes;

    // Edges
    edges.forEach((e, i) => {
      const f = d.nodes[e.f];
      const t = d.nodes[e.t];
      if (!f || !t) return;

      const dx = t.x - f.x;
      const dy = t.y - f.y;
      const cx = f.x + dx / 2 + (currentMode === 'chaos' ? (i % 3 - 1) * 40 : 0);
      const cy = f.y + dy / 2 + (currentMode === 'chaos' ? (i % 2 === 0 ? -30 : 30) : 0);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M${f.x},${f.y} Q${cx},${cy} ${t.x},${t.y}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', e.c);
      path.setAttribute('stroke-width', currentMode === 'chaos' ? '1.5' : '2.5');
      path.setAttribute('stroke-dasharray', currentMode === 'chaos' ? '4 4' : '8 3');
      path.setAttribute('opacity', currentMode === 'chaos' ? '0.5' : '0.85');
      if (currentMode !== 'chaos') {
        path.setAttribute('marker-end', 'url(#arrowh)');
        path.style.animation = `flowAnim ${0.8 + i * 0.15}s linear infinite`;
      }
      svg.appendChild(path);

      if (currentMode !== 'chaos' && e.label) {
        const lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        lbl.setAttribute('x', ((f.x + t.x) / 2 + 10).toString());
        lbl.setAttribute('y', ((f.y + t.y) / 2 - 8).toString());
        lbl.setAttribute('fill', e.c);
        lbl.setAttribute('font-size', '10');
        lbl.setAttribute('font-family', 'Outfit, sans-serif');
        lbl.setAttribute('font-weight', '600');
        lbl.textContent = e.label;
        svg.appendChild(lbl);
      }
    });

    // Nodes
    Object.entries(d.nodes).forEach(([k, n]) => {
      if (!activeNodes.includes(k)) return;

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', n.x.toString());
      circle.setAttribute('cy', n.y.toString());
      circle.setAttribute('r', n.r.toString());
      circle.setAttribute('fill', n.color);
      circle.setAttribute('opacity', '0.15');

      const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle2.setAttribute('cx', n.x.toString());
      circle2.setAttribute('cy', n.y.toString());
      circle2.setAttribute('r', (n.r - 4).toString());
      circle2.setAttribute('fill', n.color);
      circle2.setAttribute('opacity', '0.9');

      const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      txt.setAttribute('x', n.x.toString());
      txt.setAttribute('y', (n.y + 4).toString());
      txt.setAttribute('text-anchor', 'middle');
      txt.setAttribute('fill', '#fff');
      txt.setAttribute('font-size', '10');
      txt.setAttribute('font-family', 'Outfit, sans-serif');
      txt.setAttribute('font-weight', '700');
      txt.textContent = n.label;

      g.appendChild(circle);
      g.appendChild(circle2);
      g.appendChild(txt);
      svg.appendChild(g);
    });

    // Description text
    const desc = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    desc.setAttribute('x', '400');
    desc.setAttribute('y', '330');
    desc.setAttribute('text-anchor', 'middle');
    desc.setAttribute('fill', currentMode === 'chaos' ? '#FB8500' : '#219EBC');
    desc.setAttribute('font-size', '11');
    desc.setAttribute('font-family', 'Outfit, sans-serif');
    desc.textContent = currentMode === 'chaos' ? d.chaosDescription : d.cleanDescription;
    svg.appendChild(desc);
  }

  return (
    <div className="bg-[#023047] rounded-2xl p-12 text-white">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Current State vs. Future State</h3>
        <p className="text-[#8ECAE6] text-sm max-w-2xl mx-auto">
          Toggle between states to see the transformation · coloured lines show data flows
        </p>
      </div>

      <div className="flex gap-0 bg-[rgba(255,255,255,0.05)] rounded-lg overflow-hidden w-fit mx-auto mb-8">
        <button
          onClick={() => setMode('chaos')}
          className={`px-6 py-2 text-sm font-semibold transition-all ${
            mode === 'chaos'
              ? 'bg-[#219EBC] text-white'
              : 'bg-transparent text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.7)]'
          }`}
        >
          Current State — The Chaos
        </button>
        <button
          onClick={() => setMode('clean')}
          className={`px-6 py-2 text-sm font-semibold transition-all ${
            mode === 'clean'
              ? 'bg-[#219EBC] text-white'
              : 'bg-transparent text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.7)]'
          }`}
        >
          Future State — The Fix
        </button>
      </div>

      <svg
        ref={svgRef}
        viewBox="0 0 800 340"
        className="w-full max-w-4xl mx-auto"
        style={{ height: 'auto' }}
      />

      <style>{`
        @keyframes flowAnim {
          to { stroke-dashoffset: -20; }
        }
        path[style*="flowAnim"] {
          animation: flowAnim 1.2s linear infinite;
        }
      `}</style>
    </div>
  );
}
