import '../style/sponsorsBody.css';
import sponsor from '../assets/images/sponsor.jpeg';
import hwai from '../assets/images/hawai.png';
import location from '../assets/images/location.png';
import stown from '../assets/images/Stown.png';
import snackbar from '../assets/images/snackbar.jpeg';
import desiDhadkan from '../assets/images/desiDhadkan.jpeg';
import rangtaal from  '../assets/images/rangtaal.jpeg';
import youtube from '../assets/images/youtube.png';
const SponsorsDiv = () => {
    return (
        <div className="sponsor-body-container">
            <div className="sponsor-body-container-inner">
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

            <div className="sponsor-body-container-inner">
                <div className="sponsor-body-card">
                    <img src={stown} alt="rhythm_sponsor"/>
                    <h3>S TOWN, SONIPAT
                    </h3>
                    <div className="sponsor-location">
                        <img src={location} alt="location"/>
                        <a href="https://g.co/kgs/Pdj5c8n" target='_blank' rel="noopener noreferrer">
                            Click here for more info
                        </a>
                    </div>
                </div>

                <div className="sponsor-body-card">
                    <img src={snackbar} alt="rhythm_sponsor"/>
                    <h3>SNACKBAR XPRESS
                    </h3>
                    <div className="sponsor-location">
                        <img src={location} alt="location"/>
                        <a href="https://maps.app.goo.gl/bSMQQXMs4syjK8Ed6" target='_blank' rel="noopener noreferrer">
                            Click here for more info
                        </a>
                    </div>
                </div>

            </div>

            <div className="sponsor-body-container-inner">
                <div className="sponsor-body-card">
                    <img src={desiDhadkan} alt="rhythm_sponsor"/>
                    <h3>DESI DHADKAN
                    </h3>
                    <div className="sponsor-location">
                        <img src={youtube} alt="location"/>
                        <a href="https://www.youtube.com/desidhadkan" target='_blank' rel="noopener noreferrer">
                            Subscribe to the Channel
                        </a>
                    </div>
                </div>

                <div className="sponsor-body-card">
                    <img src={rangtaal} alt="rhythm_sponsor"/>
                    <h3>RANGTAAL RECORDS
                    </h3>
                    <div className="sponsor-location">
                        <img src={youtube} alt="location"/>
                        <a href="https://www.youtube.com/rangtaalrecords" target='_blank' rel="noopener noreferrer">
                            Subscribe to the Channel
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SponsorsDiv;