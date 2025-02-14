import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import QABox from './QABox';

const ThemedComponent = () => {
  const { theme, currentTheme, changeTheme, availableThemes } = useContext(ThemeContext);

  const containerStyle = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    padding: '20px',
    borderRadius: '5px'
  };

  return (
    <div className="content">
      <QABox
        question="How does the Context API work and when should it be used?"
        answer="The Context API provides a way to share values across the component tree without prop drilling. It is ideal for global data like themes or user settings. In this demo, multiple themes are available to demonstrate dynamic styling."
      />
      <h2 className="title">Theme Context Demo</h2>
      <div style={containerStyle}>
        <p>
          This component's styling is dynamically controlled by the Theme Context.
        </p>
        <div className="field">
          <label className="label">Select Theme:</label>
          <div className="control">
            <div className="select">
              <select value={currentTheme} onChange={(e) => changeTheme(e.target.value)}>
                {availableThemes.map((t) => (
                  <option key={t} value={t}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemedComponent;