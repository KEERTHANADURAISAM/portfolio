import { useRef } from "react";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Project";

function App() {
  const pageRefs = useRef({})
  return (
    <div className="App">
      <div>
      <Navbar pageRefs={pageRefs}/>
      <Home pageRefs={pageRefs}/>
      <About pageRefs={pageRefs}/>
      <Skills pageRefs={pageRefs}/>
      <Project pageRefs={pageRefs}/>
      <Contact pageRefs={pageRefs}/>
    </div>
    </div>
  );
}

export default App;
