import React from 'react';
import { Leaf, Car, ArrowRight } from 'lucide-react';

interface TripCompletionCardProps {
  co2Saved: number;
  carCO2: number;
  onClose: () => void;
}

export function TripCompletionCard({ co2Saved, carCO2, onClose }: TripCompletionCardProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full relative animate-slideIn">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
            <Leaf className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Trip Completed!
          </h2>
          <p className="text-gray-600">
            Here's your environmental impact for this trip
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Car className="w-6 h-6 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">If by Car</p>
                <p className="font-bold text-red-600">{carCO2.toFixed(1)} kg CO₂</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">By Metro</p>
                <p className="font-bold text-green-600">{co2Saved.toFixed(1)} kg CO₂</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-center text-sm text-green-800">
              You've prevented <span className="font-bold">{(carCO2 - co2Saved).toFixed(1)} kg</span> of CO₂ emissions by choosing the metro!
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}