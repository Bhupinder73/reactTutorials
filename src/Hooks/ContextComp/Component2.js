import React from 'react'
import Component3, { UseContext3 } from './Component3';

const Component2 = (props) => {
  return (
    <>
        <p>-----Component2 started-----</p>
        <p>-----Component2 ended-----</p>
        <Component3 user={props.user}/>
    </>
  )
};

const UseContext2 = () => {
  return(
    <>
    <p>UserContext component2</p>
    <UseContext3/>
    </>
  )
};

export default Component2;
export {UseContext2};