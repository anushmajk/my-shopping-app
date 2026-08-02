import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">JK SHOPPING</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#">All</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Dress</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Blouses</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Jeans</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Shoes</a></li>
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="#">Cart</a></li>
      </ul>
    </div>
  </div>
</nav>
        </div>
  )
}

export default Header