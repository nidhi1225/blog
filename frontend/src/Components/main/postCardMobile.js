import React from "react";

export default function Mobilecard(props){
    var tagName = props.postdata.tag;
    return(
        <div className="mobilecard relative">
        <div className="flex">
            <div className="mobileimg"><img src={props.postdata.imgaddress} className="mobilecardimg"/></div>
            <div>
                <h3>{props.postdata.title}</h3>
            </div>
        </div>
        <p>{props.postdata.para}</p>
        <div className="flex justify-between">
            <div className="flex flex-wrap" style={{margin:"2%"}}>
                {tagName.map((item)=>{return(<button className="tagbutton">#{item}</button>)})}
            </div>
            <div style={{margin:'2%'}}>{props.postdata.author}</div>
        </div>
        <div className="flex justify-center"><button className="mobilebutton absolute">Continue Reading</button></div>
        </div>
    )
}