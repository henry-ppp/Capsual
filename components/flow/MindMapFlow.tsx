"use client";

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

const initialNodes: Node[] = [
  { id: "root", position: { x: 200, y: 80 }, data: { label: "Next.js" } },
  { id: "routing", position: { x: 50, y: 20 }, data: { label: "Routing" } },
  { id: "app-router", position: { x: 0, y: 100 }, data: { label: "App Router" } },
  { id: "pages", position: { x: 80, y: 100 }, data: { label: "Pages" } },
  { id: "rendering", position: { x: 200, y: 0 }, data: { label: "Rendering" } },
  { id: "ssr", position: { x: 150, y: 160 }, data: { label: "SSR" } },
  { id: "ssg", position: { x: 250, y: 160 }, data: { label: "SSG" } },
  { id: "data", position: { x: 350, y: 20 }, data: { label: "Data" } },
  { id: "fetch", position: { x: 320, y: 100 }, data: { label: "fetch" } },
  { id: "actions", position: { x: 380, y: 100 }, data: { label: "Server Actions" } },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "root", target: "routing" },
  { id: "e2", source: "routing", target: "app-router" },
  { id: "e3", source: "routing", target: "pages" },
  { id: "e4", source: "root", target: "rendering" },
  { id: "e5", source: "rendering", target: "ssr" },
  { id: "e6", source: "rendering", target: "ssg" },
  { id: "e7", source: "root", target: "data" },
  { id: "e8", source: "data", target: "fetch" },
  { id: "e9", source: "data", target: "actions" },
];

export function MindMapFlow() {
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
