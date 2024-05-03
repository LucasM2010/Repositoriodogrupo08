import React from 'react';

function AboutPage() {

  const handleAboutClick = () => {
    
    window.location.href = '/';
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
          <div className="icon-app"><div className="icon"><i className="fas fa-envelope"></i></div><button onClick={handleAboutClick}>Home</button></div>
         <h4>Sobre o FomeZero Connect:
Conectando doadores e instituições de caridade para combater a fome e o desperdício de alimentos. 🍽️💚
FomeZero Connect é uma plataforma dedicada à redistribuição de alimentos, facilitando o processo de 
doação e entrega para aqueles que mais precisam. Junte-se a nós na luta contra a fome! 🤝🌍</h4>

          </div>
          
          <div className="dock-bt-home">
            <div className="home"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
