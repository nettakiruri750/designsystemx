import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
};

export function Button({ children, variant = "primary", onClick }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : variant === "secondary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50";

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-lg font-medium transition ${styles}`}
    >
      {children}
    </button>
  );
}