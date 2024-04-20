import './SearchBox.css'
import fix from './assets/fix.webp'

export const SearchBox = () => {
  return (
    <>
      <div className='languageList'>
        <ul className='list'>
          <li className='listItems'>All Items</li>
          <li className='listItems'>All Items</li>
          <li className='listItems'>Word Press</li>
          <li className='listItems'>eCommerce</li>
          <li className='listItems'>JavaScript</li>
          <li className='listItems'>CSS</li>
          <li className='listItems'>Mobile</li>
          <li className='listItems'>HTML5</li>
          <li className='listItems'>AI Tools</li>
          <li className='listItems'>WP Themes</li>
          <li className='listItems'>Mockup Generator</li>
          <li className='listItems'>More</li>
        </ul>
      </div>

      <div className='cont'>
        <h1 className='cont1'>
          Thousands of code, scripts & plugins for every website build
        </h1>
        <p className='cont2'>
          Choose from ecommerce plugins, mobile app templates, PHP, Bootstrap &
          more for any budget, built by the world’s best developers.
        </p>

        <div className='input-container'>
          <input placeholder='  e.g. java...'></input>
          <button className='btn2'>
            <i className='fa-solid fa-magnifying-glass'></i> Search
          </button>
          <button className='btn2'>Search</button>
        </div>
      </div>

      <div className='img'>
        <img src={fix} alt='img' className='fix-image'></img>
      </div>
    </>
  )
}

export default SearchBox
