import PropTypes from 'prop-types';
import React from 'react';

const arc = (size, radius, startDegrees, endDegrees) => {
  const offsetRadians = 0;
  const sweepFlag = 1;
  const startRadians = offsetRadians + (startDegrees * Math.PI) / 180;
  const endRadians = offsetRadians + (endDegrees * Math.PI) / 180;
  const largeArc = (endRadians - startRadians) % (2 * Math.PI) > Math.PI ? 1 : 0;
  const startX = size / 2 + radius * Math.cos(startRadians).toFixed(3);
  const startY = size / 2 + radius * Math.sin(startRadians).toFixed(3);
  const endX = size / 2 + radius * Math.cos(endRadians).toFixed(3);
  const endY = size / 2 + radius * Math.sin(endRadians).toFixed(3);
  return <path d={`M ${startX} ${startY} A ${radius} ${radius} ${offsetRadians} ${largeArc} ${sweepFlag} ${endX} ${endY}`} />;
}

const endPoint = (size, strokeWidth, radius, degrees) => {
  const radians = (degrees * Math.PI) / 180;
  const x = size / 2 + radius * Math.cos(radians).toFixed(3);
  const y = size / 2 + radius * Math.sin(radians).toFixed(3);
  return <circle fill="yellow" r={strokeWidth} cx={x} cy={y} />;
}

const CapentaLogo = ({ size }) => (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
    <circle fill="black" r={size / 2} cx={size / 2} cy={size / 2} />
    <g fill="transparent" strokeLinecap="round" strokeWidth="10" stroke="yellow">
      {arc(size, 50, 0, 160)}
      {endPoint(size, 3, 50, 0)}
      {endPoint(size, 3, 50, 160)}
      {arc(size, 65 + 2, 30, 190)}
      {endPoint(size, 3, 65 + 2, 30)}
      {endPoint(size, 3, 65 + 2, 190)}
      {arc(size, 80 + 4, 60, 220)}
      {endPoint(size, 3, 80 + 4, 60)}
      {endPoint(size, 3, 80 + 4, 220)}
      {arc(size, 95 + 6, 90, 250)}
      {endPoint(size, 3, 95 + 6, 90)}
      {endPoint(size, 3, 95 + 6, 250)}
      {arc(size, 110 + 8, 120, 270)}
      {endPoint(size, 3, 110 + 8, 120)}
      {endPoint(size, 3, 110 + 8, 270)}
    </g>
  </svg>
);

CapentaLogo.propTypes = {
  size: PropTypes.number,
};

CapentaLogo.defaultProps = {
  size: 300,
};

export default CapentaLogo;
