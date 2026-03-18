"use client";

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

const initialNodes: Node[] = [
  { id: "input", position: { x: 150, y: 0 }, data: { label: "Input" } },
  { id: "decide", position: { x: 150, y: 80 }, data: { label: "Valid?" } },
  { id: "yes", position: { x: 50, y: 160 }, data: { label: "Process" } },
  { id: "no", position: { x: 250, y: 160 }, data: { label: "Reject" } },
  { id: "output", position: { x: 50, y: 240 }, data: { label: "Output" } },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "input", target: "decide" },
  { id: "e2", source: "decide", target: "yes", label: "yes" },
  { id: "e3", source: "decide", target: "no", label: "no" },
  { id: "e4", source: "yes", target: "output" },
];

export function DecisionFlow() {
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
