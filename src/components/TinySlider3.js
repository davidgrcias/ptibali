import React from "react";
import { Helmet } from "react-helmet";

import immg1 from "./imgofvillage/img1.jpg";
import immg2 from "./imgofvillage/img2.jpg";
import immg3 from "./imgofvillage/img3.jpg";
import immg4 from "./imgofvillage/img4.jpg";
import immg5 from "./imgofvillage/img5.jpg";
import immg6 from "./imgofvillage/img6.jpg";
import immg7 from "./imgofvillage/img7.jpg";
import immg8 from "./imgofvillage/img8.jpg";
import immg9 from "./imgofvillage/img9.jpg";
import immg10 from "./imgofvillage/img10.jpg";

import imgg1 from "./imgofwaterfall/img1.jpg";
import imgg2 from "./imgofwaterfall/img2.jpg";
import imgg3 from "./imgofwaterfall/img3.jpg";
import imgg4 from "./imgofwaterfall/img4.jpg";
import imgg5 from "./imgofwaterfall/img5.jpg";
import imgg6 from "./imgofwaterfall/img6.jpg";
import imgg7 from "./imgofwaterfall/img7.jpg";
import imgg8 from "./imgofwaterfall/img8.jpg";
import imgg9 from "./imgofwaterfall/img9.jpg";
import imgg10 from "./imgofwaterfall/img10.jpg";

import images1 from "./imgofforest/images1.jpeg";
import images2 from "./imgofforest/images2.jpg";
import images3 from "./imgofforest/images3.jpeg";
import images4 from "./imgofforest/images4.jpeg";
import images5 from "./imgofforest/images5.jpeg";
import images6 from "./imgofforest/images6.jpeg";
import images7 from "./imgofforest/images7.jpeg";
import images8 from "./imgofforest/images8.jpeg";
import images9 from "./imgofforest/images9.jpeg";
import images10 from "./imgofforest/images10.jpeg";

