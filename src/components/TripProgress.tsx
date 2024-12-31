import React from 'react';
import { Train } from 'lucide-react';

interface TripProgressProps {
  completedPercentage: number;
  timeRemaining: number;
  currentStation: number;
  totalStations: number;
}

export function TripProgress({ completedPercentage, timeRemaining, currentStation, totalStations }: TripProgressProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Trip Progress</h3>
        <Train className="w-6 h-6 text-blue-600" />
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${completedPercentage}%` }}
        />
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>Station {currentStation} of {totalStations}</span>
        <span>{Math.ceil(timeRemaining / 1000)}s remaining</span>
      </div>
    </div>
  );
}