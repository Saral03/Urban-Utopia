import React, { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import "./Products.scss"
const Products =()=>{
    const catId=parseInt(useParams().id);
    const[maxPrice,setMaxPrice]=useState(1000);
    const[sort,setSort]=useState(null);
    return(
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1}></input>
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2}></input>
                        <label htmlFor="2">Skirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3}></input>
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter By Price</h2>
                    <div className="inputItem">
                         <span>0</span>
                         <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}></input>
                         <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")}></input>
                        <label htmlFor="asc">Price(Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")}></input>
                        <label htmlFor="asc">Price(Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="catImg" 
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinys rgb&w=1600" 
                    alt="">
                </img>
                <List 
                    catId={catId}
                    maxPrice={maxPrice}
                    sort={sort} 
                />
            </div>
        </div>

    );
}
export default Products;