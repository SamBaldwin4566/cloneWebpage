import React from "react";


//Footer component set up as a grid to display different sections
function Footer() {
    return (
        <footer>
            <h2 id="footerHeading">BRING OUR WORLD BACK TO LIFE</h2>
            <div id="container">

                <div id="column1">
                    <h3>JOIN THE FIGHT FOR OUR WORLD</h3>
                    <p className="footerText">Sign up to be kept informed about our conservation work and how you can help such as fundraising, campaigning and events. You can unsubscribe at any time.</p>
                    <h3 id="signUp">SIGN UP</h3>
                </div>

                <div id="column2">
                   <h3>ABOUT WWF</h3>
                   <p className="footerText">UK Headquarters</p>
                   <p className="footerText">Trustees</p>
                   <p className="footerText">Press contacts</p>
                   <p className="footerText">Contact us</p>
                   <p className="footerText">FAQs</p>
                   <p className="footerText">Jobs</p>
                </div>

                <div id="column3">
                    <h3>LEGAL</h3>
                    <p className="footerText">Terms & Conditions</p>
                    <p className="footerText">About Cookies</p>
                    <p className="footerText">Privacy and Data Protection</p>
                    <p className="footerText">Annual Report and Financial Statements</p>
                    <p className="footerText">Gender Pay Gap Report</p>
                    <p className="footerText">Modern Slavery Statement</p>
                    <p className="footerText">Safeguarding Policy</p>
                </div>

                <div id="column4">
                    <h3>FOLLOW US</h3>
                    <div>
                        <a class="icon"><i class="fa fa-twitter"></i></a>
                        <a class="icon"><i class="fa fa-facebook"></i></a>
                        <a class="icon"><i class="fa fa-instagram"></i></a>
                        <a class="icon"><i class="fa fa-youtube"></i></a>
                        <a class="icon"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <p className="footerText" id="followText">WWF-UK is a registered charity in England and Wales 1081247 and in Scotland SC039593 and a company limited by guarantee registered in England and Wales 4016725.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;