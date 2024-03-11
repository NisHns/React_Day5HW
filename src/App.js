import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [num, setnum] = useState(1);
  const [generate, setgenerate] = useState('');

  const Lorem = () => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const para = Array.from({ length: num }, () => loremIpsum);
    setgenerate(para.join('\n\n'));
  };

  return (
    <div className="container">
      <h1>TIRED OF TYPING PARAGRAPHS???</h1>
      <div className="mid">
        <label htmlFor="para">Number of Paragraphs:</label>
        <input
          type="number"
          id="para"
          min="1"
          value={num}
          onChange={(e) => setnum(e.target.value)}
        />
        <button onClick={Lorem}>Generate</button>
      </div>
      <div className="output" dangerouslySetInnerHTML={{ __html: generate }}></div>
    </div>
  );
};

export default App;
