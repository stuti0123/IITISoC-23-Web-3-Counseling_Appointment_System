import React from 'react'
const Information=()=>{
    return(
        <div className='information'>
        <div className="activities-background-image" style={{
        backgroundImage: `url('./images/c11.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'centre',
        backgroundRepeat: 'no-repeat',
        minHeight:'100vh',
        opacity:0.6
       }}></div>
       <div className='info-text'>
<h1 className='info-head'>Information</h1>
<div className="note-parents">
    <div className='info-container'>
    <h2 className="subheading">Note for Parents</h2>
    <p className="paragraph">It is natural for parents to feel anxious and concerned when their wards leave home for education. Young people, though away from home, still require parents’ continuous involvement, guidance and monitoring. Parents need to be aware of their wards’ overall functioning both academic and non-academic. It is also advisable for parents to seek feedback from the faculty advisors, teachers and/or counsellor. Parents can approach the counsellor for concerns related to their wards. Parents’ feedback to the counsellor facilitates the counselling process and enables the parents and counsellor to work together to optimize the potential of the young person.</p>
  </div>
  <div className="note-faculty">
    <h2 className="subheading">Note for Faculty Members</h2>
    <p className="paragraph">The best performance of a student is usually achieved when the student is not only hard working, sincere and determined to do well but also maintains good physical and psychological health. Numerous factors such as time management, financial problems, family problems, and peer related issues, emotional problems and perceived stress can create obstacles for young people in achieving optimal academic performance. The Faculty advisors or concerned faculty members can refer a student to the Counsellor in case of the following- a) A student is feeling stressed out due to academic , personal, family or any other reasons b) A student is showing signs of emotional or psychological distress Faculty members can play an extremely important role in encouraging the students to seek help when needed. The counselling process is a valuable aid .It facilitates growth and well being. Faculty members’ positive attitude can reduce the stigma related with counselling services. This in turn will help create an environment of flexibility and openness for the students.</p>
  </div></div>
</div></div>
    )
}
export default Information