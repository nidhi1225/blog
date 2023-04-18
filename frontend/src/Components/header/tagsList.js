import React from "react";
import Cross from "../../images/cross";
import Dropdownicon from "../../images/dropdownicon";

export default function TagList(props){
    return(
        <div>
            {
            props.fromHeader ? 
                <div className="max-lg:absolute flex justify-between md:w-1/2 max-md:w-5/6">
                <div className="tags lg:flex">
                    {
                        props.tagItem.map((item)=>{
                        return (<div className="menu-item px-0.5">{item}</div>)
                        })
                    }
                    <div className="max-lg:hidden"><Dropdownicon /></div>
                </div>
                <div className="lg:hidden">
                    <span onClick={props.hideFunc}><Cross/></span>
                </div>
            </div>:
            <div className="mt-4">
                {
                    props.tagItem.map((item)=>{
                    return (<button className="tagButton">{item}</button>)
                    })
                }
            </div>
            }
        </div>
)
}