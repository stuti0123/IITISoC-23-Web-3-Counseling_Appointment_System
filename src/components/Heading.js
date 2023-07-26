import React from 'react';

function Heading() {
  return (
    <div className='heading'>
<img style={{
        position:'absolute',
        top:100,
        height:150,
        width:150,zIndex:1
      }} src='./images/logo2.png' alt=""/>
      <ul className='Institutename' style={{zIndex:2,top:150}}>
<li ><b>Indian Institute </b></li>
<li><b>Of Technology</b></li>
<li><b> Indore</b></li>
      </ul>
      
    </div>
  )
}

export default Heading