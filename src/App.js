import './App.css';
import AboutMe from './components/AboutMe';
import BriefIntro from './components/BriefIntro';
import ContactMe from './components/ContactMe';
// import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
  <div>
   {/* <Navbar/> */}
   <BriefIntro/>
   <AboutMe/>
   <Skills/>
   <Projects/>
   <ContactMe/>
  </div>
  );
}

export default App;
