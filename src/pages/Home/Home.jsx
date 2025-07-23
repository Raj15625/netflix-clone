import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/cards/hero_banner.jpg';  // ✅ correct path
import hero_title from '../../assets/cards/hero_title.png';    // ✅ correct path

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
       <img src="https://via.placeholder.com/800x300" alt="Test Banner" />

        <div className="hero_caption">
          <img src={hero_title} alt="Hero Title" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living in modern
            Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
