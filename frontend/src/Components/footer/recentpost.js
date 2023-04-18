import React from "react";
export default function Recentpost(props){
    
    return(
        <div className="flex pt-2.5">
            <div><img src={props.postdata.imgaddress} className="footerimg"/></div>
            <div>
                <div>
                    {props.postdata.title}
                </div>
                <div>by {props.postdata.author}</div>
            </div>
        </div>
    )
}