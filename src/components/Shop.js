import React from "react";

// Component with props passed as multiple sections on the page are similar
function Shop(props) {
    return(
        <div className="shop">
            <img src={props.img} alt="image" className="shopImg"/>
            <p className="shopText"><b>{props.text}</b></p>
            <p className="shopText"><b>{props.price}</b></p>
        </div>

    )
}

export default Shop;