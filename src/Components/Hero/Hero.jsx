import React from 'react';
import './Hero.css';
import Counter from './Counter'; 
 const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>
          Discover<br />
          Most Suitable<br />
          Property
        </h1>
        <h5>
          Find a variety of properties that suit you very easily<br />
          Forget all difficulties in finding a residence for you
        </h5>

        <div className="search-bar">
          <input type="text" placeholder="Search properties..." />
          <button>Search</button>
        </div>

        <div className="stats">
          <div>
            <Counter start={9000} end={10000} speed={1} />
            <h5>Premium Products</h5>
          </div>
          <div>
            <Counter start={4000} end={5000} speed={2} />
            <h5>Happy Customers</h5>
          </div>
          <div>
            <Counter start={50} end={100} speed={30} />
            <h5>Awards Winning</h5>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <img className="hero-image" src="./HouseImg.png" alt="House" />
      </div>
    </div>
  );
};
export default Hero;