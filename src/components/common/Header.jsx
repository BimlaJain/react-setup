import React from 'react'
import bullBear from '../../assets/images/png/bull-and-bear.png';
const Header = () => {
  return (
    <div>    
          <h1 className='text-center'>Lorem, ipsum.</h1>
          <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, natus!</p>
          <img src={bullBear} alt="bull and bear image" className='w-50 d-flex justify-content-center align-items-center mx-auto' />
    </div>
  )
}

export default Header
