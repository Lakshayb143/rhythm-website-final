import Dots from "./dots";
import CardLeft from "./cardLeft";
import CardRight from "./cardRight";
import  pin from '../assets/images/pin.png';
import  clock from '../assets/images/clock.png'
const scheduleCards = () => {
    const width = window.innerWidth - 1000;
    return (<div className="relative 2xl:h-[1600PX] max-[320px]:h-[1180px] bg-background-color w-screen flex items-center justify-center h-[1600px]">

        <div className="absolute left-0 top-0 h-[1500px] max-[320px]:left-36 " style={{width}}>
            <h1 className="font-black text-white absolute 2xl:w-96 2xl:left-[580px] right-0 2xl:text-3xl max-[320px]:text-[10px] max-[320px]:top-2 max-[320px]:w-28 max-[320px]:-mt-3 max-[320px]:right-0 left-5   text-base w-40 top-1">23 NOVEMBER 2024</h1>
            <div className="absolute 2xl:left-28 2xl:top-96 top-96 max-[320px]:top-72 max-[320px]:left-2 max-[320px]:-ml-36 left-0 mt-[30px]">
                <h3 className="text-white absolute top-1/2 right-8 font-black text-xl max-[320px]:hidden hidden">11:00 AM TO 12:10 PM</h3>
                <div className="absolute text-white 2xl:top-10 2xl:left-10  max-[320px]:top-2 max-[320px]:left-5 top-2 left-4">
                    <h3 className="2xl:text-2xl font-bold absolute max-[320px]:top-0 max-[320px]:text-[12px] text-base top-4">SKIT
                    </h3>

                    <div className="flex 2xl:mt-20 mt-14">
                        <img src={pin} width={18} height={15} alt="" className="max-[320px]:h-4 max-[320px]:-ml-2 max-[320px]:w-4 w-4 h-4 2xl:w-6 2xl:h-6"/>
                        <h3 className="2xl:ml-2 2xl:text-xl text-sm max-[320px]:text-[10px] ml-1">DCRUST AUDITORIUM</h3>
                    </div>

                    <div className="flex mt-5 2xl:mt-10">
                        <img src={clock} width={20} height={15} alt="" className="max-[320px]:h-4 max-[320px]:-ml-2 max-[320px]:w-4 w-4 h-4 2xl:w-6 2xl:h-6"/>
                        <h3 className="ml-2 text-sm max-[320px]:text-[10px] 2xl:-mt-1 2xl:text-xl">11:00 AM TO 12:10 PM


                        </h3></div>

                </div>

                <CardLeft/>
            </div>
            <div className="absolute 2xl:left-28 top-2/3 2xl:mt-20 max-[320px]:top-[790px] max-[320px]:left-2 max-[320px]:-ml-36 mt-32 left-0">
                <h3 className="text-white absolute top-1/2 right-8 font-black text-xl max-[320px]:hidden hidden">12:40 PM TO 1:00 PM

                </h3>

                <div className="absolute text-white 2xl:left-10 2xl:top-14 max-[320px]:top-2 max-[320px]:left-5 top-5 left-4">
                    <h3 className="text-xl font-bold absolute max-[320px]:top-0 max-[320px]:text-[12px] 2xl:text-2xl">MIME
                    </h3>

                    <div className="flex mt-10 2xl:mt-14">
                        <img src={pin}width={18} height={15} alt="" className="max-[320px]:h-4 max-[320px]:-ml-2 max-[320px]:w-4 2xl:h-6 2xl:w-6 h-4 w-4"/>
                        <h3 className="ml-2 text-sm max-[320px]:text-[10px] 2xl:text-xl">DCRUST AUDITORIUM</h3>
                    </div>

                    <div className="flex mt-5 2xl:mt-10">
                        <img src={clock} width={20} height={15} alt="" className="max-[320px]:h-4 max-[320px]:-ml-2 max-[320px]:w-4 2xl:h-6 2xl:w-6 h-4 w-4"/>
                        <h3 className="ml-2 text-sm max-[320px]:text-[10px] 2xl:text-xl">
                            12:40 PM TO 1:00 PM

                        </h3></div>

                </div>
                <CardLeft/>
            </div>
            <h1 className="font-black text-white absolute 2xl:w-96 2xl:left-[580px] right-0 2xl:top-1/3 mt-52  2xl:text-3xl max-[320px]:top-[285px]  max-[320px]:text-[10px] max-[320px]:w-28  text-base top-[510px] w-40 left-6">23 NOVEMBER 2024</h1>

        </div>
        <div className="h-[1400px] max-[320px]:h-[1100px]  max-[320px]:w-0.5 absolute top-0 self-center bg-blue-400 w-1 ">
            {/*Dots*/}
            <Dots/>
            <div className="top-96 absolute max-[320px]:top-56">
                <Dots/>
            </div>

            <div className="top-[710px] absolute max-[320px]:top-[500px]">
                <Dots/>
            </div>

            <div className="bottom-[320px] absolute  max-[320px]:top-[800px]">
                <Dots/>
            </div>

        </div>
        <div className="h-[1500px] absolute right-0 w-1/3 top-0" style={{width}}>
            <h1 className="font-black text-white absolute left-2 2xl:w-96 2xl:-mt-1 top-96 2xl:text-3xl max-[320px]:top-52 max-[320px]:mt-3 max-[320px]:text-[10px] max-[320px]:-ml-[200px] text-base w-40 -ml-14 mt-2">23 NOVEMBER 2024</h1>
            <div className="absolute 2xl:left-28 top-10 max-[320px]:left-0 max-[320px]:top-8 max-[320px]:-ml-10 -left-16">
                <h3 className="text-white absolute top-1/2 left-8 font-black text-xl max-[320px]:text-xs max-[320px]:font-normal max-[320px]:left-0 max-[320px]:hidden hidden ">10:00AM-11:00AM</h3>

                <div className="absolute text-white 2xl:left-2 2xl:top-20 max-[320px]:top-4 max-[320px]:left-5 right-20 top-6 left-6">
                    <h3 className="2xl:text-2xl 2xl:-ml-96 2xl:-mt-10 2xl:font-bold font-bold  -ml-2 max-[320px]:text-[12px] text-base">INAUGURATION</h3>

                    <div className="flex 2xl:mt-8  2xl:w-96  2xl:ml-5 max-[320px]:mt-2 mt-4 w-44 -ml-2">
                        <img src={pin} width={18} height={15} alt="" className="max-[320px]:h-4 max-[320px]:-ml-2 max-[320px]:w-4 w-4 h-4 2xl:h-6 2xl:w-6"/>
                        <h3 className="ml-2 2xl:text-xl max-[320px]:text-[10px] text-sm  ">DCRUST AUDITORIUM</h3>
                    </div>

                    <div className="flex 2xl:mt-5 2xl:ml-5 max-[320px]:mt-2  2xl:w-96 mt-2 w-44 -ml-2">
                        <img src={clock} width={20} height={15} alt="" className="max-[320px]:h-4 max-[320px]:-ml-2 max-[320px]:w-4 w-4 h-4 mt-4 2xl:h-6 2xl:w-6"    />
                        <h3 className="ml-2 text-sm max-[320px]:text-[10px] mt-4  2xl:text-xl  ">10:00 AM TO 11:00 AM
                        </h3></div>


                </div>
                <CardRight/>
            </div>


            <div className="absolute 2xl:left-28 top-[550px] 2xl:mt-44 max-[320px]:top-96 max-[320px]:left-0 max-[320px]:-ml-10 left-0 -ml-16 mt-52">
                <h3 className="text-white absolute top-1/2 left-8 font-black text-xl max-[320px]:hidden hidden">12:10 PM TO 12:40 PM

                </h3>

                <div className="absolute text-white 2xl:right-10 2xl:top-16 max-[320px]:top-2 max-[320px]:left-5 left-4 top-5 ">
                    <h3 className="text-xl 2xl:text-2xl 2xl:left-5
                        font-bold absolute max-[320px]:text-[10px]">SPOOF
                    </h3>

                    <div className="flex mt-10 max-[320px]:mt-12 max-[320px]:ml-0 2xl:ml-5 2xl:mt-14">
                        <img src={pin} width={18} height={15} alt="" className="max-[320px]:h-4 max-[320px]:-ml-2 max-[320px]:w-4 2xl:h-6 2xl:w-6 h-4 w-4"/>
                        <h3 className="ml-2 text-sm 2xl:text-xl
                             max-[320px]:text-[10px] max-[320px]:w-28">DCRUST AUDITORIUM</h3>
                    </div>

                    <div className="flex mt-5 max-[320px]:ml-0 max-[320px]:mt-2 2xl:ml-5 2xl:mt-10">
                        <img src={clock}width={20} height={15} alt="" className="max-[320px]:h-4 max-[320px]:-ml-2 max-[320px]:w-4 2xl:h-6 2xl:w-6 h-4 w-4"/>
                        <h3 className="ml-2 text-sm max-[320px]:text-[10px] 2xl:text-xl">12:10 PM TO 12:40 PM


                        </h3></div>


                </div>
                <CardRight/>
            </div>

            <h1 className="font-black text-white 2xl:w-96 absolute left-2  bottom-0 mb-[390px] 2xl:text-3xl max-[320px]:top-[795px] max-[320px]:-left-36 max-[320px]:-ml-12 max-[320px]:text-[10px] w-40 text-base -ml-14">23 NOVEMBER
                2024</h1>

        </div>
        <button
            className=" max-[320px]:bottom-0 absolute 2xl:bottom-14 2xl:mt-10 left-1/2 -ml-16 rounded-xl text-white border-2 h-12 w-36 border-button-outline font-bold hover:bg-website-gradient hover:border-0 hover:cursor-custom bottom-28">
            SEE MORE
        </button>
    </div>)
}

export default scheduleCards;