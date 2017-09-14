import React from 'react';

export default function Counter(props){
  return (
    <div>
      <button onClick={(evt) => props.onIncrement()}>+</button>
      <button onClick={(evt) => props.onDecrement()}>-</button>
    </div>
  )
}