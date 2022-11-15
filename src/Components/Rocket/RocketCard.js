/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../Redux/Rockets/Rockets';
import './RocketCard.css';

function RocketCard(prop) {
  const { props } = prop;
  const {
    id, rocketName, description, flickrImages, reserved,
  } = props;

  const dispatch = useDispatch();
  const reservedReckotHandler = (e) => {
    if (reserved === false) {
      dispatch(reserveRocket(e.target.id));
    } else {
      dispatch(cancelRocket(e.target.id));
    }
  };
  return (
    <div className="Rocket__card">
      <img src={flickrImages[0]} alt={rocketName} />
      <div className="Rocket__info">
        <h3>{rocketName}</h3>
        <p>
          {reserved && <span>reserved</span>}
          {description}
        </p>
        <button type="button" id={id} onClick={reservedReckotHandler}>{!reserved ? 'Reserve Rocket' : 'Cancel Reservation'}</button>
      </div>
    </div>
  );
}

export default RocketCard;
