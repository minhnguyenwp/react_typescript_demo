import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Placeholder: React.FC = React.memo(() => {
  return (
    <div className="row">
      {Array.from({ length: 25 }, (_, k) => (
        <div key={k} className="cell-20 game-item">
          <Skeleton width="224px" height="134px" borderRadius="10px" />
        </div>
      ))}
    </div>
  );
});

export default Placeholder;
