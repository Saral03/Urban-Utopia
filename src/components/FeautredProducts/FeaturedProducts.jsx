import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss"

const FeaturedProducts =({type})=>{
    const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs-tinysrgb&w=1600",
        img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys rgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        isNew:true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinys rgb&w=1600",
        title: "Coat",
        isNew:true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinys rgb&w=1600",
        title: "Skirt",
        oldPrice: 19,
        price: 12,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs-tinys rgb&w=1600",
        title: "Hat",
        oldPrice: 19,
        price: 12,
    },
];

    return(
        <div className="fp">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                Discover the Essence of Urban Elegance with Our Featured Products. Dive into a world where style meets the city's rhythm. Our handpicked selection showcases the pinnacle of urban fashion, blending trend-setting designs with unparalleled quality.
                </p>
            </div>
            <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
            </div>
        </div>
    );
}
export default FeaturedProducts;