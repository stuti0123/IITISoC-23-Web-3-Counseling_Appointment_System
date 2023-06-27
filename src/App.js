//import logo from './images/logo.png';
//import backgroundimg from './images/backgroungimg.jpg'
//import c2 from './images/c2.jpeg'
//import homeimg from './images/homeimg.png';
import './App.css';
import Homepg from './components/Homepg';
import Navbar from './components/Navbar';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Membersblock from './components/Membersblock';
function App() {
  return (
    <div className="App">
    <img style={{opacity:0.6,width:1263}} src='./images/c11.jpg' alt=""/>
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
  <div class="cloud">
    <p >Book an appointment and talk with your counsellor now!</p>
  </div>
  <button class="book-now-button">Book Now</button>
</div>

      <p style={{position:'absolute',left:450,top:50,padding:0,fontSize:55,fontWeight:500}}>Counselling Services</p>
      </div>
      <Navbar/>
      <Homepg/>
      <About/>
<Membersblock/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
