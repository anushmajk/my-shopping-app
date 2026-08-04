import React from "react";
import cover from "../assets/cover.webp";
import blouse from "../assets/blouse.jpg";
import jeans from "../assets/jeans.jpg";
import shoes from "../assets/shoes.jpg";
import dress from "../assets/dress.jpg";
import store from "../assets/store.webp";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <img src={cover} alt="Cover" className="cover" />
        <div className="hero-text">
          <h1>Elevate Your Style</h1>
        </div>
      </div>

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col hero">
            <img src={blouse} alt="Blouse" className="blouse" />
            <div className="hero-button">
              <button className="btn custom-btn">Blouse</button>
            </div>
          </div>

          <div className="col hero">
            <img src={jeans} alt="Jeans" className="jeans" />
            <div className="hero-button">
              <button className="btn custom-btn">Jeans</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col hero">
            <img src={shoes} alt="Shoes" className="shoes" />
            <div className="hero-button">
              <button className="btn custom-btn">Shoes</button>
            </div>
          </div>

          <div className="col hero">
            <img src={dress} alt="Dress" className="dress" />
            <div className="hero-button">
              <button className="btn custom-btn">Dress</button>
            </div>
          </div>
        </div>
      </div>
       <div className="container-fluid text-center">
        <div className="row">
          <div className="col hero">
            <img src={store} alt="Store" className="store" />
            <div className="hero-button">
              <button className="btn custom-btn">Store</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;