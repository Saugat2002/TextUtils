import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  const [mode, setMode] = useState("light");

  const toggleThemeBlue = () => {
    setMode("blue");
    document.body.style.backgroundColor = "#042743";
    document.body.style.color = "white";
  }

  const toggleThemeRed = () => {
    setMode("red");
    document.body.style.backgroundColor = "#25080c";
    document.body.style.color = "white";
  }

  const toggleThemeGreen = () => {
    setMode("green");
    document.body.style.backgroundColor = "#112909";
    document.body.style.color = "white";
  }

  const toggleThemeLight = () => {
    setMode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleThemeBlue={toggleThemeBlue} toggleThemeRed={toggleThemeRed} toggleThemeGreen={toggleThemeGreen} toggleThemeLight={toggleThemeLight} />
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
        <Footer mode={mode}/>
      </Router>

    </>
  )
}

export default App
