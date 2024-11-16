import '../style/sponsorsBody.css';
import sponsor from '../assets/images/sponsor.jpeg';
import hwai from '../assets/images/HwaiAdda.png';
import location from '../assets/images/location.png';

const SponsorsDiv = () => {
    return (
        <div className="sponsor-body-container">

            <div className="sponsor-body-card">
                <img src={hwai} alt="rhythm_sponsor"/>
                <h3>HAWAI ADDA, MURTHAL
                </h3>
                <div className="sponsor-location">
                    <img src={location} alt="location"/>
                    <a href="https://maps.app.goo.gl/C21SxQBy4MWtzX8s7" target='_blank' rel="noopener noreferrer">
                        Click here for more info
                    </a>
                </div>


            </div>

            <div className="sponsor-body-card">
                <img src={sponsor} alt="rhythm_sponsor"/>
                <h3>NAV GRAMIN, MURTHAL
                </h3>
                <div className="sponsor-location">
                    <img src={location} alt="location"/>
                    <a href="https://maps.app.goo.gl/icwZdnuQ4P1XrKs96" target='_blank' rel="noopener noreferrer">
                        Click here for more info
                    </a>
                </div>


            </div>
        </div>
    )
}

export default SponsorsDiv;