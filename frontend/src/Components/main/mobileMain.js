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
            para:'Donec eu ultricies turpis. Curabitur rutrum ipsum vitae lorem convallis dapibus. In nec lacus eu diam dignissim rhoncus. Duis viverra sagittis sollicitudin. Morbi quis nisl dolor. Fusce ac mi at eros mollis ullamcorper.',
            author:'Biswajit Saha',
            date:'22/22/22',
            tag:['Nature','Education']
        },{
            imgaddress:nature,
            title:'We should always take lesson from nature to make our life beautiful',
            para:'Donec eu ultricies turpis. Curabitur rutrum ipsum vitae lorem convallis dapibus. In nec lacus eu diam dignissim rhoncus. Duis viverra sagittis sollicitudin. Morbi quis nisl dolor. Fusce ac mi at eros mollis ullamcorper.',
            author:'Surabhi Gupta',
            date:'22/22/22',
            tag:['Nature']
        },{
            imgaddress:strawberry,
            title:'Different way of eating strawberry, the luxurious fruit',
            para:'Praesent at lacus quis tortor ornare iaculis. Nulla euismod mattis elit sit amet vulputate. Duis ac ante sem. Sed ultrices sit amet arcu sit amet egestas. Nunc sed nisl nisi. Suspendisse potenti.',
            author:'Apurba Talukdar',
            date:'22/22/22',
            tag:['Nature','Food','Education']
        }
    ]
    return(
        <>
         {mobileData.map((item)=>{return(<Mobilecard postdata={item} />)})}
        </>
    )
}