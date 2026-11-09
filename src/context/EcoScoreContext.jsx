import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const EcoScoreContext = createContext();

export function useEcoScore() {
  return useContext(EcoScoreContext);
}

export function EcoScoreProvider({ children }) {
  const [avgScore, setAvgScore] = useState(50); // Default score

  const calculateAvgScore = useCallback(() => {
    const scans = JSON.parse(localStorage.getItem('scans')) || [];
    if (scans.length > 0) {
      const totalScore = scans.reduce((sum, p) => sum + p.ecoScore, 0);
      setAvgScore(totalScore / scans.length);
    } else {
      setAvgScore(50); // Reset to default if no scans
    }
  }, []);

  // Calculate initial score
  useEffect(() => {
    calculateAvgScore();
  }, [calculateAvgScore]);
  
  const value = {
    avgScore,
    calculateAvgScore,
  };

  return (
    <EcoScoreContext.Provider value={value}>
      {children}
    </EcoScoreContext.Provider>
  );
}
