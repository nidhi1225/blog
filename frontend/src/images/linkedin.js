import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
export default function Linkedinicon(){
    return(
        <div className="px-1">
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    )
}