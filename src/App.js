import './App.css';
import Heading from './components/Heading';
import Homepg from './components/Homepg';
import Navbar from './components/Navbar';
import BackToTopButton from './components/BackToTopButton';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Information from './components/Information';
import Booknow from './components/BookNowPage';
import MayShowNavbar from './components/MayShowNavbar';

function App() {
  return (
    <div className="App">
      <BackToTopButton />
      <Router>
<MayShowNavbar>
      <Heading />
        <Navbar />
        </MayShowNavbar>
        <Routes>
          <Route exact path="/" element={<Homepg />} />
          <Route exact path="/activities" element={<Activities />} />
          <Route exact path="/information" element={<Information />} />
          <Route  exact path="/booknow" element={<Booknow/>} />
        </Routes>
        <MayShowNavbar>
        <Footer />
        </MayShowNavbar>
      </Router>
     
    </div>
  );
}

export default App;
