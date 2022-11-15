/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { reservedRocket } from '../../Redux/Rockets/Rockets';
import './RocketCard.css';

function RocketCard(prop) {
  const dispatch = useDispatch();
  const reservedReckotHandler = (e) => {
    dispatch(reservedRocket(e.target.id));
  };

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
        <button type="button" id={id} onClick={reservedReckotHandler}>Reserve Rocket</button>
      </div>
    </div>
  );
}

export default RocketCard;
