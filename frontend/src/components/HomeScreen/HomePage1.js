import React from 'react'
import './HomeStyle.css'
import homeBanner from '../../assets/homeBanner.jpeg'

function HomePage1() {
  return (
    <div className='homeBanner1'>
      <img src={homeBanner} alt="" />
      <div className='contentHomePage'>
        <div class="card" className='homePageContent1' >
          <div class="card-body">
            <p class="card-text p-2 homePageMessageContent1">adarsh ipsum dolor sit amet consectetur adipisicing elit. Ab, dolore?</p>
          </div>
        </div>
      </div>
      <div className='contentHomePage2'>
        <div class="card" className='homePageContent2' >
          <div class="card-body">
            <p class="card-text p-2 homePageMessageContent2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage1