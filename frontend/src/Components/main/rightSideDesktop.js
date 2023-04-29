import React from "react";
import Recentpost from "../footer/recentpost"
import TagList from "../header/tagsList";
import Socialmedia from "../footer/socialmedia";
import flower from "../../images/flower.jpg";
import nature from "../../images/nature.jpg";
import strawberry from "../../images/strawberry.jpg";

export default function Rightside(){
    var tagArray = ['food','lifestyle','finance','sports','education'];
    let post=[{
        title : 'Different way of eating strawberry, the luxurious fruit',
        imgaddress: strawberry ,
        author: 'Biswajit Saha'
    },{
        title : 'Some interesting fact about the color of flowers',
        imgaddress: flower ,
        author: 'Surabhi Gupta'
    },{
        title : 'We should always take lesson from nature to make our life beautiful',
        imgaddress: nature ,
        author: 'Apurba Talukdar'
    }]
    return(
        <div className="rightsideBar-container">
        <div>
            <h4>Recent post</h4>
            {post.map((item)=>{return(<Recentpost postdata={item} />)})}
        </div>
        <div>
            <h4>Tag cloud</h4>
            <TagList tagItem={tagArray} />
        </div>
        <div>
            <h4>Follow us!</h4>
            <Socialmedia />
        </div>
        </div>
    )
}