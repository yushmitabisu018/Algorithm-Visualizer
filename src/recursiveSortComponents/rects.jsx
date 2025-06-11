import React from 'react';
import Rect from './rect';

const Rects = ({ rects }) => {
  const margin = rects.length > 50 ? 1 : 5;
  const rectWidth = rects.length > 50 ? '15px' : '20px';  // smaller width after 50
  const showValue = rects.length <= 50;  // only show values if <= 50

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '250px',
        marginTop: '20px',
      }}
    >
      {rects.map((rect, index) => (
        <Rect
          key={index}
          rect={rect}
          index={index}
          marg={margin}
          rectWidth={rectWidth}
          showValue={showValue}
        />
      ))}
    </div>
  );
};

export default Rects;
