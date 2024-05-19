import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "./FloatButton.css";

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
      // if the target of the click isn't the container nor a descendant of the container
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

      // if the target of the click isn't the container and a descendant of the menu
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

    // Cleanup on unmount
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

  return (
    <div className="App">
      <div className="floatingButtonWrap">
        <div className="floatingButtonInner">
          <a href="#" className="floatingButton">
            <i className="fa fa-plus icon-default" />
          </a>
          <ul className="floatingMenu">
            <li>
              <a href="#">Add Supplier</a>
            </li>
            <li>
              <a href="#">Add Table</a>
            </li>
            <li>
              <a href="#" onclick="window.dialog.showModal();">
                Scream Challenge &nbsp;<i class="fa-solid fa-gamepad"></i>
              </a>
            </li>
            <li>
              <a href="#" onClick={handlePlayMusicClick}>
                {isPlaying ? "Pause Music" : "Play Music"} &nbsp;
                <i class="fa-solid fa-music"></i>
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
