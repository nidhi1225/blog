import React from "react";
import './main.css';
import Rightside from "./rightSideDesktop";
import Desktopcard from "./postCardDesktop";
import image from "../../images/image.jpg";
import { useSelector } from "react-redux";

export default function Desktopmain(){
    const state = useSelector((state) => state);
    console.log("store", state);
    const desktopData = state.desktopData;
    
    return(
        <div className="flex justify-between">
            <main className="w-3/4 leftbar">
            {/* first page or home page content */}
            <div>
                {/* default post */}
                <div>
                    {/* post image */}
                    <img src={image} alt="trial pic"/>
                    {/* post tag */}
                    <button className="posttag">#Lifestyle</button>
                    {/* post content */}
                    <h1>Self-observation is the first step of inner unfolding</h1>
                    <p>Almost instantly the whole truth of the transaction seemed to rush upon her mind, and her wrath was inconceivably 
                        violent. She asked me a thousand questions in a breath; but, fortunately, was too vehement to attend to my 
                        embarrassment, which must otherwise have betrayed my knowledge of...</p>
                    {/* author details */}
                    <div className="authorDetails flex">
                        <img src="authorimage" alt="trial pic"/>
                        <div>
                            <div>author name</div>
                            <div>publish date</div>
                        </div>
                    </div>
                </div>
                {/* post ends here */}
                {/* post card to show other posts */}
                <div className="flex justify-around flex-wrap">{desktopData.map((item)=>{return(<Desktopcard postdata={item} />)})}</div>
            </div>
            {/* home page content end here */}
            </main>
            {/* right navbar */}
            <aside className="rightbar"><Rightside /></aside>
        </div>
    )
}