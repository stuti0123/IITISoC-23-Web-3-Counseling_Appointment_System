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
      <Homepg/>
      <Navbar/>
      <About/>
      <Membersblock/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
