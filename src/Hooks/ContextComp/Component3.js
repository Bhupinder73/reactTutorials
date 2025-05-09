import React from 'react'
import Component4, { UseContext4 } from './Component4';

const Component3 = ({user}) => {
  return (
    <>
        <p>-----Component3 started-----</p>
        <p>-----Component3 ended-----</p>
        <Component4 user={user}/>
    </>
  )
};

const UseContext3 = () => {
  return(
    <>
    <p>UserContext component3</p>
    <UseContext4/>
    </>
  )
};

export default Component3;
export {UseContext3};