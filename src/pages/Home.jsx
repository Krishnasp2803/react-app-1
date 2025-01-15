import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

  return (
    <div class="App"> 
        <div>
            <Navbar/>
        </div>
        <div style={
            {
                width: '100%',
                height: '100vh', // 100% of the viewport height
            }
            
        }>
            <h1>PRODUCT LIST</h1>
      <table>
        <thead>
          <tr class='listheader'>
            <th style={{fontSize:'150%'}}>Image</th>
            <th style={{fontSize:'150%'}}>Title</th>
            <th style={{fontSize:'150%'}}>Price</th>
            <th style={{fontSize:'150%'}}>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img 
                
                  src={product.image} 
                  alt={product.title} 
                  style={{ width: '150px', height: '150px',marginLeft:'50px',marginRight:'50px' }} 
                />
              </td >
              <td style={{width:'900px',height:'100px',fontSize:'130%',boxShadow:'-8px 5px 10px gray',}}>{product.title}</td>
              <td style={{width:'200px',height:'100px',fontSize:'130%',boxShadow:'0px 5px 10px gray',}}>${product.price.toFixed(2)}</td>
              <td style={{width:'300px',height:'100px',fontSize:'130%',boxShadow:'8px 5px 10px gray',}}>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        </div>
  )
}

export default Home