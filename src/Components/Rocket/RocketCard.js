import React from 'react';
import './RocketCard.css';

function RocketCard() {
  return (
    <div className="Rocket__card">
      <img src="https://i.ytimg.com/vi/1yBwWLunlOM/maxresdefault.jpg" alt="Rocket" />
      <div className="Rocket__info">
        <h3>Falcon 1</h3>
        <p>
          The Rockets section displays a list of all available SpaceX
          rockets. Users can book each rocket by clicking the reservation button or
          cancel the previously made booking
        </p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
}

export default RocketCard;
