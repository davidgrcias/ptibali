import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Footer() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="templatetravela/lightbox.min.css" />
        <link rel="stylesheet" href="templatetravela/owl.carousel.min.css" />
        <link rel="stylesheet" href="templatetravela/bootstrap.min.css" />
        <link rel="stylesheet" href="Footer.css" />
      </Helmet>
      {/* Footer Start */}

      <div className="container-fluid footer py-5" id="foot">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white" id="white">
                  Contact us :
                </h4>

                <a className="text-white" href>
                  <i className="fa-solid fa-house" /> &nbsp;Universitas
                  Multimedia Nusantara, Indonesia
                </a>
                <a className="text-white" href>
                  <i className="fas fa-envelope me-2" />{" "}
                  kelompok5thebest@gmail.com
                </a>
                <a className="text-white" href>
                  <i className="fas fa-phone me-2" /> +62 877-7680-3957
                </a>
                <div class="d-flex align-items-center">
                  <i class="fas fa-share fa-2x text-white me-2"></i>
                  <a
                    class="btn-square btn btn-primary rounded-circle mx-1 scm"
                    href="https://www.youtube.com/@DavidGTech"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a
                    class="btn-square btn btn-primary rounded-circle mx-1 scm"
                    href="http://tiktok.com/davidgtech"
                  >
                    <i class="fab fa-tiktok"></i>
                  </a>
                  <a
                    class="btn-square btn btn-primary rounded-circle mx-1 scm"
                    href="https://www.instagram.com/davidgrcias/"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a
                    class="btn-square btn btn-primary rounded-circle mx-1 scm"
                    href="https://www.linkedin.com/in/davidgrcias/"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      <div className="container-fluid copyright text-body py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-end mb-md-0">
              <i className="fas fa-copyright me-2" />
              <a className="text-white" href="#">
                Bali
              </a>
              &nbsp;&nbsp;<span>All right reserved.</span>
            </div>
            <div className="col-md-6 text-center text-md-start">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              <span>Designed By</span>&nbsp;
              <a className="text-white" href="https://htmlcodex.com">
                Kelompok 5
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
