import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "./FloatButton.css";
import { NavLink } from "react-router-dom";

function FloatButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    function handleFloatingButtonClick(e) {
      e.preventDefault();
      $(this).toggleClass("open");
      const icon = $(this).children(".fa");
      if (icon.hasClass("fa-plus")) {
        icon.removeClass("fa-plus").addClass("fa-close");
      } else if (icon.hasClass("fa-close")) {
        icon.removeClass("fa-close").addClass("fa-plus");
      }
      $(".floatingMenu").stop().slideToggle();
    }

    function handleDocumentClick(e) {
      const container = $(".floatingButton");
      if (
        !container.is(e.target) &&
        $(".floatingButtonWrap").has(e.target).length === 0
      ) {
        if (container.hasClass("open")) {
          container.removeClass("open");
        }
        if (container.children(".fa").hasClass("fa-close")) {
          container.children(".fa").removeClass("fa-close").addClass("fa-plus");
        }
        $(".floatingMenu").hide();
      }

      if (
        !container.is(e.target) &&
        $(".floatingMenu").has(e.target).length > 0
      ) {
        container.removeClass("open");
        $(".floatingMenu").stop().slideToggle();
      }
    }

    $(".floatingButton").on("click", handleFloatingButtonClick);
    $(document).on("click", handleDocumentClick);

    return () => {
      $(".floatingButton").off("click", handleFloatingButtonClick);
      $(document).off("click", handleDocumentClick);
    };
  }, []);

  function handlePlayMusicClick(e) {
    e.preventDefault();
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  function handleScreamChallengeClick(e) {
    e.preventDefault();

    const scriptId = "scream-script";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "/path/to/scream.js"; // Ensure this path is correct
      script.onload = () => {
        if (window.dialog && typeof window.dialog.showModal === "function") {
          window.dialog.showModal();
        } else {
          console.error(
            "Failed to load scream.js or dialog.showModal is not a function"
          );
        }
      };
      script.onerror = () => {
        console.error("Failed to load scream.js");
      };
      document.body.appendChild(script);
    } else {
      if (window.dialog && typeof window.dialog.showModal === "function") {
        window.dialog.showModal();
      } else {
        console.error("dialog.showModal is not a function");
      }
    }
  }

  return (
    <div className="App">
      <div className="floatingButtonWrap">
        <div className="floatingButtonInner">
          <a href="#" className="floatingButton">
            <i className="fa fa-plus icon-default" />
          </a>
          <ul className="floatingMenu">
            <li>
              <NavLink to="/Scream">
                Scream Challenge &nbsp;<i className="fa-solid fa-gamepad"></i>
              </NavLink>
            </li>
            <li>
              <a href="#" onClick={handlePlayMusicClick}>
                {isPlaying ? "Pause Music" : "Play Music"} &nbsp;
                <i className="fa-solid fa-music"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <audio ref={audioRef} src="/assets/music/bali.mp3" />
    </div>
  );
}

export default FloatButton;
