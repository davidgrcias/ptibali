import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import $ from "jquery";

import img1 from "./imgoftourcategory/img1.jpg";
import img2 from "./imgoftourcategory/img2.jpg";
import img3 from "./imgoftourcategory/img3.jpg";
import img4 from "./imgoftourcategory/img4.jpg";
import img5 from "./imgoftourcategory/img5.jpg";
import img6 from "./imgoftourcategory/img6.jpg";
import img7 from "./imgoftourcategory/img7.jpg";
import img8 from "./imgoftourcategory/img8.jpg";
import img9 from "./imgoftourcategory/img9.jpg";
import img10 from "./imgoftourcategory/img10.jpg";
import img11 from "./imgoftourcategory/img11.jpg";
import img12 from "./imgoftourcategory/img12.jpg";
import img13 from "./imgoftourcategory/img13.jpg";
import img14 from "./imgoftourcategory/img14.jpg";
import img15 from "./imgoftourcategory/img15.jpg";
import img16 from "./imgoftourcategory/img16.jpg";
import img17 from "./imgoftourcategory/img17.jpg";
import img18 from "./imgoftourcategory/img18.jpg";
import img19 from "./imgoftourcategory/img19.jpg";
import img20 from "./imgoftourcategory/img20.jpg";
import img21 from "./imgoftourcategory/img21.jpg";
import img22 from "./imgoftourcategory/img22.jpg";
import img23 from "./imgoftourcategory/img23.jpg";
import img24 from "./imgoftourcategory/img24.jpg";
import img25 from "./imgoftourcategory/img25.jpg";
import img26 from "./imgoftourcategory/img26.jpg";
import img27 from "./imgoftourcategory/img27.jpg";
import img28 from "./imgoftourcategory/img28.jpg";
import img29 from "./imgoftourcategory/img29.jpg";
import img30 from "./imgoftourcategory/img30.jpg";

