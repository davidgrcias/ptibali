import React from "react";
import { Helmet } from "react-helmet";
import Dest1 from "./Image/D1.jpg";
import Dest2 from "./Image/D2.jpg";
import Dest3 from "./Image/D3.jpg";
import Dest4 from "./Image/D4.jpg";
import Dest5 from "./Image/D5.jpg";
import Dest6 from "./Image/D6.jpg";
import Dest7 from "./Image/D7.jpg";
import Dest8 from "./Image/D8.jpg";

function TinySlider() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="templateuntree/TinySlider.css" />
        <link rel="stylesheet" href="templateuntree/style.css" />
        <link rel="stylesheet" href="templateuntree/aos.css" />
        <link rel="stylesheet" href="templateuntree/glightbox.min.css" />
        <link rel="stylesheet" href="templateuntree/flatpickr.min.css" />
        <link rel="stylesheet" href="templateuntree/fonts/icomoon/style.css" />
        <link
          rel="stylesheet"
          href="templateuntree/fonts/flaticon/font/flaticon.css"
        />
        <link rel="stylesheet" href="css/ThingsToDo.css" />
        <script src="js/custom.js"></script>
      </Helmet>
      {/* Footer Start */}
      <div
        className="section section-3"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between  mb-5">
            <div className="col-lg-5" data-aos="fade-up">
              <h2 className="heading mb-3">
                Beautiful beaches you can explore in Bali!
              </h2>
              <p>
                Explore Bali's beautiful beaches, from the vibrant shores of
                Kuta to the tranquil waters of Nusa Dua, offering unforgettable
                experiences for all who visit.
              </p>
            </div>
            <div
              className="col-lg-5 text-md-end"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div id="destination-controls">
                <span className="prev me-3" data-controls="prev">
                  <span className="icon-chevron-left" />
                </span>
                <span className="next" data-controls="next">
                  <span className="icon-chevron-right" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="destination-slider-wrap">
          <div className="destination-slider">
            <div className="destination">
              <div className="thumb">
                <img src={Dest1} alt="Image" className="img-fluid" />
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Melasti Beach</a>
                </h3>
                <span className="meta">Badung, Bali Island</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img src={Dest2} alt="Image" className="img-fluid" />
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Canggu Beach</a>
                </h3>
                <span className="meta">North Kuta, Bali Island</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img src={Dest3} alt="Image" className="img-fluid" />
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Seminyak</a>
                </h3>
                <span className="meta">Seminyak Village, Bali Island</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img src={Dest4} alt="Image" className="img-fluid" />
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Kelingking Beach</a>
                </h3>
                <span className="meta">Klungkung, Bali Island</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img src={Dest5} alt="Image" className="img-fluid" />
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Broken Beach</a>
                </h3>
                <span className="meta">Nusa Penida, Bali Island</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img src={Dest6} alt="Image" className="img-fluid" />
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Diamond Beach</a>
                </h3>
                <span className="meta">Nusa Penida, Bali Island</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img src={Dest7} alt="Image" className="img-fluid" />
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Sanur Beach</a>
                </h3>
                <span className="meta">Denpasar, Bali Island</span>
              </div>
            </div>
            <div className="destination">
              <div className="thumb">
                <img src={Dest8} alt="Image" className="img-fluid" />
              </div>
              <div className="mt-4">
                <h3>
                  <a href="#">Kuta Beach</a>
                </h3>
                <span className="meta">Badung, Bali Island</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TinySlider;
