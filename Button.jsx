import React from "react";

export function Button({ children, onClick, className = "", variant = "default" }) {
  const base = "inline-block font-semibold text-sm transition rounded";
  const style = variant === "outline"
    ? "border border-gray-700 text-gray-700 hover:bg-gray-100"
    : "bg-black text-white hover:bg-gray-900";

  return (
    <button onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  );
}