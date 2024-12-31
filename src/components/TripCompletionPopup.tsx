import React from 'react';
import { Leaf, Car, X } from 'lucide-react';

interface TripCompletionPopupProps {
  co2Saved: number;
  onClose: () => void;
}

export function TripCompletionPopup({ co2Saved, onClose }: TripCompletionPopupProps) {
  // Average car CO2 emissions per km is about 120g/km
  const carCO2 = (co2Saved / 15) * 120; // Convert back to km and multiply by car emissions

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
            <Leaf className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Great Job!
          </h2>
          <p className="text-gray-600">
            You've completed your journey and helped the environment!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-green-600" />
              <span className="font-medium">Your CO₂ Savings</span>
            </div>
            <span className="text-xl font-bold text-green-600">{co2Saved}kg</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Car className="w-6 h-6 text-red-600" />
              <span className="font-medium">Car Journey Emissions</span>
            </div>
            <span className="text-xl font-bold text-red-600">{carCO2.toFixed(1)}kg</span>
          </div>

          <p className="text-sm text-gray-600 text-center mt-4">
            By choosing public transport, you've prevented {carCO2.toFixed(1)}kg of CO₂ from entering the atmosphere!
          </p>
        </div>
      </div>
    </div>
  );
}