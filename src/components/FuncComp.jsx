import React, { useReducer } from 'react';

function FuncComp (props) {
  function reducer (state, action) {
    switch (action.type) {
      case 'male': {
        return { age: 23, name: 'sjj' };
      }
      case 'female': {
        return { name: 'lxy', ...action.payload };
      }
      default: {
        return { age: 22, name: '李四' };
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, { name: 'unkown', age: 0, gender: 'haha' });

  let inputRef = React.createRef();

  function onClick () {
    inputRef.focus();
  }

  return <div className="func-comp">
    <h2>FuncComp</h2>
    <div>{props.age + 1}</div>
    <div>{JSON.stringify(state)}</div>
    <button onClick={() => dispatch({ type: 'male' })}>male</button>
    <button onClick={() => dispatch({ type: 'female', payload: { age: 100 } })}>female</button>
    <input
      type="text"
      ref={el => inputRef = el} />
    <button onClick={onClick}>click</button>
  </div>;
}

export default FuncComp;
