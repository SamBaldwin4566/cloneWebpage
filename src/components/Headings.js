import React from "react";

// Heading components using probs as various different headings of similar styles are on the page
function Heading(props) {
    return(
        <h2 className="pageHeading">{props.heading}</h2>
    )
}

export default Heading;