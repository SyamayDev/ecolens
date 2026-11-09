import React, { useState } from "react";
import { useZxing } from "react-zxing";

function ScanCamera({ onScan }) {
  const [result, setResult] = useState("");

  const { ref } = useZxing({
    onResult(res) {
      const scannedCode = res.getText();
      setResult(scannedCode);
      onScan(scannedCode);
    },
    // Optional: Specify formats to decode
    // formats: ['EAN_13', 'CODE_128'],
  });

  return (
    <div className="w-full">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl border border-green-500/30">
        <video ref={ref} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-3/4 h-3/4"
            style={{
              border: "3px solid rgba(76, 175, 80, 0.8)",
              boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)",
              borderRadius: "12px",
              animation: "pulse 2s infinite",
            }}
          ></div>
        </div>
      </div>
      {result && (
        <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-center">
          <p className="text-sm text-green-300">✓ Barcode Terdeteksi</p>
          <p className="text-xs text-green-200/70 mt-1">{result}</p>
        </div>
      )}
      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5), 0 0 20px rgba(76, 175, 80, 0.4); }
          50% { box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5), 0 0 40px rgba(76, 175, 80, 0.6); }
        }
      `}</style>
    </div>
  );
}

export default ScanCamera;
