import React from "react";

export default function Subscribe(){
    return(
        <div>
            <h5>Subscribe to myPage</h5>
            <p>Stay up to date! Get all the latest & greatest posts delivered straight to your inbox.</p>
            <p>We also hate spamming as you do. We only sent post update once in a week.</p>
            <input type="text" placeholder="Enter ur email" className="footerInput"></input><button className="subscribeButton">Subscribe</button>
            <p><sub>Already have an account?<a href="itsEmpty" style={{color: "#e72c30"}} > Sign in</a></sub></p>
        </div>
    )
}