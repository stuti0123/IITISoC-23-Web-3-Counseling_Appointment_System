import React from 'react';

function Homepg() {
  return (
  
    <div className="containerhome" id='home'>
       <img style={{opacity:0.6,height:800,width:1540}} src='./images/c11.jpg' alt=""/>
      <div className='name'>
      <img style={{
        position:'absolute',
        top:1,
        height:150,
        width:150
      }} src='./images/logo2.png' alt=""/>
      <ul className='Institutename'>
<li ><b>Indian Institute Of</b></li>
<li><b>Technology Indore</b></li>
      </ul>
      
      <div class="button-container">
      <div style={{ position: 'relative' }}>
        <div>
          <div className="cloud">Book an appointment and talk with your counselor now!</div>
          <button className="motion-button">Book Now</button>
        </div>
      </div>
</div>
     
      <p style={{position:'absolute',left:450,top:50,padding:0,fontSize:55,fontWeight:500,fontStretch:'extra-expanded'}}>Counselling Services</p>
      </div>
      <div className="text-container">
     
        <p className='fade-in'>
        Counselling is a helping process which aims to facilitate the process of growth and well being. It empowers students with enhanced ability to solve problems, make decisions and deal more effectively with their concerns.
        <br/>
        <br/>
IIT-Indore has a Student Counselling Centre in place that offers supportive and conducive environment for a student wherein he/she can discuss personal issues or academic challenges and seek help from a professional counsellor.
        </p>
        <br/><br/>
        <button className='login-button'>LOG IN/SIGN UP</button>
        
      </div>
    </div>
   
  );
}

export default Homepg;

