import React from "react";
// import * as bannerStyle from "./banner.module.css";
// import bannerStyle from "./banner.module.css";
// import {bannerStyle} from "./banner.module.css";
// import "./banner.module.css";
import classes from "./banner.module.css";

const Banner = ({children, navigate}) => {
    
    return (
        <header className={classes.bannerStyle}>
            <div className={"col-5"}>
                <span className={"logo"} onClick={navigate}>
                    {children}
                </span>                
            </div>
        </header>
    );
};

export default Banner;