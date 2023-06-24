import React from 'react'
//import homeimg from './images/homeimg.png';
function Navbar() {
  return (
    <nav className='navbar'>
<ul className='nav1'>
    <li className="nav2"><img style={{height:25,position:'relative',left:-5}} src='./images/homee.png' alt=""/><a style={{position:'relative',top:-7}} href="/#">Home</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li  className="nav2"><a href="/#">About</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2"><a href="/#">Our Team</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2"><a href="/#">Activities</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2"><a href="/#">Appointments</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2"><a href="/#">Contact Us</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2"><a href="/#">FAQ's</a></li>
    <li className="nav2" style={{fontSize:18,fontWeight:800}}>|</li>
    <li className="nav2" ><img id="mail1"style={{position:'relative',top:-3}} src='./images/email.png' alt=""/></li>
   </ul>
    </nav>
  )
}

export default Navbar
