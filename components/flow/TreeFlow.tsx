"use client";

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

const initialNodes: Node[] = [
  { id: "app", position: { x: 200, y: 0 }, data: { label: "app" } },
  { id: "layout", position: { x: 0, y: 80 }, data: { label: "layout.tsx" } },
  { id: "notes", position: { x: 150, y: 80 }, data: { label: "notes" } },
  { id: "page", position: { x: 250, y: 160 }, data: { label: "page.mdx" } },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "app", target: "layout" },
  { id: "e2", source: "app", target: "notes" },
  { id: "e3", source: "notes", target: "page" },
];

export function TreeFlow() {
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
