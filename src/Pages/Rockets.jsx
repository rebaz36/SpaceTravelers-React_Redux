/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from '../Components/Rocket/RocketCard';
import { getRockets } from '../Redux/Rockets/Rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets.rockets);
  useEffect(() => {
    if (rockets.length === 0) { dispatch(getRockets()); }
  }, [dispatch]);
  return (
    <div className="rockes">
      {rockets.map((rocket) => <RocketCard props={rocket} key={rocket.id} />)}
    </div>
  );
};

export default Rockets;
