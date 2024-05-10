import React from "react";
import logo from './data/me2.PNG';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

const Home = ({ toggleSkills, toggleConnect }) => {
    return (
        <header className="App-header">
        <div id="col1">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div id="col2" className="col2">
          <div className="col2-item">
            <FontAwesomeIcon icon={faCode} className={"home-icons"} title={"Show Skills"} onClick={toggleSkills}/>
            <p className="col2-p">Show Skills</p>
          </div>
          <a className="col2-item" href="https://github.com/mattrab123/CV/raw/main/Matthew_Watkeys_-_Software_Engineer.pdf">
            <FontAwesomeIcon icon={faFileLines} className={"home-icons"} title={"My CV"} />
            <p className="col2-p">My CV</p>
          </a>
          <div className="col2-item">
            <FontAwesomeIcon icon={faCommentDots} className={"home-icons"} title={"Connect"} onClick={toggleConnect}/>
            <p className="col2-p">Connect</p>
          </div>
        </div>
      </header>
    );
};

export default Home;