import React from 'react'

const Hook = () => {
  return (
    <>
        <h2>React Hooks</h2>
        <p>Hooks were added to react in version 16.8.</p>
        <p>Hooks allow functional Components to have access to state and other react features like lifecycle methods.</p>
        <p>Because of this, class Components are generally no longer needed.</p>
        <p>We can use hooks by import from react.</p>
        <h3>Hook Rules</h3>
        <p>There are 3 rules for hooks:-</p>
        <ul>
            <li>Hooks can only be used inside the react Functional Components.</li>
            <li>Hooks can only be called at the top level of a Component.</li>
            <li>Hooks cannot be conditional.</li>
        </ul>
        <p><b>Note: </b>Hooks will not work in React class Components.</p>
    </>
  )
}

export default Hook;