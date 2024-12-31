import { MetroStation, STATION_DISTANCE, STATION_TIME } from '../data/metroStations';

interface TripMetrics {
  distance: number;
  duration: number;
  stationsCount: number;
}

export function calculateTripMetrics(startStation: MetroStation, endStation: MetroStation): TripMetrics {
  if (startStation.line === endStation.line) {
    // Same line calculation
    const stationsDifference = Math.abs(endStation.order - startStation.order);
    return {
      distance: stationsDifference * STATION_DISTANCE,
      duration: stationsDifference * STATION_TIME,
      stationsCount: stationsDifference + 1 // Include both start and end stations
    };
  } else {
    // Different lines with interchange at Civil Court
    const civilCourtOrder = {
      purple: 10, // Civil Court order in Purple line
      aqua: 8     // Civil Court order in Aqua line
    };

    const firstLegStations = Math.abs(civilCourtOrder[startStation.line] - startStation.order);
    const secondLegStations = Math.abs(civilCourtOrder[endStation.line] - endStation.order);
    const totalStations = firstLegStations + secondLegStations;

    return {
      distance: totalStations * STATION_DISTANCE,
      duration: (totalStations * STATION_TIME) + 5, // Adding 5 minutes for interchange
      stationsCount: totalStations + 1 // Include all stations including interchange
    };
  }
}