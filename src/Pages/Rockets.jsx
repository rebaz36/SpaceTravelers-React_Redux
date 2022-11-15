import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from '../Components/Rocket/RocketCard';
import { getRockets } from '../Redux/Rockets/Rockets';

export default function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  console.log(rockets);
  return (
    <div>
      <RocketCard />
    </div>
  );
}
