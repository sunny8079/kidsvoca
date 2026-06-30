import React from 'react';
import WordCard from './WordCard.jsx';

export default function WordGrid({ words, selectedTopic, selectedLevel }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="view-description">
        <h2>{selectedLevel.name} &gt; {selectedTopic.name}</h2>
        <p>단어 카드를 클릭하여 영어 이름과 발음을 들어보세요!</p>
      </div>

      {words.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
          <span style={{ fontSize: '3rem' }}>📁</span>
          <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>등록된 단어가 없습니다. Supabase DB에 단어를 추가해 보세요!</p>
        </div>
      ) : (
        <div className="word-grid">
          {words.map((word) => (
            <WordCard key={word.id} word={word} />
          ))}
        </div>
      )}
    </div>
  );
}
