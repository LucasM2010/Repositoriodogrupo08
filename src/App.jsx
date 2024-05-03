import React from 'react';
import './App.css';

function App() {

  const handleAboutClick = () => {
    
    window.location.href = '/about';
  };

  return (
    <div id="content">
      
      
      <div className="phone">
        <div className="screen">
          <div className="top">
            <div className="dock-left">
              
            </div>
            <div className="dock">
              <div className="speaker"></div>
              
            </div>
            <div className="dock-right">
              <div className="signal"></div>
              <div className="wifi"></div>
              <div className="battery"></div>
            </div>
          </div>

          <div id="icons">
          
          <div className="icon-app"><div className="icon"><i className="fas fa-envelope"></i></div><button onClick={handleAboutClick}>About</button></div>
          <div className="icon-app"><div className="icon"><i className="fas fa-calendar-alt"></i></div><span></span></div>
          <div className="icon-app"><div className="icon"><i className="fas fa-photo-video"></i></div><span></span></div>
            

      

          </div>
          
          <div className="dock-bt-home">
            <div className="home"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


