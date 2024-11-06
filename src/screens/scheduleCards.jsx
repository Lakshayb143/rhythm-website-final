import Dots from "./dots";
import CardLeft from "./cardLeft";
import CardRight from "./cardRight";
import  pin from '../assets/images/pin.png';
import  clock from '../assets/images/clock.png'
import '../style/scheduleCards.css'
const scheduleCards = () => {
    return (
        <>
            {/*small screens*/}
            <div className="schedule-small-screens">
                <div className="cards">
                    <div className="card">
                        <h1>
                            INAUGURATION
                        </h1>
                        <div className="card-content">
                            <div className="card-content-audi">
                                <img src={pin} width={18} height={15} alt="" className=" h-6 w-6"/>
                                <h3 className=" ml-2 text-xl  ">DCRUST AUDITORIUM</h3>
                            </div>
                            <div className="card-content-audi">
                                <img src={clock} width={20} height={15} alt="" className=" h-6 w-6"/>
                                <h3 className="ml-2 text-xl">12:10 PM TO 12:40 PM</h3>
                            </div>
                        </div>


                    </div>
                    <div className="card">
                        <h1>
                            MIME
                        </h1>
                        <div className="card-content">
                            <div className="card-content-audi">
                                <img src={pin} width={18} height={15} alt="" className=" h-6 w-6"/>
                                <h3 className=" ml-2 text-xl  ">DCRUST AUDITORIUM</h3>
                            </div>
                            <div className="card-content-audi">
                                <img src={clock} width={20} height={15} alt="" className=" h-6 w-6"/>
                                <h3 className="ml-2 text-xl">12:10 PM TO 12:40 PM</h3>
                            </div>
                        </div>


                    </div>
                    <div className="card">
                        <h1>
                            SKIT
                        </h1>
                        <div className="card-content">
                            <div className="card-content-audi">
                                <img src={pin} width={18} height={15} alt="" className=" h-6 w-6"/>
                                <h3 className=" ml-2 text-xl  ">DCRUST AUDITORIUM</h3>
                            </div>
                            <div className="card-content-audi">
                                <img src={clock} width={20} height={15} alt="" className=" h-6 w-6"/>
                                <h3 className="ml-2 text-xl">12:10 PM TO 12:40 PM</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h1>
                            DANCE
                        </h1>
                        <div className="card-content">
                            <div className="card-content-audi">
                                <img src={pin} width={18} height={15} alt="" className=" h-6 w-6"/>
                                <h3 className=" ml-2 text-xl  ">DCRUST AUDITORIUM</h3>
                            </div>
                            <div className="card-content-audi">
                                <img src={clock} width={20} height={15} alt="" className=" h-6 w-6"/>
                                <h3 className="ml-2 text-xl">12:10 PM TO 12:40 PM</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h1>
                            MUSIC
                        </h1>
                        <div className="card-content">
                            <div className="card-content-audi">
                                <img src={pin} width={18} height={15} alt="" className=" h-6 w-6"/>
                                <h3 className=" ml-2 text-xl  ">DCRUST AUDITORIUM</h3>
                            </div>
                            <div className="card-content-audi">
                                <img src={clock} width={20} height={15} alt="" className=" h-6 w-6"/>
                                <h3 className="ml-2 text-xl">12:10 PM TO 12:40 PM</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <button
                    className="schedule-button">
                    SEE MORE
                </button>

            </div>
</>)
}

export default scheduleCards;