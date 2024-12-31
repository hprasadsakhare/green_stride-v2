import { useState, useEffect, useCallback } from 'react';
import type { RewardsCalculation } from '../utils/rewardsCalculator';

const STORAGE_KEY = 'accumulatedRewards';

const initialRewards: RewardsCalculation = {
  metroTokens: 0,
  co2Saved: 0,
  nftsEarned: 0
};

export function useAccumulatedRewards() {
  const [rewards, setRewards] = useState<RewardsCalculation>(initialRewards);

  useEffect(() => {
    const savedRewards = localStorage.getItem(STORAGE_KEY);
    if (savedRewards) {
      try {
        const parsed = JSON.parse(savedRewards);
        setRewards({
          metroTokens: Number(parsed.metroTokens) || 0,
          co2Saved: Number(parsed.co2Saved) || 0,
          nftsEarned: Number(parsed.nftsEarned) || 0
        });
      } catch (error) {
        console.error('Failed to parse saved rewards:', error);
        setRewards(initialRewards);
      }
    }
  }, []);

  const addRewards = useCallback((newRewards: RewardsCalculation) => {
    setRewards(prev => {
      const updated = {
        metroTokens: Math.floor(prev.metroTokens + newRewards.metroTokens),
        co2Saved: Math.floor(prev.co2Saved + newRewards.co2Saved),
        nftsEarned: Math.floor(prev.nftsEarned + newRewards.nftsEarned)
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const resetRewards = useCallback(() => {
    setRewards(initialRewards);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialRewards));
  }, []);

  return { rewards, addRewards, resetRewards };
}