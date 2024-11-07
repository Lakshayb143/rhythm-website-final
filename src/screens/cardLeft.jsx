import pin from "../assets/images/pin.png";
import clock from "../assets/images/clock.png";


const CardLeft = () => {
    return (
        <>
        <div
            className=" h-64 rounded-tl-2xl rounded-bl-2xl border-r-4 w-[700px] bg-customGray hover:bg-website-gradient relative flex flex-col  items-center">
            <h1 className="text-4xl text-center font-bold mt-10">
                INAUGURATION
            </h1>
            <div className="flex absolute bottom-24 ">
                <img src={pin} width={18} height={15} alt="" className=" h-6 w-6"/>
                <h3 className=" ml-2 text-xl  ">DCRUST AUDITORIUM</h3>
            </div>
            <div className="flex absolute bottom-10 ">
                <img src={clock} width={20} height={15} alt="" className=" h-6 w-6"/>
                <h3 className="ml-2 text-xl">12:10 PM TO 12:40 PM</h3>
            </div>
        </div>
        <div
            className=" h-64 rounded-tl-2xl rounded-bl-2xl border-r-4 w-[700px] mt-[700px] bg-customGray hover:bg-website-gradient relative flex flex-col  items-center">
            <h1 className="text-4xl text-center font-bold mt-10">
                INAUGURATION
            </h1>
            <div className="flex absolute bottom-24 ">
                <img src={pin} width={18} height={15} alt="" className=" h-6 w-6"/>
                <h3 className=" ml-2 text-xl">DCRUST AUDITORIUM</h3>
            </div>
            <div className="flex absolute bottom-10 ">
                <img src={clock} width={20} height={15} alt="" className=" h-6 w-6"/>
                <h3 className="ml-2 text-xl">12:10 PM TO 12:40 PM</h3>
            </div>

        </div>
</>
)
}

export default CardLeft;
