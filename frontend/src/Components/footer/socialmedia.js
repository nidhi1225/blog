import React from "react";
import Facebookicon from "../../images/facebook";
import Instaicon from "../../images/instagram";
import Twittericon from "../../images/twitter";
import Linkedinicon from "../../images/linkedin";
import Pinterest from "../../images/pinterest";
import Youtubeicon from "../../images/youtube"
import Googleicon from "../../images/google";

export default function Socialmedia(){
    return(
        <div className="flex justify-evenly followUs">
            <Facebookicon/>
            <Instaicon/>
            <Twittericon/>
            <Linkedinicon/>
            <Googleicon />
            <Youtubeicon/>
            <Pinterest/>
        </div>
    )
}