import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
export default function Googleicon(){
    return(
        <div className="px-1">
            <a href="https://google.com">
                <FontAwesomeIcon icon={faGoogle} />
            </a>
        </div>
    )
}