import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
export default function Twittericon(){
    return(
        <div className="px-1">
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>
    )
}