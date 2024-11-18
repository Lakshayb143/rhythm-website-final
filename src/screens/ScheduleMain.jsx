import React, { useState } from 'react';
import ScheduleEventCard from './ScheduleEventCard';
import { FaMapMarkerAlt } from 'react-icons/fa';
import "../style/scheduleMain.css"

const venues = [
  { id: '1', name: 'University Auditorium', icon: <FaMapMarkerAlt /> },
  { id: '2', name: 'Auditorium Ground Floor', icon: <FaMapMarkerAlt /> },
  { id: '3', name: 'Outside Auditorium', icon: <FaMapMarkerAlt /> },
  { id: '4', name: 'Old Canteen Outside JC Block', icon: <FaMapMarkerAlt /> },
];

const RhythmSchedule = ({ scheduleData }) => {
  const [selectedVenue, setSelectedVenue] = useState('1');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-700 to-pink-600 text-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-400 via-purple-600 to-indigo-800 opacity-20 animate-pulse"></div>
        <div className="container mx-auto text-center py-12">
          <h1 className="text-5xl font-extrabold uppercase tracking-wider text-white drop-shadow-md title">
            Rhythm 2024 Schedule
          </h1>
          <p className="text-lg mt-4 font-medium">
            Explore the vibrant events happening across our venues. Celebrate, connect, and enjoy!
          </p>
        </div>
      </div>

      {/* Venue Selector */}
      <div className="container mx-auto flex flex-wrap justify-center gap-6 mt-8 px-4">
        {venues.map((venue) => (
          <button
            key={venue.id}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all transform ${
              selectedVenue === venue.id
                ? 'bg-white text-indigo-800 shadow-xl scale-110'
                : 'bg-indigo-600 hover:bg-indigo-500 hover:scale-105'
            }`}
            onClick={() => setSelectedVenue(venue.id)}
          >
            {venue.icon}
            <span>{venue.name}</span>
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
        {scheduleData
          .filter((event) => event.venueId === selectedVenue)
          .map((event, index) => (
            <ScheduleEventCard key={index} event={event} />
          ))}
      </div>

      {/* Footer Decoration */}
      <div className="relative mt-16">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-700 to-transparent opacity-30"></div>
      </div>
    </div>
  );
};

export default RhythmSchedule;