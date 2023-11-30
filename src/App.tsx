import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { RuteoPrincipal } from './app/routes/App';
import { Suspense } from "react";

const cargando = (
  <div className='d-flex justify-content-center'>
    <div className='mt-3'>
      <button className='btn btn-primary' type='button' disabled></button>
      <span className='spinner-grow spinner-grow-sm' role='status'></span>
      Cargando...
    </div>
  </div>
) 
  

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={cargando}>
        <RuteoPrincipal></RuteoPrincipal>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
