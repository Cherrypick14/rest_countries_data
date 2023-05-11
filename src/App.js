import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './components/countries/countries';
import Singlecountry from './components/singlecountry/singlecountry';



function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Countries />}></Route>
        <Route path='/:name' element={ <Singlecountry />}></Route>
      </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
