import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        mah dear kundanapu bomma🖤,<br />
        Rohith and Nikitha, the dynamic duo of friendship, epitomize the true essence of camaraderie and companionship. Their bond is woven with threads of laughter, shared secrets, and endless support. Like two peas in a pod, they navigate life's ups and downs together, creating a tapestry of cherished memories along the way.

Rohith, with his infectious enthusiasm and unwavering loyalty, brings sunshine to Nikitha's world. His presence is a beacon of strength, offering solace and encouragement during challenging times. Nikitha, with her kindness and understanding, is Rohith's confidante and cheerleader, celebrating his victories and offering a shoulder to lean on during setbacks.

Their friendship is a symphony of trust, empathy, and joy, where each note resonates with love and sincerity. Whether embarking on adventures or simply enjoying each other's company, Rohith and Nikitha's bond is a testament to the beauty of a friendship built on mutual respect, admiration, and unconditional support.






<br />
        @niihaaarrrr
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
