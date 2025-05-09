import React from 'react'
import Component5, { UseContext5 } from './Component5';

const Component4 = (props) => {
  return (
    <>
        <p>-----Component4 started-----</p>
        <p>-----Component4 ended-----</p>
        <Component5 user={props.user}/>
    </>
  )
};

const UseContext4 = () => {
  return(
    <>
    <p>UserContext component4</p>
    <UseContext5/>
    </>
  )
};

export default Component4;
export {UseContext4};