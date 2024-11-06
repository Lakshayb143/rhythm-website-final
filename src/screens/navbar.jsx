import { Link } from 'react-router-dom';
import  Menu from  '../assets/images/menu.png';
import Rhythm from '../assets/images/rhythm.png';
const Navbar = () => {
    return (
        <div className="navbar">
            {/* LOGO */}
            <div className="flex logo">
                <img src={Menu} alt="menu"/>
            </div>
            <div className="menu">
                <img src={Rhythm} alt="rhythm" className="rhythm-logo"/>
            </div>

            {/* Routes */}
            <div className="nav-links">
                <Link to="/" className="animate-underline text-white hover:text-white nav-link">HOME</Link>
                <Link to="/gallery" className="animate-underline text-white  hover:text-white nav-link">GALLERY</Link>
                <Link to="/rulebook" className="animate-underline text-white  hover:text-white nav-link">RULEBOOK</Link>
                <Link to="/events" className="animate-underline text-white  hover:text-white nav-link">EVENTS</Link>
                <Link to="/schedule" className="animate-underline text-white  hover:text-white nav-link">SCHEDULE</Link>
                <Link to="/brochure" className="animate-underline text-white  hover:text-white nav-link">BROCHURE</Link>
            </div>
        </div>
    )
}

export default Navbar;
