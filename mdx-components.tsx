import type { MDXComponents } from "mdx/types";
import { VisualNote } from "./components/VisualNote";

export function useMDXComponents(): MDXComponents {
  return {
    VisualNote,
    h1: ({ children }) => (
      <h1 className="mb-4 mt-8 text-3xl font-bold tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-6 text-2xl font-semibold">{children}</h2>
    ),
    p: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
  };
}
