import React from 'react';
import './style.css'; 

const Rect = ({ rect, index, marg, showValue, rectWidth }) => {
  const classNames = [
    'rect',
    rect.isSorting ? 'isSorting' : '',
    rect.isSorted ? 'isSorted' : '',
    rect.isLeft ? 'isLeft' : '',
    rect.isRight ? 'isRight' : '',
    rect.isRange ? 'isRange' : ''
  ].join(' ').trim();

  return (
    <div
      className={classNames}
      style={{
        height: `${rect.width}px`,
        width: rectWidth,
        marginLeft: `${marg}px`,
        marginRight: `${marg}px`
      }}
      title={showValue ? `Value: ${rect.width}` : ''}
    >
      {showValue && (
        <span style={{ fontSize: '10px', userSelect: 'none' }}>
          {rect.width}
        </span>
      )}
    </div>
  );
};

export default Rect;
