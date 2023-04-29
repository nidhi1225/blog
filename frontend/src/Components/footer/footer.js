import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Recentpost from "./recentpost";
import TagList from "../header/tagsList";
import Socialmedia from "./socialmedia";
import Subscribe from "./subscribe";
import './footer.css';
import { useSelector } from "react-redux";

export default function Footer(){
    const state = useSelector((state) => state);
    var tagArray = state.tagArray;
    let post= state.post;
    return(
        <div className="body justify-center">
            <div className="lg:flex justify-evenly px-2.5">
                {/* recent post */}
                <div className="lg:w-1/4 my-1.5">
                    <h5>Recent post</h5>
                    {post.map((item)=>{return(<Recentpost postdata={item} />)})}
                </div>
                <div className="my-1.5 lg:w-1/4">
                    {/* tag list in footer */}
                    <div>
                        <h5>Tag cloud</h5>
                        <TagList tagItem={tagArray} />
                    </div>
                    {/* socialmedia in footer */}
                    <div className="my-1.5">
                        <h5>Follow us</h5>
                        <Socialmedia />
                    </div>
                </div>
                <div className="lg:w-1/4 my-1.5">
                    {/* subscribe */}
                    <Subscribe />
                    <hr />
                    {/* pages router link */}
                    <div className="flex">
                        <div className="pagelink"><Link to="/aboutus">About us</Link></div> 
                        <div className="pagelink"><Link to="/contactus">Contact us</Link></div> 
                        <div className="pagelink"><Link to="/privacypolicy">Privacy Policy</Link></div>
                        <div className="pagelink"><Link to="/disclamer">Disclamer</Link> </div>
                    </div> 
                </div>
            </div>
            <hr/>
            <div className="copyright">© 2023 Storymag - All right Reserved. Published with Ghost</div>
        </div>
    )
}