import React from 'react';
import './column.scss';



const Column = ({children}) => {
  return (
    <div className="column">
      {children}
    </div>
   );
}

export default Column;