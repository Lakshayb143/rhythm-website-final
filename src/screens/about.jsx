import about from '../assets/images/about.jpg'
const About = () => {
    const width = window.innerWidth;
    return (
        <div className="relative 2xl:h-[830px] max-[768px]:h-[1300px] md:h-[1000px] min-[425px]:h-[1130px] lg:h-[1270px] flex-col justify-center  ">
            <h1 className="text-white 2xl:text-5xl font-black 2xl:mt-16 mt-14 md:text-2xl">ABOUT RHYTHM</h1>
            <p className="2xl:mt-10 2xl:text-xl text-white font-medium text-start 2xl:pr-10 2xl:pl-10 mt-5 pl-10 pr-10 text-sm lg:text-base"  style={{width}}>Welcome to &#34;Rhythm&#34; at
                Deenbandhu Chhotu Ram University Of Science and Technology - where beats meet
                bliss, and melodies merge with memories!Rhythm is not just an event; it&#39;s an experience, a crescendo of
                talent and creativity echoing through the corridors of Deenbandhu Chhotu Ram University Of Science and
                Technology. With a passion for music, dance, and artistic expression, we bring you a vibrant celebration
                of rhythm, harmony, and unbridled energy. At Rhythm, we embrace diversity and creativity, inviting
                students from all walks of life to come together and showcase their unique talents. It&#39;s a platform
                where budding musicians strum their guitars, graceful dancers move in harmony, and artists paint their
                dreams on the canvas of the stage. Join us in this harmonious extravaganza, where every beat resonates
                with the spirit of unity and artistic brilliance. Let the rhythm guide you, let the music inspire you,
                and let the dance floor be your canvas. Get ready to be enthralled, entertained, and enchanted at
                Rhythm, the heartbeat of creativity at DCRUST College. Come, let&#39;s create music, one beat at a time!</p>
            <div className="absolute 2xl:w-screen 2xl:h-[600px] 2xl:flex-row justify-around 2xl:mt-20 items-start h-[500px] flex-col ">
                <img src={about} className="2xl:h-96 2xl:w-[700px] h-64 w-screen p-5 md:h-96 lg:h-[600px]"/>
                <div className="flex-col justify-start relative">
                    <h4 className="absolute 2xl:-top-[420px] 2xl:right-40 text-white top-10 2xl:font-semibold 2xl:w-[1020px] 2xl:mt-10 2xl:text-2xl text-sm -mt-10 p-5 lg:mt-5 lg:text-base">
                        Are you ready to dive into a world of music, dance, fine arts, theatre, literary events, and
                        fashion
                        parades? If you thrive on creative expression and love being part of a vibrant community, then
                        Rhythm at Deenbandhu Chhotu Ram University of Science and Technology is the place for you!</h4>
                    <h6 className="absolute 2xl:-top-44 2xl:left-1/2 2xl:-ml-48 text-white font-bold 2xl:text-2xl top-44 left-5 text-xl md:-mt-10 lg:text-2xl lg:mt-1">
                        WHY JOIN RHYTHM?
                    </h6>

                    <ul className=" 2xl:-mt-80 2xl:left-1/2 2xl:-ml-8 absolute 2xl:w-[600px] flex flex-col text-white 2xl:top-56 list-none 2xl:gap-4 top-56 gap-2 md:justify-start md:top-44 lg:top-56">
                        <li className="2xl:-ml-40 2xl:text-xl text-sm -ml-5 md:text-base md:text-start md:ml-5 max-[320px]:text-[12px] max-[320px]:p-5 max-[320px]:-mt-5 max-[375px]:text-[12px]">
                            Unleash Your Talent: Showcase your skills in various arts! 🎤
                        </li>

                        <li className="2xl:-ml-40 2xl:text-xl  text-sm md:text-base md:text-start md:ml-5 max-[320px]:text-[12px] max-[320px]:p-2 max-[320px]:-mt-5 max-[375px]:text-[12px] max-[375px]:p-3">
                            Forge Lasting Friendships: Connect with fellow creatives! Tag a friend! 👯‍
                        </li>
                        <li className="2xl:-ml-40 2xl:text-xl  text-sm -ml-8 md:text-base md:text-start md:ml-5 max-[320px]:text-[12px] max-[320px]:p-8 max-[320px]:-mt-8 max-[375px]:text-[12px] max-[375px]:-mt-3">
                            Boost Your Confidence: Step out of your comfort zone! 🌱
                        </li>

                        <li className="2xl:-ml-40 2xl:text-xl  text-sm md:text-base md:text-start md:ml-5 max-[320px]:text-[12px] max-[320px]:p-1 max-[320px]:-mt-8 max-[375px]:text-[12px]">
                            Create Unforgettable Memories: Experience thrilling events! 🎊
                        </li>

                        <li className="2xl:-ml-40 2xl:text-xl text-sm ml-4 mr-4 md:text-base md:text-start md:ml-5 max-[320px]:text-[12px] max-[320px]:p-1 max-[320px]:-mt-2 max-[375px]:text-[12px]">
                            Contribute to a Vibrant Community: Share your ideas to enrich our community! 💬
                        </li>


                    </ul>
                </div>


            </div>

        </div>
    )
}

export default About;