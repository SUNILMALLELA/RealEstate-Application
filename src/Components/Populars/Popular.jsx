// import React from 'react';
// import Images from './Pop';
// import './Popular.css'; 

// export default function Popular() {
//   return (
//     <div className="popular-container">
//       <h1 className="popular-title">Best Choices  --------- Popular Residencies ---------  </h1>
//       <div className="popular-grid">
//         {Images.map((item) => (
//           <div key={item.id} className="property-card">
//             <img src={item.image} alt={item.title} className="property-image" />
//             <h4 className="property-title">{item.title}</h4>
//             <p className="property-address">{item.address}</p>
//             <p className="property-price">Sold for: ₹{item.priceSold.toLocaleString()}</p>
//             <p className="property-status">{item.status}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



































import React from 'react';
import Images from './Pop';
import './Popular.css';

export default function Popular() {
  return (
    <div className="popular-container">
      <h1 className="popular-title">
        Best Choices  --------- Popular Residencies ---------
      </h1>
      <div className="popular-grid">
        {Images.map((item) => (
          <div key={item.id} className="property-card">
            <img src={item.image} alt={item.title} className="property-image" />
            <h4 className="property-title">{item.title}</h4>
            <p className="property-address">{item.address}</p>
            <p className="property-price">Sold for: ₹{item.priceSold.toLocaleString()}</p>
            <button className="property-button">Click</button>
          </div>
        ))}
      </div>
    </div>
  );
}
