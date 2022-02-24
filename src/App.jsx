import React, { useState, useContext } from "react";

import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { ThemeContext } from "./context";

import "./app.scss";

function App() {
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={"app " + (darkTheme && "dark")}>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
