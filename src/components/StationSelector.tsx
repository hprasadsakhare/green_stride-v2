import React from 'react';
import { metroLines } from '../data/metroStations';

interface StationSelectorProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function StationSelector({ icon, label, value, onChange, disabled }: StationSelectorProps) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          <option value="">Select station</option>
          {metroLines.map(line => (
            <optgroup key={line.id} label={line.name}>
              {line.stations.map(station => (
                <option key={station.id} value={station.id}>
                  {station.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  );
}