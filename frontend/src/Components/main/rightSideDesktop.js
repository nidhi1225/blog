import React from "react";
import Recentpost from "../footer/recentpost"
import TagList from "../header/tagsList";
import Socialmedia from "../footer/socialmedia";

export default function Rightside(){
    var tagArray = ['food','lifestyle','finance','sports','education'];
    return(
        <>
        {/* <Recentpost /> */}
        <TagList tagItem={tagArray} />
        <Socialmedia />
        </>
    )
}