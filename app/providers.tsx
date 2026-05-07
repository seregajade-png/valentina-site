"use client";

import { type ReactNode } from "react";
import { CustomCursor, SmoothScroll } from "./lib/motion";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      {children}
    </SmoothScroll>
  );
}
