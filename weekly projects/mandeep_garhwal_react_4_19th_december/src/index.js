import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Details from './details';
import { Provider } from 'react-redux';
import { store } from './state/reducers/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/about/:ID" element={<Details />}></Route>

    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

