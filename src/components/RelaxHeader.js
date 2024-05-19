import React from "react";
import bgheader from "./Image/backhead.jpg";
import "./RelaxHeader.css";
function RelaxHeader() {
  return (
    <>
      {/* Footer Start */}
      <div className="hero overlay">
        <div className="img-bg rellax">
          <img src={bgheader} alt="Image" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="heading" data-aos="fade-up">
                Discover the Beauty and Cultural Riches of Bali!
              </h1>
              <p className="mb-5" data-aos="fade-up">
                Explore the enchanting island of Bali with our comprehensive
                guide to the best things to see and do. Immerse yourself in
                Bali's stunning natural landscapes, from lush rice terraces to
                pristine beaches.
              </p>
              <div data-aos="fade-up">
                <a
                  href="https://www.youtube.com/watch?v=BFS9n4B_2xA"
                  className="play-button align-items-center d-flex glightbox3"
                >
                  <span className="icon-button me-3">
                    <span className="icon-play" />
                  </span>
                  <span className="caption">Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelaxHeader;
