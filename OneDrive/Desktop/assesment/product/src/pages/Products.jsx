import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Products() {
    const[hovered,setHoverColour]=useState(null)                //background colour change on hovering
        const handleMouseHover=(index)=>{setHoverColour(index)}
        const handleMouseLeave=()=>{setHoverColour(null)}
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        price: '',
        category: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Reset form fields
        setFormData({ name: '', image: '', price: '', category: '' });
      };

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '90px'}}>
    <h1>Add a New Product</h1>
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px',marginTop: '10px' }}>     
      <div style={{ marginBottom: '10px'}}>
        <label style={{marginRight:'100px',fontSize:'130%',}}>Product Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          style={{fontSize:'130%'}}
        />
      </div>
      <div style={{ marginBottom: '10px'}}>
        <label style={{marginRight:'132px',fontSize:'130%',}}>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          required
          style={{fontSize:'130%'}}
        />
      </div>
      <div style={{ marginBottom: '10px'}}>
        <label style={{marginRight:'186px',fontSize:'130%',}}>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
          style={{fontSize:'130%'}}
        />
      </div>
      <div style={{ marginBottom: '10px'}}>
        <label style={{marginRight:'147px',fontSize:'130%',}}>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
          style={{fontSize:'130%'}}
        />
      </div>
      <div>
      <button type="submit" style={{fontSize:'130%',marginTop:'15px',marginLeft:'200px'}}>
        Submit</button>
    
    <Link to="/" style={{textDecoration:hovered===3? 'underline':'none',marginLeft:'74px'}}
        onMouseEnter={()=>handleMouseHover(3)}
        onMouseLeave={handleMouseLeave}>
            Back to Product List</Link>
    </div>
    </form>
  </div>
  )
}

export default Products