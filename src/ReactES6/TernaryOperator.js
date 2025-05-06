import React from 'react'

let authenticated = true;
//before:-
if(authenticated){
    //code1
}
else{
    //code2
}

//with ternary operator:-
authenticated ? code1 : code2;

const TernaryOperator = () => {
  return (
    <>
        <h2>Ternary Operator</h2>
        <p>The ternary operator is similar to the conditional operator like if / else.</p>
        <p>Syntax: <b>(condition) ? (expression if true) : (expression if false)</b></p>
    </>
  )
}

export default TernaryOperator;