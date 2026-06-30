// 로컬 목데이터 (Supabase 연동이 안 되어 있거나 오프라인일 때 자동 폴백)

export const mockLevels = [
  {
    id: 1,
    name: "초등 영단어",
    code: "elementary",
    description: "기초적인 동물, 과일 주제 단어로 영어를 친근하게 시작해요! 🍎🐱"
  },
  {
    id: 2,
    name: "중등 영단어",
    code: "middle",
    description: "교통수단, 날씨 등 일상과 자연 속 다양한 단어를 학습해요! ✈️🌦️"
  },
  {
    id: 3,
    name: "고등 영단어",
    code: "high",
    description: "감정과 사회 환경 등 논리적 사고를 돕는 필수 단어를 배워요! 🧠🌱"
  }
];

export const mockTopics = [
  // 초등 주제
  { id: 101, level_id: 1, name: "과일 (Fruits)", code: "fruits", icon: "🍎" },
  { id: 102, level_id: 1, name: "동물 (Animals)", code: "animals", icon: "🦁" },
  
  // 중등 주제
  { id: 201, level_id: 2, name: "교통 (Transportation)", code: "transportation", icon: "✈️" },
  { id: 202, level_id: 2, name: "날씨와 계절 (Weather)", code: "weather", icon: "⛈️" },
  
  // 고등 주제
  { id: 301, level_id: 3, name: "감정 (Emotions)", code: "emotions", icon: "🎭" },
  { id: 302, level_id: 3, name: "사회와 환경 (Society)", code: "society", icon: "🌍" }
];

export const mockWords = [
  // 초등 - 과일
  {
    id: 1,
    topic_id: 101,
    english: "apple",
    korean: "사과",
    image_url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    topic_id: 101,
    english: "banana",
    korean: "바나나",
    image_url: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    topic_id: 101,
    english: "grape",
    korean: "포도",
    image_url: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    topic_id: 101,
    english: "orange",
    korean: "오렌지",
    image_url: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 5,
    topic_id: 101,
    english: "strawberry",
    korean: "딸기",
    image_url: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 6,
    topic_id: 101,
    english: "watermelon",
    korean: "수박",
    image_url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=300&q=80"
  },

  // 초등 - 동물
  {
    id: 7,
    topic_id: 102,
    english: "dog",
    korean: "개",
    image_url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 8,
    topic_id: 102,
    english: "cat",
    korean: "고양이",
    image_url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 9,
    topic_id: 102,
    english: "lion",
    korean: "사자",
    image_url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 10,
    topic_id: 102,
    english: "elephant",
    korean: "코끼리",
    image_url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 11,
    topic_id: 102,
    english: "monkey",
    korean: "원숭이",
    image_url: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 12,
    topic_id: 102,
    english: "rabbit",
    korean: "토끼",
    image_url: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=300&q=80"
  },

  // 중등 - 교통
  {
    id: 13,
    topic_id: 201,
    english: "bicycle",
    korean: "자전거",
    image_url: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 14,
    topic_id: 201,
    english: "subway",
    korean: "지하철",
    image_url: "https://images.unsplash.com/photo-1556079337-a837a2d11f04?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 15,
    topic_id: 201,
    english: "airplane",
    korean: "비행기",
    image_url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 16,
    topic_id: 201,
    english: "helicopter",
    korean: "헬리콥터",
    image_url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 17,
    topic_id: 201,
    english: "motorcycle",
    korean: "오토바이",
    image_url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 18,
    topic_id: 201,
    english: "ship",
    korean: "배/선박",
    image_url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=300&q=80"
  },

  // 중등 - 날씨
  {
    id: 19,
    topic_id: 202,
    english: "breeze",
    korean: "산들바람",
    image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 20,
    topic_id: 202,
    english: "shower",
    korean: "소나기",
    image_url: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 21,
    topic_id: 202,
    english: "typhoon",
    korean: "태풍",
    image_url: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 22,
    topic_id: 202,
    english: "lightning",
    korean: "번개",
    image_url: "https://images.unsplash.com/photo-1472120435166-5871c284b3e1?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 23,
    topic_id: 202,
    english: "rainbow",
    korean: "무지개",
    image_url: "https://images.unsplash.com/photo-1469571486090-7db5538e1b12?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 24,
    topic_id: 202,
    english: "humidity",
    korean: "습도",
    image_url: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=300&q=80"
  },

  // 고등 - 감정
  {
    id: 25,
    topic_id: 301,
    english: "empathy",
    korean: "공감/감정 이입",
    image_url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 26,
    topic_id: 301,
    english: "melancholy",
    korean: "우울감/애수",
    image_url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 27,
    topic_id: 301,
    english: "enthusiasm",
    korean: "열정/열의",
    image_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 28,
    topic_id: 301,
    english: "frustration",
    korean: "좌절/낙담",
    image_url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 29,
    topic_id: 301,
    english: "gratitude",
    korean: "감사/고마움",
    image_url: "https://images.unsplash.com/photo-1527137341206-1a7ac3ef7c65?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 30,
    topic_id: 301,
    english: "anxiety",
    korean: "불안/걱정",
    image_url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=300&q=80"
  },

  // 고등 - 사회와 환경
  {
    id: 31,
    topic_id: 302,
    english: "biodiversity",
    korean: "생물 다양성",
    image_url: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 32,
    topic_id: 302,
    english: "democracy",
    korean: "민주주의",
    image_url: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 33,
    topic_id: 302,
    english: "sustainability",
    korean: "지속 가능성",
    image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 34,
    topic_id: 302,
    english: "global warming",
    korean: "지구 온난화",
    image_url: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 35,
    topic_id: 302,
    english: "inequality",
    korean: "불평등",
    image_url: "https://images.unsplash.com/photo-1489424197754-0021516e1a23?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 36,
    topic_id: 302,
    english: "preservation",
    korean: "보존/보호",
    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&q=80"
  }
];
