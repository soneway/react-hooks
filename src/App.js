import React, { useState, useEffect } from 'react';
import './App.css';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';
import { ThemeContext } from './contexts/theme-context';
import Mouse from './components/Mouse';
import Cat from './components/Cat';

function App () {
  let [age, haha] = useState(23);

  function onClick () {
    haha(++age);
  }

  useEffect(() => {
    console.log('useState值发生变化');
  });

  const classCompRef = React.createRef();
  let classCompEl;

  function onClick2 () {
    classCompEl.updateMsg();
  }

  return (
    <div className="App">
      <div>{age}</div>
      <button onClick={onClick}>click</button>
      <FuncComp age={age}></FuncComp>
      <ThemeContext.Provider value={age}>
        <ClassComp
          ref={el => classCompEl = el}
          age={age}>
        </ClassComp>
      </ThemeContext.Provider>
      <button onClick={onClick2}>click2</button>
      <div style={{ height: '100vh' }}>
        <Mouse
          render={(mouse) => <Cat
            mouse={mouse}>
          </Cat>}>
        </Mouse>
      </div>
    </div>
  );
}

export default App;
