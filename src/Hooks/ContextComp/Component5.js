import React, { useContext } from 'react';
import {UserContext} from "./Component1";

const Component5 = (props) => {
  return (
    <>
        <p>-----Component5 started-----</p>
        <h3>Hello {props.user}!</h3>
        <p>-----Component5 ended-----</p>
    </>
  )
};

const UseContext5 = () => {
  const value = useContext(UserContext);
  return(
    <>
    <p>UserContext component5</p>
    <h2>Hello {value}!</h2>
    </>
  )
};

export default Component5;
export {UseContext5};