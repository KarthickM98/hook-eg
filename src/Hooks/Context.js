// import React, {useState, createContext} from "react";

// export const contextNote = createContext();

// export const DataStore =(props)=>{}

//-------------------------------
// new method of creating context  // simple method of implementation of context 

import { createContext } from "react";
const neededData = [
    { id : 1 ,name : "pooja" },
    { id : 2 ,name : "karthi" },
    { id : 3 ,name : "satysm" },
    { id : 4 ,name : "jhansi" },
    { id : 5 ,name : "meera" },
    { id : 6 ,name : "laskshmi" },
    { id : 7 ,name : "ayussh" },
]
const nameOfContextHere = createContext(neededData);

export default nameOfContextHere;