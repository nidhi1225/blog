import React from "react";
import './main.css'
import Rightside from "./rightSideDesktop";
import Desktopcard from "./postCardDesktop";
import image from "../../images/image.jpg";
import PostPage from "../post/post";
import { useSelector } from "react-redux";

export default function Desktopmain(){
    const state = useSelector((state) => state);
    console.log("store", state);
    const desktopData = state.desktopData;
    
    return(
        <div className="flex justify-between">
            <div className="w-3/4 leftbar">
            {/* first page or home page content */}
            <div>
                <div>
                    <img src={image} />
                    <button className="posttag">#Lifestyle</button>
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
                <div className="flex justify-around flex-wrap">{desktopData.map((item)=>{return(<Desktopcard postdata={item} />)})}</div>
            </div>
            {/* home page content end here */}
            </div>
            {/* right navbar */}
            <div className="rightbar"><Rightside /></div>
        </div>
    )
}