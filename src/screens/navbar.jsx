import { Link } from 'react-router-dom';
import  Menu from  '../assets/images/menu.png';
const Navbar = () => {
    return (
        <div className='flex justify-around h-20 w-screen items-center fixed z-10 bg-background-color'>

            {/* LOGO */}
            <div className="flex justify-center items-center gap-6 absolute left-2 2xl:left-16">
                <img src={Menu} alt="menu" height={24} width={24} className="2xl:hidden"/>
                <h1 className="text-base md:text-4xl text-white font-extrabold lg:text-3xl">
                    RHYTHM
                </h1>
            </div>

            {/* Routes */}
            <div className="hidden sm:hidden 2xl:flex lg:justify-center justify-around gap-14 text-white 2xl:text-xl lg:hidden">
                <Link to="/" className="animate-underline">HOME</Link>
                <Link to="/gallery" className="animate-underline">GALLERY</Link>
                <Link to="/rulebook" className="animate-underline">RULEBOOK</Link>
                <Link to="/guests" className="animate-underline">GUESTS</Link>
                <Link to="/schedule" className="animate-underline">SCHEDULE</Link>
                <Link to="/invitation" className="animate-underline">INVITATION</Link>
            </div>

            {/* Auth */}
            <div className="absolute flex gap-4 lg:flex justify-around items-center text-white right-4 2xl:right-10 lg:right-10">
                <button className="bg-transparent p-2 w-14 h-10 text-xs border rounded lg:bg-transparent font-semibold 2xl:w-24 2xl:h-12 2xl:text-base 2xl:font-black">
                    <Link to='/login'>LOGIN</Link>
                </button>
                <button className="bg-transparent p-2 w-20 h-10 text-xs border rounded bg-website-gradient lg:bg-transparent font-semibold 2xl:border-0 2xl:w-28 2xl:h-12 2xl:text-base 2xl:font-black">
                    REGISTER
                </button>
            </div>
        </div>
    )
}

export default Navbar;
