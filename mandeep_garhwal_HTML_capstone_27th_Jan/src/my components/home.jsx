import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../mycontext'
import Popup from 'reactjs-popup'
import axios from 'axios'



export default function Home() {
    const [products, setprodcuts, favproducts, setfavproducts, cart, setcart]= useContext (Mycontext)

    function addtofav(product) {
        console.log(product)
        axios.post("http://localhost:8000/fav_products", product)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        console.log(favproducts)
        setfavproducts([...favproducts, product])
        console.log(favproducts)
    }
    function addtocart(product) {
        console.log(product.name)
        var present = false
        var  index = 0
        var q = 0
        for (var x in cart){
          console.log("loop running")
          console.log(cart[x].name)
          if (cart[x].name == product.name){
            console.log("product already exists")
            present = true
            index = x
            q = cart[x].quantity 
            break
          }
        }
        if (present == false){
        console.log("new product")
        product["quantity"] = 1
        axios.post("http://localhost:8000/cart", product)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        console.log(cart)
        }else {
          console.log("product already exists")
          cart[index].quantity += 1
          axios.put(`http://localhost:8000/cart/${cart[index].id}`, cart[index] )
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
          console.log(cart)
        }

    }

  return (
    <>
    
    <div id= "cardcontainer" style={{display: 'flex', flexWrap:"wrap",justifyContent: "space-around"}}> 
    
    { products &&
    products.map((product, key)=>(

            <>
            <div className="card" style={{width : "20rem", margin: "50px"}}>
            <button style={{ padding: "0px",height: "7%", width: "13%", marginLeft: "87%", marginBottom: "-14%", zIndex: 2, background: "black"}} onClick={() => (addtofav(product))}>
            <img src="https://as2.ftcdn.net/v2/jpg/02/41/55/59/1000_F_241555957_qv2HEFsoS6HDQVQHxPfAJ9iWHKKsAICr.jpg"  style={{height : "38px", width : "36px"}}   alt=""  />
            </button>
            <img src= {product.imageURL} className="card-img-top" style={{height: "60%", zIndex: 1}} alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text"><span>{product.price} Rs.</span><br /><span style={{background : "red", paddingLeft: "20%", width: "100%"}}>Discount {product.discount} %</span></p>
            
 
            <Popup trigger={<button className="btn btn-primary" >Details</button>} position={"center center"} >
                <div style={{display: "flex", flexDirection: "row", background: "blue", padding: "20px", borderRadius: "10px" }}>
                <img src= {product.imageURL} className="card-img-top" style={{height: "60vh", width:"30vw", zIndex: 1}} alt="..."/>
                <div>
                    <h2 style={{padding: "20px", color: "white"}}>{product.name}</h2>
                    <h5 style={{color: "white", padding: "20px", marginTop: "-15%", marginBottom: "15%"}}>Product ID: {product.productId}</h5>
                    <h3 style={{display: "flex", justifyContent: "center"}}>Brand Name: {product.brandName}</h3>
                    <h4 style={{display: "flex", justifyContent: "center"}}>Category: {product.category}</h4>
                    <h4 style={{display: "flex", justifyContent: "center"}}>Customer rating: {product.rating}</h4>
                    <h3 style={{display: "flex", justifyContent: "center"}}> Sold By: {product.sellerName}</h3>
                    <button  style= {{marginLeft: "36%", marginTop: "35%"}} className="btn btn-danger" onClick={() => addtocart(product)}>Add to cart</button>
                </div>
                </div>
            </Popup>
            
            </div>
            </div>
            
            
            </>            
            
        ))
    }
    </div>

    </>
  )
}
