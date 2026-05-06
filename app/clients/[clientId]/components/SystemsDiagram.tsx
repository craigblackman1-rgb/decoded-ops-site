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

const nodes: Record<string, NodeData> = {
  symphony:  { x: 400, y: 170, label: 'Symphony', color: '#219EBC', r: 36 },
  tracker:   { x: 400, y: 170, label: 'Tracker ERP', color: '#219EBC', r: 38 },
  website:   { x: 110, y: 90, label: 'TackleBag.co.uk', color: '#8ECAE6', r: 30 },
  qb:        { x: 680, y: 90, label: 'QuickBooks', color: '#4ade80', r: 30 },
  ship:      { x: 685, y: 240, label: 'ShipStation', color: '#a78bfa', r: 30 },
  excel:     { x: 110, y: 245, label: 'Excel/OneDrive', color: '#FB8500', r: 30 },
  email:     { x: 215, y: 310, label: 'Email/Manual', color: '#f87171', r: 28 },
  crm:       { x: 555, y: 300, label: 'CRM', color: '#34d399', r: 28 },
  jobsheet:  { x: 220, y: 270, label: 'Job Sheets', color: '#FFB703', r: 26 },
};

const chaosEdges: Edge[] = [
  { f: 'website', t: 'symphony', c: '#FFB703' },
  { f: 'symphony', t: 'qb', c: '#f87171' },
  { f: 'symphony', t: 'ship', c: '#a78bfa' },
  { f: 'excel', t: 'email', c: '#FB8500' },
  { f: 'email', t: 'qb', c: '#f87171' },
  { f: 'excel', t: 'symphony', c: '#FB8500' },
  { f: 'website', t: 'excel', c: '#FB8500' },
  { f: 'website', t: 'email', c: '#f87171' },
  { f: 'email', t: 'ship', c: '#f87171' },
  { f: 'excel', t: 'qb', c: '#FB8500' },
];

const cleanEdges: Edge[] = [
  { f: 'website', t: 'tracker', c: '#219EBC', label: 'orders' },
  { f: 'tracker', t: 'qb', c: '#4ade80', label: 'invoicing' },
  { f: 'tracker', t: 'ship', c: '#a78bfa', label: 'dispatch' },
  { f: 'tracker', t: 'crm', c: '#34d399', label: 'customers' },
  { f: 'tracker', t: 'jobsheet', c: '#FFB703', label: 'production' },
];

export default function SystemsDiagram() {
  const [mode, setMode] = useState<'chaos' | 'clean'>('chaos');
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    buildSVG(mode);
  }, [mode]);

  function buildSVG(currentMode: 'chaos' | 'clean') {
    const svg = svgRef.current;
    if (!svg) return;

    // Clear existing content but keep defs
    const existingDefs = svg.querySelector('defs');
    svg.innerHTML = '';
    if (existingDefs) svg.appendChild(existingDefs);

    // (Re)create defs
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

    const marker1 = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker1.setAttribute('id', 'arrowh');
    marker1.setAttribute('markerWidth', '8');
    marker1.setAttribute('markerHeight', '8');
    marker1.setAttribute('refX', '7');
    marker1.setAttribute('refY', '3');
    marker1.setAttribute('orient', 'auto');
    const polygon1 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon1.setAttribute('points', '0,0 8,3 0,6');
    polygon1.setAttribute('fill', '#FFB703');
    marker1.appendChild(polygon1);

    const marker2 = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker2.setAttribute('id', 'arrowc');
    marker2.setAttribute('markerWidth', '8');
    marker2.setAttribute('markerHeight', '8');
    marker2.setAttribute('refX', '7');
    marker2.setAttribute('refY', '3');
    marker2.setAttribute('orient', 'auto');
    const polygon2 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon2.setAttribute('points', '0,0 8,3 0,6');
    polygon2.setAttribute('fill', '#4ade80');
    marker2.appendChild(polygon2);

    defs.appendChild(marker1);
    defs.appendChild(marker2);
    svg.appendChild(defs);

    const edges = currentMode === 'chaos' ? chaosEdges : cleanEdges;

    edges.forEach((e, i) => {
      const f = nodes[e.f];
      const t = nodes[e.t];
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
        const tx = (f.x + t.x) / 2 + 10;
        const ty = (f.y + t.y) / 2 - 8;
        const lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        lbl.setAttribute('x', tx.toString());
        lbl.setAttribute('y', ty.toString());
        lbl.setAttribute('fill', e.c);
        lbl.setAttribute('font-size', '10');
        lbl.setAttribute('font-family', 'Outfit, sans-serif');
        lbl.setAttribute('font-weight', '600');
        lbl.textContent = e.label;
        svg.appendChild(lbl);
      }
    });

    // Draw nodes
    Object.entries(nodes).forEach(([k, n]) => {
      if (currentMode === 'chaos' && (k === 'crm' || k === 'tracker' || k === 'jobsheet')) return;
      if (currentMode !== 'chaos' && (k === 'symphony' || k === 'excel' || k === 'email')) return;

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

    // Add description text
    const warn = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    warn.setAttribute('x', '400');
    warn.setAttribute('y', '330');
    warn.setAttribute('text-anchor', 'middle');

    if (currentMode === 'chaos') {
      warn.setAttribute('fill', '#FB8500');
      warn.textContent = 'Manual processes connecting every system — every line is a person filling a gap';
    } else {
      warn.setAttribute('fill', '#219EBC');
      warn.textContent = 'Tracker ERP as the central hub — orders, production, dispatch, accounts all connected';
    }
    warn.setAttribute('font-size', '11');
    warn.setAttribute('font-family', 'Outfit, sans-serif');
    svg.appendChild(warn);
  }

  return (
    <div className="bg-[#023047] rounded-2xl p-12 text-white">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Current State vs. Future State</h3>
        <p className="text-[#8ECAE6] text-sm max-w-2xl mx-auto">
          Toggle between states to see the transformation · coloured lines show data flows
        </p>
      </div>

      {/* Toggle Buttons */}
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

      {/* SVG Diagram */}
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
