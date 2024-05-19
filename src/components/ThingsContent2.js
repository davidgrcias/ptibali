import React from "react";
import { Helmet } from "react-helmet";
import foot from "./Image/foots.jpg";
import img1 from "./imgofpackages/img1.jpg";
import img2 from "./imgofpackages/img2.jpg";
import img3 from "./imgofpackages/img3.jpg";
import img4 from "./imgofpackages/img4.jpg";
import img5 from "./imgofpackages/img5.jpg";
import img6 from "./imgofpackages/img6.jpg";
import img7 from "./imgofpackages/img7.jpg";
import img8 from "./imgofpackages/img8.jpg";
import img9 from "./imgofpackages/img9.jpg";
import img10 from "./imgofpackages/img10.jpg";

function ThingsContent2() {
  const packages = [
    {
      id: 1,
      url: img1,
      name: "Hand Crafting Jewelry in John Hardy Kapal Bamboo Boutique & Workshop",
      harga: "IDR 4000K",
      rating: "4.7",
      lokasi: "Banjar Baturning No. 1, Desa Mambal, Bali",
      deskripsi:
        "Crafting beauty, one piece at a time. Join us at the John Hardy Kapal Bamboo Boutique & Workshop for an unforgettable journey into the art of handcrafting jewelry.",
    },
    {
      id: 2,
      url: img2,
      name: "Make a Parfums in L’Atelier Parfums et Créations ",
      harga: "IDR 1980K",
      rating: "4.8",
      lokasi: "Seminyak, Kec. Kuta, Kabupaten Badung, Bali",
      deskripsi:
        "Unveil your essence at L'Atelier Parfums et Créations. Let fragrance be your canvas, and creation your masterpiece.",
    },
    {
      id: 3,
      url: img3,
      name: "Scuba Diving",
      harga: "IDR 1900K",
      rating: "5.0",
      lokasi: "Sanur, Denpasar Selatan, Kota Denpasar, Bali",
      deskripsi:
        "Dive into Bali's vibrant underwater world. Explore the depths and discover a kaleidoscope of marine life beneath the surface.",
    },
    {
      id: 4,
      url: img4,
      name: "ATV Quad Bike with Waterfall Gorilla Cave",
      harga: "IDR 562K",
      rating: "5.0",
      lokasi: "Ubud, Bali",
      deskripsi:
        "Embark on an adrenaline-fueled adventure through Bali's rugged terrain. Ride through jungle trails on ATV quad bikes and uncover the hidden gems of Waterfall Gorilla Cave.",
    },
    {
      id: 5,
      url: img5,
      name: "White Water Rafting",
      harga: "IDR 363K",
      rating: "5.0",
      lokasi: "Ubud, Bali",
      deskripsi:
        "Feel the rush as you conquer Bali's mighty rapids. Dive into the heart-pounding excitement of white water rafting and let the river be your guide.",
    },
    {
      id: 6,
      url: img6,
      name: "Bali Snorkeling at Blue Lagoon",
      harga: "IDR 724K",
      rating: "5.0",
      lokasi: "Blue Lagoon, Ubud, Bali",
      deskripsi:
        "Dive into a world of wonder at Bali's Blue Lagoon. Experience the magic of snorkeling as you encounter vibrant marine life beneath the crystal-clear waters.",
    },
    {
      id: 7,
      url: img7,
      name: "Jungle Swing",
      harga: "IDR 626K",
      rating: "5.0",
      lokasi: "Ubud Jungle Swing, Bali",
      deskripsi:
        "Swing into adventure amidst Bali's lush jungle. Feel the thrill of soaring through the treetops and immerse yourself in nature's embrace.",
    },
    {
      id: 8,
      url: img8,
      name: "Bali Parasailing Adventure, Banana Boat, Jet Ski and Donut Boat ",
      harga: "IDR 947K",
      rating: "5.0",
      lokasi: "Nusa Dua, Bali",
      deskripsi:
        "Experience the ultimate thrill ride in Bali's waters. From parasailing to banana boat, jet ski to donut boat – embark on an adrenaline-packed adventure you'll never forget.",
    },
    {
      id: 9,
      url: img9,
      name: "Bali Seawalker",
      harga: "IDR 340K",
      rating: "4.4",
      lokasi: "South Kuta, Badung Regency, Bali",
      deskripsi:
        "Explore Bali's underwater wonders with a seawalker adventure. Immerse yourself in the beauty of the ocean without getting your hair wet!",
    },
    {
      id: 10,
      url: img10,
      name: "Uluwatu Kecak Dance",
      harga: "IDR 140K",
      rating: "4.0",
      lokasi: "ULuwatu, Badung, Bali",
      deskripsi:
        "Immerse yourself in the mesmerizing rhythms of Bali's Uluwatu Kecak Dance. Witness an enchanting tale unfold against the backdrop of a fiery sunset and ancient cliffs.",
    },
  ];
  return (
    <>
      {/* Packages Start */}
      <Helmet>
        <link rel="stylesheet" href="templatetravela/lightbox.min.css" />
        <link rel="stylesheet" href="templatetravela/owl.carousel.min.css" />
        <link rel="stylesheet" href="templatetravela/bootstrap.min.css" />

        {/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script> */}
        <script src="js/main2.js"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        ></link>
      </Helmet>
      <div className="container-fluid packages py-2">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">Bali Attractions</h5>
            <h1 className="mb-0">Top Things To Do In Bali</h1>
          </div>
          <div className="packages-carousel owl-carousel">
            {packages.map((pkg) => (
              <div key={pkg.id} className="packages-item" id={pkg.id}>
                <div className="packages-img">
                  <img
                    src={pkg.url}
                    className="img-fluid w-100 rounded-top"
                    alt="Image"
                  />
                  <div
                    className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                    style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                  >
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-map-marker-alt me-2" />
                      {pkg.lokasi}
                    </small>
                  </div>
                  <div className="packages-price py-1 px-1 text-center">
                    Start From {pkg.harga}
                  </div>
                </div>
                <div className="packages-content bg-light">
                  <div className="p-4 pb-0">
                    <h5 className="mb-0">{pkg.name}</h5>
                    <div className="mb-3">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                    <p className="mb-4">{pkg.deskripsi}</p>
                  </div>
                  <div className="row bg-primary rounded-bottom mx-0" id="biru">
                    <div className="col-6 text-start px-0"></div>
                    <div className="col-6 text-end px-0">
                      <a
                        href="#"
                        className="btn-hover btn text-white py-2 px-4"
                        id="hover"
                      >
                        Add to Favourite&nbsp;{" "}
                        <i className="fa-solid fa-bookmark"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Packages End */}

      {/* Footer Start */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <img src={foot} alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <h2 className="heading mb-5">
                Frequently Asked <br /> Questions
              </h2>
              <div className="custom-accordion" id="accordion_1">
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What are the must-visit attractions in Bali?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                      Must-visit attractions in Bali include the iconic Uluwatu
                      Temple, the breathtaking rice terraces of Tegallalang, and
                      the vibrant Ubud Monkey Forest.
                    </div>
                  </div>
                </div>{" "}
                {/* .accordion-item */}
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What are the best activities to experience in Bali?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                      Bali offers a plethora of activities, from surfing in Kuta
                      to snorkeling in the pristine waters of Nusa Penida,
                      exploring the artistic community of Ubud, or trekking up
                      Mount Batur to witness a stunning sunrise..
                    </div>
                  </div>
                </div>{" "}
                {/* .accordion-item */}
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What is the best time of year to visit Bali?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                      The best time to visit Bali is during the dry season,
                      which typically spans from April to October, when the
                      weather is sunny and rainfall is minimal, making it ideal
                      for outdoor activities and sightseeing.
                    </div>
                  </div>
                </div>{" "}
                {/* .accordion-item */}
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What are the traditional dishes and culinary experiences
                      not to miss in Bali?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion_1"
                  >
                    <div className="accordion-body">
                      Traditional Balinese dishes not to miss include Nasi
                      Goreng (fried rice), Mie Goreng (fried noodles), Babi
                      Guling (suckling pig), and the iconic Balinese satay.
                      Don't forget to indulge in local delicacies like Pisang
                      Goreng (banana fritters) and refreshing coconut water.
                    </div>
                  </div>
                </div>{" "}
                {/* .accordion-item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThingsContent2;
