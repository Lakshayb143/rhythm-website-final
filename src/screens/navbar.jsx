import { Link } from 'react-router-dom';
import Menu from '../assets/images/menu.png';
import Rhythm from '../assets/images/rhythm.png';
import close from '../assets/images/close.png'
import React, { Suspense } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const Brochure = React.lazy(() => import('../screens/brochure.jsx'));


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            {/* Logo */}
            <div className="flex logo">
                <img src={Menu} alt="menu" onClick={toggleMenu} />
            </div>
            <div className="menu">
                <img src={Rhythm} alt="rhythm" className="rhythm-logo" />
            </div>

            {/* Main Links */}
            <div className="nav-links">
                <Link to="/" className="animate-underline text-white hover:text-white nav-link">HOME</Link>
                <Link to="/gallery" className="animate-underline text-white hover:text-white nav-link">GALLERY</Link>
                <Link to="/rulebook" className="animate-underline text-white hover:text-white nav-link">RULEBOOK</Link>
                <Link to="/events" className="animate-underline text-white hover:text-white nav-link">EVENTS</Link>
                <Link to="/schedule" className="animate-underline text-white hover:text-white nav-link">SCHEDULE</Link>
                
                {/*
                <Link to="/brochure" className="animate-underline text-white hover:text-white nav-link">BROCHURE</Link>*/}
                <Suspense fallback={<div>Loading Brochure...</div>}>
                    <Link to="/brochure" className="animate-underline text-white hover:text-white nav-link">
                        BROCHURE
                    </Link>
                </Suspense>
                <Link to="/contact" className="animate-underline text-white hover:text-white nav-link">CONTACT US</Link>

            </div>

            {isOpen && (
                <div className="hamburger flex flex-col w-screen h-60 bg-black text-white p-4 justify-center z-10 absolute top-0 gap-2 ">
                    <img src={close} alt="close" className="h-5 w-5" onClick={toggleMenu} />
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-white"><h6>HOME</h6></Link>
                    <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-white"><h6>GALLERY</h6></Link>
                    <Link to="/rulebook" onClick={() => setIsOpen(false)} className="text-white"><h6>RULEBOOK</h6></Link>
                    <Link to="/events" onClick={() => setIsOpen(false)} className="text-white"><h6>EVENTS</h6></Link>
                    <Link to="/schedule" onClick={() => setIsOpen(false)} className="text-white"><h6>SCHEDULE</h6></Link>
                    <Link to="/brochure" onClick={() => setIsOpen(false)} className="text-white"><h6>BROCHURE</h6></Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white"><h6>CONTACT US</h6></Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
