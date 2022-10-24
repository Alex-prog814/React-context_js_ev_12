import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter2/Counter2';
import CounterContextProvider from './counterContext';
import Button from './components/Button/Button';

const App = () => {
  return (
    <>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/counter' element={<Counter />} />
            <Route path='/counter2' element={<Counter2 />} />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
      {/* <Button content={'Register'} /> */}
      <Button>Register</Button>
    </>
  )
}

export default App