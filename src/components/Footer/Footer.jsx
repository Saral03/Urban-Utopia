import React from "react";


import "./Footer.scss"
const Footer =()=>{
    return(
        <div className="Footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                    Step into the future of fashion with us and explore the sartorial possibilities of the urban utopia. Your perfect piece of the city is just a click away.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                    Step into the future of fashion with us and explore the sartorial possibilities of the urban utopia. Your perfect piece of the city is just a click away.
                    </span>
                </div>
                <div className="bottom">





                </div>


                
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Urban Utopia</span>
                    <span className="copyright">©️ copyright 2023.All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="/image/Payment.png" alt="" />
                </div>



            </div>



        </div>

    );
}
export default Footer;