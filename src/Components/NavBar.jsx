import React from 'react';
import PlanetLogo from '../Images/planet.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="userOval">
        <img className="Logo" src={PlanetLogo} alt="" />
      </div>
      <div className="Nav">
        <h1>Empty Nav</h1>
        <h1>Empty Nav</h1>
      </div>
    </div>
  );
}

export default NavBar;
