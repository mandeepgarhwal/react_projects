import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { UserState1 } from "./Mycontext";
// import { usercontext } from './Mycontext';
import Mainmenu from "./Mainmenu";
import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import Profile from "./profile";
// import { useContext } from 'react'
function App() {
  console.log("App componenet is called")
  // const context = useContext (usercontext)
  // console.log(context.user.name)
  return (
    <div className="App">
      <UserState1 >
      <BrowserRouter>
        <Mainmenu/>
        <Routes>
          <Route path="/home" element= {<Home/>}/>
          <Route path="/" element= {<Navigate to={"/home"} replace= {true}/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path= "/login" element = {<Login/>}/>
          <Route path= "/profile" element = {<Profile/>}/>
          {/* {(props.user.accesstoken == " ")? (
          <Route path= "/profile" element = {<Signup/>}/>) :(<Route path= "/profile" element = {<Profile/>}/>)
} */}

        </Routes>
      
      
      </BrowserRouter>
      </UserState1>
    </div>
  );
}

export default App;
