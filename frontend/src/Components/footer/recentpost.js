import React from "react";
export default function Recentpost(props){
    
    return(
        <div className="flex pt-2.5">
            <div className="mr-2"><img src={props.postdata.imgaddress} className="footerimg" alt="postimg"/></div>
            <div>
                <div>
                    {props.postdata.title}
                </div>
                <div>by {props.postdata.author}</div>
            </div>
        </div>
    )
}