import React, { useState, useEffect } from "react";
import img1 from "./imgofgame/img1.jpg";
import img2 from "./imgofgame/img2.jpg";
import img3 from "./imgofgame/img3.jpg";
import img4 from "./imgofgame/img4.jpg";
import img5 from "./imgofgame/img5.jpg";
import img6 from "./imgofgame/img6.jpg";
import img7 from "./imgofgame/img7.jpg";
import img8 from "./imgofgame/img8.jpg";
import img9 from "./imgofgame/img9.jpg";
import img10 from "./imgofgame/img10.jpg";
import img11 from "./imgofgame/img11.jpg";
import img12 from "./imgofgame/img12.jpg";
import img13 from "./imgofgame/img13.jpg";
import img14 from "./imgofgame/img14.jpg";
import img15 from "./imgofgame/img15.jpg";
import img16 from "./imgofgame/img16.jpg";
import img17 from "./imgofgame/img17.jpg";
import img18 from "./imgofgame/img18.jpg";
import img19 from "./imgofgame/img19.jpg";
import img20 from "./imgofgame/img20.jpg";
import img21 from "./imgofgame/img21.jpg";
import img22 from "./imgofgame/img22.jpg";
import img23 from "./imgofgame/img23.jpg";
import img24 from "./imgofgame/img24.jpg";
import img25 from "./imgofgame/img25.jpg";
import img26 from "./imgofgame/img26.jpg";
import img27 from "./imgofgame/img27.jpg";
import img28 from "./imgofgame/img28.jpg";
import img29 from "./imgofgame/img29.jpg";
import img30 from "./imgofgame/img30.jpg";
import emailjs from "emailjs-com";
import "./Game.css";
import Particle from "./Particle";
// Import the SCSS file

