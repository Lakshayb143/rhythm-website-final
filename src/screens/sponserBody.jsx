import sponser1 from '../assets/images/sponser1.png';
import sponser2 from '../assets/images/sponor2.png';
import sponser3 from '../assets/images/sponsor3.png';
import sponser4 from '../assets/images/sponsor4.png';



const SponsersBody = () => {
    return (<div className="relative 2xl:h-[700px] h-[1000px] max-[320px]:h-[900px] bg-background-color w-screen flex items-center justify-center border-b-2">
        {/*SPONSORS IMAGE*/}
        <div className="absolute left-0 2xl:top-40 h-60 max-[768px]:h-16 2xl:mt-0 w-screen 2xl:flex 2xl:flex-row flex 2xl:justify-around max-[320px]:top-2 max-[320px]:flex-col max-[320px]:items-center max-[320px]:gap-5 flex-col justify-center -mt-36 items-center gap-4">
            <img src={sponser1} className="rounded-2xl border max-[320px]:h-44 max-[320px]:w-44 h-48 w-48 2xl:h-80 2xl:w-80"/>
            <img src={sponser2} className="rounded-2xl border max-[320px]:h-44 max-[320px]:w-44 h-48 w-48 2xl:h-80 2xl:w-80"/>

            <img src={sponser3} className="rounded-2xl border max-[320px]:h-44 max-[320px]:w-44 h-48 w-48 2xl:h-80 2xl:w-80"/>
            <img src={sponser4} className="rounded-2xl border max-[320px]:h-44 max-[320px]:w-44 h-48 w-48 2xl:h-80 2xl:w-80"/>

        </div>

        {/*Apply for Sponsor*/}
        <div className=" absolute top-[480px]  h-20 w-screen  text-white items-center flex max-[320px]:bottom-0">
            <h1 className="absolute 2xl:left-20 2xl:text-3xl font-bold max-[320px]:text-[16px] max-[320px]:-bottom-72 max-[320px]:left-10 -bottom-80 text-xl left-10 2xl:bottom-4"> Want to be a sponsor?</h1>
            <button className="absolute 2xl:left-[400px] shadow-2xl shadow-violet-950 border border-button-outline font-bold 2xl:h-16 rounded-full w-44 hover:border-0 hover:bg-website-gradient hover:cursor-custom 2xl:text-xl max-[320px]:-bottom-80
                 max-[320px]:left-10 max-[320px]:h-8 max-[320px]:w-20 max-[320px]:text-[10px] -bottom-[400px] left-10 h-14 text-base 2xl:bottom-0 " > Apply now</button>
        </div>
    </div>)
}

export default SponsersBody