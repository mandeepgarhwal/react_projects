import React, { useState } from 'react'
import { useContext } from 'react'
import { Mycontext } from '../mycontext'
import Popup from 'reactjs-popup'
import axios from 'axios'




export default function Cart() {
  const [products, setprodcuts, favproducts, setfavproducts, cart, setcart]= useContext (Mycontext)

  const [costarray, setcostarray] = useState({})
  const [cartnumber, setcartnumber] = useState([])
  const [total , settotal] = useState()

  var tcost = 0
  console.log(typeof(costarray))
 

  console.log(tcost)
  console.log(costarray)
  console.log(typeof(cart))
  function deleteitemcart(product) {
    console.log(product)
    axios.delete(`http://localhost:8000/cart/${product.id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    console.log(typeof(cart))
    var i = cart.indexOf(product)
    cart.splice(i, 1)
    setcart([...cart])
    console.log(cart)
}
function totalcost(){
  var total = 0
  for (var x in cart){
    total += cart[x].quantity*cart[x].price
  }

  return total
}
function Quantitychanged(product, q){
  var j = cart.indexOf(product)
  cart[j].quantity = q
  if (parseInt(q) <= 0 ){document.getElementsByClassName(product.id)[0].value = 1
    document.getElementById("tc").innerText = totalcost() + product.price
  document.getElementById(product.id).innerText = 1*product.price
}else if (q == ""){document.getElementsByClassName(product.id)[0].value = 1
  document.getElementById("tc").innerText = totalcost() + product.price
  document.getElementById(product.id).innerText = 1*product.price
}else{  axios.put(`http://localhost:8000/cart/${cart[j].id}`, cart[j] )
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  document.getElementById("tc").innerText = totalcost()
  document.getElementById(product.id).innerText = product.quantity*product.price
}
}

  
  return (
    <>

<h1 style={{display: "flex", justifyContent: "center"}}>Shopping Cart Summary</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Image</th>
      <th scope="col">product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total amount</th>
      
    </tr>
  </thead>
  <tbody>
    { cart &&
      cart.map((product, key)=>{
        
        costarray[key] = [product.price, 1]
        return<>
        <tr style={{verticalAlign: "center"}}>
        <th scope="col">{key + 1}</th>
        <th scope="col"><img src= {product.imageURL} alt="" style={{height: "15vh", width: "7vw"}}/></th>
        <th scope="col"><p>{product.name}</p><p>{product.brandName}</p></th>
        <th scope="col" className={key + 1}>{product.price}</th>
        <th scope="col" ><input type="number" id="quantity" defaultValue={product.quantity} className= {product.id} min="1" onChange ={(e) => Quantitychanged(product, e.target.value)} /></th>
        <th scope="col" className= {key + 1} id = {product.id}> {product.quantity*product.price} </th>
        <th><i className="fa fa-trash" aria-hidden="true" onClick={() =>{ deleteitemcart(product)}}></i></th>
        </tr>

        </>
    })
  }
  </tbody>
</table>

<h2 style={{display: "flex", justifyContent: "center"}}>Your Total cart value is: <span id= "tc">{totalcost()}</span> Rs.</h2>
<div style={{display: "flex", justifyContent: "center"}}>
<Popup trigger={<button className='btn btn-info'>Place Oder</button>} position={"top center"}>
<div style={{display: "flex", flexDirection: "column", background: "gray", padding: "10px", borderRadius: "20px", height: "40vh", width: "30vw" }}>
<input type="text" placeholder='Enter your Phone No.' style={{margin: "10px", borderRadius: "10px"}}/>
<input type="text" placeholder='Enter your First Name' style={{margin: "10px", borderRadius: "10px"}}/>
<input type="text" placeholder='Enter your Last Name'style={{margin: "10px", borderRadius: "10px"}}/>
<input type="text" placeholder='Enter your Address'style={{margin: "10px", borderRadius: "10px"}}/>
<input type="email" placeholder='Enter your email'style={{margin: "10px", borderRadius: "10px"}}/>
<button className='btn btn-success' style={{marginLeft:"20%", marginRight: "20%"}}>Buy Now</button>
</div>
</Popup>
</div>
        
            </>            
            

  )
}
