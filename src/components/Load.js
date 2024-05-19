import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "./Load.css";

function Load() {
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
                Add Food
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

export default Load;
