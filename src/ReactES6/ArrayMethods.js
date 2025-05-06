import React from 'react'

const ArrayMethods = () => {

    const myArray = ['apple', 'banana', 'orange'];

  return (
    <>
        <h2>Array Methods</h2>
        <p>There are many JavaScript Array Methods.</p>
        <p>One of the most useful in react is the <b>.map()</b> array method.</p>
        <h3>.map() method</h3>
        <p>The .map() method allows us to run on each item in the array, returning a new array as a result.</p>
        <p>In React, map() method can be used to generate lists.</p>
        {myArray.map((item) => <p>{item}</p>)}
    </>
  )
}

export default ArrayMethods