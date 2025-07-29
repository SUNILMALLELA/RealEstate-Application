
import React from 'react';
import Images from './BrandsImg';
import './Brands.css'; 

export default function Brands() {
  return (
    <div className="brand-container">
      {Images.map((item, index) => (
        <div className="brand-card" key={index}>
          <img src={item.src} alt={item.Brand} />
          <h1>{item.Brand}</h1>
        </div>
      ))}
    </div>
  );
}
