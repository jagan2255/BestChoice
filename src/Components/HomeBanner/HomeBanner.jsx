import React from 'react';
import './HomeBanner.css';
import image from '../Images/52635b08f324605d68893e4577b36293.png'

function HomeBanner() {
  return (
    <div className='homeBanner'>
  <div>
    <img className='imageclass' src={image} alt="" /> 
  </div>

    </div>
  )
}

export default HomeBanner