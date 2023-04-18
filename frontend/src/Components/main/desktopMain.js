import React from "react";
import './main.css'
import Rightside from "./rightSideDesktop";
import Desktopcard from "./postCardDesktop";
import flower from "../../images/flower.jpg";
import nature from "../../images/nature.jpg";
import strawberry from "../../images/strawberry.jpg";

export default function Desktopmain(){
    var desktopData =[
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
        <div className="flex justify-between">
            <div className="w-3/4">
                <div>
                    <img src="#" />
                    <button>Tagname</button>
                    <h1>Self-observation is the first step of inner unfolding</h1>
                    <p>Almost instantly the whole truth of the transaction seemed to rush upon her mind, and her wrath was inconceivably 
                        violent. She asked me a thousand questions in a breath; but, fortunately, was too vehement to attend to my 
                        embarrassment, which must otherwise have betrayed my knowledge of...</p>
                    <div className="authorDetails flex">
                        <img src="authorimage" />
                        <div>
                            <div>author name</div>
                            <div>publish date</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around">{desktopData.map((item)=>{return(<Desktopcard postdata={item} />)})}</div>
            </div>
            <div><Rightside /></div>
        </div>
    )
}