import React from "react";
import { Helmet } from "react-helmet";

function VideoHeader() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="css/VideoHeader.css" />
      </Helmet>
      {/* Video Header */}
      <section className="hero-section" id="section_1">
        <div className="section-overlay" />
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 mt-auto mb-5 text-center">
              <h1 className="text-white mb-3 lesstop">
                Welcome to Bali, the Island of Gods
              </h1>
              <a
                className="btn custom-btn smoothscroll"
                id="bydavid"
                href="#section_2"
              >
                Let's explore
              </a>
            </div>
            <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
              <div className="location-wrap mx-auto py-3 py-lg-0">
                <h5 className="text-white">
                  <i className="custom-icon bi-geo-alt me-2" />
                  Bali, Indonesia
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="video-wrap">
          <video autoPlay loop muted className="custom-video" poster>
            <source src="/assets/video/pexels-2022395.mp4" type="video/mp4" />
            /assets/img/wi.png Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}

export default VideoHeader;
