import React from "react";
import {useState} from 'react';
import TagList from "./tagsList";
import Menuicon from "../../images/menu";
import Darkmode from "../../images/darkmode";
import Searchicon from "../../images/search";
import { useSelector } from "react-redux";

export default function Header() {
    // function for click to appear tag bar and close it
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
    setIsShown(current => !current);
    };
    // data for tags to shown in header
    const state = useSelector((state) => state);
    var tagArray = state.tagArray;
    return(
        // header starts
        <div className="m-2 md:flex justify-between">
            {/* top bar in mobile and tablets */}
            <div className="top-nav flex justify-between">
                {/* left side elements */}
                <div className="left-child text-left">
                    {/* menu bar to shown in mobile and tablets only */}
                    <button className="lg:hidden" onClick={handleClick}><Menuicon /></button>
                </div>
                {/* logo to be shown as first elements of header on left-side */}
                <div className="hidden md:block">logo</div>
                {/* after logo tags are shown */}
                {isShown && <TagList hideFunc={handleClick} tagItem={tagArray} fromHeader={true}/>}
                {/* tags are shown in menu bar in mobile and tablet */}
                <div className="max-lg:hidden"><TagList tagItem={tagArray} fromHeader={true}/></div>
                {/* on ridht side of header there are darkmode and search function in laptop */}
                <div className="right-child text-right flex md:hidden">
                    <Darkmode />
                    <Searchicon />
                </div>
            </div>
            {/* bottom or second part nav bar */}
            <div className="bottom-nav flex justify-between">
                {/* right side darkmode and search function */}
                <div className="hidden flex md:flex">
                    <Darkmode />
                    <Searchicon />
                </div>
                <div className="empty"></div>
                {/* logo in center in mobile and tablet */}
                <div className="logo text-center md:hidden">logo</div>
                {/* sign up on right side */}
                <div className="login text-right">
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}