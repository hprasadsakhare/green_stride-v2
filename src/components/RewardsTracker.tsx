import React, { useState, useEffect } from 'react';
import { Trophy, Train } from 'lucide-react';
import { claimRewards } from '../utils/rewards';
import { useRewards } from '../context/RewardsContext';

export function RewardsTracker() {
  const [isClaiming, setIsClaiming] = useState(false);
  const { rewards, resetRewards } = useRewards();
  const [displayRewards, setDisplayRewards] = useState({
    metroTokens: 0,
    co2Saved: 0,
    nftsEarned: 0
  });

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000;
    const startValues = { ...displayRewards };
    const targetValues = rewards;

    const animateValues = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setDisplayRewards({
        metroTokens: Math.floor(startValues.metroTokens + (targetValues.metroTokens - startValues.metroTokens) * progress),
        co2Saved: Math.floor(startValues.co2Saved + (targetValues.co2Saved - startValues.co2Saved) * progress),
        nftsEarned: Math.floor(startValues.nftsEarned + (targetValues.nftsEarned - startValues.nftsEarned) * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animateValues);
      }
    };

    animateValues();
  }, [rewards]);

  const handleClaimRewards = async () => {
    if (!window.ethereum?.selectedAddress) {
      alert('Please connect your wallet first');
      return;
    }

    setIsClaiming(true);
    try {
      const success = await claimRewards(window.ethereum.selectedAddress);
      if (success) {
        resetRewards();
        alert('Rewards claimed successfully!');
      } else {
        alert('Failed to claim rewards. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while claiming rewards');
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Rewards</h2>
        <Trophy className="w-8 h-8 text-green-600" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Train className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-medium">Metro Tokens</p>
              <p className="text-sm text-gray-600">Earned from rides</p>
            </div>
          </div>
          <span className="text-2xl font-bold text-blue-600">{displayRewards.metroTokens}</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">CO₂ Saved</p>
            <p className="text-sm text-gray-600">This month</p>
          </div>
          <span className="text-2xl font-bold text-green-600">{displayRewards.co2Saved}kg</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">NFTs Earned</p>
            <p className="text-sm text-gray-600">Unique badges</p>
          </div>
          <span className="text-2xl font-bold text-purple-600">{displayRewards.nftsEarned}</span>
        </div>
      </div>

      <button 
        onClick={handleClaimRewards}
        disabled={isClaiming}
        className="w-full mt-6 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 rounded-lg transition-colors"
      >
        {isClaiming ? 'Claiming...' : 'Claim Rewards'}
      </button>
    </div>
  );
}