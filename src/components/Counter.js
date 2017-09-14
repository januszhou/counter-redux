import React from 'react';

export default function Counter(props){
  return (
    <div>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  )
}