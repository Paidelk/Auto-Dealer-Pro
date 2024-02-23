import React from 'react';
import './global.css';

function MainPage() {
  return (
    <div className="app-wrapper navbar-dark bg-success" style={{position: 'relative'}}>
      <div className="container text-center" style={{position: 'absolute', zIndex: 3, width: '100%'}}>
        <h1 className="display-5 fw-bold pizzazz-text"><span className="highlight">Auto</span> Dealer <span className="highlight">Pro</span></h1>
        <p className="lead pizzazz-text font-weight-bold" style={{marginTop: '4em'}}>
          The <span className="highlight">premiere</span> solution for <span className="highlight">automobile dealership</span> management!
        </p>
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" style={{position: 'absolute', zIndex: 1, width: '100%', top: '-100px'}}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="Gtr.png" className="d-block w-100" alt="Gtr" />
          </div>
          <div className="carousel-item">
            <img src="NissanZ.png" className="d-block w-100" alt="NissanZ" />
          </div>
          <div className="carousel-item">
            <img src="Skyline.png" className="d-block w-100" alt="Skyline" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
