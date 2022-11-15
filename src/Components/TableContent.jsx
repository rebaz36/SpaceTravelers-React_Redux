import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TableContent.css';

export default function TableContent({
  cName, name, des,
}) {
  const [activeMember, setActiveMember] = useState('Not A Member');
  const [activeClass, setActiveClass] = useState('Inactive-Member');
  const handleClick = () => {
    if (activeMember === 'Not A Member') {
      setActiveMember('Active Member');
      setActiveClass('Active-Member');
    } else {
      setActiveMember('Not A Member');
      setActiveClass('Inactive-Member');
    }
  };
  return (
    <tr className={cName}>
      <td className="bold">{name}</td>
      <td className="justify">{des}</td>
      <td>{activeMember}</td>
      <td className="button-wrapper">
        <button className={activeClass} type="button" onClick={handleClick}>
          {activeMember}
        </button>
      </td>
    </tr>
  );
}

TableContent.propTypes = {
  cName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};
