import React from 'react'
import HomeDisplay from '../component/HouseDisplay';

const Home = ({houses}) => {
    console.log(houses);
    // is working 
  return (
    <div>
        <h1>House Listing</h1>
        <HomeDisplay home={houses} />
    </div>
  )
}

export default Home
