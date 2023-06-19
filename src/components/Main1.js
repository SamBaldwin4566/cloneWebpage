import React from "react";
import image1 from '../Images/image1.jpeg'

//Main 1 component is the first section of the webpage
function Main1() {
    return(
        <section id="section1">
            <div id="main1">
                <div id="mainText">
                    <h1>WAYS TO HELP OUR WORLD ON A BUDGET IN 2023</h1>
                    <p>We all have the power to bring out world back to life. Here's 23 practicals, budget friendly ways that you can help tackle climate change and nature loss in 2023</p>
                    <p id="waysToHelp">WAYS TO HELP</p>
                </div>
                <img src={image1} alt="turtle" id="image1"/>
            </div>
        </section>
    )
}
export default Main1