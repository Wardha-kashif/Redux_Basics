import React from 'react';
import CounterInput from './component/CounterInput';
import CounterOutput from './component/CounterOutput';

function App() {
  return (
    <div className='App'>
      <CounterOutput />
      <br />
      <CounterInput />
    </div>
  );
}

export default App;