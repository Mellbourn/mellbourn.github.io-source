import PropTypes from 'prop-types';
import React from 'react';

const arc = (size, radius, startDegrees, endDegrees) => {
  const offsetRadians = 0;
  const sweepFlag = 1;
  const startRadians = offsetRadians + (startDegrees * Math.PI) / 180;
  const endRadians = offsetRadians + (endDegrees * Math.PI) / 180;
  const largeArc = (endRadians - startRadians) % (2 * Math.PI) > Math.PI ? 1 : 0;
  const startX = (size / 2 + radius * Math.cos(startRadians)).toFixed(3);
  const startY = (size / 2 + radius * Math.sin(startRadians)).toFixed(3);
  const endX = (size / 2 + radius * Math.cos(endRadians)).toFixed(3);
  const endY = (size / 2 + radius * Math.sin(endRadians)).toFixed(3);
  return (
    <path d={`M ${startX} ${startY} A ${radius} ${radius} ${offsetRadians} ${largeArc} ${sweepFlag} ${endX} ${endY}`} />
  );
};

const CapentaLogo = ({ size }) => {
  const scale = value => ((value * size) / 300).toFixed(3);
  const cx = size / 2;
  const cy = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle fill="black" r={size / 2} cx={cx} cy={cy} />
      <g fill="transparent" strokeLinecap="round" strokeWidth={scale(20)} stroke="yellow">
        {arc(size, scale(40), 0, 160)}
        {arc(size, scale(70 + 4), 60, 220)}
        {arc(size, scale(100 + 8), 120, 270)}
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${cx} ${cy}`}
          to={`360 ${cx} ${cy}`}
          dur="180s"
          repeatCount="indefinite"
        />
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
