import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./my components/navbar";
import Cart from "./my components/cart";
import Home from "./my components/home";
import Favorite from "./my components/favorite";
import { Mycontext, Cartcontext } from "./mycontext";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";




function App() {
  const [products, setproducts] = useState()
  const [favproducts, setfavproducts] = useState()
  const [cart, setcart] = useState()
  
  useEffect(() => {
    axios.get("http://localhost:8000/Product_lists")
    .then((res) => {setproducts(res.data); console.log(res.data)})
    .catch((err) => console.log(err))
    axios.get("http://localhost:8000/fav_products")
    .then((res) => {setfavproducts(res.data); console.log(res.data)})
    .catch((err) => console.log(err))
    axios.get("http://localhost:8000/cart")
    .then((res) => {setcart(res.data); console.log(res.data)})
    .catch((err) => console.log(err))
    
  }, [ ])

  

  
  return (
  
    <Mycontext.Provider value= {[products, setproducts, favproducts, setfavproducts, cart, setcart]}>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element= {<Home/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>
    
    </BrowserRouter>
    </Mycontext.Provider>

  );
}

export default App;
