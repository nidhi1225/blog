import React from "react";
import './post.css';
import nature from "../../images/nature.jpg";
import surabhi from "../../images/surabhi.jpg";
import Socialmedia from "../footer/socialmedia";
import Facebookicon from "../../images/facebook";
import Instaicon from "../../images/instagram";
import Twittericon from "../../images/twitter";
import Linkedinicon from "../../images/linkedin";
import Pinterest from "../../images/pinterest";
import Rightside from "../main/rightSideDesktop";

export default function PostPage(){
    return(
        <div className="flex justify-between">
        <div className="lg:w-3/4 leftbar">
        <div className="post">
            {/* heading div */}
            <div className="text-center">
                <h1>We should always take lesson from nature to make our life beautiful</h1>
                <div className="subheading">
                    {/* left side author info */}
                    <div>
                        <div className="p-0.5">By author name</div>
                        <div className="p-0.5">date 22/22/22</div>
                    </div>
                    {/* right side tag */}
                    <div className="posttag">
                        #tagname
                    </div>
                </div>
            </div>
            {/* heading div closed */}
            {/* post content div */}
            <div>
                <img src={nature} alt="post image" className="postimg"/>
                <p>
                    Donec eu ultricies turpis. Curabitur rutrum ipsum vitae lorem convallis dapibus. In nec lacus eu diam dignissim 
                    rhoncus. Duis viverra sagittis sollicitudin. Morbi quis nisl dolor. Fusce ac mi at eros mollis ullamcorper.
                </p>
                <h2>Vestibulum ultricies ipsum</h2>
                <p>
                Mauris sed feugiat sapien. Morbi consectetur posuere mi eu dapibus varius. Integer vel risus consectetur, viverra augue 
                ac, tempus nunc. Aliquam lacus dui, congue id velit eget, aliquam congue tellus. Quisque sit amet molestie tortor.
                </p>
            </div>
            {/* subscribe function */}
            <div className="noAccess">
                You don't have access to this post on Storymag at the moment, but if you upgrade your account you'll be able to see the whole 
                thing, as well as all the other posts in the archive! Subscribing only takes a few seconds and will give you immediate access.
            </div>
            <div className="subscribepost">
                <h3>This post is for subscribers only</h3>
                <button className="subscribePostButton">Subscribe Now</button>
                <p><sub>Already have an account?<a href="" style={{color: "#e72c30"}} > Sign in</a></sub></p>
            </div>
            {/* share post */}
            <div className="sharePost">
                <h6>Share this artical</h6>
                <div className="lg:hidden"><Socialmedia /></div>
                <div className="max-lg:hidden">
                    <button className="shareButton" style={{background:" #3b5998"}}><Facebookicon/> Facebook</button>
                    <button className="shareButton" style={{background:"#1da1f2"}}><Twittericon/> Twitter</button>
                    <button className="shareButton" style={{background:" #097bb5"}}><Linkedinicon/> LinkedIn</button>
                    <button className="shareButton" style={{background:" #cc2127"}}><Pinterest/> Pinterest</button>
                    <button className="shareButton" style={{background:" #d62976"}}><Instaicon/> Instagram</button>
                </div>
            </div>
            {/* about author */}
            <div className="flex authordiv">
                <div><img src={surabhi} alt="author image"  className="authorimg"/></div>
                <div>
                    <h6>Surabhi Gupta</h6>
                    <p>Developer at GBJ solution. I love to travel, make new friends. I prefer tea over coffee.</p>
                    <div className="flex"><Facebookicon/><Instaicon/><Twittericon/><Linkedinicon/></div>
                </div>
            </div>
            {/* post content div closed */}
            {/* more postcards for other posts */}
            <div></div>
            {/* comment section */}
            <div>
        </div>
        </div>
            </div>
            {/* right navbar */}
            <div className="rightbar max-lg:hidden"><Rightside /></div>
        </div>
    )
}