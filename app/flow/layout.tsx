import "@xyflow/react/dist/style.css";

export default function FlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <a
          href="/"
          className="mb-8 inline-block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
        >
          ← Back
        </a>
        {children}
      </div>
    </div>
  );
}
