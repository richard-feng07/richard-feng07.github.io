import type { ReactNode } from "react";

export type Entry = {
  role: string;
  org: string;
  href?: string;
  image: string;
  imageAlt: string;
  period: string;
  body: ReactNode;
};

export type MessageId = "light-bringer" | "steve-lacy" | "asap-rocky" | "movies";
