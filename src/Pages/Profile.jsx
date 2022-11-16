import React from 'react';
import MyRocket from '../Components/Rocket/MyRocket';
import MyMissions from '../Components/MyMission/MyMissions';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <MyRocket />
      <MyMissions />
    </div>
  );
}
