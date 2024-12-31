import React from 'react';
import { Train, MapPin, Building, Route } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatItem({ icon, label, value }: StatItemProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <div className="mb-2 text-green-600">{icon}</div>
      <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

export function MetroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatItem
        icon={<Route className="w-6 h-6" />}
        label="No. of Lines"
        value="2"
      />
      <StatItem
        icon={<MapPin className="w-6 h-6" />}
        label="Total Stations"
        value="30"
      />
      <StatItem
        icon={<Building className="w-6 h-6" />}
        label="Underground Stations"
        value="5"
      />
      <StatItem
        icon={<Train className="w-6 h-6" />}
        label="Network Length"
        value="33.1 km"
      />
    </div>
  );
}