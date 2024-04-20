import './Card5.css'
import card5_1 from './assets/card-img-1.avif'
import card5_2 from './assets/card-img-2.avif'
import card5_3 from './assets/card-img-3.avif'
import card5_4 from './assets/card-img-4.avif'

import React from 'react'

export const Card5 = () => {
  return (
    <>
      <div className='container'>
        <div className='leftBox'>
          <h1 className='tit_name'>Featured code</h1>
          <p className='tit_con'>
            Every week, our staff personally hand-pick some of the best new
            code, scripts and plugins from our collection.
            <button className='btn1'>View all Featured code items</button>
          </p>
        </div>
      </div>
      <dev className='container2'>
        <div className='rightBox'>
          <div className='rightContainer'>
            <img src={card5_1} alt='img1' className='card5_1'></img>
            <p className='im1-con'>
              CC Avenue Payment Gateway Module for perfexx CRM
              <p className='cont2'>by corbiteltech in Add</p>
              <p className='cont3'>$153 || 🌟🌟🌟🌟🌟 (1530)</p>
            </p>
          </div>
          <div className='rightContainer'>
            <img src={card5_2} alt='img2' className='card5_2'></img>
            <p className='im1-con'>
              InfluencerFly - Promotional Services Marketplace
              <p className='cont2'>by corbiteltech in Add</p>
              <p className='cont3'>$39 || 🌟🌟🌟🌟 (156)</p>
            </p>
          </div>
        </div>
        <div className='rightBox2'>
          <div className='rightContainer'>
            <img src={card5_3} alt='img3' className='card5_3'></img>
            <p className='im1-con'>
              CC Avenue Payment Gateway Module for perfexx CRM
              <p className='cont2'>by corbiteltech in Add</p>
              <p className='cont3'>$40 || 🌟🌟🌟🌟 (86)</p>
            </p>
          </div>
          <div className='rightContainer'>
            <img src={card5_4} alt='img4' className='card5_4'></img>
            <p className='im1-con'>
              InfluencerFly - Promotional Services Marketplace
              <p className='cont2'>by corbiteltech in Add</p>
              <p className='cont3'>$83 || 🌟🌟🌟🌟🌟 (456)</p>
            </p>
          </div>
        </div>
      </dev>
    </>
  )
}
