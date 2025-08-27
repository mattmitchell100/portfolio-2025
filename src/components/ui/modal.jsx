import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-7xl w-full max-h-[80vh] h-full p-6 border border-slate-200 dark:border-slate-700">
        <button
          className="absolute top-4 right-4 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
