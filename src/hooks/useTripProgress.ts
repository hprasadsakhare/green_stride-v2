import { useState, useEffect, useCallback } from 'react';
import { TripDetails } from '../utils/rewardsCalculator';
import { STATION_TIME } from '../data/metroStations';

export interface TripProgress {
  isInProgress: boolean;
  currentStation: number;
  timeRemaining: number;
  completedPercentage: number;
}

const INTERVAL_TIME = 1000; // 1 second

export function useTripProgress(tripDetails: TripDetails | null) {
  const [progress, setProgress] = useState<TripProgress>({
    isInProgress: false,
    currentStation: 0,
    timeRemaining: 0,
    completedPercentage: 0
  });

  const updateProgress = useCallback((startTime: number, totalTime: number) => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, totalTime - elapsed);
    const percentage = Math.min((elapsed / totalTime) * 100, 100);
    const stationsCompleted = Math.floor(elapsed / (STATION_TIME * 1000));

    return {
      isInProgress: remaining > 0,
      timeRemaining: remaining,
      currentStation: stationsCompleted,
      completedPercentage: percentage
    };
  }, []);

  useEffect(() => {
    if (!tripDetails) {
      setProgress({
        isInProgress: false,
        currentStation: 0,
        timeRemaining: 0,
        completedPercentage: 0
      });
      return;
    }

    const totalTime = tripDetails.duration * 1000;
    const startTime = Date.now();
    
    setProgress(updateProgress(startTime, totalTime));

    const interval = setInterval(() => {
      setProgress(prev => {
        const updated = updateProgress(startTime, totalTime);
        if (!updated.isInProgress) {
          clearInterval(interval);
        }
        return updated;
      });
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, [tripDetails, updateProgress]);

  return progress;
}