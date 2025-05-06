import React from 'react';

const Components = () => {
  return (
    <>
    <h1>Component</h1>
    <ul>
      <li>Components are just like functions that return HTML elements.</li>
      <li>Component is a reusable block/bit of code.</li>
      <li>Used to make dynamic and interactive web pages/UI.</li>
      <li>In react, our webpage is divided into multiple react components.</li>
    </ul>
    <h1>Class vs Functional Components</h1>
    <h3>Class Components</h3>
    <ul>
        <li>Stateful:- Can manage State.</li>
        <li>Lifecycle:- Access to Lifecycle Methods.</li>
        <li>More Boilerplate Code.</li>
        <li>Not Preferred Anymore.</li>
    </ul>
    <h3>Functional Components</h3>
    <ul>
        <li>Initially Was Stateless.</li>
        <li>Can use Hooks for State & Effects.</li>
        <li>Simple & More concise.</li>
        <li>More Popular.</li>
    </ul>
    <h2>Controlled & Uncontrolled Components.</h2>
    <p>Both are used for form data handling/ managing.</p>
    <ul>
      <li>Controlled - React controls the form data via state(onChange).</li>
      <li>Uncontrolled - DOM maintains the form data. We can access the value by useRef directly.</li>
    </ul>
    </>
  )
}

export default Components;