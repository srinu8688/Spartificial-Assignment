import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import "./index.css"
const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    alert('You have been logged out.');
    navigate('/');
  };
  return(
    <>
    <header className="header">  
      <div className="container">  
        <div className="logo">  
          <img alt="Logo" src="https://tse3.mm.bing.net/th?id=OIP.NsaAbyfllk7g3E3-6mtd_gAAAA&pid=Api&P=0&h=220" className="LogoImg"/>  
          <h1>Admin DashBoard</h1>  
        </div>  
        <nav>  
          <ul className="nav-links"> 
            <Link to="/home">
            <li>  
               Home
            </li> 
            </Link> 
             
            <Link to="/users">
            <li>  
               User
            </li> 
            </Link> 
            <Link to="/posts">
            <li>  
               Posts
            </li> 
            </Link> 
             <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
          </ul>  
        </nav>  
      </div>  
    </header>  
  
     
     </>

)

}
  
export default Header








