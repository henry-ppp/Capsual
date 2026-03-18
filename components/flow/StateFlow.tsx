"use client";

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

const initialNodes: Node[] = [
  { id: "idle", position: { x: 50, y: 100 }, data: { label: "Idle" } },
  { id: "loading", position: { x: 200, y: 50 }, data: { label: "Loading" } },
  { id: "success", position: { x: 350, y: 100 }, data: { label: "Success" } },
  { id: "error", position: { x: 350, y: 180 }, data: { label: "Error" } },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "idle", target: "loading", label: "fetch" },
  { id: "e2", source: "loading", target: "success", label: "resolve" },
  { id: "e3", source: "loading", target: "error", label: "reject" },
  { id: "e4", source: "success", target: "idle", label: "reset" },
  { id: "e5", source: "error", target: "idle", label: "retry" },
];

export function StateFlow() {
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
