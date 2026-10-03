import type { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-sans text-[0.8125rem] font-semibold tracking-wide text-muted">
      {children}
    </h2>
  );
}
