import React from 'react'
import lffLogo from "../../assets/lff_logo.png"
import rollingTape from "../../assets/rolling_tape.png"
import selfie from "../../assets/selfie.png"
import vblog from "../../assets/vblog.png"
import art from "../../assets/art.png"
import one from "../../assets/1.png"
import two from "../../assets/2.png"
import three from "../../assets/3.png"
import "./lifefilmfestival.css"

const Lff = () => {

return (
    <div className="lff_lifeFilmFestival">

        <div className="lff_hero_section">
            <div className="lff_icon">
                <img src={lffLogo} alt='logo' />
            </div>
            <div className="lff_hero_content">
                <p className='white_color'>LIFE</p>
                <p className='primary_color'>FILM</p>
                <p className='primary_color'>FESTIVAL</p>
                <button className='lff_button'>Register</button>
            </div>
        </div>

        <div className="lff_summary">
            <div className="lff_left">
                {/* For the two images */}
                <div className="lff_img_card selfie"></div>
                <div className="ySpace"></div>
                <div className="ySpace"></div>
                <div className="lff_img_card vblog"></div>
            </div>
            <div className="lff_right">
                <p>
                    <span className='primary_color'>Life Film Fest</span> is a game-changing event that presents emerging filmmakers a once in a <br/>
                    LIFE-time opportunity to premiere their short film to an audience of film enthusiasts and key <br/>
                    stakeholders within the film industry. <br/>
                </p>

                <p>
                    It encourages collaboration and networking within the
                    industry and offers access to decision-makers.
                </p>
                <div className="ySpace"></div>
                <p>
                    The LFF is the film arm of LIFE that brings together creative people from diverse industries, <br/>
                    making the festival an unmatched experience at the frontline of discovery, creativity, and <br/>
                    innovation. It also showcases the brilliance of Nigerian filmmakers. <br/>
                </p>
            </div>
        </div>
        
        <div className="lff_banner_section">
            {/* For the trio image with submission text */}
            <div className="lff_submission_card">
                <p>Submissions for the inaugural 2022 event closes September 14, 2022. <br />Submissions are <span className="primary_color"> free!</span></p>

                <p>For questions or enquiries, please email us at <a href="mailto:info@enjoylife.ng" title='info@enjoylife.ng' className='primary_color'>info@enjoylife.ng</a></p>
            </div>
        </div>

        {/* For the dotted bordered content */}
        <div className="lff_dotted_border">
            <div className="lff_dotted_border_title"> Film Requirements </div>
            <div className="lff_dotted_border_content">
                <p>Genre: Not specified. We’re looking for captivating films of different genres. Animation is allowed. </p>
                <p>Run time: 30 minutes maximum </p>
                <p>File format: Mp4. </p>
                <p>Language: English or Indigenous languages (must be subtitled in English)</p>
            </div>
        </div>


        {/* For Participation section */}
        <div className="lff_participation_section">
            <div className="lff_participation_header">
                <p>
                <span className="white_color"> LFF Participation:  </span>
                <span className="primary_color">Terms and Conditions:</span></p>
            </div>
            <div className="lff_row">
                <div className="lff_num_card">
                    <div className="lff_num_card_content">
                        By entering this competition, you agree to join the festival database and to be contacted
                        occasionally by us and our partners using the details submitted (including email) in relation to our
                        events or services that we believe may be of interest to you.
                    </div>
                    <div className="lff_num_card_num">
                        <img src={one} alt='image one' />
                    </div>
                </div>
                <div className="lff_row_spacer"></div>
                <div className="lff_num_card">
                    <div className="lff_num_card_content">
                        If your film is selected, you will be invited to attend the screening this October in Lagos. Entrants
                        will receive one free entry pass from the Promoters. Entrants are responsible for the costs
                        associated with traveling to the venue and their accommodation.
                    </div>
                    <div className="lff_num_card_num">
                        <img src={two} alt='image two' />
                    </div>
                </div>
            </div>
            <div className="lff_row">
                <div className="lff_num_card">
                    <div className="lff_num_card_content lff_divider">
                        <div className="lff_left">
                            <p>
                                By submitting an Entry to the Competition, Entrants give Promoters:
                                a. A non-exclusive, royalty-free, worldwide license to use a full video in electronic format or hard
                                copy for screening purposes (i.e. during Life Film Fest and our Partners’ film screening events).
                            </p>
                            <p>    
                                b. Permission to adapt the Entry to enable such publication (including to shorten or edit it for the
                                festival trailer or marketing materials), and Entrant hereby irrevocably waive, for the benefit of the
                                Promoters, all moral rights in the Entry to which they are entitled.
                            </p>
                        </div>
                        <div className="lff_middle"></div>
                        <div className="lff_right">
                            <p>
                                c. The right to circulate photographic stills from registered films to all print media, television, Internet
                                and/or websites, and by any electronic means of communication to the public.
                            </p>
                            <p>
                                d. The right to use Entrants name, a photograph, and town or city of residence for the sole purpose
                                of identifying Entrants as the authors of their Entries.

                            </p>
                        </div>
                    </div>
                    <div className="lff_num_card_num">
                        <img src={three} alt='image three' />
                    </div>
                </div>
            </div>
        </div>

        <div className="lff_regiter_footer">
            {/* Use flex, with justify-content: space-between, and padding on both edges */}
            <div className="lff_register_left_content">
                <p>
                    Register by clicking the button.
                </p>
                <p>
                    We will contact you if your film has been selected. Good Luck!
                </p>
            </div>
            <div className="lff_register_right_content">
                <button className='lff_button'>Register</button>
            </div>
        </div>
        
        <div className="lff_arrow_up"></div>
    </div>
);
}


export default Lff