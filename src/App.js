//Import all component files
import Header from './components/Header';
import Main1 from './components/Main1';
import Heading from './components/Headings';
import Main2 from './components/Main2';
import SuccessStories from './components/SuccessStories';
import Shop from './components/Shop'
import Footer from './components/Footer';
//Import all Images
import success1 from './Images/success1.png'
import success2 from './Images/success2.png'
import success3 from './Images/success3.png'
import success4 from './Images/success4.png'
import happening1 from './Images/happening1.png'
import happening2 from './Images/happening2.png'
import happening3 from './Images/happening3.png'
import happening4 from './Images/happening4.png'
import shop1 from './Images/shop1.png'
import shop2 from './Images/shop2.png'
import shop3 from './Images/shop3.png'
import shop4 from './Images/shop4.png'


import './App.css';


//Use tables to structure all the component files on the page
function App() {
  return (
    <div className="App">
      <Header />
      
      <Main1 />

      <Heading heading="TAKE ACTION FOR YOUR WORLD" />
      <Main2 />

      <Heading heading="SUCCESS STORIES" />
      <table id="section3">
        <td><SuccessStories img={success1} text="WHAT WE ACHIEVED IN 2022 - WWF CYRMU" /></td>
        <td><SuccessStories img={success2} text="FIGHTING TO END THE ELEPHANT IVORY TRADE" /></td>
        <td><SuccessStories img={success3} text="HELPING MAASAI PEOPLE AND WILDLIFE" /></td>
        <td><SuccessStories img={success4} text="AMUR LEOPARD RANGE HAS EXPANDED" /></td>
      </table>

      <Heading heading="SHOP FOR YOUR WORLD" />
      <table id="section4">
        <td><Shop img={shop1} text="SPECIAL EDITION TIGER WHO CAME TO TEA PLUSH TOY" price="£6.99" /></td>
        <td><Shop img={shop2} text="SOS SAVE OUT SPECIES CARD GAME" price="£19.00" /></td>
        <td><Shop img={shop3} text="SUSTAINABLE COFFEE CAPSULES" price="£4.00"/></td>
        <td><Shop img={shop4} text="4OCEAN BRACELET" price="£19.99"/></td>
      </table>

      <Heading heading="WHAT'S HAPPENING IN YOUR WORLD" />
      <table id="section5">
        <td><SuccessStories img={happening1} text="NET-ZERO TRANSITION PLANS" /></td>
        <td><SuccessStories img={happening2} text="THE FOOD SYSTEM MUST BE FIXED" /></td>
        <td><SuccessStories img={happening3} text="BRING CHANGE TO THE TABLE" /></td>
        <td><SuccessStories img={happening4} text="THE FUTURE OF FEED" /></td>
      </table>

      <Footer />
      {/* Link to original webpage */}
      <p id="linkText"><b>This is a clone of the WWF landing webpage for practice purpose. All images and information used were sourced from the webpage, link below.</b></p>
      <a href="https://www.wwf.org.uk/" id="link">Link to original WWF webpage</a>
    </div>
  );
}

export default App;
