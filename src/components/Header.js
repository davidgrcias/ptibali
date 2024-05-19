import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Header.css";

function Header() {
  return (
    <>
      {/* Navigation */}
      <Helmet>
        <link rel="stylesheet" href="templatetravela/lightbox.min.css" />
        <link rel="stylesheet" href="templatetravela/owl.carousel.min.css" />
        <link rel="stylesheet" href="templatetravela/bootstrap.min.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,700"
          rel="stylesheet"
          type="text/css"
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link rel="stylesheet" href="templatenavbar/css/style.css" />
        {/*<script src="templatenavbar/js/jquery.min.js"></script> */}
        <script src="templatenavbar/js/popper.js"></script>
        <script src="templatenavbar/js/bootstrap.min.js"></script>
        <script src="templatenavbar/js/main.js"></script>
        <script src="templatenavbar/js/navbarcustom.js"></script>
      </Helmet>

      <div>
        <nav
          id="colorlib-main-nav"
          role="navigation"
          class="site-navbar site-navbar-target js-sticky-header"
        >
          <a className="js-colorlib-nav-toggle colorlib-nav-toggle active">
            <i />
          </a>
          <div className="js-fullheight colorlib-table">
            <div className="img" />
            <div className="colorlib-table-cell js-fullheight" id="mobi">
              <div className="row no-gutters">
                <div className="col-md-12 text-center" id="orange">
                  <NavLink className="navbar-brand" to="/">
                    <img
                      src="/assets/img/wi.png"
                      alt="Start Bootstrap"
                      class="mb-4"
                      style={{
                        height: "8em",
                        marginLeft: "0.3em",
                      }}
                    />
                  </NavLink>

                  <ul>
                    <li activeClassName="active">
                      <NavLink
                        to="/"
                        className="nav-item nav-link"
                        exact
                        id="link"
                      >
                        <i className="fa-solid fa-house"></i> Home
                      </NavLink>
                    </li>
                    <li activeClassName="active">
                      <NavLink
                        to="/Things-to-do"
                        className="nav-item nav-link"
                        id="link"
                      >
                        <i className="fas fa-tasks"></i> Things to do
                      </NavLink>
                    </li>
                    <li activeClassName="active">
                      <NavLink
                        to="/About"
                        className="nav-item nav-link"
                        id="link"
                      >
                        <i className="fa-solid fa-people-group"></i> About Us
                      </NavLink>
                    </li>
                    <li activeClassName="active">
                      <NavLink
                        to="/Game"
                        className="nav-item nav-link"
                        id="link"
                      >
                        <i className="fa-solid fa-gamepad"></i> Game
                      </NavLink>
                    </li>
                    <li activeClassName="active">
                      <NavLink
                        to="/Information"
                        className="nav-item nav-link"
                        id="link"
                      >
                        <i className="fa-solid fa-circle-info"></i> Information
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div id="colorlib-page">
          <header>
            <div className="container">
              <div className="colorlib-navbar-brand">
                <NavLink className="colorlib-logo" to="/">
                  <img
                    src="/assets/img/wi.png"
                    alt="Start Bootstrap"
                    style={{
                      height: "8em",
                      marginTop: "-1em",
                    }}
                  />
                </NavLink>
              </div>
              <a
                className="js-colorlib-nav-toggle colorlib-nav-toggle"
                id="hamburger"
                style={{
                  height: "8em",
                  marginTop: "1.5em",
                }}
              >
                <i />
              </a>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default Header;