function GuessGame() {
  const [randomGame, setRandomGame] = useState({});
  const [selectedAttraction, setSelectedAttraction] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [datetime, setDatetime] = useState("");

  useEffect(() => {
    // Randomly select a game on component mount
    const randomIndex = Math.floor(Math.random() * game.length);
    setRandomGame(game[randomIndex]);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    // Check if both selected values match the ID of the displayed game
    const result =
      parseInt(selectedAttraction) === randomGame.id &&
      parseInt(selectedRegion) === randomGame.id;
    console.log(result ? "Win: You guessed correctly!" : "Lose: Try again!");
    const selectedGame = game[randomGame.id - 1];
    // Send email
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
    /* if (
      parseInt(selectedAttraction) === randomGame.id &&
      parseInt(selectedRegion) === randomGame.id
    ) {
      console.log("Win: You guessed correctly!");
    } else {
      console.log("Lose: Try again!");
    } */
  };

  const game = [
    {
      id: 1,
      url: img1,
      name: "Jatiluwih Rice Terrace",
      lokasi: "Kecamatan Penebel, Kabupaten Tabanan, Bali",
    },
    {
      id: 2,
      url: img2,
      name: "Bali Shell Museum",
      lokasi: "Kecamatan Kintamani, Kabupaten Bangli, Bali",
    },
    {
      id: 3,
      url: img3,
      name: "Pura Taman Saraswati",
      lokasi: "Beratan, Kec. Kediri, Kabupaten Tabanan, Bali",
    },
    {
      id: 4,
      url: img4,
      name: "Bali Museum",
      lokasi: "Kecamatan Abang, Kabupaten Karangasem, Bali",
    },
    {
      id: 5,
      url: img5,
      name: "Batur Lake Kintamani",
      lokasi: "Kecamatan Kintamani, Kabupaten Bangli, Bali",
    },
    {
      id: 6,
      url: img6,
      name: "Beratan Lake Bedugul",
      lokasi: "Beratan, Kec. Kediri, Kabupaten Tabanan, Bali",
    },
    {
      id: 7,
      url: img7,
      name: "Tirta Gangga Water Palace",
      lokasi: "Kecamatan Abang, Kabupaten Karangasem, Bali",
    },
    {
      id: 8,
      url: img8,
      name: "Garuda Wisnu Kencana Cultural Park",
      lokasi: "Jl. Raya Uluwatu, Ungasan, Kuta Selatan, Badung, Bali",
    },
    {
      id: 9,
      url: img9,
      name: "Penglipuran Village",
      lokasi: "Penglipuran, Bangli, Bali",
    },
    {
      id: 10,
      url: img10,
      name: "Lempuyang Temple",
      lokasi:
        "Jl. Pura Telaga Mas Lempuyang, Tri Buana, Kecamatan Abang, Kabupaten Karangasem, Bali",
    },
    {
      id: 11,
      url: img11,
      name: "Tirta Empul Temple",
      lokasi: "Desa Manukaya, Tampaksiring, Kabupaten Gianyar, Bali",
    },
    {
      id: 12,
      url: img12,
      name: "Sidemen Hill",
      lokasi: "Sidemen, Kabupaten Karangasem, Bali",
    },
    {
      id: 13,
      url: img13,
      name: "Goa Gajah",
      lokasi: "Desa Bedulu, Kecamatan Blahbatuh, Kabupaten Gianyar, Bali",
    },
    {
      id: 14,
      url: img14,
      name: "Ubud Palace",
      lokasi: "Jl. Raya Ubud No.8, Ubud, Kabupaten Gianyar, Bali",
    },
    {
      id: 15,
      url: img15,
      name: "Ubud Art Market",
      lokasi: "Jl. Raya Ubud No.35, Ubud, Kabupaten Gianyar, Bali",
    },
    {
      id: 16,
      url: img16,
      name: "Aling-Aling Waterfall",
      lokasi:
        "Jl. Raya Desa Sambangan, Sambangan, Kecamatan Sukasada, Kabupaten Buleleng, Bali",
    },
    {
      id: 17,
      url: img17,
      name: "Tegalalang Rice Terrace",
      lokasi: "Tegalalang, Kabupaten Gianyar, Bali",
    },
    {
      id: 18,
      url: img18,
      name: "Ubud Monkey Forest",
      lokasi: "Jl. Monkey Forest, Ubud, Kabupaten Gianyar, Bali",
    },
    {
      id: 19,
      url: img19,
      name: "Uluwatu Temple",
      lokasi: "Pecatu, Kecamatan Kuta Selatan, Kabupaten Badung, Bali",
    },
    {
      id: 20,
      url: img20,
      name: "Mount Batur",
      lokasi: "Batur Selatan, Kecamatan Kintamani, Kabupaten Bangli, Bali",
    },
    {
      id: 21,
      url: img21,
      name: "Tanah Lot Temple",
      lokasi: "Beraban, Kediri, Kabupaten Tabanan, Bali",
    },
    {
      id: 22,
      url: img22,
      name: "Besakih Temple",
      lokasi: "Desa Besakih, Rendang, Kabupaten Karangasem, Bali",
    },
    {
      id: 23,
      url: img23,
      name: "West Bali National Park",
      lokasi: "Kabupaten Jembrana dan Buleleng, Bali",
    },
    {
      id: 24,
      url: img24,
      name: "Sekumpul Waterfall",
      lokasi: "Bebetin, Kec. Sawan, Kabupaten Buleleng, Bali",
    },
    {
      id: 25,
      url: img25,
      name: "Tegenungan Waterfall",
      lokasi: "Kemenuh, Kec. Sukawati, Kabupaten Gianyar, Bali",
    },
    {
      id: 26,
      url: img26,
      name: "Gorilla Cave",
      lokasi: "Kelusa, Kecamatan Ubud, Kabupaten Gianyar, Bali",
    },
    {
      id: 27,
      url: img27,
      name: "Bali Bird Park",
      lokasi: "Batubulan, Kec. Sukawati, Kabupaten Gianyar, Bali",
    },
    {
      id: 28,
      url: img28,
      name: "Bali Zoo",
      lokasi: "Singapadu, Kec. Sukawati, Kabupaten Gianyar, Bali",
    },
    {
      id: 29,
      url: img29,
      name: "Campuhan Ridge Walk",
      lokasi: "Kecamatan Ubud, Kabupaten Gianyar, Bali",
    },
    {
      id: 30,
      url: img30,
      name: "Gitgit Waterfall",
      lokasi: "Gitgit, Kec. Sukasada, Kabupaten Buleleng, Bali",
    },
  ];
  return (
    <>
      <Particle />
      <div className="container-fluid booking py-5" id="booking">
        <div className="container py-5" id="game">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4">
              <img src={randomGame.url} alt="Image" className="img-fluid" />{" "}
              {/* The image in the img src will change randomly between img1 to img30 every the page refreshing*/}
            </div>
            <div className="col-lg-8">
              <div className="waviy">
                <span style={{ "--i": 1 }}>G</span>
                <span style={{ "--i": 2 }}>U</span>
                <span style={{ "--i": 3 }}>E</span>
                <span style={{ "--i": 4 }}>S</span>
                <span style={{ "--i": 5 }}>S</span>
                <span style={{ "--i": 6 }}>&nbsp;</span>
                <span style={{ "--i": 7 }}>G</span>
                <span style={{ "--i": 8 }}>A</span>
                <span style={{ "--i": 9 }}>M</span>
                <span style={{ "--i": 10 }}>E</span>
              </div>
              <div id="textgame">
                <p className="mb-4">
                  Guess Tourist Attraction and It's Region In Bali (The results
                  (win/lose) will be sent to the email address that has been
                  entered.)
                </p>
              </div>
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
    </>
  );
}

export default GuessGame;
