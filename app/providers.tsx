"use client";

import { type ReactNode } from "react";
import { SmoothScroll } from "./lib/motion";

export function Providers({ children }: { children: ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
