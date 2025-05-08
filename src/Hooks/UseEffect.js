import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCounter] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count*2);
    }, [count]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCounter(count+1);
    //     }, 1000);
    // });
    
    //Example:-
    //1.No dependency passed.
    // useEffect(() => {
    //     //Runs on every render
    // });
    //2.An Empty array.
    // useEffect(() => {
    //     //Runs only on the first render
    // }, []);
    //3.Props or state values.
    // useEffect(() => {
    //     //Runs on first render & any time dependency value changes
    // }, [prop, state]);

  return (
    <>
        <h2>useEffect Hook</h2>
        <p>The useEffect Hook allows us to perform side effects in our components.</p>
        <p>E.g.state change, fetching data, directly updating the DOM, and timers.</p>
        <p>useEffect accepts two arguments.Second is optional.</p>
        <ul>
            <li>function</li>
            <li>dependency</li>
        </ul>
        <p>Syntax: <b>useEffect(function, dependency)</b>.</p>

        {/* <h3>I've rendered {count} times!</h3> */}

        <p>Count : {count}</p>
        <button onClick={() => setCounter((c) => c+1)}>+</button>
        <p>Calculation: {calculation}</p>
    </>
  )
}

export default UseEffect;