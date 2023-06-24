//import logo from './images/logo.png';
//import backgroundimg from './images/backgroungimg.jpg'
//import c2 from './images/c2.jpeg'
//import homeimg from './images/homeimg.png';
import './App.css';
import Navbar from './components/Navbar';
import sidecomp from './components/sidecomp'
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
      <p style={{position:'absolute',left:450,top:0,padding:0,fontSize:40,fontWeight:500}}>Counselling Services</p>
      </div>
      <Navbar/>
    </div>
  );
}

export default App;
