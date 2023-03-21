import React, { useState, useEffect } from 'react';
import IconMusic from '@assets/images/music-icon.png';
import IconMusicStop from '@assets/images/music-stop-icon.png';
import MusicBacksound from '@assets/music/jashn-e-baharaa.mp3';

import { styMusicFloating } from './styles';

function FloatingMusic() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', () => {
        document.getElementById("myAudio").play()
        setPlay(true)
      }, { once: true })
    }, 1000)
  }, [])

  const toggleMusic = () => {
    const myAudio = document.getElementById('myAudio');
    /**
     * This function built-in with html5 function
     * doc: https://www.w3schools.com/tags/ref_av_dom.asp
     */
    if (play) {
      myAudio.pause();
    } else {
      myAudio.play().catch(e => { console.error(e) });
    }

    setPlay(!play);
  };

  return (
    <>
      <div css={styMusicFloating}>
        <audio autoPlay id="myAudio" loop className="hide">
          <source src={MusicBacksound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div onClick={toggleMusic}>
          <img
            src={play ? IconMusic : IconMusicStop}
            className="icon-music"
            alt="icon-music"
            title={`${play ? 'Pause' : 'Play'}`}
          />
        </div>
      </div>
    </>
  );
}

export default FloatingMusic;
