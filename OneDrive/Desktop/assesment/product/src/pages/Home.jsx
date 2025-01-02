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
            <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{ width: '50px', height: '50px' }} 
                />
              </td>
              <td>{product.title}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        </div>
  )
}

export default Home