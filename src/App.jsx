import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';
import "./App.css";

const App = () => {
  const [state,dispatch] = useReducer(ReducerAction,0);
  return (
    <div>
      <h1 className='heading text-center mt-5'>Counter Using useReducer</h1>
      <div className="main shadow mt-5">
      <div className="counter d-flex justify-content-around mt-5">
      <button onClick={()=>dispatch({type:"ADD",payload:2})} className="btn btn-outline-success">Add</button> 
      <span className="display text-center">{state}</span>
      <button onClick={()=>dispatch({type:"SUB",payload:1})} className="btn btn-outline-success">Sub</button>
      </div>
      <div className="reset d-flex justify-content-center mt-3">
        <button className="btn btn-outline-danger" onClick={()=>dispatch({type:"RESET", payload: 0})}>Reset</button>
      </div>
      </div>
    </div>
  );
};

export default App;