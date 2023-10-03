import React from 'react';
import comp1 from '../../../assets/icons/comp1.svg';
import comp2 from '../../../assets/icons/comp2.svg';
import comp3 from '../../../assets/icons/comp3.svg';

const Banners = () => {
  return (
    <div className='flex items-center justify-between px-[180px] pb-[60px] banners'>
        <img src={comp1} alt="" />
        <img src={comp2} alt="" />
        <img src={comp3} alt="" />
        <img src={comp2} alt="" />
        <img src={comp3} alt="" />
        <img src={comp1} alt="" />
    </div>
  )
}

export default Banners