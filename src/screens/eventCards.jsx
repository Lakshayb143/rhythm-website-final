import { useState } from "react";
//import "../style/events.css";
import "../style/eventCards.css";

const EventCards = ({
  id,
  eventName,
  image,
  description,
  ruleBook,
  date,
  location,
  time,
  type,
}) => {
  const [showRules, setShowRules] = useState(false);
  const ruleShow = () => {
    setShowRules(!showRules);
  };

  return (
    
    <div className={`event-card ${showRules ? "show-rules" : ""}`}>
      <img src={image} alt="event-image" loading="lazy" />
      <h4>{eventName}</h4>
      <p>{description}</p>
      <h6>{location}</h6>
      <button className="toggle-button" onClick={ruleShow}>
        {showRules ? "Hide Rules" : "Show Rules"}
      </button>
      {showRules && (
        <div className={`rules ${showRules ? "show" : ""}`}>
          <p>{ruleBook}</p>
        </div>
      )}
    </div>
  );
};

export default EventCards;
