import { useState } from "react";
import "./App.css";

import HeroSec from "./components/heroSec";
import TechSkillSec from "./components/techSkillSec";
import Footer from "./components/footer";
import SideProjectSec from "./components/sideProject";
import MyCV from "./components/myCV";

function App() {
  return (
    <>
      <header class="header">
        <div class="logo">
          <img
            className="pageLogo"
            src="src/images/cat-3237903_1280.png"
            alt="cat logo"
          />
          <h1 className="pageName">Ping's portfolio</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#heroSec">Welcome!</a>
            </li>
            <li>
              <a href="#techSkillSec">Technical Skills</a>
            </li>
            <li>
              <a href="#sideProjectSec">My Projects</a>
            </li>
            <li>
              <a href="#myCV">My CV</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="heroSec">
        <HeroSec />
      </div>
      <div id="techSkillSec">
        <TechSkillSec />
      </div>
      <div id="sideProjectSec">
        <SideProjectSec />
      </div>
      <div id="myCV">
        <MyCV />
      </div>
      <Footer id="footer" />
    </>
  );
}

export default App;
