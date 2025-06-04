import React from 'react';
import miImagen from '../images/1.webp';
import miVideo1 from '../images/1.mp4';
import miVideo2 from '../images/2.mp4'; 
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <img src={miImagen} alt="Logo" className="logo" />

      <p className="descripcion">Mira nuestras referencias nuevas</p>

      <div className="video-container">
        <video className="video" controls loop autoPlay muted>
            <source src={miVideo1} type="video/mp4" />
        </video>
        <video className="video1" controls loop autoPlay muted>
            <source src={miVideo2} type="video/mp4" />
        </video>
        </div>
            </div>
  );
};

export default Home;

