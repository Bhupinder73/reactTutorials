import React from 'react';

const Components = () => {
  return (
    <>
    <h1>Component</h1>
    <ul>
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
    </>
  )
}

export default Components;