import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home";
import Rulebook from "../screens/rulebook";
import Guests from "../screens/guests.jsx";
import Gallery from "../screens/gallery.jsx";
import Invitation from "../screens/invitation.jsx";
import ScheduleCards from "../screens/schedulecards.jsx";
import Login from "../auth/login.jsx";
import Signup from "../auth/signup.jsx";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/rulebook" element={<Rulebook />} />
                <Route path="/guests" element={<Guests />} />
                <Route path="/schedule" element={<ScheduleCards />} />
                <Route path="/invitation" element={<Invitation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
