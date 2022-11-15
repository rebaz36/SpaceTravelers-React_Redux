import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMissions from '../Redux/Missions/MissionsAPI';
import TableContent from './TableContent';
import './MissionTable.css';

export default function MissionTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      dispatch(getMissions());
    }
    return () => {
      ignore = true;
    };
  }, []);

  const Missions = useSelector((state) => state.Missions);

  return (
    <table className="Table">
      <thead className="Table-Header">
        <tr className="Header-Row-Container">
          <th className="Header-Item">Mission</th>
          <th className="Header-Item">Description</th>
          <th className="Header-Item">Status</th>
          <th className="Header-Item">{}</th>
        </tr>
      </thead>
      <tbody className="Table-Body">
        {Missions.map((mission, index) => (index % 2 ? (
          <TableContent
            cName="Even-Row"
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            des={mission.description}
          />
        ) : (
          <TableContent
            cName="Odd-Row"
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            des={mission.description}
          />
        )))}
      </tbody>
    </table>
  );
}
