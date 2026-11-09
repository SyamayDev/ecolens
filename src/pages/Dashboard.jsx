import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import ProductCard from "../components/ProductCard";
import { useEcoScore } from "../context/EcoScoreContext";

const StatCard = ({ title, value, description, icon, color }) => (
  <div
    className={`${color} border border-green-500/20 backdrop-blur-xl rounded-xl p-6 shadow-lg`}
  >
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-sm font-medium text-green-200/70">{title}</h3>
        <p className="mt-2 text-3xl font-bold text-white">{value}</p>
        {description && (
          <p className="mt-1 text-xs text-green-200/50">{description}</p>
        )}
      </div>
      {icon && <div className="text-2xl">{icon}</div>}
    </div>
  </div>
);

function Dashboard() {
  const [scans, setScans] = useState([]);
  const { avgScore, calculateAvgScore } = useEcoScore();

  useEffect(() => {
    const storedScans = JSON.parse(localStorage.getItem("scans")) || [];
    setScans(storedScans);
  }, []);

  const handleClearHistory = () => {
    localStorage.removeItem("scans");
    setScans([]);
    calculateAvgScore();
  };

  const totalScans = scans.length;

  const scoreCategories = {
    good: scans.filter((p) => p.ecoScore > 70).length,
    medium: scans.filter((p) => p.ecoScore > 40 && p.ecoScore <= 70).length,
    bad: scans.filter((p) => p.ecoScore <= 40).length,
  };

  const pieData = [
    { name: "Hijau", value: scoreCategories.good },
    { name: "Kuning", value: scoreCategories.medium },
    { name: "Merah", value: scoreCategories.bad },
  ];

  const COLORS = {
    hijau: "#4ade80",
    kuning: "#facc15",
    merah: "#f87171",
  };

  // Simulated plastic saved calculation
  const plasticSaved = totalScans * 0.25; // 250g per eco-friendly choice

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

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              Dashboard Eco Saya
            </h1>
            <p className="text-green-200/70 mt-2">
              Pantau dampak lingkungan Anda
            </p>
          </div>
          <Link
            to="/scan"
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Scan Produk
          </Link>
        </div>

        {totalScans > 0 ? (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard
                title="Total Scan"
                value={totalScans}
                icon="📊"
                color="bg-blue-500/10"
              />
              <StatCard
                title="Rata-rata Eco Score"
                value={avgScore.toFixed(1)}
                description="Semakin tinggi semakin baik"
                icon="🌍"
                color="bg-green-500/10"
              />
              <StatCard
                title="Produk Ramah"
                value={scoreCategories.good}
                description="Score > 70"
                icon="✅"
                color="bg-emerald-500/10"
              />
              <StatCard
                title="Plastik Terhindari"
                value={`${plasticSaved.toFixed(0)}g`}
                description="Perkiraan pengurangan"
                icon="♻️"
                color="bg-cyan-500/10"
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Pie Chart */}
              <div className="lg:col-span-1 bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-xl p-6 shadow-2xl">
                <h2 className="text-xl font-bold mb-4 text-green-300">
                  Breakdown Kategori
                </h2>
                <div style={{ height: "300px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={100}
                        paddingAngle={2}
                      >
                        <Cell fill={COLORS.hijau} />
                        <Cell fill={COLORS.kuning} />
                        <Cell fill={COLORS.merah} />
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1a1a1a",
                          border: "1px solid #4ade80",
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Score Distribution */}
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-xl p-6 shadow-2xl">
                <h2 className="text-xl font-bold mb-4 text-green-300">
                  Distribusi Score Produk
                </h2>
                <div style={{ height: "300px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        {
                          name: "Hijau\n(71-100)",
                          count: scoreCategories.good,
                          fill: COLORS.hijau,
                        },
                        {
                          name: "Kuning\n(41-70)",
                          count: scoreCategories.medium,
                          fill: COLORS.kuning,
                        },
                        {
                          name: "Merah\n(0-40)",
                          count: scoreCategories.bad,
                          fill: COLORS.merah,
                        },
                      ]}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.1)"
                      />
                      <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1a1a1a",
                          border: "1px solid #4ade80",
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                      />
                      <Bar
                        dataKey="count"
                        fill={COLORS.hijau}
                        radius={[8, 8, 0, 0]}
                      >
                        {[
                          scoreCategories.good,
                          scoreCategories.medium,
                          scoreCategories.bad,
                        ].map((val, idx) => (
                          <Cell
                            key={`cell-${idx}`}
                            fill={Object.values(COLORS)[idx]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent Scans */}
            <div className="bg-white/5 backdrop-blur-xl border border-green-500/20 rounded-xl p-6 shadow-2xl mb-8">
              <h2 className="text-xl font-bold mb-4 text-green-300">
                Scan Terakhir
              </h2>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-4 custom-scrollbar">
                {scans.slice(0, 10).map((scan, index) => (
                  <ProductCard key={index} product={scan} />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Link
                to="/scan"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                📱 Scan Produk Lagi
              </Link>
              <button
                onClick={handleClearHistory}
                className="px-8 py-3 bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 rounded-lg font-semibold transition-all duration-300"
              >
                🗑️ Hapus History
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white/5 border border-green-500/20 backdrop-blur-xl rounded-xl">
            <div className="text-6xl mb-4">🌱</div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              Belum Ada Scan
            </h2>
            <p className="mt-2 text-green-200/70 mb-6">
              Mulai pindai produk untuk melihat dampak lingkungan Anda
            </p>
            <Link
              to="/scan"
              className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
            >
              Mulai Scan Sekarang
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(76, 175, 80, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(76, 175, 80, 0.6);
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
