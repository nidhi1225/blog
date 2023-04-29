import React from "react";
import Cross from "../../images/cross";
import Dropdownicon from "../../images/dropdownicon";

export default function TagList(props){
    return(
        <div>
            {
                // calling tag from header if fromHeader value is true
            props.fromHeader ? 
            // menu bar call by click function
                <div className="max-lg:absolute flex justify-between md:w-1/2 max-md:w-5/6">
                <div className="tags lg:flex">
                    {/* tags in menu in mobile and tablet */}
                    {/* tags in line in laptop */}
                    {
                        props.tagItem.map((item)=>{
                        return (<div className="menu-item px-0.5">{item}</div>)
                        })
                    }
                    {/* dropdown in laptop only */}
                    <div className="max-lg:hidden"><Dropdownicon /></div>
                </div>
                {/* cross to close menu by on click */}
                <div className="lg:hidden">
                    <span onClick={props.hideFunc}><Cross/></span>
                </div>
            </div>:
            // tag called by other part in website as button form
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