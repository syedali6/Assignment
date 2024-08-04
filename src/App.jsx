import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Newpage from "./pages/index";
import Newpage2 from "./pages/index2";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/CSS/Home.scss"
import "./assets/CSS/Home2.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newpage2 />} />
        <Route path="/dashboard" element={<Newpage />} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/products" element={<div>Products Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
