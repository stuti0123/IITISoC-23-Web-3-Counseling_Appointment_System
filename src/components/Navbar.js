import React from 'react';
function Navbar() {
  return (
    <nav className='navbar'>
<ul className='nav1'>
    <li className="nav2"><img style={{height:25,position:'relative',left:-5}} src='./images/homee.png' alt=""/><a style={{position:'relative',top:-7}} href="#home">Home</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li  className="nav2"><a href="#about" >About</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2"><a href="#team" >Our Team</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2"><a href="/#">Activities</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2"><a href="/#">Information</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2"><a href="#contact-details">Contact Us</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2"><a href="#FAQ" >FAQ's</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2" ><img id="mail1"style={{position:'relative',top:-3}} src='./images/email.png' alt=""/></li>
   </ul>
    </nav>
  )
}

export default Navbar
