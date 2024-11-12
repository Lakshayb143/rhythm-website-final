import vc from "../assets/images/VC.jpeg";
import  '../style/vcmessage.css';
const Message = () => {
    return (

            <div className="message-container-2k24">
                <div className="container-heading"><h1>OUR INSPIRATION
                </h1></div>
                {/*Main container*/}
                <div className="message-container-image">
                    {/*VC IMAGE*/}
                    <img src={vc} alt="vc"/>
                </div>
                <div className="message-container-content">
                    {/*VC NAME AND DESIGNATION*/}
                    <h1>Prof. Shree Prakash Singh
                    </h1>
                    <h3>VICE CHANCELLOR
                    </h3>
                </div>
                <div className="message-vc">
                    {/*VC Message*/}
                    <p>
                        With great pleasure and pride I stand before you all as we gather for this extraordinary
                        cultural event
                        RHYTHM-2024 to celebrate the richness of diversity and the power of unity.Just like the vibrant
                        colours
                        of a masterpiece, each one of the participants contributes a unique shade to the canvas of our
                        community. Today we have assembled to embrace the opportunity to share, learn and grow together.
                        Let the
                        creativity flourish, voices be heard, talent be explored and let this event be a success that
                        fosters
                        the understanding and build bridges between cultures As we embark on this cultural journey, I
                        encourage
                        each one to be proud of our heritage, stories, histories, traditions and experiences that are
                        the
                        threads that weave tapestry of our shared human narrative. I want to extend my warm welcome to
                        the
                        faculty, staff, students and the esteemed guests who have worked too hard and have spent endless
                        nights
                        preparing their best Lastly, i want to wish good luck to all the participants and hope for
                        electrifying
                        performances, enlightening conversations and enduring connections. After all, together we can
                        create a
                        symphony of cultures that resonates beyond these walls.
                        <br/><span className="text-white font-black">Best wishes!</span>
                    </p>
                </div>
            </div>
    )
}
export default Message;