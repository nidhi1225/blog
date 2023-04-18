import React from "react";

export default function Desktopcard(props){
    return(
        <div className="desktopcard">
        <img src={props.postdata.imgaddress} />
        <div>
            <button>Tag name</button>
            <button>Tag name</button>
        </div>
        <h3>{props.postdata.title}</h3>
        <div className="flex justify-between">
            <div>By {props.postdata.author}</div>
            <div>{props.postdata.date}</div>
        </div>
        </div>
    )
}