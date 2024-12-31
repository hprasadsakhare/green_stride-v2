import React from 'react';
import { MetroStats } from '../components/MetroStats';

export function Maps() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Pune Metro Network</h1>
        <p className="text-gray-600 mb-8">
          The Pune Metro consists of two operational lines - the Purple Line and Aqua Line, 
          serving key areas across the city. With 28 operational stations out of 30 planned stations, 
          it provides efficient connectivity while reducing traffic congestion and environmental impact.
        </p>
        <MetroStats />
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://punemetrorail.org/img/route_map_english1.jpg"
          alt="Pune Metro Route Map"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}