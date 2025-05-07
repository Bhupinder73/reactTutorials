import React, { useState } from 'react'

const UseState = () => {
  const [color, setColor] = useState("red");
  const updateColor = () => {
    setColor("blue");
  }

  const [car, setCar] = useState({
    brand:'Ford',
    model:'Mustang',
    year:2025,
    color:'yellow'
  });
  const updateCar = () => {
    // setCar({year:"2015"});
    setCar(prev => {
      return {...prev, year:2015, color:"red"}
    });
  }

  return (
    <>
        <h2>useState Hook</h2>
        <p>The react useState Hook allows us to track the state in a function component.</p>
        <p>State can be a data or a property that nedd to be tracking in an application.</p>
        <p>The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these.</p>
        <p>useState accepts an initial state and returns two values:-</p>
        <ul>
          <li>The current state.</li>
          <li>A function that updates the state.</li>
        </ul>

        <h3>Color changes by hook: {color}</h3>
        <button onClick={updateColor}>Blue</button>

        <h3>My {car.brand}</h3>
        <p>It is a {car.color} {car.model} from {car.year}</p>
        <button onClick={updateCar}>Year</button>
    </>
  )
}

export default UseState;