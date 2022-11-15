import React from 'react';
import PropTypes from 'prop-types';
import './TableContent.css';

export default function TableContent({
  cName, id, name, des,
}) {
  return (
    <tr className={cName}>
      <tdc className="bold">{name}</tdc>
      <td className="justify">{des}</td>
      <td>{id}</td>
      <td>empty</td>
    </tr>
  );
}

TableContent.propTypes = {
  cName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};
