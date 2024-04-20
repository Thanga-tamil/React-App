import './SingleCard.css'
import sCard1 from './assets/singleCard1.avif'
import sCard2 from './assets/singleCard2.avif'
import sCard3 from './assets/singleCard3.avif'
import sCard4 from './assets/singleCard4.avif'

export const SingleCard = () => {
  return (
    <div className='mainCon'>
      <div className='borderCon'>
        <div className='Container1'>
          <div className='ImageContainer'>
            <img src={sCard1} alt='img1' className='SingleCardImg1' />
            <div className='ContentOverImage'></div>
          </div>
          <div className='ImageContainer'>
            <img src={sCard2} alt='img1' className='SingleCardImg1' />
            <div className='ContentOverImage'></div>
          </div>
        </div>
        <div className='Container2'>
          <div className='ImageContainer'>
            <img src={sCard3} alt='img1' className='SingleCardImg1' />
            <div className='ContentOverImage'></div>
          </div>
          <div className='ImageContainer'>
            <img src={sCard4} alt='img1' className='SingleCardImg1' />
            <div className='ContentOverImage'></div>
          </div>
        </div>
      </div>

      <div className='text'>
        <p className='textCon'>
          Unique code, scripts and plugins made by world class creators
        </p>
        <button className='btn3'>View all Code</button>
      </div>
    </div>
  )
}

export default SingleCard
