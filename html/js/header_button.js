document.getElementById('my').addEventListener('click', function () {
  window.location.href = 'login_page';
});
document.getElementById('home').addEventListener('click', function () {
  window.location.href = '';
});
// 로그인 버튼 이벤트 처리
document.getElementById('my').addEventListener('click', function () {
  // 로그인 상태 확인 (예시로 localStorage 사용, 실제 구현 시 서버와 통신 필요)
  const isLoggedIn = localStorage.getItem('loggedIn');

  if (isLoggedIn) {
      window.location.href = 'my_page_1';
  } else {
      window.location.href = 'login';
  }
});

// 홈 버튼 클릭 시 초기 페이지로 이동
document.getElementById('home').addEventListener('click', function () {
  window.location.href = '';
});

document.getElementById('search').addEventListener('submit', function(event) {
// 폼 제출 시 페이지 새로 고침 방지
event.preventDefault();

// 입력 필드의 값 가져오기
let searchInput = document.getElementById('search-txt').value;

// 변수에 저장
let searchQuery = encodeURIComponent(searchInput); // URL에 안전하게 포함시키기 위해 인코딩

// URL에 searchQuery 변수 값을 삽입
let targetUrl = `/search?query=${searchQuery}`;

// 페이지 이동
window.location.href = targetUrl;
// 필요한 추가 작업 수행 (예: 폼 데이터 전송, 필드 비우기 등)
});