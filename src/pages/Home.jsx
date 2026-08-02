import React from 'react'
import cover from "../assets/cover.webp";
import './Home.css'
const Home = () => {
  return (
    <div>
     <div className="hero">
      <img src={cover} alt="Cover" className="cover" />

      <div className="hero-text">
        <h1>Elevate Your Style</h1>
      </div>
    </div>
    <div class="container text-center">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  </div>
    </div>
  )
}

export default Home