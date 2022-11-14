import React from 'react';
import { NavLink } from 'react-router-dom';
import PlanetLogo from '../Images/planet.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Logo-Container">
        <img className="Logo" src={PlanetLogo} alt="" />
        <h1>Traverlers Hub</h1>
      </div>
      <div className="Nav-List">
        <NavLink className="Nav-Item" to="/">
          Rockets
        </NavLink>
        <NavLink className="Nav-Item" to="/missions">
          Missions
        </NavLink>
        <h1>|</h1>
        <NavLink className="Nav-Item" to="/profile">
          My Profile
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
