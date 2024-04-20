import React from 'react'
import './Cards.css'
import card1 from './assets/card-img-1.avif'
import card2 from './assets/card-img-2.avif'
import card3 from './assets/card-img-3.avif'
import card4 from './assets/card-img-4.avif'
import card5 from './assets/card-img-5.avif'
import card6 from './assets/card-img-6.avif'

export const Cards = () => {
  return (
    <>
      <div className='main'>
        <div className='Card1'>
          <h1 className='name'>Java</h1>
          <p className='plug'>Thousands of Java plugins</p>
          <ul className='linCont'>
            <li className='lin'>Newest</li>
            <ul className='lin'>Bestsellers</ul>
          </ul>

          <img src={card1} alt='card1'></img>
        </div>
        <div className='Card1'>
          <h1 className='name'>Python</h1>
          <p className='plug'>Thousands of Python plugins</p>
          <ul className='linCont'>
            <li className='lin'>Newest</li>
            <ul className='lin'>Bestsellers</ul>
          </ul>
          <img src={card2} alt='card1'></img>
        </div>
        <div className='Card1'>
          <h1 className='name'>JavaScript</h1>
          <p className='plug'>Thousands of JavaScript plugins</p>
          <ul className='linCont'>
            <li className='lin'>Newest</li>
            <ul className='lin'>Bestsellers</ul>
          </ul>
          <img src={card3} alt='card1'></img>
        </div>
        <div className='Card1'>
          <h1 className='name'>MySQL</h1>
          <p className='plug'>Thousands of MySQL plugins</p>
          <ul className='linCont'>
            <li className='lin'>Newest</li>
            <ul className='lin'>Bestsellers</ul>
          </ul>
          <img src={card4} alt='card1'></img>
        </div>
        <div className='Card1'>
          <h1 className='name'>React.Js</h1>
          <p className='plug'>Thousands of React.Js plugins</p>
          <ul className='linCont'>
            <li className='lin'>Newest</li>
            <ul className='lin'>Bestsellers</ul>
          </ul>
          <img src={card5} alt='card1'></img>
        </div>{' '}
        <div className='Card1'>
          <h1 className='name'>HTML/CSS</h1>
          <p className='plug'>Thousands of HTML/CSS plugins</p>
          <ul className='linCont'>
            <li className='lin'>Newest</li>
            <ul className='lin'>Bestsellers</ul>
          </ul>
          <img src={card6} alt='card1'></img>
        </div>
        <button className='btn1'>View all Categories</button>
      </div>
    </>
  )
}
