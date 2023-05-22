import React from "react";
import './Navbar.css'; 
import pic1 from '../Picture/black-olx.png'
import pic2 from '../Picture/icons8-car-16.png'
import pic3 from '../Picture/icons8-building-16.png'
import pic4 from '../Picture/blue-olx-logo.png'
import pic5 from '../Picture/slider1.png'


const Navbar = () => {
    return (
      <nav className="navbar">
          <div id="logobar">
                <img src={pic1} alt="OLX logo" id="olxlogo"/>
                <a href="https://www.olx.com.pk/motors/" id="car" ><img src={pic2} alt="car icon"  />MOTORS</a>
                <a href="https://www.olx.com.pk/properties/" id="building"> <img src={pic3}alt="property icon"/>PROPERTY</a>
            </div>
            <div id="searchbar">
                <img src={pic4}alt="Main OLX logo"id="mainolxlogo"/>
                <input type="search" class="icon1" value="Pakistan" id="searchbox1" />
                <input type="text" id="searchbox2"  placeholder="Find Cars, Mobile Phones and more..."/>
                <a href="#login" id="Loginn">Login</a>
                <input type="button" value="SELL" title="Sell" id="sellbutton" />
            </div>
            <div id="nav1">
                <ul>  
                     All categoriesDropdown arrow
           
                      <li>Mobile Phones</li>
                      <li>Cars</li>
                      <li>Motorcycles</li>
                      <li>Houses</li>
                      <li>TV - Video - Audio</li>
                      <li>Tablets</li>
                      <li>Land & Plots</li>
                 </ul>
            </div>
            <div id="pic5">
        <img src={pic5} alt="slideimage" />
      </div>
     
      <div id="freshrecommendations">Fresh recommendations</div>
      </nav>
    );
  };

export default Navbar;
  


