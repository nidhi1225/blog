import React from "react";
import Mobilecard from "./postCardMobile";
import { useSelector } from "react-redux";

export default function Mobilemain(){
    const state = useSelector((state) => state);
    var mobileData = state.desktopData;
    return(
        <>
         {mobileData.map((item)=>{return(<Mobilecard postdata={item} />)})}
        </>
    )
}