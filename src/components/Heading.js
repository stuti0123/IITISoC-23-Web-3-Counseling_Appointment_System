import React from 'react';

function Heading() {
  return (
    <div className='heading'>
<img style={{
        position:'absolute',
        top:1,
        height:150,
        width:150
      }} src='./images/logo2.png' alt=""/>
      <ul className='Institutename'>
<li ><b>Indian Institute </b></li>
<li><b>Of Technology</b></li>
<li><b> Indore</b></li>
      </ul>
      <p style={{position:'absolute',left:450,top:50,padding:0,fontSize:55,fontWeight:500,fontStretch:'extra-expanded'}}>Counselling Services</p>
    </div>
  )
}

export default Heading