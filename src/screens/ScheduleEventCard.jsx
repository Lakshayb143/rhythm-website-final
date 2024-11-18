import React from 'react';
import { FaMusic, FaTheaterMasks, FaBrush, FaStar } from 'react-icons/fa';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Music':
      return <FaMusic className="text-indigo-500" />;
    case 'Dance':
      return <FaStar className="text-pink-500" />;
    case 'Art':
      return <FaBrush className="text-purple-500" />;
    case 'Drama':
      return <FaTheaterMasks className="text-yellow-500" />;
    default:
      return <FaStar />;
  }
};

const ScheduleEventCard = ({ event }) => {
  return (
    <div className="relative bg-gradient-to-br from-white via-gray-100 to-gray-200 p-6 rounded-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transform transition-transform">
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
        {getCategoryIcon(event.category)}
      </div>
      <h2 className="text-xl font-bold text-indigo-700 mb-2">{event.name}</h2>
      <p className="text-gray-600 mb-1">🕒 Time: {event.time}</p>
      <p className="text-gray-500">📅 Date: {event.date}</p>
    </div>
  );
};

export default ScheduleEventCard;