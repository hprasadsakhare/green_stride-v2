import { MetroStation, TOKENS_PER_KM, CO2_PER_KM } from '../data/metroStations';

export interface TripDetails {
  startStation: MetroStation;
  endStation: MetroStation;
  distance: number;
  duration: number;
  stationsCount: number;
}

export interface RewardsCalculation {
  metroTokens: number;
  co2Saved: number;
  nftsEarned: number;
}

export function calculateRewards(trip: TripDetails): RewardsCalculation {
  if (!trip.startStation || !trip.endStation) {
    throw new Error('Invalid trip details');
  }

  const metroTokens = Math.floor(trip.distance * TOKENS_PER_KM);
  const co2Saved = Math.floor(trip.distance * CO2_PER_KM);
  const nftsEarned = trip.stationsCount; // 1 NFT per station traveled

  return {
    metroTokens,
    co2Saved,
    nftsEarned
  };
}