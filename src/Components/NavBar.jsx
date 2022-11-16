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
        <NavLink
          className="Nav-Item"
          to="SpaceTravelers-React_Redux/rockets"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
        >
          Rockets
        </NavLink>
        <NavLink
          className="Nav-Item"
          to="SpaceTravelers-React_Redux/missions"
          style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}
        >
          Missions
        </NavLink>
        <h1>|</h1>
        <NavLink
          className="Nav-Item"
          to="SpaceTravelers-React_Redux/profile"
          style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
        >
          My Profile
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
