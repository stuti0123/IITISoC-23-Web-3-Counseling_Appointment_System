import React from 'react'
function FAQ(){
    return(
<div className='faq'id='FAQ'>
<div class="about-line"></div>
    <p data-aos="slide-right" data-aos-duration="6000" style={{textAlign:'center',fontSize:50}}>FAQ's</p>
    <table>
        <tr>
        <td className='tb-col-1'><img src='./images/faqimg1.png' alt=""/></td>
        <td><p style={{fontWeight:500}}>When is counselling relevant for me as a student?</p>
<br/>
<p>Student life is full of challenges. Mostly we are able to cope
 with these as we go along. Sometimes however we may find that our academics,
  friends of family are posing odds that we find too complex to deal with
   creating emotional imbalances and stress. This may be the time when counselling 
   sessions may prove useful and relevant in helping us find solutions to our problems.</p></td>
        </tr>
        <tr>
            <td className='tb-col-1'><p style={{fontWeight:500}}>What kind of help can a student expect from a counsellor?</p>
<br/>
<p>A counsellor is a sounding board, a confidant and an expert at emotional and circumstantial problem solving.
 Whether a problem comes suddenly as a crises or has been present for a long time, it can be looked into and helped. The counsellor builds a
 supportive environment and slowly helps a person build inner resources that enable effective coping.</p></td>
            <td><img src='./images/faqimg2.png' alt=""/></td>
        </tr>
        <tr>
            <td className='tb-col-1'><img src='./images/faqimg3.png' alt=""/></td>
            <td><p style={{fontWeight:500}}>Is sharing with a friend the same as sharing with a counsellor?</p>
<br/>
<p>Sharing with friends is both useful and natural. 
Sometimes sharing is enough and helps automatically. 
However if after repeated sharing one still feels overwhelmed
 with one's problems counselling may be a better alternative to seek.</p></td>
        </tr>
    </table>
</div>
    )
}
export default FAQ