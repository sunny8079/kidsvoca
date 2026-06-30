import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { mockLevels, mockTopics, mockWords } from './mockData';
import Header from './components/Header.jsx';
import LevelSelector from './components/LevelSelector.jsx';
import TopicSelector from './components/TopicSelector.jsx';
import WordGrid from './components/WordGrid.jsx';

export default function App() {
  const [currentView, setCurrentView] = useState('levels'); // 'levels', 'topics', 'words'
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  // 데이터 상태 관리
  const [levels, setLevels] = useState([]);
  const [topics, setTopics] = useState([]);
  const [words, setWords] = useState([]);

  // 상태 관리 플래그
  const [isUsingMockData, setIsUsingMockData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorInfo, setErrorInfo] = useState(null);

  // 1. Levels 로드
  useEffect(() => {
    async function loadLevels() {
      setLoading(true);
      setErrorInfo(null);
      
      if (!supabase) {
        // Supabase 클라이언트가 초기화되지 않았으면 목데이터 사용
        setLevels(mockLevels);
        setIsUsingMockData(true);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('levels')
          .select('*')
          .order('id', { ascending: true });

        if (error) throw error;

        if (data && data.length > 0) {
          setLevels(data);
          setIsUsingMockData(false);
        } else {
          // 테이블은 있으나 데이터가 없는 경우
          setLevels(mockLevels);
          setIsUsingMockData(true);
        }
      } catch (err) {
        console.error("Supabase levels 로드 실패, 목데이터로 전환합니다:", err.message);
        setLevels(mockLevels);
        setIsUsingMockData(true);
        setErrorInfo("Supabase 테이블 조회를 할 수 없어 로컬 데이터로 작동합니다.");
      } finally {
        setLoading(false);
      }
    }

    loadLevels();
  }, []);

  // 2. 선택된 레벨에 따른 Topics 로드
  useEffect(() => {
    if (!selectedLevel) return;

    async function loadTopics() {
      setLoading(true);
      
      if (isUsingMockData || !supabase) {
        const filtered = mockTopics.filter(t => t.level_id === selectedLevel.id);
        setTopics(filtered);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('topics')
          .select('*')
          .eq('level_id', selectedLevel.id)
          .order('id', { ascending: true });

        if (error) throw error;
        setTopics(data || []);
      } catch (err) {
        console.error("Supabase topics 로드 실패, 목데이터로 전환합니다:", err.message);
        const filtered = mockTopics.filter(t => t.level_id === selectedLevel.id);
        setTopics(filtered);
      } finally {
        setLoading(false);
      }
    }

    loadTopics();
  }, [selectedLevel, isUsingMockData]);

  // 3. 선택된 주제에 따른 Words 로드
  useEffect(() => {
    if (!selectedTopic) return;

    async function loadWords() {
      setLoading(true);
      
      if (isUsingMockData || !supabase) {
        const filtered = mockWords.filter(w => w.topic_id === selectedTopic.id);
        setWords(filtered);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('words')
          .select('*')
          .eq('topic_id', selectedTopic.id)
          .order('id', { ascending: true });

        if (error) throw error;
        setWords(data || []);
      } catch (err) {
        console.error("Supabase words 로드 실패, 목데이터로 전환합니다:", err.message);
        const filtered = mockWords.filter(w => w.topic_id === selectedTopic.id);
        setWords(filtered);
      } finally {
        setLoading(false);
      }
    }

    loadWords();
  }, [selectedTopic, isUsingMockData]);

  // 탐색 제어 핸들러
  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'levels') {
      setSelectedLevel(null);
      setSelectedTopic(null);
    } else if (view === 'topics') {
      setSelectedTopic(null);
    }
  };

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
    setCurrentView('topics');
  };

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setCurrentView('words');
  };

  return (
    <div className="app-container">
      {/* Supabase 미설정 및 목데이터 운용 시 표시되는 친절한 정보 안내 배너 */}
      {isUsingMockData && (
        <div className="db-warning-banner">
          <span>💡</span>
          <div>
            <strong>오프라인 데모(Mock Data) 모드 실행 중</strong>
            <p style={{ fontSize: '0.85rem', margin: '0.1rem 0 0 0', fontWeight: 'normal' }}>
              Supabase 연동을 완료하고 데이터를 생성하면 실시간 DB 데이터로 자동 전환됩니다.
            </p>
          </div>
        </div>
      )}

      {/* 헤더 네비게이션 */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        levelName={selectedLevel?.name}
        topicName={selectedTopic?.name}
      />

      {/* 메인 콘텐츠 영역 */}
      <main style={{ display: 'flex', flex: 1 }}>
        {loading ? (
          <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '2.5rem', animation: 'spin 1.5s infinite linear' }}>🌀</div>
            <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>단어를 불러오고 있어요...</p>
            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : (
          <>
            {currentView === 'levels' && (
              <LevelSelector
                levels={levels}
                onSelectLevel={handleSelectLevel}
              />
            )}
            
            {currentView === 'topics' && (
              <TopicSelector
                topics={topics}
                selectedLevel={selectedLevel}
                onSelectTopic={handleSelectTopic}
              />
            )}
            
            {currentView === 'words' && (
              <WordGrid
                words={words}
                selectedTopic={selectedTopic}
                selectedLevel={selectedLevel}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}
