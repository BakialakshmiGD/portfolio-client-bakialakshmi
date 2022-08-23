import { Divider } from "@mui/material";
import React, { useState } from "react";
import AboutMe from "./about/AboutMe";
import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import SnackbarFeedback from "./util/SnackbarFeedback";

const App = () => {
  const [isOpenFeedBack, setIsOpenFeedBack] = useState(false);
  const [setDrawerOpen] = useState(false);

  const openDrawerFunc = () => {
    setDrawerOpen(true);
  };
 
  const handleChangeFeedback = () => {
    setIsOpenFeedBack((prev) => !prev);
  };
  const handleCloseFeedback = () => {
    setIsOpenFeedBack((prev) => !prev);
  };

  return (
    <>
      <div id="home" style={{ height: "100vh" }}>
        <HomePage />
      </div>

      <Navbar openDrawerFunc={openDrawerFunc} />

      <div
        id="about"
        style={{ paddingTop: "40px", paddingBottom: "50px", marginTop: "30px" }}
      >
        <AboutMe />
      </div>

      <div id="skills" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Skills />
      </div>

      <div id="projects" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Projects />
      </div>

      <div id="contact" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Contact handleChangeFeedback={handleChangeFeedback} />
      </div>

      <Divider sx={{ color: "#e07ebb" }} />

      <Footer />


      <SnackbarFeedback
        isOpen={isOpenFeedBack}
        handleCloseFeedback={handleCloseFeedback}
      />
    </>
  );
};

export default App;
