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
  return (
    <path d={`M ${startX} ${startY} A ${radius} ${radius} ${offsetRadians} ${largeArc} ${sweepFlag} ${endX} ${endY}`} />
  );
};

const CapentaLogo = ({ size }) => {
  const scale = size / 300;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle fill="black" r={size / 2} cx={size / 2} cy={size / 2} />
      <g fill="transparent" strokeLinecap="round" strokeWidth={20 * scale} stroke="yellow">
        {arc(size, 40 * scale, 0, 160)}
        {arc(size, 70 * scale + 4 * scale, 60, 220)}
        {arc(size, 100 * scale + 8 * scale, 120, 270)}
      </g>
    </svg>
  );
};

CapentaLogo.propTypes = {
  size: PropTypes.number,
};

CapentaLogo.defaultProps = {
  size: 300,
};

export default CapentaLogo;
