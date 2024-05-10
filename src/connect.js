import React from "react";
import './subPage.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Connect = () => {
    return (
        <div id="connectPage" className={"connectPageStyle"}>
            {/* Content for the Connect component */}
            <h2 className={"pageHeadingStyle bannerHeader"}>Connect</h2>
            <h3 className={"bannerHeader3"}>____</h3>
            <div className={"connectComponent"}>
                <a href="https://www.linkedin.com/in/matthew-watkeys-562169a7/" name="LinkedInProfile" >
                    <FontAwesomeIcon icon={faLinkedin} className={"connectGrid"} title={"LinkedIn Profile"}/>
                </a>
                <a href="https://github.com/mattrab123" name="GitHub" >
                    <FontAwesomeIcon icon={faGithub} className={"connectGrid"} title={"GitHub Profile"}/>
                </a>
                <a href="" name="Email" >
                    <FontAwesomeIcon icon={faEnvelope} className={"connectGrid"} title={"Email"}/>
                </a>
            </div>
        </div>
    );
};

export default Connect;