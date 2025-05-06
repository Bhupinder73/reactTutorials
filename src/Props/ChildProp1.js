import React from 'react'

const ChildProp1 = (props) => {
  return (
    <>
        <p>I love the {props.brand} brand.</p>
        <p>My favourite car is {props.car}</p>
        <p>My car details are:-</p>
        <ul>
            <li>Name: {props.carDetails.name}</li>
            <li>Model: {props.carDetails.model}</li>
            <li>Year: {props.carDetails.year}</li>
        </ul>
        <p>My Car Scores are:-</p>
        <ul>
            <li>First time: {props.carStar[0]}</li>
            <li>Second time: {props.carStar[1]}</li>
            <li>Third time: {props.carStar[2]}</li>
            <li>Forth time: {props.carStar.at(3)}</li>
        </ul>
    </>
  )
}

export default ChildProp1;