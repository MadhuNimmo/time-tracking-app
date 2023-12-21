import React, { useState } from 'react';
import './App.css';

function App() {
  const [wakingTime, setWakingTime] = useState(6);
  const [sleepTime, setSleepTime] = useState(21);
  const [activities, setActivities] = useState(Array(24).fill(''));
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleWakingTimeChange = (event) => {
    setWakingTime(parseInt(event.target.value));
  };

  const handleSleepTimeChange = (event) => {
    setSleepTime(parseInt(event.target.value));
  };

  const handleActivityChange = (hour, event) => {
    const newActivities = [...activities];
    newActivities[hour] = event.target.value;
    setActivities(newActivities);
  };

  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const timeBlocks = [];
  for (let i = wakingTime; i <= sleepTime; i++) {
    timeBlocks.push(
      <div key={i} className={`time-block ${darkMode ? 'dark-mode' : ''}`}>
        <div className="time-label">
          {i < 10 ? `0${i}:00` : `${i}:00`}
        </div>
        <input
          type="text"
          placeholder="Enter activity"
          value={activities[i]}
          onChange={(event) => handleActivityChange(i, event)}
        />
      </div>
    );
  }

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Time Tracking App</h1>
      <button className="settings-button" onClick={toggleSettings}>
        Settings
      </button>
      {isSettingsOpen && (
        <div className="settings-modal">
          <div className="setting">
            <label>Waking Time:</label>
            <input
              type="number"
              min="1"
              max="23"
              value={wakingTime}
              onChange={handleWakingTimeChange}
            />
          </div>
          <div className="setting">
            <label>Sleep Time:</label>
            <input
              type="number"
              min="1"
              max="23"
              value={sleepTime}
              onChange={handleSleepTimeChange}
            />
          </div>
          <div className="setting">
            <label>Dark Mode:</label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          </div>
        </div>
      )}
      <div className="time-blocks">{timeBlocks}</div>
    </div>
  );
}

export default App;
