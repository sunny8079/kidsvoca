import React from 'react';

export default function Header({ currentView, onNavigate, levelName, topicName }) {
  return (
    <header className="app-header">
      <div className="header-title-group" onClick={() => onNavigate('levels')}>
        <span className="header-logo" role="img" aria-label="crayon">✏️</span>
        <h1>Kids Voca</h1>
      </div>
      
      <div className="nav-buttons">
        {currentView === 'topics' && (
          <button className="btn btn-back" onClick={() => onNavigate('levels')}>
            <span>⬅️</span> 레벨 선택으로
          </button>
        )}
        
        {currentView === 'words' && (
          <>
            <button className="btn btn-back" onClick={() => onNavigate('topics')}>
              <span>⬅️</span> 주제 선택으로
            </button>
            <button className="btn btn-home" onClick={() => onNavigate('levels')}>
              <span>🏠</span> 처음으로
            </button>
          </>
        )}
      </div>
    </header>
  );
}
