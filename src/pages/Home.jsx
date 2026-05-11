// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Stars = () => {
//   const stars = Array.from({ length: 150 }); 
//   return (
//     <>
//       {stars.map((_, i) => {
//         const top = Math.random() * 100;
//         const left = Math.random() * 100;
//         const size = Math.random() * 3 + 1;
//         const speed = Math.random() * 3 + 1;
//         const delay = Math.random() * 5;
//         return (
//           <div
//             key={i}
//             className="star"
//             style={{
//               top: `${top}%`,
//               left: `${left}%`,
//               width: `${size}px`,
//               height: `${size}px`,
//               animationDuration: `${speed}s`,
//               animationDelay: `${delay}s`,
//             }}
//           ></div>
//         );
//       })}
//     </>
//   );
// };

// const Home = () => {
//   const [showPlane, setShowPlane] = useState(true);

//   return (
//     <div className="home-container">
//       <Stars />
//       <div className="mist"></div>
      
      
//       {showPlane && (
//         <div className="plane">✈️</div>
//       )}
      
//       <div className="home-content">
//         <h1>Welcome to Voyago</h1>
//         <p>Explore hundreds of amazing trips!</p>
//         <p>Choose your preferred type: Air, Sea, or Land.</p>
//         <p>Book now and earn points for free trips!</p>

//         <Link to="/trips">
//           <button className="explore-btn">Explore Trips 🚀</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Stars = () => {
  const stars = Array.from({ length: 150 });

  return (
    <>
      {stars.map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const speed = Math.random() * 3 + 1;
        const delay = Math.random() * 5;

        return (
          <div
            key={i}
            className="star"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${speed}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <Stars />
      <div className="mist"></div>

      {/* ✈️ الطيارة */}
      
<div className="plane">✈️</div>
      <div className="home-content">
        <h1>Welcome to Voyago</h1>
        <p>Explore hundreds of amazing trips!</p>
        <p>Choose your preferred type: Air, Sea, or Land.</p>
        <p>Book now and earn points for free trips!</p>

        <Link to="/trips">
          <button className="explore-btn">Explore Trips 🚀</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;