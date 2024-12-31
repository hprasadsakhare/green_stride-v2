import React from 'react';
import type { RewardsCalculation } from '../utils/rewardsCalculator';

interface CurrentRewardsProps {
  rewards: RewardsCalculation;
  progress: number;
}

export function CurrentRewards({ rewards, progress }: CurrentRewardsProps) {
  return (
    <div className="mt-6 space-y-3">
      <p className="text-sm text-gray-600">Current Rewards:</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="font-bold text-blue-600">
            {Math.floor(rewards.metroTokens * (progress / 100))}
          </p>
          <p className="text-xs text-gray-500">Tokens</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-green-600">
            {Math.floor(rewards.co2Saved * (progress / 100))}kg
          </p>
          <p className="text-xs text-gray-500">CO₂ Saved</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-purple-600">
            {Math.floor(rewards.nftsEarned * (progress / 100))}
          </p>
          <p className="text-xs text-gray-500">NFTs</p>
        </div>
      </div>
    </div>
  );
}