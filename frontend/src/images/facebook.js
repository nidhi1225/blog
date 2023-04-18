import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
export default function Facebookicon(){
    return(
        <div className="px-1">
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        </div>
    )
}