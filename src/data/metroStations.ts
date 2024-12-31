export interface MetroStation {
  id: string;
  name: string;
  line: 'purple' | 'aqua';
  order: number;
}

export interface MetroLine {
  id: 'purple' | 'aqua';
  name: string;
  color: string;
  stations: MetroStation[];
}

export const STATION_DISTANCE = 1.5; // km
export const STATION_TIME = 5; // minutes
export const CO2_PER_KM = 15; // CO2 saved in kg per km
export const TOKENS_PER_KM = 10; // Tokens earned per km

export const metroLines: MetroLine[] = [
  {
    id: 'purple',
    name: 'Purple Line',
    color: '#800080',
    stations: [
      { id: 'pcmc', name: 'PCMC', line: 'purple', order: 1 },
      { id: 'sant-tukaram-nagar', name: 'Sant Tukaram Nagar', line: 'purple', order: 2 },
      { id: 'kasarwadi', name: 'Kasarwadi', line: 'purple', order: 3 },
      { id: 'phugewadi', name: 'Phugewadi', line: 'purple', order: 4 },
      { id: 'dapodi', name: 'Dapodi', line: 'purple', order: 5 },
      { id: 'bopodi', name: 'Bopodi', line: 'purple', order: 6 },
      { id: 'khadki', name: 'Khadki', line: 'purple', order: 7 },
      { id: 'range-hills', name: 'Range Hills', line: 'purple', order: 8 },
      { id: 'shivaji-nagar', name: 'Shivaji Nagar', line: 'purple', order: 9 },
      { id: 'civil-court-purple', name: 'Civil Court', line: 'purple', order: 10 },
      { id: 'budhwar-peth', name: 'Budhwar Peth', line: 'purple', order: 11 },
      { id: 'mandai', name: 'Mandai', line: 'purple', order: 12 },
      { id: 'swargate', name: 'Swargate', line: 'purple', order: 13 }
    ]
  },
  {
    id: 'aqua',
    name: 'Aqua Line',
    color: '#00FFFF',
    stations: [
      { id: 'vanaz', name: 'Vanaz', line: 'aqua', order: 1 },
      { id: 'anand-nagar', name: 'Anand Nagar', line: 'aqua', order: 2 },
      { id: 'ideal-colony', name: 'Ideal Colony', line: 'aqua', order: 3 },
      { id: 'nal-stop', name: 'Nal Stop', line: 'aqua', order: 4 },
      { id: 'garware-college', name: 'Garware College', line: 'aqua', order: 5 },
      { id: 'deccan-gymkhana', name: 'Deccan Gymkhana', line: 'aqua', order: 6 },
      { id: 'sambhaji-park', name: 'Sambhaji Park', line: 'aqua', order: 7 },
      { id: 'civil-court-aqua', name: 'Civil Court', line: 'aqua', order: 8 },
      { id: 'pune-station', name: 'Pune Station', line: 'aqua', order: 9 },
      { id: 'ruby-hall', name: 'Ruby Hall Clinic', line: 'aqua', order: 10 },
      { id: 'bund-garden', name: 'Bund Garden', line: 'aqua', order: 11 },
      { id: 'yerawada', name: 'Yerawada', line: 'aqua', order: 12 },
      { id: 'kalyani-nagar', name: 'Kalyani Nagar', line: 'aqua', order: 13 },
      { id: 'ramwadi', name: 'Ramwadi', line: 'aqua', order: 14 }
    ]
  }
];