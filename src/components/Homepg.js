import React from 'react';
import Heading from './Heading'
import About from './About';
import FAQ from './FAQ';
import Membersblock from './Membersblock';
function Homepg() {
  return (
  
    <div className="containerhome" id='home'>
       <div className="home-content" style={{
        backgroundImage: `url('./images/c11.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'centre',
        backgroundRepeat: 'no-repeat',
        minHeight:'100vh',
        opacity:0.6
       }}></div>
      <div className='name'>
      <Heading/>
      <div class="button-container">
      <div style={{ position: 'relative' }}>
        <div>
          <div className="cloud">Book an appointment and talk with your counselor now!</div>
          <button className="motion-button">Book Now</button>
        </div>
      </div>
</div>
      </div>
      <div className="text-container">
        <p className='fade-in'>
        Counselling is a helping process which aims to facilitate the process of growth and well being. It empowers students with enhanced ability to solve problems, make decisions and deal more effectively with their concerns.
        <br/>
        <br/>
IIT-Indore has a Student Counselling Centre in place that offers supportive and conducive environment for a student wherein he/she can discuss personal issues or academic challenges and seek help from a professional counsellor.
        </p>
        <br/>
        <button className='login-button'>LOG IN/SIGN UP</button>
        
      </div>
      <About/>
        <Membersblock/>
        <FAQ/>
    </div>
  
  );
}

export default Homepg;

