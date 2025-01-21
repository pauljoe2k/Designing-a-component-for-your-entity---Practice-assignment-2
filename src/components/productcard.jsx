import React from 'react';
import ViewProductButton from '../components/button'; // Adjust the path relative to your folder structure

const Productcard = () => {
  // Static product placeholder data
  const product = {
    name: 'Sample Product',
    price: 19.99,
    image: 'https://picsum.photos/200', // Placeholder image URL
  };

  return (
    <div className="product-card" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: 'auto', height: 'auto', marginBottom: '12px' }} 
      />
      <h3 style={{ fontSize: '1.2em', marginBottom: '8px' }}>{product.name}</h3>
      <p style={{ fontSize: '1em', color: '#555', marginBottom: '16px' }}>${product.price.toFixed(2)}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
