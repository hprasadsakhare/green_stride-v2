import React from 'react';
import type { RewardsCalculation } from '../utils/rewardsCalculator';

interface EstimatedRewardsProps {
  rewards: RewardsCalculation;
}

export function EstimatedRewards({ rewards }: EstimatedRewardsProps) {
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <p className="text-sm font-medium text-gray-700 mb-3">Estimated Rewards:</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="font-bold text-blue-600">{rewards.metroTokens}</p>
          <p className="text-xs text-gray-500">Tokens</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-green-600">{rewards.co2Saved}kg</p>
          <p className="text-xs text-gray-500">CO₂ Saved</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-purple-600">{rewards.nftsEarned}</p>
          <p className="text-xs text-gray-500">NFTs</p>
        </div>
      </div>
    </div>
  );
}