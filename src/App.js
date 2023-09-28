import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import AboutMe from "./components/AboutMe"
import MainTitle from "./components/MainTitle"
import MyStream from "./components/MyStream"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
       <Navbar />
       <LandingPage />
       <MainTitle Title="About Me"/>
       <AboutMe />
       <MainTitle Title="My Stream"/>
       <MyStream/>
       <MainTitle Title="My Links"/>
       <Footer />
    </div>
  );
}

export default App;
