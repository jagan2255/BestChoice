import React from 'react';
import './HomeBanner.css';
import image from '../Images/52635b08f324605d68893e4577b36293.png'

function HomeBanner() {
  return (
    <div className='homeBanner'>
  <div>
    <img className='imageclass' src={image} alt="" /> 
    <div className='tabbar'>
        <p>Home</p>
        <p>About</p>
        <p>Service</p>
        <p>Media</p>
        <p>Career</p>
        <p>Contact</p>
    </div>
  </div>

    </div>
  )
}

export default HomeBanner