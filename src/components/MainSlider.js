import React, { useEffect } from "react";
import "./MainSlider.css";
import gong from "./Image/gong.jpg";
import gunung from "./Image/gunung.jpg";
import outbound from "./Image/out.jpg";
import culture from "./Image/puras.jpg";
function MainSlider() {
  useEffect(() => {
    // Make sure to execute DOM manipulations only after the component is mounted
    const nextDom = document.getElementById("next");
    const prevDom = document.getElementById("prev");
    const carouselDom = document.querySelector(".carousel");
    const SliderDom = carouselDom
      ? carouselDom.querySelector(".carousel .list")
      : null;
    const thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    const thumbnailItemsDom = thumbnailBorderDom
      ? thumbnailBorderDom.querySelectorAll(".item")
      : [];

    if (thumbnailItemsDom.length > 0) {
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }

    const timeRunning = 3000;
    const timeAutoNext = 7000;
    let runTimeOut;

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll(
        ".carousel .list .item"
      );
      const thumbnailItemsDom = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);
    };

    if (nextDom && prevDom) {
      nextDom.onclick = () => showSlider("next");
      prevDom.onclick = () => showSlider("prev");
    }

    let runNextAuto = setTimeout(() => {
      if (nextDom) {
        nextDom.click();
      }
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto);
      // Remove event listeners if added dynamically
    };
  }, []);
  return (
    <>
      {/* carousel */}
      <div className="carousel">
        {/* list item */}
        <div className="list">
          <div className="item">
            <img src={gong} />
            <div className="content">
              <div className="author">FOOD SERVICE</div>
              <div className="title">GONG JATILUWIH</div>
              <div className="topic">RESTO AND LOUNGE</div>
              <div className="des">
                {/* lorem 50 */}
                Gongjatiluwih Restaurant, nestled in Bali's iconic Jatiluwih
                rice terraces, offers a unique culinary adventure inspired by
                the island's enchanting landscapes. Experience the beauty of
                Bali through our immersive dining experience.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={gunung} />
            <div className="content">
              <div className="author">Photo Spot</div>
              <div className="title">Jatiluwih Village</div>
              <div className="topic">RiceField</div>
              <div className="des">
                Explore beauty spots for capturing memorable moments.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={outbound} />
            <div className="content">
              <div className="author">Outdoor Activities</div>
              <div className="title">YEH HOO</div>
              <div className="topic">Waterfall</div>
              <div className="des">
                Yeh Hoo Waterfall cascades gracefully amidst the lush tropical
                forests of Bali, Indonesia, offering a serene oasis for nature
                lovers. Its crystal-clear waters and tranquil surroundings
                create an enchanting atmosphere, inviting visitors to immerse
                themselves in the beauty of this hidden gem.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={culture} />
            <div className="content">
              <div className="author">Cultural Tourism</div>
              <div className="title">Pura Luhur Sri rambut Sedana</div>
              <div className="topic">Temple</div>
              <div className="des">
                Pura Luhur Sri Rambut Sedana, or Pura Luhur Batukaru, is a
                sacred Hindu temple located on the slopes of Mount Batukaru in
                Tabanan, Bali. It is known for its stunning location and is
                dedicated to the worship of the god Mahadeva in
                Balinese Hinduism.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        </div>
        {/* list thumnail */}
        <div className="thumbnail">
          <div className="item">
            <img src={gong} />
            <div className="content">
              <div className="title">Gong Jatiluwih</div>
              <div className="description">Resto and Lounge</div>
            </div>
          </div>
          <div className="item">
            <img src={gunung} />
            <div className="content">
              <div className="title">Jatiluwih Vilage</div>
              <div className="description">RiceField</div>
            </div>
          </div>
          <div className="item">
            <img src={outbound} />
            <div className="content">
              <div className="title">Yeh Hoo Waterfall</div>
              <div className="description">Waterfall</div>
            </div>
          </div>
          <div className="item">
            <img src={culture} />
            <div className="content">
              <div className="title">Sri Rambut Sedana Temple</div>
              <div className="description"> Hinduism Temple</div>
            </div>
          </div>
        </div>
        {/* next prev */}
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>
        {/* time running */}
        <div className="time" />
      </div>
    </>
  );
}

export default MainSlider;
