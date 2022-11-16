/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import './MyMissions.css';

const MyMissions = () => {
  const joinedMissions = useSelector((state) =>
    state.Missions.filter((e) => e.reserved),
  );
  return (
    <div className="container">
      <h3>My Missions</h3>
      <ul className="mission-container">
        {joinedMissions.map((mission) => (
          <li key={mission.mission_id} className="mission">
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyMissions;
