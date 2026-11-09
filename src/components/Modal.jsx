import React from "react";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm"
      style={{ animation: "fadeIn 0.3s" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 text-white rounded-2xl shadow-2xl w-full max-w-md m-4 backdrop-blur-xl"
        style={{ animation: "fadeInUp 0.3s" }}
      >
        <div className="flex items-center justify-between p-6 border-b border-green-500/20">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-green-300 hover:text-green-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Modal;
