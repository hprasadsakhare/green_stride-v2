import React, { useState } from 'react';
import { Languages } from 'lucide-react';

export function Timetable() {
  const [language, setLanguage] = useState<'english' | 'marathi'>('english');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Metro Timetable</h1>
        <button
          onClick={() => setLanguage(lang => lang === 'english' ? 'marathi' : 'english')}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Languages className="w-5 h-5" />
          <span>{language === 'english' ? 'मराठी' : 'English'}</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://punemetrorail.org/assets/images/Time-Table-new-1.jpg"
          alt={`Pune Metro Timetable - ${language === 'english' ? 'English' : 'Marathi'}`}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}