import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './my components/navbar';
import Home from './my components/home';
import Favourite from './my components/favourites';
import { Provider } from 'react-redux';
import { Store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={Store}>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Navigate to="/home" replace= {true} />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/favourite" element={<Favourite />}></Route>
  </Routes>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);


