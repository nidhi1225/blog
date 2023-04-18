import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
export default function Instaicon(){
    return(
        <div className="px-1">
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    )
}