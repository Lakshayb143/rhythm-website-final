import '../style/sponsorsBody.css';
import sponsor from '../assets/images/sponsor.jpeg';
import location from '../assets/images/location.png';

const SponsorsDiv = () => {
    return (
        <div className="sponsor-body-container">
            <div className="sponsor-body-card">
                <img src={sponsor} alt="rhythm_sponsor"/>
                <h3>NAV GRAMIN, MURTHAL
                </h3>
                <div className="sponsor-location">
                    <img src ={location} alt="location"/>
                    <a href="https://maps.app.goo.gl/icwZdnuQ4P1XrKs96">
                        Click here for more info
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SponsorsDiv;