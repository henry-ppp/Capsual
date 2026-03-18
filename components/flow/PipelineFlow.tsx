"use client";

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

const initialNodes: Node[] = [
  { id: "code", position: { x: 0, y: 80 }, data: { label: "Code" } },
  { id: "build", position: { x: 120, y: 80 }, data: { label: "Build" } },
  { id: "test", position: { x: 240, y: 80 }, data: { label: "Test" } },
  { id: "deploy", position: { x: 360, y: 80 }, data: { label: "Deploy" } },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "code", target: "build", label: "push" },
  { id: "e2", source: "build", target: "test", label: "artifact" },
  { id: "e3", source: "test", target: "deploy", label: "pass" },
];

export function PipelineFlow() {
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
