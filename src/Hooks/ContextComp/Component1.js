import React, { createContext, useState } from 'react'
import Component2, { UseContext2 } from './Component2';

const Component1 = () => {
    const [user, setUser] = useState("Preet Singh");
  return (
    <>
        <p>-----Component1 started-----</p>
        <h3>Hello {user}!</h3>
        <p>-----Component1 ended-----</p>
        <button onClick={()=>setUser("Bhupinder")}>Change</button>
        <Component2 user={user}/>
    </>
  )
};


const UserContext = createContext();
const UseContext1 = () => {
  const [newUser, setNewUser] = useState("New Name");

  return(
    <UserContext.Provider value={newUser}>
      <h3>Hello {newUser}!</h3>
      <button onClick={()=>setNewUser("Old Name")}>UseContext Btn</button>
      <UseContext2/>
    </UserContext.Provider>
  )
};

export default Component1;
export {UseContext1, UserContext};
