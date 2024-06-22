// PlayerSection.js
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import './PlayerSection.css';
import player1 from '../../assets/player1.jpg';
import player2 from '../../assets/player2.jpg';
import player3 from '../../assets/player3.jpg';
import player4 from '../../assets/player4.jpg';
import player5 from '../../assets/player5.jpg';

const players = [
  {
    name: 'DeathBreaker',
    image: player1,
    website: 'https://steamcommunity.com/id/deathbreakerking/',
  },
  {
    name: 'nEmo',
    image: player2,
    website: 'https://steamcommunity.com/id/loverofcs/',
  },
  {
    name: 'zane',
    image: player3,
    website: 'https://www.steamcommunity.com/id/zanexgod',
  },
  {
    name: 'no Chance',
    image: player4,
    website: 'https://steamcommunity.com/profiles/76561199111908188/',
  },
  {
    name: 'Frag',
    image: player5,
    website: 'https://steamcommunity.com/id/gofkidfrag/',
  },
];

const PlayerSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleReveal = () => {
    setIsVisible(true);
  };

  const handleHidden = () => {
    setIsVisible(false);
  };

  return (
    <div className="player-section-wrapper">
      <Fade bottom onReveal={handleReveal} onHidden={handleHidden}>
        <div className={`player-section-container ${isVisible ? 'visible' : ''}`}>
          <div className="player-section">
            {players.map((player, index) => (
                <div className="player-block">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="player-image"
                  />
                  <h3>{player.name}</h3>
                  <a href={player.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                </div>

            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default PlayerSection;
