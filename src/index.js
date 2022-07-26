import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from './home/Content';
// ReactDOM.render(
//   // < ActionCableProvider url={'ws://localhost:3000/cable'} >
//   // <React.StrictMode>
//   //   <Home />
//   // </React.StrictMode>
//   // </ActionCableProvider>
//   <App />,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

