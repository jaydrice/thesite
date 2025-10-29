import React from "react";
import { cn } from "../../lib/utils";

const baseStyles = `
  inline-flex items-center justify-center
  font-semibold transition-all duration-300
  rounded-lg focus:outline-none focus:ring-2
`;

const variants = {
  default: "bg-white text-black hover:bg-gray-200",
  outline: "border border-white/20 text-white hover:bg-white/10",
  ghost: "text-white hover:text-gray-300",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

