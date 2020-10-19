import React, {  } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import Timeline from './components/timeline'
import About from "./components/about";

function App() {


  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
            setIndex(index => index + 1),
        3000 // every 3 seconds
    );
  });

  return (
    <div className="App">
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>

          <div id="colorlib-main">

            <Introduction></Introduction>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
