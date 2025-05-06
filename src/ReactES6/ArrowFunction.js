import React from 'react'

//e.g. 1
hello = function(){
    return "Hello World!";
}
//e.g. 2 with arrow fxn
hello = () => {
    return "Hello World2!";
}
//e.g. 3 
hello = () => "Hello World3!"; //this will work only if fxn has one statement only.
//e.g. 4 with parameters.
hello = (val) => "Hello " + val;
//e.g. 5 without parenthesis.
hello = val => "Hello " + val;

const ArrowFunction = () => {
  return (
    <>
        <h2>React Arrow Functions</h2>
        <p>Arrow function allow us to write a shorter function syntax.</p>

    </>
  )
}

export default ArrowFunction;