import React from 'react';

export default function TopicSelector({ topics, selectedLevel, onSelectTopic }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="view-description">
        <h2>{selectedLevel.name} 주제 선택</h2>
        <p>공부하고 싶은 주제를 선택해 단어 카드를 탐색해 보세요!</p>
      </div>

      <div className="topic-grid">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="topic-card"
            onClick={() => onSelectTopic(topic)}
          >
            <div className="topic-icon">
              {topic.icon || '📚'}
            </div>
            <div className="topic-info">
              <h3>{topic.name}</h3>
              <span>단어 학습하러 가기 ➡️</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
