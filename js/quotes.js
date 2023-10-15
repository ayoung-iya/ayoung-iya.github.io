const quotes = [
  {
    quote: "Just play. Have fun. Enjoy the game.",
    author: "Michael Jordan",
    koreanQuote: "그저 경기에 임해라. 즐거움을 느끼고, 경기를 즐겨라",
    koreanauthor: "마이클 조던",
  },
  {
    quote: "First keep the peace within yourself, then you can also bring peace to others.",
    author: "Thomas a Kempis",
    koreanQuote: "먼저 스스로 마음의 평온을 유지해야 다른 사람도 평온하게 만들 수 있다.",
    koreanauthor: "토마스 아 켐피스",
  },
  {
    quote: "It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tomorrow.",
    author: "Robert H. Goddard",
    koreanQuote: "불가능이 무엇인가는 말하기 어렵다. 어제의 꿈은 오늘의 희망이며 내일의 현실이기 때문이다.",
    koreanauthor: "로버트 고다드",
  },
  {
    quote: "Hope is necessary in every condition.",
    author: "Samuel Johnson",
    koreanQuote: "희망은 어떤 상황에서도 필요하다.",
    koreanauthor: "사무엘 존슨",
  },
  {
    quote: "All I know is I won't go speechless",
    author: "Speechless(Naomi Scott)",
    koreanQuote: "내가 아는 건 내가 입 다물고 있지 않을 것이라는 것이다.",
    koreanauthor: "쟈스민 (알라딘)",
  },
  {
    quote: "You can do a lot in a day",
    author: "Will Salas(In Time)",
    koreanQuote: "하루면 아주 많은 것들을 할 수 있지",
    koreanauthor: "윌 살라스 (인 타임)",
  },
  {
    quote: "A little fall of rain can hardly hurt me now",
    author: "Éponine Thénardier(Les Misérables)",
    koreanQuote: "비 조금 온다고 다치지 않아",
    koreanauthor: "에포닌 (레미제라블)",
  },
  {
    quote: "The winner takes it all. The loser standing small beside the victory.",
    author: "Donna Sheridan(Mamma mia)",
    koreanQuote: "승자가 모든 걸 다 차지하는 법입니다. 승리자 옆 패자의 모습은 꼴이 아니죠",
    koreanauthor: "도나 (맘마미아)",
  },
  {
    quote: "Most people are about as happy as they make up their minds to be.",
    author: "Abraham Lincoln",
    koreanQuote: "대부분의 사람은 마음 먹은 만큼 행복하다.",
    koreanauthor: "에이브러햄 링컨",
  },
  {
    quote: "The cold never bothered me anyway",
    author: "Elsa(Frozen)",
    koreanQuote: "추위 따윈 두렵지 않으니까",
    koreanauthor: "엘사 (겨울왕국)",
  },
]

const quoteArea = document.querySelector('.quote-area');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteArea.innerHTML = `
  <span class="author">${todayQuote.koreanauthor}</span>
  <h3 class="quote">${todayQuote.koreanQuote}</h3>
`