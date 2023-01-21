import React, { useReducer } from "react";

const modifyState = (state, action) => {
 
  if (action === "INCREMENT") return state + 1;
  if (action === "DECREMENT") return state - 1;
  if (action === "RESET") return state = 0;
  
  throw new Error(action + ' undefined! ')
};

const CountReducer = () => {
 
  const [counter, dispatch] = useReducer(modifyState, 0);
 
  return (
    <div style={{display : "flex", alignItems:"center" , flexDirection:"column", marginTop:"20%"}}>
    
      counter : {counter}
      <button onClick={() => dispatch("INCREMENT")} style={{width:"200px"}} > + INCREMENT </button>
      <button onClick={() => dispatch("DECREMENT")} style={{width:"200px"}} > - DECREMENT </button>
      <button onClick={() => dispatch("RESET")} style={{width:"200px"}} > RESET</button>
      <p> {Error.message} </p>
    
    </div>
  );
};

export default CountReducer;
/*
 in normal case I can use useReducer in this way -> 
    <button onClick={() => dispatch("INCREMENT")} style={{width:"200px"}} > + INCREMENT </button>
    const modifyState = (state, action) => {
 
  if (action === "INCREMENT") return state + 1;
  if (action === "DECREMENT") return state - 1;
  if (action === "RESET") return state = 0;
  
  throw new Error(action + ' undefined! ')
};

but there is another way to doit by using action as an object. -> 


*/
