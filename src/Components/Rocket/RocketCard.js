/* eslint-disable react/prop-types */
import React from 'react';
import './RocketCard.css';

function RocketCard(prop) {
  const { props } = prop;

  const {
    id, rocketName, description, flickrImages,
  } = props;
  return (
    <div className="Rocket__card">
      <img src={flickrImages[0]} alt={rocketName} />
      <div className="Rocket__info">
        <h3>{rocketName}</h3>
        <p>
          <span>reserved</span>
          {description}
        </p>
        <button type="button" id={id}>Reserve Rocket</button>
      </div>
    </div>
  );
}

export default RocketCard;
