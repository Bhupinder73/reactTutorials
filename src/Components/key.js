import React from 'react';

function Car(props){
    return <li>I am a {props.brand}</li>;
}

const key = () => {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];

  return (
    <>
        <h2>Keys</h2>
        <p>Keys allow react to keep track of elements inside a list.</p>
        <p>This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.</p>
        <p>Key should be a unique ID assigned to each item.</p>

        <h3>Who lives in my garage?</h3>
        <ul>
            {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
    </>
  )
}

export default key;