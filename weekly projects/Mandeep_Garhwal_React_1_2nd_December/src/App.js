import { useState, useEffect } from "react";
function App() {
  const [counter, setcounter] = useState(0)
  useEffect(() => {
    if (counter < 0) {
      document.getElementById("error").style.display = ""
      
    }else{      document.getElementById("error").style.display = "none"
    }
    if (counter > 10){
      document.getElementById("button0").style.display = ""
    }else{ 
      document.getElementById("button0").style.display = "none"
    }
  })
  


  function counterinc (){
    setcounter (counter + 1)  }
  function counterdec (){
      setcounter (counter - 1)  }
  function counterreset (){
        setcounter (0)  }
  return (
    <div style = {{backgroundColor : "black", height : "100vh", marginTop : "-30px"}} >
      <h1 style={{fontSize :"70px", color : "white", paddingTop : "90px", paddingLeft : "50px"}}>Counter using React</h1>
      <h2 style={{textDecoration : "underline", color : "white", paddingLeft: "50px"}}> Your Current Count is: {counter} </h2>
      <h2 id= "error" style={{ color : "red", paddingLeft: "50px", marginTop : "50px", display : "none"}}> Error! the counter's value cannot go below zero. </h2>

      <header style={{paddingLeft : "50px", marginTop : "90px"}}>
       <button style={{width : "120px", height : "30px", margin : "30px"}} onClick={counterinc}> Increment </button>
       <button style={{width : "120px", height : "30px", margin :"30px"}} onClick={counterdec}>Decrement</button>
       <button id= "button0" display = "none" style={{width : "120px", height : "30px", backgroundColor : "black", color : "white", margin :"30px"}} onClick={counterreset}>Go Back to 0</button>
      </header>
    </div>
  );
}

export default App;