const CategoryDetails = () => {
  const { category } = useParams();
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
    // Assuming images data is fetched or imported here
    const images = [
      {
        id: 1,
        url: img1,
        name: "Besakih Temple",
        category: "road-trip",
        writer: "Edric Hugo",
        date: "01 March 2024",
        like: "2.0k",
      },
      {
        id: 2,
        url: img2,
        name: "Kuta Beach",
        category: "beach",
        writer: "Calvin Yoananda",
        date: "10 March 2024",
        like: "419",
      },
      {
        id: 4,
        url: img4,
        name: "Bali Treetop Adventure Park",
        category: "family",
        writer: "Vilbert Jhovan",
        date: "15 April 2024",
        like: "1.5k",
      },
      {
        id: 5,
        url: img5,
        name: "Jimbaran Beach",
        category: "holiday",
        writer: "David Garcia Saragih",
        date: "20 April 2024",
        like: "2.3k",
      },
      {
        id: 6,
        url: img6,
        name: "Nusa Dua Beach",
        category: "beach",
        writer: "Edric Hugo",
        date: "05 May 2024",
        like: "1.8k",
      },
      {
        id: 7,
        url: img7,
        name: "Pura Ulun Danu Bratan",
        category: "historical-trip",
        writer: "Samuel Nicholas Subekti",
        date: "12 May 2024",
        like: "0.8k",
      },

      {
        id: 9,
        url: img9,
        name: "Tirta Empul",
        category: "weekend",
        writer: "Calvin Yoananda",
        date: "27 February 2024",
        like: "0.5k",
      },
      {
        id: 10,
        url: img10,
        name: "Mount Batur",
        category: "road-trip",
        writer: "Edric Hugo",
        date: "09 March 2024",
        like: "2.9k",
      },
      {
        id: 12,
        url: img12,
        name: "Waterbom Bali",
        category: "family",
        writer: "Samuel Nicholas Subekti",
        date: "28 March 2024",
        like: "1.2k",
      },
      {
        id: 13,
        url: img13,
        name: "Goa Gajah",
        category: "historical-trip",
        writer: "Vilbert Jhovan",
        date: "03 April 2024",
        like: "873",
      },
      {
        id: 14,
        url: img14,
        name: "Seminyak",
        category: "holiday",
        writer: "Calvin Yoananda",
        date: "15 April 2024",
        like: "0.3k",
      },
      {
        id: 15,
        url: img15,
        name: "Pura Taman Ayun",
        category: "historical-trip",
        writer: "Edric Hugo",
        date: "25 April 2024",
        like: "1.9k",
      },
      {
        id: 16,
        url: img16,
        name: "Ubud Monkey Forest",
        category: "weekend",
        writer: "David Garcia Saragih",
        date: "05 May 2024",
        like: "1.4k",
      },
      {
        id: 17,
        url: img17,
        name: "Lovina",
        category: "road-trip",
        writer: "Vilbert Jhovan",
        date: "13 May 2024",
        like: "2.1k",
      },
      {
        id: 18,
        url: img18,
        name: "Legian",
        category: "holiday",
        writer: "Samuel Nicholas Subekti",
        date: "18 May 2024",
        like: "299",
      },
      {
        id: 19,
        url: img19,
        name: "Padang Padang Beach",
        category: "beach",
        writer: "Calvin Yoananda",
        date: "20 May 2024",
        like: "0.4k",
      },
      {
        id: 20,
        url: img20,
        name: "Kintamani Volcano",
        category: "weekend",
        writer: "Edric Hugo",
        date: "27 February 2024",
        like: "1.7k",
      },
      {
        id: 21,
        url: img21,
        name: "Bali Safari and Marine Park",
        category: "family",
        writer: "Samuel Nicholas Subekti",
        date: "01 March 2024",
        like: "2.4k",
      },
      {
        id: 23,
        url: img23,
        name: "Pura Besakih",
        category: "historical-trip",
        writer: "David Garcia Saragih",
        date: "14 March 2024",
        like: "0.6k",
      },
      {
        id: 25,
        url: img25,
        name: "Jatiluwih Rice Terraces",
        category: "road-trip",
        writer: "Edric Hugo",
        date: "30 March 2024",
        like: "1.5k",
      },
      {
        id: 27,
        url: img27,
        name: "Sanur Beach",
        category: "beach",
        writer: "Samuel Nicholas Subekti",
        date: "17 April 2024",
        like: "1.8k",
      },
      {
        id: 28,
        url: img28,
        name: "Nusa Penida Island",
        category: "holiday",
        writer: "David Garcia Saragih",
        date: "25 April 2024",
        like: "2.5k",
      },
      {
        id: 30,
        url: img30,
        name: "Bali Bird Park",
        category: "family",
        writer: "Edric Hugo",
        date: "12 May 2024",
        like: "0.9k",
      },
    ];

    const categoryFiltered = images.filter((img) => img.category === category);
    setFilteredImages(categoryFiltered);
  }, [category]);

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="../templatetravela/lightbox.min.css" />
        <link rel="stylesheet" href="../templatetravela/owl.carousel.min.css" />
        <link rel="stylesheet" href="../templatetravela/bootstrap.min.css" />
      </Helmet>
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
            <h5 className="section-title px-3">{category}</h5>
            <h1 className="mb-4">
              A Top Destination in Bali for{" "}
              <span className="text-capitalize font-weight-bold text-primary text-decoration-underline">
                {category}
              </span>
            </h1>
            <p className="mb-0">
              When you journey to Bali, don't miss our highly recommended
              destinations, celebrated as the most popular spots in recent
              years. We offer curated recommendations that promise unforgettable
              experiences, capturing the essence of Bali's vibrant culture and
              breathtaking landscapes. Discover the places where memories are
              made, and every visit feels like a discovery. Make your Bali trip
              truly remarkable by exploring these beloved locales.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {filteredImages.map((img) => (
              <div className="col-lg-4 col-md-6" key={img.id}>
                <div className="blog-item">
                  <div className="blog-img">
                    <div className="blog-img-inner">
                      <img
                        className="img-fluid w-100 rounded-top"
                        src={img.url}
                        alt="Image"
                      />
                      <div className="blog-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-calendar-alt text-primary me-2" />
                        {img.date}
                      </small>
                      <a
                        href="#"
                        className="btn-hover flex-fill text-center text-white border-end py-2"
                      >
                        <i className="fa fa-thumbs-up text-primary me-2" />
                        {img.like}
                      </a>
                    </div>
                  </div>
                  <div className="blog-content border border-top-0 rounded-bottom p-4">
                    <p className="mb-3">Suggested By: {img.writer}</p>
                    <a href="#" className="h4">
                      {img.name}
                    </a>
                    <p className="my-3"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
