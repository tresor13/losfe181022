import React, { FC } from 'react';
import './panel.css';

type Props = {
  image: string;
}

const Panel:FC<Props> = ({ image }) => {
  return (
    <section style={{ backgroundImage: `url(${image})` }} className='section' />
  );
};

export default Panel;
