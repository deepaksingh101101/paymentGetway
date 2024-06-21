import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from './pages/payment/Payment';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Payment />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
