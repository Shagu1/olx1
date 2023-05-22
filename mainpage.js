import React from "react";
import './mainpage.css'; 
import pic7 from '../Picture/p14.jpg'

const MainPage = () => {
    return (
       <div id="main1">
            <div class="picture">
                <img src={pic7} alt="Image"/>
                <div class="featureicon">FEATURED</div>
                <div class="deliveryicon">delivery</div>
            </div>
            <div class="description">
                <div class="featured"></div>
                <div class="upper">
                  <div>
                    <div class="title">
                      Sunface Level Possession Plot Approved Lop Area
                    </div>
                    <span class="price">Rs 12,000,000</span>
                  <img
                    src="./images/heart.png"
                    alt="favorites"
                    height="24px"
                    width="24px"
                    title=""
                  />
                </div>
            </div>
        </div>
    </div>
    )
}
export default MainPage