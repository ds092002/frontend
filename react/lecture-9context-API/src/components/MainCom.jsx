import React from "react";
import ComponentA from "./ComponentA";
import { createContext } from "react";

/* ContextAPI, useContext(), Provider And Consumer */
export const UserContext1 = createContext();
export const UserContext2 = createContext();

const MainCom = () => {
  let firestName = "Hello";
  let lastName = "World!";
  return (
    <div>
      <h1 className="heading">This is Main Component</h1>
      <UserContext1.Provider value={firestName}>
        <UserContext2.Provider value={lastName}>
          <ComponentA />
        </UserContext2.Provider>
      </UserContext1.Provider>
    </div>
  );
};

export default MainCom;
