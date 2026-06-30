import React from 'react';

export default function LevelSelector({ levels, onSelectLevel }) {
  // 매칭되는 귀여운 아이콘/이모지
  const getBadgeEmoji = (code) => {
    switch (code) {
      case 'elementary': return '🍎';
      case 'middle': return '🎒';
      case 'high': return '🎓';
      default: return '✏️';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="view-description">
        <h2>어떤 단어를 배울까요?</h2>
        <p>자신에게 맞는 단계를 선택해 영단어 공부를 시작해 보세요!</p>
      </div>

      <div className="level-grid">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`level-card ${level.code}`}
            onClick={() => onSelectLevel(level)}
          >
            <div className="level-badge">
              {getBadgeEmoji(level.code)}
            </div>
            <h3>{level.name}</h3>
            <p>{level.description || '재미있는 단어들이 가득해요!'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
