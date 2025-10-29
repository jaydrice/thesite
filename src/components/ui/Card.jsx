import React from "react";
import { cn } from "../../lib/utils";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white/10 border border-white/10 backdrop-blur-md",
        "shadow-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
