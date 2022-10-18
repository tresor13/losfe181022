import React, { FC } from 'react';
import './sticky.css';

type Props = {
  image: string;
  position: 'top' | 'bottom';
}

const Sticky:FC<Props> = ({ image, position }) => {
  return (
    <div style={{ backgroundImage: `url(${image})`, [position]: 0 }} className='sticky' />
  );
};

export default Sticky;
