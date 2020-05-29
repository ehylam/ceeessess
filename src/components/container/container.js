import React from 'react';
import Column from '../column/column'
import Image from '../image';

const Container = () => {
  return (
    <div className="container">
      <div className="row">
        <Column><Image/></Column>
        <Column></Column>
      </div>
    </div>
   );
}

export default Container;