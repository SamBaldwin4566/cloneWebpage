import React from "react";
import action1 from '../Images/action1.png'
import action2 from '../Images/action2.png'
import action3 from '../Images/action3.png'


//Main 2 component is the second section of the webpage
function Main2() {
    return(
        
        <div id="section2">

            <div id="action1">
                <img src={action1} alt="image" className="actionImage"/>
                <p className="actionHeading"><b>WHAT WE ACHIEVED IN 2022</b></p>
                <p className="actionText"><b>2022 was a big year for our planet - and for all of us. Thanks to your support, we've been able to fund projects in the UK and beyond that are tackling the climate and nature crisis. There is still much work to be done, but together we can bring our world back to life.</b></p>
                <p className="actionButton">FIND OUT HOW YOU HELPED</p>
            </div>
                    

            <div id="action2">
                <img src={action2} alt="image" className="actionImage"/>
                <p className="actionHeading"><b>ADOPT AN ANIMAL</b></p>
                <p className="actionText"><b>Help protect precious habitats around the world and all the species which rely on them to survive.</b></p>
                <p className="actionButton">ADOPT NOW</p>
            </div>


            <div id="action3">
                <img src={action3} alt="image" className="actionImage"/>
                <p className="actionHeading"><b>BRINGING OUR WORLD BACK TO LIFE</b></p>
                <p className="actionText"><b>Time is running out. Can we bring our world back to life before it's too late? We're in a race against time to restore our world. And it's a race we must win.</b></p>
                <p className="actionButton">FIND OUT MORE</p>
            </div>
        </div>
    )
}

export default Main2;