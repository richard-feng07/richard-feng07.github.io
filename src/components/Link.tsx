import type { ReactNode } from "react";

export default function Link({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="text-ink underline decoration-terracotta decoration-2 underline-offset-[3px] transition-colors hover:bg-terracotta hover:text-ivory hover:decoration-terracotta"
    >
      {children}
    </a>
  );
}
