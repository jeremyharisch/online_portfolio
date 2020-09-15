import React from 'react';

import Sidebar from './components/sidebar'
import Introduction from "./components/introduction";
import About from "./components/about";

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
                  <About></About>
              </div>
          </div>

      </div>
    </div>
  );
}

export default App;
