import React from 'react'

const Jsx = () => {

    let myName = 'Bhupinderpreet Singh';
    const num = 573;

  return (
    <>
      <h1 style={{'color':'red'}}>JSX</h1>
      <ol>
        <li>JSX Stands for JavaScript XML or Extension.</li>
        <li>Jsx allow us to write html inside the JavaScript Code.</li>
        <li>Jsx determines how the UI will look whenever the component is used.</li>
      </ol>
      <p>Edition by {myName} {num}</p>
    </>
  )
}

export default Jsx