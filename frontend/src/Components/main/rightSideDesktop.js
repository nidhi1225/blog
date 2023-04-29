import React from "react";
import Recentpost from "../footer/recentpost"
import TagList from "../header/tagsList";
import Socialmedia from "../footer/socialmedia";
import { useSelector } from "react-redux";

export default function Rightside(){
    const state = useSelector((state) => state);
    // data of tag button
    var tagArray = state.tagArray;
    // data of recent post
    let post= state.post;
    return(
        <div className="rightsideBar-container">
        {/* recent post */}
        <div>
            <h4>Recent post</h4>
            {post.map((item)=>{return(<Recentpost postdata={item} />)})}
        </div>
        {/* tag buttons */}
        <div>
            <h4>Tag cloud</h4>
            <TagList tagItem={tagArray} />
        </div>
        {/* social media icon */}
        <div>
            <h4>Follow us!</h4>
            <Socialmedia />
        </div>
        </div>
    )
}