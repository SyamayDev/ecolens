import { useState } from "react";
import ScanCamera from "../components/ScanCamera";
import { getProductByBarcode } from "../data/products";
import EcoScore from "../components/EcoScore";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { useEcoScore } from "../context/EcoScoreContext";

function Scan() {
  const [product, setProduct] = useState(null);
  const [isScanning, setIsScanning] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const { calculateAvgScore } = useEcoScore();

  const handleScan = (barcode) => {
    if (!barcode) return;
    const foundProduct = getProductByBarcode(barcode);
    if (foundProduct) {
      setProduct(foundProduct);
      setIsScanning(false);

      // Save to localStorage for dashboard
      const scans = JSON.parse(localStorage.getItem("scans")) || [];
      scans.unshift(foundProduct); // Add to the beginning
      localStorage.setItem("scans", JSON.stringify(scans.slice(0, 20))); // Keep last 20
      calculateAvgScore(); // Update the global average score
    } else {
      // Handle product not found
      setModalContent({
        title: "Not Found",
        content: `Product with barcode ${barcode} not in our database.`,
      });
    }
  };

  const handleRescan = () => {
    setProduct(null);
    setIsScanning(true);
  };

  const openIngredientModal = (ingredient) => {
    setModalContent({ title: ingredient.name, content: ingredient.impact });
  };

  if (!product) {
    return (
      <div
        className="relative min-h-screen text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #05130b 0%, #0d2818 50%, #051a0f 100%)",
        }}
      >
        <div className="fixed inset-0 opacity-40 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 rounded-full blur-3xl"></div>
          <div
            className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              Scan Produk
            </h1>
            <p className="text-center text-green-200/70 mb-8 text-lg">
              Arahkan kamera ke barcode produk
            </p>

            <div className="bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 shadow-2xl">
              <ScanCamera onScan={handleScan} />
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Kembali ke Home
              </Link>
            </div>
          </div>
        </div>

        {modalContent && (
          <Modal
            isOpen={!!modalContent}
            onClose={() => setModalContent(null)}
            title={modalContent.title}
          >
            <p className="text-gray-300">{modalContent.content}</p>
          </Modal>
        )}
      </div>
    );
  }

  const getStatusColor = (score) => {
    if (score > 70)
      return {
        bg: "bg-green-500/20",
        text: "text-green-400",
        border: "border-green-500/30",
      };
    if (score > 40)
      return {
        bg: "bg-yellow-500/20",
        text: "text-yellow-400",
        border: "border-yellow-500/30",
      };
    return {
      bg: "bg-red-500/20",
      text: "text-red-400",
      border: "border-red-500/30",
    };
  };

  const statusColor = getStatusColor(product.ecoScore);

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        background:
          "linear-gradient(135deg, #05130b 0%, #0d2818 50%, #051a0f 100%)",
      }}
    >
      <div className="fixed inset-0 opacity-40 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8">
        <Link
          to="/scan"
          className="inline-flex items-center gap-2 px-4 py-2 text-green-400 hover:text-green-300 transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Scan Lagi
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
          Hasil Scan
        </h1>

        <div
          className={`${statusColor.bg} ${statusColor.border} border backdrop-blur-xl rounded-2xl shadow-2xl p-8 mb-8`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex-shrink-0">
              <EcoScore score={product.ecoScore} size={180} />
            </div>

            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
              <p className="text-lg text-green-200/70 mb-4">{product.brand}</p>

              <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
                <p className="text-sm font-semibold text-green-300">
                  {product.ecoScore > 70
                    ? "✅ Ramah Lingkungan"
                    : product.ecoScore > 40
                      ? "⚠️ Cukup Ramah"
                      : "❌ Kurang Ramah"}
                </p>
              </div>

              {product.ingredients && product.ingredients.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3 text-green-300">
                    Bahan & Dampak Lingkungan:
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {product.ingredients.map((ing) => (
                      <button
                        key={ing.name}
                        onClick={() => openIngredientModal(ing)}
                        className="bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                      >
                        {ing.name} ⓘ
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {product.alternatives && product.alternatives.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              🌱 Alternatif Lebih Ramah Lingkungan
            </h2>
            <div className="space-y-4">
              {product.alternatives.map((alt) => (
                <ProductCard key={alt.barcode} product={alt} />
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={handleRescan}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 font-bold rounded-lg shadow-lg transition-all duration-300"
          >
            Scan Produk Lain
          </button>
        </div>
      </div>

      {modalContent && (
        <Modal
          isOpen={!!modalContent}
          onClose={() => setModalContent(null)}
          title={modalContent.title}
        >
          <p className="text-gray-300 leading-relaxed">
            {modalContent.content}
          </p>
        </Modal>
      )}
    </div>
  );
}

export default Scan;
