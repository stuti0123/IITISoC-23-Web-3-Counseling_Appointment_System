import './App.css';
import Heading from './components/Heading'
import Homepg from './components/Homepg';
import Navbar from './components/Navbar';
import BackToTopButton from './components/BackToTopButton';
import Footer from './components/Footer';
import { BrowserRouter,React,Reacts, Route, Routes} from 'react-router-dom';
import Activities from './components/Activities';
import Information from './components/Information';
function App() {
  return (
    <div className="App">
        <BackToTopButton/>
        <Heading/>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={ <Homepg/>}/>
            <Route  exact path="/activities" element={ <Activities/>}/>
            <Route  exact path="/information" element={ <Information/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