function TinySlider3() {
  const village = [
    {
      id: 1,
      url: immg1,
      name: "Desa Penglipuran",
      lokasi: "Kecamatan Bangli, Kabupaten Bangli",
    },
    {
      id: 2,
      url: immg2,
      name: "Desa Trunyan",
      lokasi: "Kecamatan Kintamani, Kabupaten Bangli",
    },
    {
      id: 3,
      url: immg3,
      name: "Desa Pinggan",
      lokasi: "Kecamatan Kintamani, Kabupaten Bangli",
    },
    {
      id: 4,
      url: immg4,
      name: "Desa Ubud",
      lokasi: "Kecamatan Ubud, Kabupaten Gianyar",
    },
    {
      id: 5,
      url: immg5,
      name: "Desa Nyuh Kuning",
      lokasi: "Kecamatan Ubud, Kabupaten Gianyar",
    },
    {
      id: 6,
      url: immg6,
      name: "Desa Tenganan",
      lokasi: "Kecamatan Manggis, Kabupaten Karangasem",
    },
    {
      id: 7,
      url: immg7,
      name: "Desa Budaya Kertalanggu",
      lokasi: "Kecamatan Denpasar Timur, Kota Denpasar",
    },
    {
      id: 8,
      url: immg8,
      name: "Desa Celuk",
      lokasi: "Kecamatan Sukawati, Kabupaten Gianyar",
    },
    {
      id: 9,
      url: immg9,
      name: "Desa Jatiluwih",
      lokasi: "Kecamatan Penebel, Kabupaten Tabanan",
    },
    {
      id: 10,
      url: immg10,
      name: "Desa Pelaga",
      lokasi: "Kecamatan Petang, Kabupaten Badung",
    },
  ];
  const waterfall = [
    {
      id: 1,
      url: imgg1,
      name: "Git Git Waterfall",
      lokasi: "Kec. Sukasada, Kabupaten Buleleng",
    },
    {
      id: 2,
      url: imgg2,
      name: "Sekumpul Waterfall",
      lokasi: "Kec. Sawan, Kabupaten Buleleng",
    },
    {
      id: 3,
      url: imgg3,
      name: "Tegunungan Waterfall",
      lokasi: "Kec. Sukawati, Kabupaten Gianyar",
    },
    {
      id: 4,
      url: imgg4,
      name: "Aling -Aling Waterfall",
      lokasi: "Kecamatan Sukasada, Kabupaten Buleleng",
    },
    {
      id: 5,
      url: imgg5,
      name: "Munduk Waterfall",
      lokasi: "Kec. Banjar, Kabupaten Buleleng",
    },
    {
      id: 6,
      url: imgg6,
      name: "Banyumala Waterfall",
      lokasi: "Kec. Sukasada, Kabupaten Buleleng",
    },
    {
      id: 7,
      url: imgg7,
      name: "Tibumana Waterfall",
      lokasi: "Kec. Susut, Kabupaten Bangli, Bali ",
    },
    {
      id: 8,
      url: imgg8,
      name: "Leke - Leke Waterfall",
      lokasi: "Kec. Baturiti, Kabupaten Tabanan",
    },
    {
      id: 9,
      url: imgg9,
      name: "Banyu Wana Amertha Waterfall",
      lokasi: "Kec. Sukasada, Kabupaten Buleleng",
    },

    {
      id: 10,
      url: imgg10,
      name: "Dunsun Kuning Waterfall",
      lokasi: "Bangli, Bangli Regency",
    },
  ];
  const forest = [
    {
      id: 1,
      url: images1,
      name: "Sacred Monkey Forest Sanctuary Ubud",
      lokasi: "Kecamatan Ubud, Kabupaten Gianyar",
    },
    {
      id: 2,
      url: images2,
      name: "Hutan Bambu Penglipuran",
      lokasi: "Kecamatan Bangli, Kabupaten Bangli",
    },
    {
      id: 3,
      url: images3,
      name: "Hutan Pinus Kintamani",
      lokasi: "Kecamatan Kintamani, Kabupaten Bangli",
    },
    {
      id: 4,
      url: images4,
      name: "Hutan Mangrove Lembongan",
      lokasi: "Kecamatan Nusa Penida, Kabupaten Klungkung",
    },
    {
      id: 5,
      url: images5,
      name: "Sangeh Monkey Forest",
      lokasi: "Kecamatan Abiansemal, Kabupaten Badung",
    },
    {
      id: 6,
      url: images6,
      name: "Hutan Mangrove Denpasar",
      lokasi: "Kecamatan Denpasar Selatan, Kota Denpasar",
    },
    {
      id: 7,
      url: images7,
      name: "Taman Nasional Bali Barat",
      lokasi: "Kabupaten Buleleng dan Jembrana",
    },
    {
      id: 8,
      url: images8,
      name: "Kebun Raya Bali",
      lokasi: "Kecamatan Baturiti, Kabupaten Tabanan",
    },
    {
      id: 9,
      url: images9,
      name: "Taman Bhagawan",
      lokasi: "Kecamatan Kuta Sel, Kabupaten Badung",
    },
    {
      id: 10,
      url: images10,
      name: "Taman Patung Titi Banda",
      lokasi: "Kecamatan Denpasar Tim, Kota Denpasar",
    },
  ];
  return (
    <>
      <Helmet>
        <script src="js/custom3.js"></script>
      </Helmet>
      {/* Footer Start */}
      <div
        className="section section-3"
        id="container3"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between  mb-5">
            <div className="col-lg-5 text" data-aos="fade-up">
              <h2 className="heading mb-3">
                Beautiful waterfall you can explore in Bali!
              </h2>
              <p>
                Discover Bali's Spectacular Waterfalls: Venture into the heart
                of Bali to experience its stunning waterfalls. From the majestic
                cascades of Gitgit to the secluded splendor of Sekumpul, each
                natural wonder offers a refreshing escape and picturesque views,
                ideal for nature lovers and adventure seekers alike.
              </p>
            </div>
            <div
              className="col-lg-5 text-md-end"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div id="destination-controls3">
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
          <div className="destination-slider3">
            {waterfall.map((waterfall) => (
              <div key={waterfall.id} className="destination">
                <div className="thumb">
                  <img src={waterfall.url} alt="Image" className="img-fluid" />
                </div>
                <div className="mt-4">
                  <h3>
                    <a href="#">{waterfall.name}</a>
                  </h3>
                  <span className="meta">{waterfall.lokasi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TinySlider3;
