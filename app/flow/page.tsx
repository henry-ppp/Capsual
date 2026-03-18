import { ProcessFlow } from "@/components/flow/ProcessFlow";
import { StateFlow } from "@/components/flow/StateFlow";
import { DataFlow } from "@/components/flow/DataFlow";
import { TreeFlow } from "@/components/flow/TreeFlow";
import { MindMapFlow } from "@/components/flow/MindMapFlow";
import { SkillOverlapFlow } from "@/components/flow/SkillOverlapFlow";
import { PipelineFlow } from "@/components/flow/PipelineFlow";
import { DecisionFlow } from "@/components/flow/DecisionFlow";
import { ParallelFlow } from "@/components/flow/ParallelFlow";

export default function FlowPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          React Flow Visuals
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Interactive node-based diagrams. Drag nodes, zoom, and pan to explore.
        </p>
      </div>

      <section>
        <h2 className="mb-6 text-lg font-semibold text-zinc-500 dark:text-zinc-400">
          Flow & Process
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Linear Process
            </h3>
            <ProcessFlow />
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Decision / Branching
            </h3>
            <DecisionFlow />
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Parallel / Fan-out
            </h3>
            <ParallelFlow />
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              CI/CD Pipeline
            </h3>
            <PipelineFlow />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-lg font-semibold text-zinc-500 dark:text-zinc-400">
          State & Data
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              State Machine
            </h3>
            <StateFlow />
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              API Data Flow
            </h3>
            <DataFlow />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-lg font-semibold text-zinc-500 dark:text-zinc-400">
          Structure
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Tree / Hierarchy
            </h3>
            <TreeFlow />
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Mind Map
            </h3>
            <MindMapFlow />
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Converging Flow
            </h3>
            <SkillOverlapFlow />
          </div>
        </div>
      </section>
    </div>
  );
}
