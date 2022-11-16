import React from 'react';
import PropTypes from 'prop-types';

import './TableContent.css';

export default function TableContent({
  cName,
  name,
  des,
  // eslint-disable-next-line react/prop-types
  reserved,
  id,
  handleMission,
}) {
  return (
    <tr className={cName}>
      <td className="bold">{name}</td>
      <td className="justify">{des}</td>
      <td className="status">
        {reserved ? (
          <h3 className="Active-Member-Text">Active Member</h3>
        ) : (
          <h3 className="Inactive-Member-Text">Not A Member</h3>
        )}
      </td>
      <td className="button-wrapper">
        {reserved ? (
          <button
            className="Inactive-Member"
            type="button"
            onClick={() => {
              handleMission(id);
            }}
          >
            Leave Mission
          </button>
        ) : (
          <button
            className="Active-Member"
            type="button"
            onClick={() => {
              handleMission(id);
            }}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
}

TableContent.propTypes = {
  cName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleMission: PropTypes.func.isRequired,
};
