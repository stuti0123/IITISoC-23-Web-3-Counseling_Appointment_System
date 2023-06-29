import React, {useState} from 'react'
// const Membersblock = () => {
//   const [showFaculty, setShowFaculty] = useState(false);

//   const toggleFaculty = () => {
//     setShowFaculty(!showFaculty);
//   };
  const Membersblock = () => {
    const students = [
      {
        id: 1,
        name: 'Ms. Purna Kukadiya',
        info: 'Student Coordinator for Ph.D. students',
        email: 'phd2101102005@iiti.ac.in',
        image: './images/counselor_1.png'
      },
      {
        id: 2,
        name: 'Mr. Shubham Alte',
        info: 'Student Coordinator for PG Students',
        email: 'msc2203141012@iiti.ac.in',
        image: './images/shubham.png'
      },
      {
        id: 3,
        name: 'Mr. Harshwardhan Chaube',
        info: 'Student Coordinator for UG Students',
        email: 'ee200002039@iiti.ac.in',
        image: './images/counselor_2.png'
      },
    ];
  const facultyMembers = [
    // faculty members data...
    {
      id: 1,
      name: 'Dr. Appina Balasubramanyam',
      info: 'Discipline of Electrical Enginnering',
      email: 'appinia@iiti.ac.in',
      image: './images/faculty1.jpg'
    },
    {
      id: 2,
      name: 'Dr. Girish Chandra Verma',
      info: 'Discipline of Mechanical Engineering',
      email:'girish.verma@iiti.ac.in',
      image:'./images/faculty2.jpg'
    },
    {
      id:3,
      name:'Dr. Chandresh Kumar Maurya,',
      info:'Discipline of Computer Science & Engg',
      email:'chandresh@iiti.ac.in',
      image:'./images/faculty3.jpg'
    },
    {
      id:4,
      name:'Dr. Kaustav Bakshi',
      info:'Discipline of Civil Engineering',
      email:'kaustav.bakshi@iiti.ac.in',
      image:'./images/faculty4.png'
    },
    {
      id:5,
      name:'Dr. Chandan Halder',
      info:'Discipline Metallurgy Engineering and Material Science',
      email:'chalder@iiti.ac.in',
      image:'./images/faculty5.jpg'
    },
    {
      id:6,
      name:'Dr. Amit Shukla',
      info:'Discipline of Astronomy, Astrophysics & Space Engineering',
      email:'amit.shukla@iiti.ac.in',
      image:'./images/faculty6.jpg'
    },
    {
      id:7,
      name:'Dr. Mirza S Baig',
      info:'Discipline of Biosciences & Biomedical Engg.',
      email:'msb.iit@iiti.ac.in',
      image:'./images/faculty7.jpg'
    },
    {
      id:8,
      name:'Dr. Naresh Kumar Kumawat',
      info:'Discipline of Physics',
      email:'nkumawat@iiti.ac.in',
      image:'./images/faculty8.png'
    },
    {
      id:9,
      name:'Dr. Abhinav raghuwanshi',
      info:'Discipline of Chemistry',
      email:'r.abhinav@iiti.ac.in',
      image:'./images/faculty9.jpg'
    },
  ];

   const [currentFacultyIndex, setCurrentFacultyIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : students.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < students.length - 1 ? prevIndex + 1 : 0));
  };
  const handlePrevFacultyClick = () => {
    setCurrentFacultyIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : facultyMembers.length - 1));
  };

  const handleNextFacultyClick = () => {
    setCurrentFacultyIndex((prevIndex) => (prevIndex < facultyMembers.length - 1 ? prevIndex + 1 : 0));
  };
 
      return (
      <div className="our-team" id='team'>
        <div class="about-line"></div>
    <p style={{textAlign:'center',fontSize:50}}>Our Team</p>
    <br /> <br/>
        <div className="counsellors">
          
          <div className="team-container">
            <div className="team-member"><h2>Head,Counselling Services</h2>
              <img src=".\images\AT.png" alt="Counsellor 1" />
              <h3>Prof Aruna Tiwari</h3>
              <p>Email: artiwari@iiti.ac.in</p>
              <p>Phone(Office):+91-731-660-3568</p>
            </div>
            <div className="team-member">
              <h2>Senior Counsellor</h2>
              <img src=".\images\monika.png" alt="Counsellor 2" />
              <h3>Ms. Monika Gupta</h3>
              <p>Email: counsellor@iiti.ac.in</p>
              <p>Phone(Office):+91-731-660-3425</p>
            </div>
            <div className="team-member">
              <h2>Counsellor</h2>
              <img src=".\images\shubham2.png" alt="Counsellor 3" />
              <h3>Mr. Shubham Mandsaurkar</h3>
              <p>Email: counselor_shubham@iiti.ac.in</p>
              <p>Phone(Office):+91-731-660-3333 </p>
            </div>
          </div>
        </div>
  
 <div className='members-container'>
  <div className='section'>
      <h2>Student Counselling Coordinators</h2>
      <div className="student-card">
        <img src={students[currentIndex].image} alt={students[currentIndex].name} />
        <h3>{students[currentIndex].name}</h3>
        <p>{students[currentIndex].info}</p>
        <p>Email: {students[currentIndex].email}</p>
      </div>
      <div className="arrow-buttons">
        <button onClick={handlePrevClick}>&#8249;</button>
        <button onClick={handleNextClick}>&#8250;</button>
      </div>
    </div>

       <div className='section'>
        <h2>Faculty Counselling Coordinators</h2>
<div className="faculty-card">
          {/* Faculty card contents */}
          <img src={facultyMembers[currentFacultyIndex].image} alt={facultyMembers[currentFacultyIndex].name} />
        <h3>{facultyMembers[currentFacultyIndex].name}</h3>
        <p>{facultyMembers[currentFacultyIndex].info}</p>
        <p>Email: {facultyMembers[currentFacultyIndex].email}</p>

        </div>
        <div className="arrow-buttons">
          <button onClick={handlePrevFacultyClick}>&#8249;</button>
          <button onClick={handleNextFacultyClick}>&#8250;</button>
        </div>      
      </div>
      </div>
      </div>
    );
  };
  
  export default Membersblock;  