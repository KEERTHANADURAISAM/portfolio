import { useRef } from "react";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import MyProjects from "./components/Project/MyProjects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";


// import LiveProject2 from "./components/liveProject2.js/LiveProject2";

function App() {
  const pageRefs = useRef({})
  return (
    <div className="App">
      <div>
      <Navbar pageRefs={pageRefs}/>
      <Home pageRefs={pageRefs}/>
      <About pageRefs={pageRefs}/>
      <Skills pageRefs={pageRefs}/>
      <MyProjects pageRefs={pageRefs}/>
      <Contact pageRefs={pageRefs}/>
    </div>
    </div>
  );
}

export default App;
