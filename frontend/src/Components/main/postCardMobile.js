import React from "react";

export default function Mobilecard(props){
    return(
        <>
        <div className="flex">
            <div><img src={props.postdata.imgaddress} /></div>
            <div>
                <h3>{props.postdata.title}</h3>
                <div>{props.postdata.date}</div>
            </div>
        </div>
        <p></p>
        <div className="flex justify-between">
            <div>
                <button>Tag name</button>
                <button>Tag name</button>
            </div>
            <div>{props.postdata.author}</div>
        </div>
        <button>Continue Reading</button>
        </>
    )
}