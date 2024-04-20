import './SingleCard.css'
import sCard1 from './assets/singleCard1.avif'
import sCard2 from './assets/singleCard2.avif'
import sCard3 from './assets/singleCard3.avif'
import sCard4 from './assets/singleCard4.avif'

export const SingleCardTow = () => {
  return (
    <div className='mainCon'>
      <div className='borderCon'>
        <div className='Container1'>
          <div className='ImageContainer'>
            <img src={sCard3} alt='img1' className='SingleCardImg1' />
            <div className='ContentOverImage'></div>
          </div>
          <div className='ImageContainer'>
            <img src={sCard1} alt='img1' className='SingleCardImg1' />
            <div className='ContentOverImage'></div>
          </div>
        </div>
        <div className='Container2'>
          <div className='ImageContainer'>
            <img src={sCard4} alt='img1' className='SingleCardImg1' />
            <div className='ContentOverImage'></div>
          </div>
          <div className='ImageContainer'>
            <img src={sCard2} alt='img1' className='SingleCardImg1' />
            <div className='ContentOverImage'></div>
          </div>
        </div>
      </div>

      <div className='text'>
        <p className='textCon'>The world-leading Marketplace for coding</p>
        <div className='sBox1'>
          Home of the most popular scripts and plugins of all time
        </div>
        <div className='sBox2'>
          Clear documentation and support avaibale ...
        </div>
        <div className='sBox3'>Quality reviewed creators and items ...</div>
      </div>
    </div>
  )
}

export default SingleCardTow
