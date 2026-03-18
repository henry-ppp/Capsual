"use client";

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

const initialNodes: Node[] = [
  { id: "start", position: { x: 0, y: 80 }, data: { label: "Start" } },
  { id: "process", position: { x: 150, y: 80 }, data: { label: "Process" } },
  { id: "decide", position: { x: 300, y: 80 }, data: { label: "Decide" } },
  { id: "end", position: { x: 450, y: 80 }, data: { label: "End" } },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "start", target: "process" },
  { id: "e2", source: "process", target: "decide" },
  { id: "e3", source: "decide", target: "end" },
];

export function ProcessFlow() {
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
