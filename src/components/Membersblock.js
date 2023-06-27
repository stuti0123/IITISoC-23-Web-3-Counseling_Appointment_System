import React from 'react'
function Membersblock(){
    return(
      <div className='block1'>
        <div className='container1'>
        <div class="about-line"></div>
            <p style={{textAlign:'center',fontSize:50}}>Our Team</p>
          <div className='row-1'>

     <div className='col-2'>
<h3 style={{paddingTop:10,paddingBottom:10}}>Head Counselling Services</h3>
<img src='./images/AT.png' alt="" />
<p style={{height:100, width:350,position:'relative',paddingTop:10}}>Prof. Aruna Tiwari
(Head, Counselling Services)
Associate Professor Discipline of Computer Science & Engineering</p>
     </div>
    
             </div>
             <div className='row-2'>
                <div className='col-1-row-2'>
                    <h4 style={{paddingTop:10,paddingBottom:10,position:'relative'}}>Senior Counselor</h4>
                    <img src='./images/monika.png' alt="" />
                    <p  style={{height:100, width:350,paddingTop:10}}>Ms. Monika Gupta
Address (Office)Phone (Office): +91-731-660 (Ext. No. 3425)Email:counsellor[at]iiti.ac.in</p>
                </div>
               
                <div className='col-3-row-2'>
                    <h4>Counselor</h4>
                    <img src='./images/shubham2.png' alt=""/>
                    <p style={{height:118, width:350,paddingTop:10,paddingLeft:50}}>Mr. Shubham Mandsaurkar 
Address (Office)
Phone (Office): +91-731-660-3333 (Ext. No. 5551)
 Email: counselor_shubham[at]iiti.ac.in</p>
                    </div>
             </div>
             <h3 style={{fontSize:30,position:'relative',top:-300}}>Student Counselling Committee</h3>
             <div className='row-3'style={{display:'flex'}}>
              <div className='row-3-col-1'>
                <img src='./images/counselor_1.png' alt=""/>
                <p style={{height:118, width:250,paddingTop:10}}>Ms. Purna Kukadiya,
                Student Coordinator for Ph.D. Students
                email: phd2101102005[at] iiti.ac.in </p>
              </div>
              <div className='row-3-col-2'>
                <img src='./images/counselor_2.png' alt=""/>
                <p style={{height:118, width:250,paddingTop:10}}>Mr. Harshwardhan Chaube
                Student Coordinator for PG Students
                email: msc2203141012[at] iiti.ac.in
                </p>
              </div>
             </div> <div className='row-3-col-3'>
                <img src='./images/shubham.png' alt=""/>
                <p style={{height:118, width:250,position:'relative',left:-5,paddingTop:10}}>Mr. Shubham Alte
                Student Coordinator for PG Students
                email: msc2203141012[at] iiti.ac.in
                </p>
              </div>
  
              <a href="/#"><botton className="fac-button-1">Faculty Counselling Coordinators</botton></a>
  
  </div>   </div>
    )
}
export default Membersblock