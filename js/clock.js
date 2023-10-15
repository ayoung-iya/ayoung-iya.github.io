const days = ['일', '월', '화', '수', '목', '금', '토'];

const clockGroup = document.querySelector(".clock-group");

function current() {
  const currentHour = new Date().getHours();
  const currentMinute = String(new Date().getMinutes()).padStart(2, "0");
  const currentMonth = new Date().getMonth() + 1;
  const currentDate = new Date().getDate();
  const currentDay = `${days[new Date().getDay()]}요일`;
  
  clockGroup.innerHTML = `
    <span class="clock">${currentHour}:${currentMinute}</span>
    <span class="date">${currentMonth}월 ${currentDate}일 ${currentDay}</span>
  `
}

current();
setInterval(current, 1000);
