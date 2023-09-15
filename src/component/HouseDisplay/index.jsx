import React from 'react'

const HomeDisplay = ({home}) => {

  console.log(home); // is getting the context from the app.jsx

  const availableHouses = home.map( (house, index) => {
      return (
        <li key={index}>
          Name: {house.name} <br />
          Address: {house.address} <br />
          Price: {house.price} <br />
          Status: {house.isSold ? "Sold" : "Available"} 
        </li>
      )
    })
  
    

  return (
    <div>
        <h3>Available Houses</h3>
        <ul>
          {availableHouses}
        </ul>
    </div>
  )
}

export default HomeDisplay