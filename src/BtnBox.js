import './BtnBox.css'

import React from 'react'

export const BtnBox = () => {
  return (
    <>
      <div className='maiCon'>
        <h2 className='tit_box'>
          Check out our newest code, scripts and templates
        </h2>
        <p className='tit-p'>
          We carefully review new entries from our community one by one to make
          sure they meet high-quality design and functionality standards. From
          PHP scripts to Bootstrap skins, you’re always sure to find
          high-quality assets created by brilliant professionals.
        </p>

        <div>
          <button className='btn5'>Java</button>
          <button className='btn5'>Spring</button>
          <button className='btn5'>Python</button>
          <button className='btn5'>MySql</button>
          <button className='btn5'>JavaScript</button>
          <button className='btn5'>React.js</button>
          <button className='btn5'>Assembly</button>
          <button className='btn5'>BrainFuck</button>
          <button className='btn5'>Ruby</button>
          <button className='btn5'>Katlin</button>
          <button className='btn5'>Dart</button>
          <button className='btn5'>....Etc....</button>
        </div>
      </div>
    </>
  )
}

export default BtnBox
