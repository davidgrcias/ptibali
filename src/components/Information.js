import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

function Information() {
  const [data, setData] = useState({});
  const [distance, setDistance] = useState({ km: 0, miles: 0 });
  const location = "Bali"; // Static location as Bali

  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=Bali&units=metric&appid=e70294cf29182e586a00cf407190bff2";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    const fetchGeoData = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const data = response.data;
        const userLat = parseFloat(data.latitude);
        const userLong = parseFloat(data.longitude);

        const baliLat = -8.409518;
        const baliLong = 115.188919;

        const toRadians = (deg) => (deg * Math.PI) / 180.0;

        const lat1 = toRadians(userLat);
        const lat2 = toRadians(baliLat);
        const long1 = toRadians(userLong);
        const long2 = toRadians(baliLong);

        const distanceMiles =
          3963.0 *
          Math.acos(
            Math.sin(lat1) * Math.sin(lat2) +
              Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1)
          );

        const distanceKm = distanceMiles * 1.609344;

        setDistance({
          km: distanceKm.toFixed(2),
          miles: distanceMiles.toFixed(2),
        });
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
      }
    };

    fetchGeoData();

    window.jQuery.fn.jQuerySimpleCounter = function (options) {
      const settings = window.jQuery.extend(
        {
          start: 0,
          end: 100,
          easing: "swing",
          duration: 400,
          complete: "",
        },
        options
      );

      const thisElement = window.jQuery(this);

      window.jQuery({ count: settings.start }).animate(
        { count: settings.end },
        {
          duration: settings.duration,
          easing: settings.easing,
          step: function () {
            const mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
          },
          complete: settings.complete,
        }
      );
    };

    window.jQuery(".about-me-img").hover(
      function () {
        window
          .jQuery(".authorWindowWrapper")
          .stop()
          .fadeIn("fast")
          .find("p")
          .addClass("trans");
      },
      function () {
        window
          .jQuery(".authorWindowWrapper")
          .stop()
          .fadeOut("fast")
          .find("p")
          .removeClass("trans");
      }
    );
  }, []);

  useEffect(() => {
    if (distance.km > 0) {
      window
        .jQuery("#number1")
        .jQuerySimpleCounter({ end: distance.km, duration: 3000 });
    }
  }, [distance]);

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="templateweather/Information.css" />
        <link rel="stylesheet" href="templateweather/Information.js" />
      </Helmet>
      <div className="app">
        <div className="search"></div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.city ? data.city.name : "Loading..."}</p>
            </div>
            <div className="temp">
              {data.list ? (
                <h1 id="white">{data.list[0].main.temp.toFixed()}°C</h1>
              ) : null}
            </div>
            <div className="description">
              {data.list ? <p>{data.list[0].weather[0].main}</p> : null}
            </div>
          </div>

          {data.city && (
            <div className="bottom">
              <div className="feels">
                {data.list ? (
                  <p className="bold">
                    {data.list[0].main.feels_like.toFixed()}°C
                  </p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.list ? (
                  <p className="bold">{data.list[0].main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.list ? (
                  <p className="bold">
                    {data.list[0].wind.speed.toFixed()} MPH
                  </p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container-fluid bg-light service py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">
              Distance & Travel Time Approximation
            </h5>
            <h1 className="mb-0">
              Estimated Distance & Time From Your Location to Bali
            </h1>
          </div>

          <div id="projectFacts" className="sectionClass">
            <div className="fullWidth col-md-12">
              <div className="projectFactsWrap ">
                <div
                  className="item wow fadeInUpBig animated animated"
                  data-number={12}
                  style={{ visibility: "visible" }}
                >
                  <i className="fa fa-road" />
                  <p id="number1" className="number">
                    12
                  </p>
                  <span />
                  <p>Distance In KM</p>
                </div>
                <div
                  className="item wow fadeInUpBig animated animated"
                  data-number={55}
                  style={{ visibility: "visible" }}
                >
                  <i className="fa fa-car" />
                  <p id="number2" className="number">
                    55
                  </p>
                  <span />
                  <p>Travel Time (By Car)</p>
                </div>
                <div
                  className="item wow fadeInUpBig animated animated"
                  data-number={359}
                  style={{ visibility: "visible" }}
                >
                  <i className="fa fa-walking" />
                  <p id="number3" className="number">
                    359
                  </p>
                  <span />
                  <p>Travel Time (By Walk)</p>
                </div>
                <div
                  className="item wow fadeInUpBig animated animated"
                  data-number={246}
                  style={{ visibility: "visible" }}
                >
                  <i className="fa fa-motorcycle" />
                  <p id="number4" className="number">
                    246
                  </p>
                  <span />
                  <p>Travel Time (By Motorcycle)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
