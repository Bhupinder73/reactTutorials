import React from 'react'
import ChildProp1 from './ChildProp1';

const ParentProp = () => {
    const myCar = "BMW";
    const carInfo = {name:'Ford', model:'Mustang', year:2025};
    const carRating = [3,6,9,2];
  return (
    <>
        <h1>Parent Prop</h1>
        <ChildProp1 brand='Mustang' car={myCar} carDetails={carInfo} carStar={carRating}/>
    </>
  )
}

export default ParentProp;