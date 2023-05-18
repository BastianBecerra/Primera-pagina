import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { BrowserRouter, Route, Routes,  Navigate} from 'react-router-dom';


import Inicio from './view/Inicio';
import SegundaVista from './view/SegundaVista';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/limpiezainteligente" element={<SegundaVista />} />
            <Route path="/" element={<Inicio />} />
            <Route path='*' render={() => <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
