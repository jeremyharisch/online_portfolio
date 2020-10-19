import React from 'react';

import Sidebar from './components/sidebar'
import Introduction from "./components/introduction";
import Projects from "./components/projects";
import Placeholder from "./components/placeholder";
import Timeline from "./components/timeline";
import Skills from "./components/skills";

import './css/style.css'

import image from './public/images/intro_pic_jeremy.jpeg'


function App() {
  return (

    <div className="App">
      <div className="wrapper">
          <div id="outter">
              <div id="image"><img className="bg-image" src={image} /></div>
              <div id="contentOutter">
                  <Sidebar></Sidebar>
                  <Introduction></Introduction>
                  <Projects></Projects>
                  <Placeholder></Placeholder>
                  
                  <Timeline></Timeline>
              </div>
          </div>

      </div>
    </div>
  );
}

export default App;
