import React, { useState } from 'react';
import './OurValues.css';

export default function OurValues() {
  const [data, setData] = useState(false);
  const[data1,setData1] = useState(false);
  const [data2,setData2] = useState(false);

  const handleToggle = () => {
    setData(!data);
  };
const handleToggle1 = () => {
    setData1(!data1);
}
const handleToggle2 = () => {
    setData2(!data2)
}
  return (
    <div className="our-values-container">
      <div className="image-section">
        <img src="/Values/v1.png" alt="Our Values" />
      </div>

      <div className="content-section">
        <h1>Our Core Values</h1>
        <h2>Value We Give to You</h2>
        <p>
          We are always ready to help by providing the best services for you.
          <br />
          We believe a good place to live can make your life better.
        </p>

        <fieldset className="value-card">
  <div className="card-header" onClick={handleToggle}>
    <h3>Best Interest Rates on the Market</h3>
    <span className="dropdown-icon">{data ? '▲' : '▼'}</span>
  </div>
  {data && (
    <div className="card-body">
      <p>
        We partner with top financial institutions to offer you competitive and flexible mortgage options.
        Whether you're a first-time buyer or looking to refinance, our team helps you secure the lowest
        interest rates with personalized loan solutions tailored to your budget and goals.
      </p>
    </div>
  )}
</fieldset>


        <fieldset className="value-card">
  <div className="card-header" onClick={handleToggle1}>
    <h3>Price Stability Commitment</h3>
    <span className="dropdown-icon">{data1 ? '▲' : '▼'}</span>
  </div>
  {data1 && (
    <div className="card-body">
      <p>
        We believe in transparent and stable pricing, ensuring that you’re never caught off guard by sudden market shifts or hidden costs. 
        Our pricing model is designed to give you confidence and clarity throughout the buying or renting process.
      </p>
    </div>
  )}
</fieldset>

<fieldset className="value-card">
  <div className="card-header" onClick={handleToggle2}>
    <h3>Market-Leading Offers</h3>
    <span className="dropdown-icon">{data2 ? '▲' : '▼'}</span>
  </div>
  {data2 && (
    <div className="card-body">
      <p>
        Our exclusive access to premium listings, early market releases, and limited-time promotions means 
        you get the best deals before anyone else. Whether you're buying, selling, or investing, we make sure 
        you always stay ahead of the market curve.
      </p>
    </div>
  )}
</fieldset>

         
      </div>
    </div>
  );
}
