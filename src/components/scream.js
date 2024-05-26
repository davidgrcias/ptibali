import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./scream.css";
import barong from "./imagaes/barong.png";
import bgvid from "./imagaes/backs_1.mp4";

function Game() {
  const [screamText, setScreamText] = useState("SCREAM!");
  const [barongDisplay, setBarongDisplay] = useState("block");
  const [moneyDisplay, setMoneyDisplay] = useState("none");
  const [decibels, setDecibels] = useState(0);
  const [bgVideoActive, setBgVideoActive] = useState(false);

  const startGame = () => {
    console.log("Start game button clicked");
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        console.log("Microphone access granted");
        const microphone = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        microphone.connect(analyser);

        const decibelInterval = setInterval(() => {
          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(dataArray);

          let totalDecibels = 0;
          for (let i = 0; i < dataArray.length; i++) {
            totalDecibels += dataArray[i];
          }

          const averageDecibels = (12 * totalDecibels) / dataArray.length / 4;
          setDecibels(averageDecibels);

          if (averageDecibels >= 400) {
            setScreamText("YOU WIN!");
            console.log(
              "Decibels >= 50. Changing image to uang.gif and adding 'animate' class."
            );
            setBarongDisplay("none");
            setMoneyDisplay("block");
            setBgVideoActive(true);
            clearInterval(decibelInterval);
          }
        }, 100);
      })
      .catch((error) => console.error("Error accessing microphone:", error));
  };

  return (
    <div className={`App ${bgVideoActive ? "video-bg" : ""}`}>
      <Helmet>
        <link rel="stylesheet" href="templatetravela/lightbox.min.css" />
        <link rel="stylesheet" href="templatetravela/owl.carousel.min.css" />
        <link rel="stylesheet" href="templatetravela/bootstrap.min.css" />
      </Helmet>
      <div className="cntainer">
        <div className="container-fluid col-md-6">
          <h1 className="scream">{screamText}</h1>
          <img
            className="col-7 barong"
            src={barong}
            alt=""
            style={{ display: barongDisplay }}
          />
          <video
            className="col-7 money"
            src={bgvid}
            autoPlay
            loop
            style={{ display: moneyDisplay }}
          />
          <div
            className="decibelmeter"
            style={{ height: 3 * decibels + "px" }}
          ></div>
        </div>
      </div>
      <div className="col-md-12">
        <button type="button" className="start" onClick={startGame}>
          <strong>Start</strong>
        </button>
      </div>
      {bgVideoActive && (
        <video className="background-video" src={bgvid} autoPlay loop />
      )}
    </div>
  );
}

export default Game;
