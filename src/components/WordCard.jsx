import React, { useState } from 'react';

export default function WordCard({ word }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const speakWord = (text, e) => {
    // 스피커 아이콘을 따로 누른 경우, 카드 플립 이벤트가 중복 발생하지 않도록 이벤트 버블링 방지
    if (e) {
      e.stopPropagation();
    }
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // 현재 재생 중인 모든 음성 중지
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85; // 어린이를 위해 약간 느리고 또박또박한 템포
      utterance.pitch = 1.1; // 친근하고 높은 피치
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("이 브라우저는 음성 합성(TTS) 기능을 지원하지 않습니다.");
    }
  };

  const handleCardClick = () => {
    const nextFlippedState = !isFlipped;
    setIsFlipped(nextFlippedState);
    
    // 카드가 뒷면(영단어 노출)으로 뒤집어지는 타이밍에 자동으로 발음 읽어주기
    if (nextFlippedState) {
      speakWord(word.english);
    }
  };

  return (
    <div className="card-scene" onClick={handleCardClick}>
      <div className={`card-3d ${isFlipped ? 'flipped' : ''}`}>
        
        {/* 카드 앞면: 이미지 + 힌트 버튼 */}
        <div className="card-face card-front">
          <div className="card-image-wrapper">
            {word.image_url ? (
              <img
                src={word.image_url}
                alt={word.korean}
                className="card-image"
                loading="lazy"
                onError={(e) => {
                  // 이미지 로딩 실패 시 귀여운 이모지 대체 이미지 표시
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?auto=format&fit=crop&w=300&q=80";
                }}
              />
            ) : (
              <div className="card-image-fallback">📖</div>
            )}
          </div>
          <div className="card-hint">
            <span>🔎</span> 클릭해서 단어 확인하기
          </div>
        </div>

        {/* 카드 뒷면: 영어 단어 + 뜻 + 스피커 단독 읽기 버튼 */}
        <div className="card-face card-back">
          <div className="back-header">
            <button
              className="speak-icon-btn"
              onClick={(e) => speakWord(word.english, e)}
              title="발음 듣기"
            >
              🔊
            </button>
          </div>
          
          <div className="back-content">
            <h2 className="word-english">{word.english}</h2>
            <p className="word-korean">{word.korean}</p>
          </div>
          
          <div className="back-footer">
            <span>🔄 다시 클릭하면 이미지로</span>
          </div>
        </div>

      </div>
    </div>
  );
}
