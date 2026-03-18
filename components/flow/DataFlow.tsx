"use client";

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

const initialNodes: Node[] = [
  { id: "user", position: { x: 0, y: 80 }, data: { label: "User" } },
  { id: "api", position: { x: 200, y: 80 }, data: { label: "API" } },
  { id: "db", position: { x: 400, y: 80 }, data: { label: "DB" } },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "user", target: "api", label: "Login request" },
  { id: "e2", source: "api", target: "db", label: "Query" },
  { id: "e3", source: "db", target: "api", label: "Results" },
  { id: "e4", source: "api", target: "user", label: "Response" },
];

export function DataFlow() {
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
