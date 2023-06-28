import React from 'react'
function Footer(){
    return(
<footer className='footer'id='contact-details'>
    <div className='container'>
        <div class='row'>
            <div className='footer-col'>
                <h4>Counselling Services</h4>
                <ul>
                  <a className="counselling-link" style={{color:'white',fontWeight:500}} href='https://iiti.ac.in/page/counselling-cell'> Counselling Cell IITI </a>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="https://www.iiti.ac.in/">IITI Home</a></li>
                    
                    <li><a href="https://www.iiti.ac.in/page/nirf-2023">NIRF</a></li>
                    <li><a href="https://mail.google.com/a/iiti.ac.in">Webmail</a></li>
                    <li><a href="https://www.iiti.ac.in/public/storage/directory/Telephone%20directory%20(21.06.2023).pdf">Directory</a></li>
                    <li><a href="http://people.iiti.ac.in/~medical/">Health Centre</a></li>
                    <li><a href="/http://ebsb.iiti.ac.in/">Social Works</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Facilities</h4>
                <ul>
                    <li><a href="https://academic.iiti.ac.in/"> Academics </a></li>
                    <li><a href="http://iiti.ac.in/page/campus-facilities"> Campus Facilities</a></li>
                    <li><a href="http://hostel.iiti.ac.in/"> Hostel </a></li>
                    <li><a href="https://www.iiti.ac.in/public/storage/dining/Central%20Dining%20Facility%20Updated.pdf"> Central Dining Facility </a></li>
                    <li><a href="http://placement.iiti.ac.in/"> Training and Placement </a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Find us at-</h4>
                <div class='social-links'>
                    <a href="https://www.instagram.com/iitindoreofficial/"> <i class="fab fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://twitter.com/iitiofficial"> <i class="fab fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://in.linkedin.com/school/iit-indore/"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/IIT-Indore-108781240868622"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                    <a href="https://mail.google.com/a/iiti.ac.in"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
    )
}
export default Footer

