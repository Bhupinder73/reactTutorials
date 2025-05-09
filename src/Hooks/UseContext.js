import React from 'react'
import Component1, { UseContext1 } from './ContextComp/Component1';

const UseContext = () => {
  return (
    <>
        <h2>useContext Hook</h2>
        <p>A way to manage state globally.</p>
        <p>It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
        <h3>Problem resolved by Context(prop drilling).</h3>
        <p>Suppose, we have nested components. The component at the top and bottom of stack need access to the state.</p>
        <p>Without Context, we will need to pass the state as "props" through each nested Component. This is called <b>prop drilling</b>.</p>
        <p>Passing "props" through nested components:-</p>
        <Component1/>
        <p>Even Though components 2 to 4 did not need the state, they had to pass state so that it could reach component 5.</p>
        <h3>The Solution</h3>
        <p>The Solution is to create context.</p>
        <ul>
            <li>To <b>create context</b>, we must import createContext and initialize it.</li>
            <li><b>Context Provider</b> - wrap child components in the context provider and supply the state value.</li>
            <li>Now, all components that is <b>wrapped inside context provider</b> will have access to the user context.</li>
            <li>In order to use that Context in a child component, we need to access it by using the <b>useContext Hook</b>.</li>
        </ul>
        <h3>Example of useContext Hook:-</h3>
        <UseContext1/>
    </>
  )
}

export default UseContext;