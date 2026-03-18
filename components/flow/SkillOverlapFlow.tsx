"use client";

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

const initialNodes: Node[] = [
  { id: "frontend", position: { x: 0, y: 0 }, data: { label: "Frontend" } },
  { id: "backend", position: { x: 0, y: 100 }, data: { label: "Backend" } },
  { id: "devops", position: { x: 0, y: 200 }, data: { label: "DevOps" } },
  { id: "fullstack", position: { x: 250, y: 100 }, data: { label: "Full-stack" } },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "frontend", target: "fullstack" },
  { id: "e2", source: "backend", target: "fullstack" },
  { id: "e3", source: "devops", target: "fullstack" },
];

export function SkillOverlapFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-64 w-full rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      />
    </div>
  );
}
