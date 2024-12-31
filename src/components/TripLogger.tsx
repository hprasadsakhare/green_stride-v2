import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { MapPin, Train } from 'lucide-react';
import { metroLines } from '../data/metroStations';
import { calculateTripMetrics } from '../utils/tripCalculator';
import { calculateRewards } from '../utils/rewardsCalculator';
import { useRewards } from '../context/RewardsContext';
import { useTripProgress } from '../hooks/useTripProgress';
import { StationSelector } from './StationSelector';
import { TripProgress } from './TripProgress';
import { EstimatedRewards } from './EstimatedRewards';
import { CurrentRewards } from './CurrentRewards';
import { TripCompletionCard } from './TripCompletionCard';
import type { TripDetails } from '../utils/rewardsCalculator';

export function TripLogger() {
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);
  const [showCompletionCard, setShowCompletionCard] = useState(false);
  const [tripStats, setTripStats] = useState({ co2Saved: 0, carCO2: 0 });
  
  const { addRewards } = useRewards();
  const progress = useTripProgress(tripDetails);

  const estimatedRewards = useMemo(() => {
    if (!startStation || !endStation) return null;
    
    const start = metroLines.flatMap(line => line.stations).find(s => s.id === startStation);
    const end = metroLines.flatMap(line => line.stations).find(s => s.id === endStation);
    
    if (!start || !end) return null;

    const metrics = calculateTripMetrics(start, end);
    return calculateRewards({
      startStation: start,
      endStation: end,
      ...metrics
    });
  }, [startStation, endStation]);

  const currentRewards = useMemo(() => {
    if (!tripDetails) return null;
    return calculateRewards(tripDetails);
  }, [tripDetails]);

  const handleTripComplete = useCallback(() => {
    if (currentRewards && tripDetails) {
      // Calculate car CO2 emissions (120g/km is average car emission)
      const carCO2 = (tripDetails.distance * 120) / 1000; // Convert to kg
      
      setTripStats({
        co2Saved: currentRewards.co2Saved,
        carCO2
      });
      
      addRewards(currentRewards);
      setShowCompletionCard(true);
    }
  }, [currentRewards, tripDetails, addRewards]);

  const handleCompletionClose = () => {
    setShowCompletionCard(false);
    setTripDetails(null);
    setStartStation('');
    setEndStation('');
  };

  useEffect(() => {
    if (progress.completedPercentage === 100) {
      handleTripComplete();
    }
  }, [progress.completedPercentage, handleTripComplete]);

  const handleStartTrip = useCallback(() => {
    if (!startStation || !endStation) {
      alert('Please select both stations');
      return;
    }

    const start = metroLines.flatMap(line => line.stations).find(s => s.id === startStation);
    const end = metroLines.flatMap(line => line.stations).find(s => s.id === endStation);

    if (!start || !end) {
      alert('Invalid station selection');
      return;
    }

    const metrics = calculateTripMetrics(start, end);
    setTripDetails({
      startStation: start,
      endStation: end,
      ...metrics
    });
  }, [startStation, endStation]);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Log Your Trip</h2>

        <div className="space-y-4 mb-6">
          <StationSelector
            icon={<MapPin className="w-6 h-6 text-green-600" />}
            label="Start Station"
            value={startStation}
            onChange={setStartStation}
            disabled={progress.isInProgress}
          />

          <StationSelector
            icon={<Train className="w-6 h-6 text-green-600" />}
            label="End Station"
            value={endStation}
            onChange={setEndStation}
            disabled={progress.isInProgress}
          />
        </div>

        {!progress.isInProgress && estimatedRewards && (
          <EstimatedRewards rewards={estimatedRewards} />
        )}

        {progress.isInProgress && tripDetails && currentRewards && (
          <>
            <TripProgress
              completedPercentage={progress.completedPercentage}
              timeRemaining={progress.timeRemaining}
              currentStation={progress.currentStation}
              totalStations={tripDetails.stationsCount}
            />
            <CurrentRewards
              rewards={currentRewards}
              progress={progress.completedPercentage}
            />
          </>
        )}

        <button
          onClick={handleStartTrip}
          disabled={progress.isInProgress || !startStation || !endStation}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 rounded-lg transition-colors mt-4"
        >
          {progress.isInProgress ? 'Trip in Progress...' : 'Start Trip'}
        </button>
      </div>

      {showCompletionCard && (
        <TripCompletionCard
          co2Saved={tripStats.co2Saved}
          carCO2={tripStats.carCO2}
          onClose={handleCompletionClose}
        />
      )}
    </>
  );
}