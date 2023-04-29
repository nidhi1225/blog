import React from "react";

export default function Desktopcard(props){
    var tagName= props.postdata.tag;
    return(
        <div className="desktopcard">
        <img src={props.postdata.imgaddress} className="cardimg" />
        <div className="flex">
        {tagName.map((item)=>{return(<button className="tagbutton">#{item}</button>)})}
        </div>
        <h3>{props.postdata.title}</h3>
        <div className="flex justify-between">
            <div>By {props.postdata.author}</div>
            <div>{props.postdata.date}</div>
        </div>
        </div>
    )
}