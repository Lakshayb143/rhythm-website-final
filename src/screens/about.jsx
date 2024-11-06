import about from '../assets/images/about.jpg';
import '../style/about.css';
const About = () => {
    const width = window.innerWidth;
    return (
        <div className="container-about">
            <h1 className="main-heading-about">ABOUT RHYTHM</h1>
            <p className="description-about" style={{width}}>
                Welcome to &#34;Rhythm&#34; at Deenbandhu Chhotu Ram University Of Science and Technology - where beats
                meet bliss, and melodies merge with memories! Rhythm is not just an event; it&#39;s an experience, a
                crescendo of talent and creativity echoing through the corridors of Deenbandhu Chhotu Ram University Of
                Science and Technology. With a passion for music, dance, and artistic expression, we bring you a vibrant
                celebration of rhythm, harmony, and unbridled energy. At Rhythm, we embrace diversity and creativity,
                inviting students from all walks of life to come together and showcase their unique talents. It&#39;s a
                platform where budding musicians strum their guitars, graceful dancers move in harmony, and artists
                paint their dreams on the canvas of the stage. Join us in this harmonious extravaganza, where every beat
                resonates with the spirit of unity and artistic brilliance. Let the rhythm guide you, let the music
                inspire you, and let the dance floor be your canvas. Get ready to be enthralled, entertained, and
                enchanted at Rhythm, the heartbeat of creativity at DCRUST College. Come, let&#39;s create music, one
                beat at a time!
            </p>

            <div className="image-container-about">
                <img src={about} className="image-about" alt="About Rhythm"/>
                <div className="message-container-about">
                    <h4 className="message-heading-about">
                        Are you ready to dive into a world of music, dance, fine arts, theatre, literary events, and
                        fashion parades? If you thrive on creative expression and love being part of a vibrant
                        community, then Rhythm at Deenbandhu Chhotu Ram University of Science and Technology is the
                        place for you!
                    </h4>
                    <h6 className="subtitle-about">
                        WHY JOIN RHYTHM?
                    </h6>
                    <ul className="list">
                        <li className="list-item">Unleash Your Talent: Showcase your skills in various arts! 🎤</li>
                        <li className="list-item">Forge Lasting Friendships: Connect with fellow creatives! Tag a
                            friend! 👯‍
                        </li>
                        <li className="list-item">Boost Your Confidence: Step out of your comfort zone! 🌱</li>
                        <li className="list-item">Create Unforgettable Memories: Experience thrilling events! 🎊</li>
                        <li className="list-item">Contribute to a Vibrant Community: Share your ideas to enrich our
                            community! 💬
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
