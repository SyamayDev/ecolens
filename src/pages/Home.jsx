import { useState, useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import Earth3D from "../components/Earth3D";

function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef();

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const maxScroll = scrollHeight - clientHeight;
    const progress = Math.min(scrollTop / (maxScroll * 0.5), 1);
    setScrollProgress(progress);
  };

  const opacity = 1 - scrollProgress;

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="relative w-screen h-screen overflow-y-auto text-white"
      style={{
        background:
          "linear-gradient(135deg, #05130b 0%, #0d2818 50%, #051a0f 100%)",
      }}
    >
      {/* Animated gradient overlays */}
      <div className="fixed inset-0 z-0 opacity-60">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* The 3D canvas is fixed to the background */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={null}>
          <Earth3D scrollProgress={scrollProgress} />
        </Suspense>
      </div>

      {/* This container makes the page scrollable */}
      <div className="h-[250vh]">
        {/* UI Content, positioned in the first viewport height */}
        <div
          className="sticky top-0 h-screen flex flex-col items-center justify-center text-center"
          style={{ opacity }}
        >
          {/* Modern badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 shadow-lg backdrop-blur-xl mb-6 hover:border-green-500/50 transition-all duration-300">
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse shadow-lg"></div>
            <span className="text-sm font-semibold tracking-widest text-green-300 uppercase">
              Lihat Dampak Sebelum Membeli
            </span>
          </div>

          {/* Main heading with gradient */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-black drop-shadow-2xl leading-tight">
              <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                EcoLens
              </span>
            </h1>
            <div className="h-1.5 w-40 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg"></div>
          </div>

          {/* Subtitle */}
          <p className="mt-6 text-xl md:text-2xl font-light text-green-100/80 drop-shadow-lg max-w-2xl">
            Jelajahi dampak lingkungan produk pilihan Anda sebelum membeli
          </p>
          
          {/* Call to Action Button */}
          <Link
            to="/scan"
            className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Scan Produk Sekarang
          </Link>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 flex flex-col items-center gap-3 animate-bounce">
            <p className="text-sm text-green-300/70 tracking-widest">
              SCROLL
            </p>
            <svg
              className="w-5 h-5 text-green-400 drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </div>

        {/* Secondary content section */}
        <div className="h-screen flex items-center justify-center px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              Membuat Pilihan Cerdas
            </h2>
            <p className="text-lg text-green-100/70 leading-relaxed">
              Dengan teknologi AI dan big data, EcoLens membantu Anda memahami
              jejak karbon dan dampak lingkungan dari setiap produk. Buat
              keputusan pembelian yang lebih sadar dan berkelanjutan untuk masa
              depan yang lebih hijau.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
