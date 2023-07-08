import './App.css';
import './Login.css';
import Heading from './components/Heading';
import Homepg from './components/Homepg';
import Navbar from './components/Navbar';
import BackToTopButton from './components/BackToTopButton';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Information from './components/Information';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BackToTopButton />
      <Heading />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepg />} />
          <Route exact path="/activities" element={<Activities />} />
          <Route exact path="/information" element={<Information />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
