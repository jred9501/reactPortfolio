import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";

function App() {
  let component

  switch (window.location.pathname) {
    case "/":
      component = <Home/>;
      break;
    case "/aboutme":
      component = <AboutMe/>;
      break;
    case "/skills":
      component = <Skills/>;
      break;
    case "/projects":
      component = <Projects/>;
      break;
      default:
      

  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
