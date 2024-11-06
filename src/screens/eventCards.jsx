import '../style/events.css'
import image from '../assets/images/slideshow3.jpeg'
const EventCards = ( ) => {
    return (
        <div className="event-card">
            <img src={image} alt="event-image"/>
            <h1>SKIT</h1>
            <h6>VENUE</h6>
            <button>
                Rules
            </button>
        </div>
    )
}

export default EventCards