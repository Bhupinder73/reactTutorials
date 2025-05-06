import React from 'react'

const Variables = () => {
  return (
    <>
        <h2>React ES6 Variables</h2>
        <p>Before ES6 there was only one way of defining any variable: with the var keyword.</p>
        <p>Now, with ES6, there are three ways of defining Variables: <b>var</b>, <b>let</b>, and <b>const</b>.</p>
        <ul>
            <li>var - has a function scope, not a block scope.</li>
            <li>let - has a block scope.</li>
            <li>const - has a block scope. its value can never change.</li>
        </ul>
    </>
  )
}

export default Variables;