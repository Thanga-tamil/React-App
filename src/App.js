import './App.css'
import React from 'react'
import img1 from './assets/envato-logo.png'

export const App = () => {
  return (
    <>
      <nav className='navbar'>
        <img src={img1} className='img-1' alt='img'></img>
        <p className='title'>primeProgram</p>

        <button className='bottom_Nav_content'>Sign Up</button>
        <p className='firstName'></p>
        <ul className='list'>
          <li className='listItem'>Java</li>
          <li className='listItem'>Spring Boot</li>
          <li className='listItem'>MySql</li>
          <li className='listItem'>Python</li>
          <li className='listItem'>JavaScript</li>
          <li className='listItem'>React.js</li>
        </ul>
      </nav>
    </>
  )
}

export default App
