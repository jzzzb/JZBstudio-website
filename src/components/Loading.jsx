// src/components/Loading.jsx
import React from "react";

export default function Loading({ message = "Loading..." }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90"
      aria-live="polite"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-14 h-14 rounded-full border-4 border-gray-200 border-t-black animate-spin"
          aria-hidden="true"
        />
        <div className="text-gray-700 text-sm font-medium">{message}</div>
      </div>
    </div>
  );
}
