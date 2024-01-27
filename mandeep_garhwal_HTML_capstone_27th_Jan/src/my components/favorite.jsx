import React from 'react'
import InputNumber from 'rc-input-number'
import Popup from 'reactjs-popup'
import { Mycontext } from '../mycontext'
import { useContext } from 'react'

export default function Favorite() {
  const [products, setprodcuts, favproducts, setfavproducts, cart, setcart]= useContext (Mycontext)
  return (
    <>
    <h1>Your Favorite products</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Name of product</th>
      <th scope="col">Price</th>
      <th scope="col">Seller</th>
      <th scope="col">See detils</th>
      
    </tr>
  </thead>
  <tbody>
    { favproducts &&
      favproducts.map((product, key)=>{
        return<>
        <tr>
        <th scope="col">{key + 1}</th>
        <th scope="col">{product.name}</th>
        <th scope="col">{product.price}</th>
        <th scope="col">{product.sellerName}</th>
        <th scope="col">

        <Popup trigger={<button className="btn btn-primary">Details</button>} position={"center center"} >
                <div style={{display: "flex", flexDirection: "row", background: "blue", padding: "20px", borderRadius: "10px" }}>
                <img src= {product.imageURL} className="card-img-top" style={{height: "60vh", width:"30vw", zIndex: 1}} alt="..."/>
                <div>
                    <h2 style={{padding: "20px", color: "white"}}>{product.name}</h2>
                    <h5 style={{color: "white", padding: "20px", marginTop: "-15%", marginBottom: "15%"}}>Product ID: {product.productId}</h5>
                    <h3 style={{display: "flex", justifyContent: "center"}}>Brand Name: {product.brandName}</h3>
                    <h4 style={{display: "flex", justifyContent: "center"}}>Category: {product.category}</h4>
                    <h4 style={{display: "flex", justifyContent: "center"}}>Customer rating: {product.rating}</h4>
                    <h3 style={{display: "flex", justifyContent: "center"}}> Sold By: {product.sellerName}</h3>
                    <button  style= {{marginLeft: "36%", marginTop: "35%"}} className="btn btn-danger">Buy Now</button>
                </div>
                </div>
            </Popup>
        </th>
        </tr>
        </>
    })}
  
  </tbody>
</table>
</>
  )
}
