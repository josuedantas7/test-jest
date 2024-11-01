import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './components/Formulario';

function App() {
  return (
      <Router>
        <RecoilRoot>
          <Routes>
            <Route path='/' Component={Formulario} />
          </Routes>
        </RecoilRoot>
      </Router>
  );
}

export default App;
