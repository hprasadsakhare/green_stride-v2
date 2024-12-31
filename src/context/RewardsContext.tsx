import React, { createContext, useContext } from 'react';
import { useAccumulatedRewards } from '../hooks/useAccumulatedRewards';

interface RewardsContextType {
  rewards: {
    metroTokens: number;
    co2Saved: number;
    nftsEarned: number;
  };
  addRewards: (rewards: {
    metroTokens: number;
    co2Saved: number;
    nftsEarned: number;
  }) => void;
  resetRewards: () => void;
}

const RewardsContext = createContext<RewardsContextType | undefined>(undefined);

export function RewardsProvider({ children }: { children: React.ReactNode }) {
  const { rewards, addRewards, resetRewards } = useAccumulatedRewards();

  return (
    <RewardsContext.Provider value={{ rewards, addRewards, resetRewards }}>
      {children}
    </RewardsContext.Provider>
  );
}

export function useRewards() {
  const context = useContext(RewardsContext);
  if (!context) {
    throw new Error('useRewards must be used within a RewardsProvider');
  }
  return context;
}