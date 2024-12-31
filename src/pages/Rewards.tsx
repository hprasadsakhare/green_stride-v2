import React from 'react';
import { RewardsTracker } from '../components/RewardsTracker';
import { TripLogger } from '../components/TripLogger';

export function Rewards() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Earn Rewards for Eco-Friendly Travel
            </h1>
            <p className="text-gray-600">
              Connect your wallet, log your public transport trips, and earn tokens
              and unique NFTs while helping the environment.
            </p>
          </div>
          <TripLogger />
        </div>
        <RewardsTracker />
      </div>
    </main>
  );
}