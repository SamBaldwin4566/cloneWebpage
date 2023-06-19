import React from "react";


// Component used with props as multiple components of the same structure are used on the page
function SuccessStories(props) {
    return(
        <div className="successStories">
            <img src={props.img} alt="image" className="successImg"/>
            <h4 className="successText">{props.text}</h4>
        </div>
    )
}

export default SuccessStories;