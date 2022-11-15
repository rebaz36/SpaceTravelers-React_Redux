import React from 'react';
import { useSelector } from 'react-redux';
import './MyRocket.css';

const MyRocket = () => {
  const rockets = useSelector((state) => state.Rockets.rockets);
  return (
    <div className="MyRocket">
      <h3>My Rockets</h3>
      <ul>
        {rockets.map((rocket) => {
          if (rocket.reserved === true) { return <li key={rocket.id}>{rocket.rocketName}</li>; }
          return null;
        })}
      </ul>
    </div>
  );
};

export default MyRocket;
