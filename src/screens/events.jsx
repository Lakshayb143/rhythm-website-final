import Navbar from "./navbar.jsx";
import '../style/events.css'
import EventCards from "./eventCards.jsx";

const Events=()=>{
    return (
        <div className="events h-screen w-screen bg-background-color overflow-x-hidden">
        <Navbar/>
            {/*EVENT CARDS*/}
            <div className="event-container w-screen">
                 <h1 className="event-mainheading">ALL - EVENTS</h1>

            </div>

            {/*CARDS*/}

            <div className="event-cards-container">
                <EventCards/>
                <EventCards/>
                <EventCards/>
                <EventCards/>
                <EventCards/>
                <EventCards/>
                <EventCards/>
                <EventCards/>
            </div>
        </div>
    )
}

export default Events;