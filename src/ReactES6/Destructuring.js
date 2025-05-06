import React from 'react'

//Example of Destructuring:-
const vehicles = ['mustang', 'f-150', 'expedition'];
//old way:-
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
//with destructuring:-
const [car1, truck1, suv1] = vehicles;
const [car2, , suv2] = vehicles;

//in function:-
function calculate(a,b){
    const add = a+b;
    const subtract = a-b;
    const multiply = a*b;
    const divide = a/b;
    return [add, subtract, multiply, divide];
}
const [add, substruct, multiply, divide] = calculate(2,4);
const [add1,substruct1,,divide1] = calculate(3,6); anydesk

const Destructuring = () => {
  return (
    <>
        <h2>Destructuring</h2>
        <i>Extract only what is needed.</i>
        <p>Example to understand:-</p>
        <p>Suppose, we will make a sandwich. Do you take everything out of the refrigerator to make a sandwich? No, you only take out the items you would like to use on your sandwich.</p>
        <p>Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of items contained in these.</p>
    </>
  )
}

export default Destructuring;