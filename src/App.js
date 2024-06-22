import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PlayerSection from './components/PlayerSection/PlayerSection';
import TextSpan from './components/TextSpan/TextSpan';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './App.css'; // Import the CSS file

function App() {
  const sentence = "Greedy for Aces.".split("");

  return (
    <div className="App">
      <Navbar />
      
      <div className="sentence-container"> {/* Add a wrapper with a class */}
        {sentence.map((letter, index) => (
          <Fade key={index} bottom>
            <TextSpan>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          </Fade>
        ))}
      </div>
      
      {/* Add a Link component for smooth scrolling */}
      <Link
        activeClass="active"
        to="player-section"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        className="scroll-link"
      >
      </Link>
      
      <PlayerSection />
      <div className="content">
        {/* Other components or content can go here */}
      </div>
    </div>
  );
}

export default App;
