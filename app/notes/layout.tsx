export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <a
        href="/"
        className="mb-8 inline-block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
      >
        ← Back
      </a>
      {children}
    </div>
  );
}
