import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home";
import Users from "./Components/Users";
import Login from "./Components/Login";
import Posts from "./Components/Posts";
import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes> 
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/users" element={<Users />}/>
        <Route exact path="/posts" element={<Posts />}/>
      </Routes>
 </BrowserRouter>
    </>
  );
}

export default App;

