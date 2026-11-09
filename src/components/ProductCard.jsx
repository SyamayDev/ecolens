import React from "react";
import EcoScore from "./EcoScore";

function ProductCard({ product }) {
  const getStatusInfo = (score) => {
    if (score > 70)
      return {
        emoji: "✅",
        label: "Ramah Lingkungan",
        color: "from-green-500 to-emerald-600",
      };
    if (score > 40)
      return {
        emoji: "⚠️",
        label: "Cukup Ramah",
        color: "from-yellow-500 to-yellow-600",
      };
    return {
      emoji: "❌",
      label: "Kurang Ramah",
      color: "from-red-500 to-red-600",
    };
  };

  const status = getStatusInfo(product.ecoScore);

  return (
    <div className="group relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/50 rounded-xl p-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/20">
      <div className="flex items-center gap-4">
        {/* Product Image Placeholder */}
        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20 flex-shrink-0 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-400/50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </div>

        {/* Product Info */}
        <div className="flex-grow min-w-0">
          <h3 className="font-bold text-lg text-white truncate">
            {product.name}
          </h3>
          <p className="text-sm text-green-200/70 truncate">
            {product.brand || "Brand"}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${status.color} text-white`}
            >
              {status.emoji} {status.label}
            </span>
          </div>
        </div>

        {/* Eco Score Badge */}
        <div className="flex-shrink-0 ml-4">
          <EcoScore score={product.ecoScore} size={100} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
