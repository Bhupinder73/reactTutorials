import React from 'react'

//e.g. of array:-
const number1 = [1,2,3];
const number2 = [4,5,6];
const number3 = [...number1, ...number2];

const number = [1,2,3,4,5,6];
const [one, two, ...rest] = number;

//e.g. of object:-
const obj1 = {
    brand: 'ford',
    model: 'mustang',
    color: 'red'
}
const obj2 = {
    type:'car',
    year: 2025,
    color: 'yellow'
}

const myUpdatedObj = {...obj1, ...obj2};

const SpreadOperator = () => {
  return (
    <>
        <h2>React Spread Operator</h2>
        <p>The spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.</p>
        <p>The spread operator is often used in combination with destructuring.</p>
        <p>Note:- The properties that did not match were combined, but the properties that did match, like color in two objects are same, was overwritten by the last object. The resulting color is now Yellow.</p>
    </>
  )
}

export default SpreadOperator;