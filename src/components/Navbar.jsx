import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";

function Navbar() {
    const[hovered,setHoverColour]=useState(null)                //background colour change on hovering
    const handleMouseHover=(index)=>{setHoverColour(index)}
    const handleMouseLeave=()=>{setHoverColour(null)}
  return (
    <div style={
        {
            width: '100%',
            height: '70px', // 50px height
            backgroundColor: 'lightgrey',
            display: 'flex',
            justifyContent: 'right',      
            alignItems: 'center',
        }
    }>
        <Link to="/">
        <button style={
            {
                marginLeft: '20px',
                cursor: 'pointer',
                border: 'none',
                backgroundColor:hovered===1?'#a7a9a8':'lightgrey',
                transition: "all 0.3s ease",
                fontSize:'130%',
            }}
            onMouseEnter={()=>handleMouseHover(1)}
            onMouseLeave={handleMouseLeave}
            >HOME</button>
        </Link>
        <Link to="/products">
        <button style={
            {
                marginLeft: '20px',
                marginRight:'10px',
                cursor: 'pointer',
                border: 'none',
                backgroundColor:hovered===2?'#a7a9a8':'lightgrey',
                transition: "all 0.3s ease",
                fontSize:'130%',
            
            }}
            onMouseEnter={()=>handleMouseHover(2)}
            onMouseLeave={handleMouseLeave}
            >PRODUCTS</button>
        </Link> 
    </div>
  )
}

export default Navbar