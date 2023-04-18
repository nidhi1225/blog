import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';
export default function Pinteresticon(){
    return(
        <div className="px-1">
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faPinterest} />
            </a>
        </div>
    )
}