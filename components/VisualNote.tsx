import type { ReactNode } from "react";

type Variant = "info" | "tip" | "idea" | "warning" | "sticky";

const variants = {
  info: {
    icon: "ℹ️",
    className:
      "border-blue-200 bg-blue-50/80 dark:border-blue-800 dark:bg-blue-950/30",
  },
  tip: {
    icon: "💡",
    className:
      "border-emerald-200 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/30",
  },
  idea: {
    icon: "✨",
    className:
      "border-amber-200 bg-amber-50/80 dark:border-amber-800 dark:bg-amber-950/30",
  },
  warning: {
    icon: "⚠️",
    className:
      "border-orange-200 bg-orange-50/80 dark:border-orange-800 dark:bg-orange-950/30",
  },
  sticky: {
    icon: "📌",
    className:
      "border-zinc-200 bg-yellow-50/90 shadow-[2px_2px_8px_rgba(0,0,0,0.08)] dark:border-zinc-700 dark:bg-zinc-800/80 dark:shadow-none -rotate-[-0.5deg]",
  },
} satisfies Record<Variant, { icon: string; className: string }>;

interface VisualNoteProps {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}

export function VisualNote({
  variant = "sticky",
  title,
  children,
}: VisualNoteProps) {
  const { icon, className } = variants[variant];
  return (
    <aside
      className={`my-6 rounded-xl border-2 p-5 font-sans ${className}`}
      role="note"
    >
      {(title || icon) && (
        <div className="mb-2 flex items-center gap-2 font-semibold">
          <span className="text-lg">{icon}</span>
          {title && <span>{title}</span>}
        </div>
      )}
      <div className="[&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </div>
    </aside>
  );
}
