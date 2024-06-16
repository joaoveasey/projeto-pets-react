// src/components/ShareButtons.jsx
import React from 'react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import './ShareButtons.css';

const ShareButtons = ({ url, text }) => {
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
  };

  return (
    <div>
      <button onClick={shareOnTwitter} className="button twitter">
        <FaTwitter />
        Compartilhar no Twitter
      </button>
      <button onClick={shareOnFacebook} className="button facebook">
        <FaFacebook />
        Compartilhar no Facebook
      </button>
    </div>
  );
};

export default ShareButtons;