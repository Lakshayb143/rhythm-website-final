import Dots from "./dots";
import CardLeft from "./cardLeft";
import CardRight from "./cardRight";
import  pin from '../assets/images/pin.png';
import  clock from '../assets/images/clock.png'
import '../style/scheduleCards.css'
const scheduleCards = () => {
    const width = window.innerWidth - 1000;
    return (<div className="relative 2xl:h-[1600PX] bg-background-color w-screen flex items-center justify-center ">

        <div className="absolute left-0 top-0 h-[1500px] " style={{width}}>
            <h1 className="font-black text-white absolute 2xl:w-96 2xl:left-[580px] right-0 2xl:text-3xl media-queries   ">23 NOVEMBER
                2024</h1>
            <div className="absolute 2xl:left-28 2xl:top-96 top-96 ">
                <h3 className="text-white absolute top-1/2 right-8 font-black text-xl max-[320px]:hidden hidden">11:00
                    AM TO 12:10 PM</h3>
                <div className="absolute text-white 2xl:top-10 2xl:left-10 media-queries ">
                    <h3 className="2xl:text-2xl font-bold absolute  text-base top-4">SKIT
                    </h3>

                    <div className="flex 2xl:mt-20">
                        <img src={pin} width={18} height={15} alt="" className=" 2xl:w-6 2xl:h-6"/>
                        <h3 className="2xl:ml-2 2xl:text-xl ">DCRUST AUDITORIUM</h3>
                    </div>

                    <div className="flex mt-5 2xl:mt-10">
                        <img src={clock} width={20} height={15} alt="" className=" 2xl:w-6 2xl:h-6"/>
                        <h3 className=" 2xl:ml-2 2xl:text-xl">11:00 AM TO 12:10 PM


                        </h3></div>

                </div>

                <CardLeft/>
            </div>
            <div className="absolute 2xl:left-28 top-2/3 2xl:mt-20 ">
                <h3 className="text-white absolute top-1/2 right-8 font-black text-xl max-[320px]:hidden hidden">12:40
                    PM TO 1:00 PM

                </h3>

                <div className="absolute text-white 2xl:left-10 2xl:top-14 media-queries ">
                    <h3 className=" absolute 2xl:text-2xl">MIME
                    </h3>

                    <div className="flex  2xl:mt-14">
                        <img src={pin} width={18} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                        <h3 className="2xl:ml-2 2xl:text-xl">DCRUST AUDITORIUM</h3>
                    </div>

                    <div className="flex  2xl:mt-10">
                        <img src={clock} width={20} height={15} alt="" className=" 2xl:h-6 2xl:w-6 "/>
                        <h3 className="2xl:ml-2 2xl:text-xl">
                            12:40 PM TO 1:00 PM

                        </h3></div>

                </div>
                <CardLeft/>
            </div>
            <h1 className="font-black text-white absolute 2xl:w-96 2xl:left-[580px] right-0 2xl:top-1/3 mt-52  2xl:text-3xl media-queries ">23
                NOVEMBER 2024</h1>

        </div>
        <div className="h-[1400px] absolute top-0 self-center bg-blue-400 w-1 media-queries">
            {/*Dots*/}
            <Dots/>
            <div className="top-96 absolute ">
                <Dots/>
            </div>

            <div className="top-[710px] absolute ">
                <Dots/>
            </div>

            <div className="bottom-[320px] absolute ">
                <Dots/>
            </div>

        </div>
        <div className="h-[1500px] absolute right-0 w-1/3 top-0 media-queries" style={{width}}>
            <h1 className="font-black text-white absolute -left-10 2xl:w-96 2xl:-mt-1 top-96 2xl:text-3xl ">23 NOVEMBER
                2024</h1>
            <div className="absolute 2xl:left-28 top-10 ">
                <h3 className="text-white absolute top-1/2 left-8 font-black text-xl max-[320px]:text-xs max-[320px]:font-normal max-[320px]:left-0 max-[320px]:hidden hidden ">10:00AM-11:00AM</h3>

                <div className="absolute text-white 2xl:left-2 2xl:top-20 ">
                    <h3 className="2xl:text-2xl 2xl:-ml-44 2xl:-mt-10 2xl:font-bold">INAUGURATION</h3>

                    <div className="flex 2xl:mt-8  2xl:w-96  2xl:ml-5">
                        <img src={pin} width={18} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                        <h3 className=" ml-2 2xl:text-xl  ">DCRUST AUDITORIUM</h3>
                    </div>

                    <div className="flex 2xl:mt-5 2xl:ml-5   2xl:w-96 mt-2 w-44 -ml-2">
                        <img src={clock} width={20} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                        <h3 className="ml-2  2xl:text-xl  ">10:00 AM TO 11:00 AM
                        </h3></div>


                </div>
                <CardRight/>
            </div>


            <div className="absolute 2xl:left-28 top-[550px] 2xl:mt-44 ">
                <h3 className="text-white absolute top-1/2 left-8 font-black text-xl max-[320px]:hidden hidden">12:10 PM
                    TO 12:40 PM

                </h3>

                <div className="absolute text-white 2xl:right-10 2xl:top-16  left-4 top-5 ">
                    <h3 className="text-xl 2xl:text-2xl 2xl:left-5
                        font-bold absolute ">SPOOF
                    </h3>

                    <div className="flex mt-10  2xl:ml-5 2xl:mt-14">
                        <img src={pin} width={18} height={15} alt="" className=" 2xl:h-6 2xl:w-6 "/>
                        <h3 className="ml-2 text-sm 2xl:text-xl
                           ">DCRUST AUDITORIUM</h3>
                    </div>

                    <div className="flex mt-5 2xl:ml-5 2xl:mt-10">
                        <img src={clock} width={20} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                        <h3 className="ml-2 2xl:text-xl">12:10 PM TO 12:40 PM


                        </h3></div>


                </div>
                <CardRight/>
            </div>

            <h1 className="font-black text-white 2xl:w-96 absolute left-2  bottom-0 mb-[390px] 2xl:text-3xl ">23
                NOVEMBER
                2024</h1>

        </div>
        <button
            className=" media-queries absolute 2xl:bottom-14 2xl:mt-10 left-1/2 -ml-16 rounded-xl text-white border-2 h-12 w-36 border-button-outline font-bold hover:bg-website-gradient hover:border-0 hover:cursor-custom bottom-28">
            SEE MORE
        </button>

        {/*small screens*/}
        <div className="schedule-small-screens">
            <div className="cards">
                <div className="card">
                    <h1>
                        INAUGURATION
                    </h1>
                    <div className="card-content">
                        <div className="card-content-audi">
                            <img src={pin} width={18} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                            <h3 className=" ml-2 2xl:text-xl  ">DCRUST AUDITORIUM</h3>
                        </div>
                        <div className="card-content-audi">
                            <img src={clock} width={20} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                            <h3 className="ml-2 2xl:text-xl">12:10 PM TO 12:40 PM</h3>
                        </div>
                    </div>


                </div>
                <div className="card">
                    <h1>
                        MIME
                    </h1>
                    <div className="card-content">
                        <div className="card-content-audi">
                            <img src={pin} width={18} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                            <h3 className=" ml-2 2xl:text-xl  ">DCRUST AUDITORIUM</h3>
                        </div>
                        <div className="card-content-audi">
                            <img src={clock} width={20} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                            <h3 className="ml-2 2xl:text-xl">12:10 PM TO 12:40 PM</h3>
                        </div>
                    </div>


                </div>
                <div className="card">
                    <h1>
                        SKIT
                    </h1>
                    <div className="card-content">
                        <div className="card-content-audi">
                            <img src={pin} width={18} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                            <h3 className=" ml-2 2xl:text-xl  ">DCRUST AUDITORIUM</h3>
                        </div>
                        <div className="card-content-audi">
                            <img src={clock} width={20} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                            <h3 className="ml-2 2xl:text-xl">12:10 PM TO 12:40 PM</h3>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h1>
                        DANCE
                    </h1>
                    <div className="card-content">
                        <div className="card-content-audi">
                            <img src={pin} width={18} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                            <h3 className=" ml-2 2xl:text-xl  ">DCRUST AUDITORIUM</h3>
                        </div>
                        <div className="card-content-audi">
                            <img src={clock} width={20} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                            <h3 className="ml-2 2xl:text-xl">12:10 PM TO 12:40 PM</h3>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h1>
                        MUSIC
                    </h1>
                    <div className="card-content">
                        <div className="card-content-audi">
                            <img src={pin} width={18} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                            <h3 className=" ml-2 2xl:text-xl  ">DCRUST AUDITORIUM</h3>
                        </div>
                        <div className="card-content-audi">
                            <img src={clock} width={20} height={15} alt="" className=" 2xl:h-6 2xl:w-6"/>
                            <h3 className="ml-2 2xl:text-xl">12:10 PM TO 12:40 PM</h3>
                        </div>
                    </div>
                </div>

            </div>
            <button
                className="schedule-button">
                SEE MORE
            </button>

        </div>

    </div>)
}

export default scheduleCards;