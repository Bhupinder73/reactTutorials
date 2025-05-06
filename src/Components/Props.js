import React from 'react'

const Props = (props) => {
  return (
    <>
        <h2>Props</h2>
        <ul>
            <li>props stands for properties.</li>
            <li>props are arguments passed into react components.</li>
            <li>props are passed to components via HTML attributes.</li>
            <li>If we want to share any data from one component to another component, then we can do it by props.</li>
            <li>React Props are read-only! We will get an error if we try to change their value.</li>
        </ul>
        <p>This value is passed as props = {props.brand}</p>
    </>
  )
}

export default Props;