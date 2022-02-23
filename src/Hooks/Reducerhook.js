import React,{ useReducer } from "react";
const initstate = 0;
const reducer = (state , action )=>{   // reducer get the action and proceses the function
    switch (action.type){
        case "inc":
        return state +1;
        default:
            return state;
    }
}

export const Reducerhook = () => {   // dispatch is used to pass the action to reducer fun
    const [state, dispatch] = useReducer(reducer,initstate)
  return (
    <div>
        <h3>Reducerhook</h3>
        <h1>{state}</h1>
        <button onClick={()=>{dispatch({type:"inc"})}}>click</button>
    </div>
  )
}



