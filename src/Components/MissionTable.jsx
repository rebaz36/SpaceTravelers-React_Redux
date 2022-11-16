import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../Redux/Missions/Missions';
import TableContent from './TableContent';
import './MissionTable.css';

export default function MissionTable() {
  const Missions = useSelector((state) => state.Missions);
  const dispatch = useDispatch();
  const handleMission = (id) => {
    dispatch(joinMission(id));
  };

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
            reserved={mission.reserved}
            handleMission={handleMission}
          />
        ) : (
          <TableContent
            cName="Odd-Row"
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.mission_name}
            des={mission.description}
            reserved={mission.reserved}
            handleMission={handleMission}
          />
        )))}
      </tbody>
    </table>
  );
}
