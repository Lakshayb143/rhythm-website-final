import Navbar from "./navbar.jsx";
import "../style/events.css";
import axios from "axios";
import { useEffect, useState } from "react";
import EventCards from "./eventCards.jsx";

const API_GET_EVENTS = "http://13.233.201.180:8081/getEvents";

const Events = () => {
  const [events, setEvents] = useState([]); // State to hold the fetched events
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null);

  // Fetch events data when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(API_GET_EVENTS);
        const data = await response.data; // Await the API request
        if (Array.isArray(data)) {
          setEvents(data);
          console.log(data);
          setLoading(false);
        } else {
          console.error("Data is not an array", data);
          setLoading(false);
        }
      } catch (error) {
        setError("Failed to fetch events"); // Set an error message if the fetch fails
        setLoading(false); // Stop loading if there's an error
        console.log(error);
      }
    };

    fetchEvents(); // Call the async function to fetch data
  }, []);

  return (
    <div className="events h-screen w-screen bg-background-color overflow-x-hidden">
      <Navbar />
      {/*EVENT CARDS*/}
      <div className="event-container w-screen">
        <h1 className="event-mainheading">ALL - EVENTS</h1>
      </div>

      {loading && <p>Loading events...</p>}
      {error && <p>{error}</p>}

      {/*CARDS*/}

      <div className="event-cards-container">
        {events.length > 0 ? (
          events.map((single_event) => (
            <EventCards
              key={single_event.id}
              eventName={single_event.eventName  }
              image={single_event.image}
              description={single_event.description}
              ruleBook={single_event.ruleBook}
              date={single_event.date}
              location={single_event.location}
              time={single_event.time}
              type={single_event.type}
            />
          ))
        ) : (
          <h1>No events available.🙂</h1>
        )}
      </div>
    </div>
  );
};

export default Events;
