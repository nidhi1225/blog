import React from "react";
import Mobilecard from "./postCardMobile";
import flower from "../../images/flower.jpg";
import nature from "../../images/nature.jpg";
import strawberry from "../../images/strawberry.jpg";

export default function Mobilemain(){
    var mobileData =[
        {
            imgaddress:flower,
            title:'Some interesting fact about the color of flowers',
            author:'Biswajit Saha',
            date:'22/22/22',
            tag:[]
        },{
            imgaddress:nature,
            title:'We should always take lesson from nature to make our life beautiful',
            author:'Surabhi Gupta',
            date:'22/22/22',
            tag:[]
        },{
            imgaddress:strawberry,
            title:'Different way of eating strawberry, the luxurious fruit',
            author:'Apurba Talukdar',
            date:'22/22/22',
            tag:[]
        }
    ]
    return(
        <>
         {mobileData.map((item)=>{return(<Mobilecard postdata={item} />)})}
        </>
    )
}