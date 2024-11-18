import React from "react";
import { FaMusic, FaTheaterMasks, FaBrush, FaStar } from "react-icons/fa";

const getCategoryIcon = (category) => {
  switch (category) {
    case "Music":
      return <FaMusic className="text-indigo-500" />;
    case "Dance":
      return <FaStar className="text-pink-500" />;
    case "Art":
      return <FaBrush className="text-purple-500" />;
    case "Drama":
      return <FaTheaterMasks className="text-yellow-500" />;
    default:
      return <FaStar />;
  }
};

const ScheduleEventCard = ({ event }) => {
  return (
    <div className="relative bg-gradient-to-b from-white via-gray-100 to-gray-200 p-4 sm:p-6 rounded-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transform transition-transform">
      <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
        {getCategoryIcon(event.category)}
      </div>
      <h2 className="text-lg sm:text-xl font-bold text-indigo-700 mb-2">
        {event.name}
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-1">
        🕒 Time: {event.time}
      </p>
      <p className="text-gray-500 text-sm sm:text-base">
        📅 Date: {event.date}
      </p>
    </div>
  );
};

export default ScheduleEventCard;
