import React from "react";
// import * as bannerStyle from "./banner.module.css";
// import bannerStyle from "./banner.module.css";
// import {bannerStyle} from "./banner.module.css";
// import "./banner.module.css";
import classes from "./banner.module.css";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = ({children, navigate}) => {
    
    return (
        <header className={classes.bannerStyle}>
            <div className={classes.backButton} onClick={navigate}>
                <FontAwesomeIcon icon={faChevronLeft}  title={"Back button"}/>
                &nbsp; Home
            </div>
            <div className={"col-5"}>
                <span className={"logo"} >
                    {children}
                </span>                
            </div>
        </header>
    );
};

export default Banner;