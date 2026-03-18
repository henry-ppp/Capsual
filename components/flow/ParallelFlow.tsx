"use client";

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

const initialNodes: Node[] = [
  { id: "start", position: { x: 150, y: 0 }, data: { label: "Start" } },
  { id: "a", position: { x: 50, y: 80 }, data: { label: "Task A" } },
  { id: "b", position: { x: 150, y: 80 }, data: { label: "Task B" } },
  { id: "c", position: { x: 250, y: 80 }, data: { label: "Task C" } },
  { id: "end", position: { x: 150, y: 160 }, data: { label: "Merge" } },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "start", target: "a" },
  { id: "e2", source: "start", target: "b" },
  { id: "e3", source: "start", target: "c" },
  { id: "e4", source: "a", target: "end" },
  { id: "e5", source: "b", target: "end" },
  { id: "e6", source: "c", target: "end" },
];

export function ParallelFlow() {
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
