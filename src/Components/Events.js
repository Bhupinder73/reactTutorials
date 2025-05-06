import React from 'react'

const Events = () => {
    const shoot = () => {
        alert("Great Shot!");
    }

    const shoot1 = (a) =>{
        alert(a);
    }

    const shoot2 = (b) =>{
        alert(b.type);
    }

  return (
    <>
        <h2>React Events</h2>
        <p>Events means actions performed by users.</p>
        <p>Just Like HTML DOM events, React can perform actions based on user events.</p>
        <p>React has the same events as HTML: click, change, mouseover etc.</p>
        <h3>Adding Events:-</h3>
        <p>React events are written in camelCase syntax:- <b>onClick</b> instead of onclick.</p>
        <p>React event handlers are written inside curly braces:- onClick=&#123;shoot&#125; instead of onclick="shoot()".</p>
        <button onClick={shoot}>Take the shot!</button>

        <h3>Passing Arguments:-</h3>
        <p>To pass an argument to an event handler, use an arrow function.</p>
        <button onClick={() => shoot1('Goal!')}>Another Shot!</button>

        <h3>React Event Object:-</h3>
        <p>use arrow function for sending the event object manually.</p>
        <button onClick={(event) => shoot2(event)}>Take more Shot!</button>
    </>
  )
}

export default Events;