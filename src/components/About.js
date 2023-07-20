import React from 'react';
function About(){
    return(
<div className='AboutUs' id='about' >
<div class="about-line1"></div>
<div className="about-background-image" style={{
        backgroundImage: `url('./images/image16.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'centre',
        backgroundRepeat: 'no-repeat',
        minHeight:'100vh'}}>
    <p style={{textAlign:'center',fontSize:55}} data-aos="slide-right" data-aos-duration="6000">About Us</p>
    <p style={{paddingTop:40,paddingBottom:30,fontSize:'19px',paddingLeft:40,paddingRight:40}}>IIT-Indore has a Student Counselling Centre in place that offers supportive and conducive environment for a student wherein he/she can discuss personal issues or academic challenges and seek help from a professional counsellor.<br/><br/>If you have any concern related to academics or something social, psychological ,you are free to reach out to us.
Counsellor, through the counselling process, listens to a student’s concerns with empathy and responds in a non judgemental way. The process is confidential except in a condition where disclosure is necessary to protects the student, another person or abide by the institute’s policy.</p> 
<p style={{fontSize:'19px'}}>Some of the common concerns of the young people today are-</p>
<ul style={{paddingBlock:30,fontSize:'19px'}}>
<li>1. Loneliness and homesickness</li>
<li>2. Adjustment difficulties</li>
<li>3. Peer pressure</li>
<li>4. Relationship issues</li>
<li>5. Family Problems</li>
<li>6. Procrastination</li>
<li>7. Cyber bullying</li>
<li>8. Behavioural problems (anger outbursts, disobedience, lying etc)</li>
<li>9. Low confidence and self esteem</li>
<li>10. Suicidal thoughts</li>
<li>11. Depression ,anxiety and other mental health problems</li>
<li>12. Substance abuse</li>
</ul>
</div>
</div>
    )
}
export default About