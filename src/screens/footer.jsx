import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
const Footer = () => {
    return (
        <div className="2xl:h-96 bg-background-color flex justify-around items-center max-[320px]:flex-col flex-col 2xl:flex 2xl:flex-row">
            {/*left container*/}
            <div className=" 2xl:h-80 w-[600px] flex-row items-center justify-center text-center text-white ">
                {/*Social handles*/}
                <div className=" 2xl:h-20 w-full mt-20 flex 2xl:justify-around max-[320px]:h-10 max-[320px]:gap-8 max-[320px]:justify-center justify-center h-14 gap-8 ">
                    <img src={facebook}/>
                    <img src={instagram}/>
                    <img src={twitter}/>

                </div>

                {/*copyright*/}

                <div className=" h-20 w-full justify-center items-center">
                    <h3 className="font-bold 2xl:text-xl relative 2xl:top-1/2 max-[320px]:text-[16px] top-5">@COPYRIGHT DCRUST</h3>
                </div>
            </div>

            {/*right container*/}
            <div className=" 2xl:h-80 w-[600px]">
                {/*Developers*/}
                <div className=" 2xl:h-32 w-full mt-20 h-40">
                    <div className="flex gap-2 justify-center items-center ml-8">
                        <h3 className="font-bold 2xl:text-xl text-white text-center max-[320px]:text-[12px] max-[320px]:-ml-4 text-base -ml-4 ">DESIGNER AND DEVELOPER : Alok
                            Pandit</h3>
                        <img src={linkedin} className=" 2xl:h-8 max-[320px]:h-4 h-6"/>
                    </div>
                    <div className="flex gap-2 justify-center items-center mt-4">
                        <h3 className="font-bold 2xl:text-xl text-white text-center max-[320px]:text-[12px] text-base">BACKEND DEVELOPER : Mannu Kumar </h3>
                        <img src={linkedin} className="h-8 max-[320px]:h-4"/>
                    </div>
                    <div className="flex gap-2 justify-center items-center mt-4">
                        <h3 className="font-bold 2xl:text-xl text-white text-center ml-2 max-[320px]:text-[12px] text-base">BACKEND DEVELOPER : Lakshay Bhatia </h3>
                        <img src={linkedin} className="h-8 max-[320px]:h-4"/>
                    </div>

                </div>
                <div className="flex  items-center justify-center mt-6  ">
                    <button
                        className="border-2 border-button-outline font-bold 2xl:h-16 rounded-xl text-white w-44 hover:border-0 hover:bg-website-gradient hover:cursor-custom 2xl:text-xl max-[320px]:h-8 max-[320px]:w-28 max-[320px]:text-[10px] h-12 text-base mb-10"> CONTACT
                        US
                    </button>

                </div>
                {/*contact us*/}
            </div>
        </div>
    )
}

export default Footer;
