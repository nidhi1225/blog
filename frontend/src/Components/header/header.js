import React from "react";
import {useState} from 'react';
import TagList from "./tagsList";
import Menuicon from "../../images/menu";
import Darkmode from "../../images/darkmode";
import Searchicon from "../../images/search";

export default function Header() {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
    setIsShown(current => !current);
    };
    var tagArray = ['food','lifestyle','finance','sports','education'];
    return(
        <div className="m-2 md:flex justify-between">
            <div className="top-nav flex justify-between">
                <div className="left-child text-left">
                    <button className="lg:hidden" onClick={handleClick}><Menuicon /></button>
                </div>
                <div className="hidden md:block">logo</div>
                {isShown && <TagList hideFunc={handleClick} tagItem={tagArray} fromHeader={true}/>}
                <div className="max-lg:hidden"><TagList tagItem={tagArray} fromHeader={true}/></div>
                <div className="right-child text-right flex md:hidden">
                    <Darkmode />
                    <Searchicon />
                </div>
            </div>
            <div className="bottom-nav flex justify-between">
                <div className="hidden flex md:flex">
                    <Darkmode />
                    <Searchicon />
                </div>
                <div className="empty"></div>
                <div className="logo text-center md:hidden">logo</div>
                <div className="login text-right">
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}