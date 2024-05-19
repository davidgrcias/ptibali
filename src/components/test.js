import React, { useState, useEffect } from "react";
import img1 from "./imgofgame/img1.jpg";
// ... other imports ...
import "./Game.css";
import "./Game.scss"; // Import the SCSS file

function GuessGame() {
  const [randomGame, setRandomGame] = useState({});
  const [selectedAttraction, setSelectedAttraction] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * game.length);
    setRandomGame(game[randomIndex]);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const result =
      parseInt(selectedAttraction) === randomGame.id &&
      parseInt(selectedRegion) === randomGame.id;
    console.log(result ? "Win: You guessed correctly!" : "Lose: Try again!");
    const selectedGame = game[randomGame.id - 1];
    const templateParams = {
      name,
      email,
      datetime,
      answer1: selectedGame.name,
      answer2: selectedGame.lokasi,
      result: result ? "Win" : "Lose",
    };

    emailjs
      .send(
        "service_mmb3f7o",
        "template_knuk1ru",
        templateParams,
        "5YCbovbRPWioKFSyv"
      )
      .then(
        (response) => {
          console.log(
            "Email successfully sent!",
            response.status,
            response.text
          );
          alert(
            "Thank you for playing! Please check your email to see your result!"
          );
        },
        (err) => {
          console.error("Failed to send email. Error:", err);
        }
      );
  };

  const game = [
    { id: 1, url: img1, name: "Jatiluwih Rice Terrace", lokasi: "..." },
    // ... other game objects ...
  ];

  return (
    <>
      <div className="container-fluid booking py-5">
        <div className="container py-5" id="game">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4">
              <img src={randomGame.url} alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-8">
              <h1 className="text-white mb-3">Guess Game</h1>
              <p className="text-white mb-4">
                Guess{" "}
                <span className="text-warning">
                  Tourist Attraction and It's Region
                </span>{" "}
                In Bali (The results (win/lose) will be sent to the email
                address that has been entered.)
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="hidden" name="id" value={randomGame.id} />
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        id="name"
                        placeholder="Your Name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-white border-0"
                        id="email"
                        placeholder="Your Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        id="datetime"
                        placeholder="Date & Time"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                        name="datetime"
                        onChange={(e) => setDatetime(e.target.value)}
                      />
                      <label htmlFor="datetime">Date &amp; Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-white border-0"
                        id="SelectPerson"
                        name="touristattraction"
                        onChange={(e) => setSelectedAttraction(e.target.value)}
                      >
                        {game.map((game) => (
                          <option key={game.id} value={game.id}>
                            {game.name}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="SelectPerson">Tourist Attraction</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-white border-0"
                        id="CategoriesSelect"
                        name="region"
                        onChange={(e) => setSelectedRegion(e.target.value)}
                      >
                        {game.map((game) => (
                          <option key={game.id} value={game.id}>
                            {game.lokasi}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="CategoriesSelect">Region</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary text-white w-100 py-3"
                      type="submit"
                    >
                      GUESS!!!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Background Animation Structure */}
      <div className="container">
        {[...Array(400)].map((_, i) => (
          <div key={i} className="trigger"></div>
        ))}
        <div className="monitor">
          <div className="camera o-x">
            <div className="camera o-y">
              <div className="camera o-z">
                <div className="vr">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="vr_layer">
                      <div className="vr_layer_item"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuessGame;
