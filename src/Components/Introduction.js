import React from 'react';

const Introduction = () => {
  return (
    <>
        <h1>React Docs</h1>
        <ul>
            <li>React is a JavaScript Frontend Library for making user interfaces.</li>
            <li>React is used to make Single Page Application.</li>
            <li>React allow us to make reusable UI Components.</li>
            <li>React was developed by Facebook in 2011. And Initial release to public was in July 2013.</li>
            <li>And Now maintained by Meta.</li>
        </ul>
        <h3>How does React Work?</h3>
        <p>React creates a VIRTUAL DOM in memory.</p>
        <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulation, before making the changes in the browser's DOM. React only changes what needs to be changed!</p>
    </>
  )
}

export default Introduction;