import React from "react";

import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

import "./Slider.scss"
const data=[
"https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
"https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
"https://images.unsplash.com/photo-1618659394332-0800e880f478?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
];
const Slider=()=>{
    const[currSlide,setCurrSlide]=React.useState(0);

    const prevSlide= ()=>{
        setCurrSlide(currSlide === 0 ? 2 : (prev)=> prev-1);
    }
    const nextSlide= ()=>{
        setCurrSlide(currSlide === 2 ? 0 : (prev)=> prev+1);
    }
return(
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currSlide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
            <WestIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
            <EastIcon />
            </div>

        </div>

    </div>
    
);
}
export default Slider;