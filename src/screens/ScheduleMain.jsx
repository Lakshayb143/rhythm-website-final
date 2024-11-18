import React, { useState } from "react";
import ScheduleEventCard from "./ScheduleEventCard";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../style/scheduleMain.css";
import Navbar from "./navbar";

const venues = [
  { id: "1", name: "University Auditorium", icon: <FaMapMarkerAlt /> },
  { id: "2", name: "Auditorium Ground Floor", icon: <FaMapMarkerAlt /> },
  { id: "3", name: "Outside Auditorium", icon: <FaMapMarkerAlt /> },
  { id: "4", name: "Old Canteen Outside JC Block", icon: <FaMapMarkerAlt /> },
];

const RhythmSchedule = ({ scheduleData }) => {
  const [selectedVenue, setSelectedVenue] = useState("1");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative">
        <div className="mx-auto text-center py-8 sm:py-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-wider text-white drop-shadow-md title">
            Rhythm 2024 Schedule
          </h1>
          <p className="text-sm sm:text-lg mt-2 sm:mt-4 font-medium">
            Explore the vibrant events happening across our venues. Celebrate,
            connect, and enjoy!
          </p>
        </div>
      </div>

      {/* Venue Selector */}
      <div className="mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 px-4">
        {venues.map((venue) => (
          <button
            key={venue.id}
            className={`flex items-center justify-center w-80 space-x-2 px-4 py-2 sm:px-4 sm:py-3 rounded-3xl font-semibold transition-all transform ${
              selectedVenue === venue.id
                ? "bg-white text-indigo-800 shadow-xl scale-110"
                : "bg-indigo-600 hover:bg-indigo-500 hover:scale-105"
            }`}
            onClick={() => setSelectedVenue(venue.id)}
          >
            {venue.icon}
            <span className="text-sm sm:text-base">{venue.name}</span>
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 px-4">
        {scheduleData
          .filter((event) => event.venueId === selectedVenue)
          .map((event, index) => (
            <ScheduleEventCard key={index} event={event} />
          ))}
      </div>
    </div>
  );
};

export default RhythmSchedule;
