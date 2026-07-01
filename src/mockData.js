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
  { id: 103, level_id: 1, name: "색깔과 도형 (Colors)", code: "colors_shapes", icon: "🎨" },
  { id: 104, level_id: 1, name: "음식과 음료 (Food)", code: "food_drinks", icon: "🍔" },
  { id: 105, level_id: 1, name: "가족과 직업 (Family)", code: "family_jobs", icon: "👨‍👩‍👧‍👦" },
  { id: 106, level_id: 1, name: "학교와 학용품 (School)", code: "school_stationery", icon: "🎒" },
  { id: 107, level_id: 1, name: "몸과 건강 (Body)", code: "body_health", icon: "💪" },
  
  // 중등 주제
  { id: 201, level_id: 2, name: "교통 (Transportation)", code: "transportation", icon: "✈️" },
  { id: 202, level_id: 2, name: "날씨와 계절 (Weather)", code: "weather", icon: "⛈️" },
  { id: 203, level_id: 2, name: "스포츠와 취미 (Sports)", code: "sports_hobbies", icon: "⚽" },
  { id: 204, level_id: 2, name: "여행과 장소 (Travel)", code: "travel_places", icon: "🗺️" },
  { id: 205, level_id: 2, name: "집과 일상생활 (Home)", code: "home_life", icon: "🏠" },
  { id: 206, level_id: 2, name: "쇼핑과 패션 (Shopping)", code: "shopping_fashion", icon: "🛍️" },
  { id: 207, level_id: 2, name: "자연과 식물 (Nature)", code: "nature_plants", icon: "🌲" },
  
  // 고등 주제
  { id: 301, level_id: 3, name: "감정 (Emotions)", code: "emotions", icon: "🎭" },
  { id: 302, level_id: 3, name: "사회와 환경 (Society)", code: "society", icon: "🌍" },
  { id: 303, level_id: 3, name: "과학과 기술 (Science)", code: "science_tech", icon: "💻" },
  { id: 304, level_id: 3, name: "인문과 철학 (Humanities)", code: "humanities_philosophy", icon: "🏛️" },
  { id: 305, level_id: 3, name: "경제와 경영 (Economy)", code: "economy_management", icon: "📊" },
  { id: 306, level_id: 3, name: "예술과 미학 (Arts)", code: "arts_aesthetics", icon: "🎨" },
  { id: 307, level_id: 3, name: "의학과 생명공학 (Medicine)", code: "medicine_biotech", icon: "🧬" }
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
  },
  // 초등 - 색깔과 도형 (topic_id: 103)
  {
    id: 37,
    topic_id: 103,
    english: "red",
    korean: "빨간색",
    image_url: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 38,
    topic_id: 103,
    english: "blue",
    korean: "파란색",
    image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 39,
    topic_id: 103,
    english: "green",
    korean: "초록색",
    image_url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 40,
    topic_id: 103,
    english: "yellow",
    korean: "노란색",
    image_url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 41,
    topic_id: 103,
    english: "circle",
    korean: "원/동그라미",
    image_url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 42,
    topic_id: 103,
    english: "square",
    korean: "정사각형",
    image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80"
  },
  // 중등 - 스포츠와 취미 (topic_id: 203)
  {
    id: 43,
    topic_id: 203,
    english: "soccer",
    korean: "축구",
    image_url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 44,
    topic_id: 203,
    english: "swimming",
    korean: "수영",
    image_url: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 45,
    topic_id: 203,
    english: "hiking",
    korean: "하이킹/등산",
    image_url: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 46,
    topic_id: 203,
    english: "photography",
    korean: "사진 촬영",
    image_url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 47,
    topic_id: 203,
    english: "instrument",
    korean: "악기",
    image_url: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 48,
    topic_id: 203,
    english: "painting",
    korean: "그림 그리기",
    image_url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80"
  },
  // 고등 - 과학과 기술 (topic_id: 303)
  {
    id: 49,
    topic_id: 303,
    english: "artificial intelligence",
    korean: "인공지능",
    image_url: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 50,
    topic_id: 303,
    english: "virtual reality",
    korean: "가상 현실",
    image_url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 51,
    topic_id: 303,
    english: "genetics",
    korean: "유전학",
    image_url: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 52,
    topic_id: 303,
    english: "renewable energy",
    korean: "재생 가능 에너지",
    image_url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 53,
    topic_id: 303,
    english: "cybersecurity",
    korean: "사이버 보안",
    image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 54,
    topic_id: 303,
    english: "exploration",
    korean: "탐사/탐험",
    image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80"
  },
  // 초등 - 음식과 음료 (topic_id: 104)
  {
    id: 55,
    topic_id: 104,
    english: "milk",
    korean: "우유",
    image_url: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 56,
    topic_id: 104,
    english: "bread",
    korean: "빵",
    image_url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 57,
    topic_id: 104,
    english: "cheese",
    korean: "치즈",
    image_url: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 58,
    topic_id: 104,
    english: "rice",
    korean: "밥/쌀",
    image_url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 59,
    topic_id: 104,
    english: "juice",
    korean: "주스",
    image_url: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 60,
    topic_id: 104,
    english: "cookie",
    korean: "쿠키",
    image_url: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=300&q=80"
  },
  // 초등 - 가족과 직업 (topic_id: 105)
  {
    id: 61,
    topic_id: 105,
    english: "mother",
    korean: "어머니",
    image_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 62,
    topic_id: 105,
    english: "father",
    korean: "아버지",
    image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 63,
    topic_id: 105,
    english: "teacher",
    korean: "선생님",
    image_url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 64,
    topic_id: 105,
    english: "doctor",
    korean: "의사",
    image_url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 65,
    topic_id: 105,
    english: "pilot",
    korean: "조종사",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 66,
    topic_id: 105,
    english: "chef",
    korean: "요리사",
    image_url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=300&q=80"
  },
  // 초등 - 학교와 학용품 (topic_id: 106)
  {
    id: 67,
    topic_id: 106,
    english: "desk",
    korean: "책상",
    image_url: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 68,
    topic_id: 106,
    english: "pencil",
    korean: "연필",
    image_url: "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 69,
    topic_id: 106,
    english: "book",
    korean: "책",
    image_url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 70,
    topic_id: 106,
    english: "ruler",
    korean: "자",
    image_url: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 71,
    topic_id: 106,
    english: "eraser",
    korean: "지우개",
    image_url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 72,
    topic_id: 106,
    english: "bag",
    korean: "가방/책가방",
    image_url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80"
  },
  // 초등 - 몸과 건강 (topic_id: 107)
  {
    id: 73,
    topic_id: 107,
    english: "hand",
    korean: "손",
    image_url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 74,
    topic_id: 107,
    english: "foot",
    korean: "발",
    image_url: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 75,
    topic_id: 107,
    english: "eye",
    korean: "눈",
    image_url: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 76,
    topic_id: 107,
    english: "ear",
    korean: "귀",
    image_url: "https://images.unsplash.com/photo-1590650511194-6888c3a149de?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 77,
    topic_id: 107,
    english: "nose",
    korean: "코",
    image_url: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 78,
    topic_id: 107,
    english: "mouth",
    korean: "입",
    image_url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80"
  },
  
  // 중등 - 여행과 장소 (topic_id: 204)
  {
    id: 79,
    topic_id: 204,
    english: "station",
    korean: "역",
    image_url: "https://images.unsplash.com/photo-1541447270888-dbde6a9921ec?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 80,
    topic_id: 204,
    english: "beach",
    korean: "해변",
    image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 81,
    topic_id: 204,
    english: "hotel",
    korean: "호텔",
    image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 82,
    topic_id: 204,
    english: "passport",
    korean: "여권",
    image_url: "https://images.unsplash.com/photo-1544027768-4646453df5e9?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 83,
    topic_id: 204,
    english: "museum",
    korean: "박물관",
    image_url: "https://images.unsplash.com/photo-1566121318-727827827827?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 84,
    topic_id: 204,
    english: "map",
    korean: "지도",
    image_url: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=300&q=80"
  },
  // 중등 - 집과 일상생활 (topic_id: 205)
  {
    id: 85,
    topic_id: 205,
    english: "kitchen",
    korean: "부엌",
    image_url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 86,
    topic_id: 205,
    english: "bedroom",
    korean: "침실",
    image_url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 87,
    topic_id: 205,
    english: "mirror",
    korean: "거울",
    image_url: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 88,
    topic_id: 205,
    english: "clock",
    korean: "시계",
    image_url: "https://images.unsplash.com/photo-1563861826100-9cb868fdcd1d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 89,
    topic_id: 205,
    english: "blanket",
    korean: "담요",
    image_url: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 90,
    topic_id: 205,
    english: "laundry",
    korean: "세탁/빨래",
    image_url: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=300&q=80"
  },
  // 중등 - 쇼핑과 패션 (topic_id: 206)
  {
    id: 91,
    topic_id: 206,
    english: "store",
    korean: "가게",
    image_url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 92,
    topic_id: 206,
    english: "discount",
    korean: "할인",
    image_url: "https://images.unsplash.com/photo-1538356111088-746a04b4bca6?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 93,
    topic_id: 206,
    english: "receipt",
    korean: "영수증",
    image_url: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 94,
    topic_id: 206,
    english: "clothing",
    korean: "의류",
    image_url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 95,
    topic_id: 206,
    english: "accessory",
    korean: "악세서리",
    image_url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 96,
    topic_id: 206,
    english: "wallet",
    korean: "지갑",
    image_url: "https://images.unsplash.com/photo-1627124703858-323f2ee3318b?auto=format&fit=crop&w=300&q=80"
  },
  // 중등 - 자연과 식물 (topic_id: 207)
  {
    id: 97,
    topic_id: 207,
    english: "forest",
    korean: "숲",
    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 98,
    topic_id: 207,
    english: "flower",
    korean: "꽃",
    image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 99,
    topic_id: 207,
    english: "mountain",
    korean: "산",
    image_url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 100,
    topic_id: 207,
    english: "ocean",
    korean: "대양/바다",
    image_url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 101,
    topic_id: 207,
    english: "leaf",
    korean: "나뭇잎",
    image_url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 102,
    topic_id: 207,
    english: "seed",
    korean: "씨앗",
    image_url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=300&q=80"
  },

  // 고등 - 인문과 철학 (topic_id: 304)
  {
    id: 103,
    topic_id: 304,
    english: "wisdom",
    korean: "지혜",
    image_url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 104,
    topic_id: 304,
    english: "morality",
    korean: "도덕성",
    image_url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 105,
    topic_id: 304,
    english: "existence",
    korean: "존재",
    image_url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 106,
    topic_id: 304,
    english: "perspective",
    korean: "관점",
    image_url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 107,
    topic_id: 304,
    english: "logic",
    korean: "논리",
    image_url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 108,
    topic_id: 304,
    english: "consciousness",
    korean: "의식",
    image_url: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=300&q=80"
  },
  // 고등 - 경제와 경영 (topic_id: 305)
  {
    id: 109,
    topic_id: 305,
    english: "inflation",
    korean: "인플레이션",
    image_url: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 110,
    topic_id: 305,
    english: "investment",
    korean: "투자",
    image_url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 111,
    topic_id: 305,
    english: "consumers",
    korean: "소비자",
    image_url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 112,
    topic_id: 305,
    english: "regulation",
    korean: "규제",
    image_url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 113,
    topic_id: 305,
    english: "negotiation",
    korean: "협상",
    image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 114,
    topic_id: 305,
    english: "corporation",
    korean: "대기업/법인",
    image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80"
  },
  // 고등 - 예술과 미학 (topic_id: 306)
  {
    id: 115,
    topic_id: 306,
    english: "masterpiece",
    korean: "명작/걸작",
    image_url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 116,
    topic_id: 306,
    english: "abstract",
    korean: "추상적인",
    image_url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 117,
    topic_id: 306,
    english: "harmony",
    korean: "조화",
    image_url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 118,
    topic_id: 306,
    english: "creativity",
    korean: "창의성",
    image_url: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 119,
    topic_id: 306,
    english: "exhibition",
    korean: "전시회",
    image_url: "https://images.unsplash.com/photo-1531058020387-3be344559767?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 120,
    topic_id: 306,
    english: "dramatic",
    korean: "극적인",
    image_url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=300&q=80"
  },
  // 고등 - 의학과 생명공학 (topic_id: 307)
  {
    id: 121,
    topic_id: 307,
    english: "diagnosis",
    korean: "진단",
    image_url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 122,
    topic_id: 307,
    english: "therapy",
    korean: "치료/요법",
    image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 123,
    topic_id: 307,
    english: "immunity",
    korean: "면역",
    image_url: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 124,
    topic_id: 307,
    english: "virus",
    korean: "바이러스",
    image_url: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b644?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 125,
    topic_id: 307,
    english: "symptom",
    korean: "증상",
    image_url: "https://images.unsplash.com/photo-1584515901407-d8f46f330154?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 126,
    topic_id: 307,
    english: "transplant",
    korean: "이식",
    image_url: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&w=300&q=80"
  }
];
