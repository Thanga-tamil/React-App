import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import SearchBox from './SearchBox'
import { Cards } from './Cards'
import { SingleCard } from './SingleCard'
import { Card5 } from './Card5'
import SingleCardTow from './SingleCardTwo'
import BtnBox from './BtnBox'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <SearchBox />
    <Cards />
    <SingleCard />
    <Card5 />
    <SingleCardTow />
    <BtnBox />
  </React.StrictMode>
)

reportWebVitals()
