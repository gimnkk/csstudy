function loadMenu() {
    fetch('/html/menu.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('menuContainer').innerHTML = data;
        addMenuEventListeners(); // 메뉴 클릭 이벤트 리스너 추가
      })
      .catch(error => console.error('메뉴를 불러오는 중 오류가 발생했습니다:', error));
}

// 메뉴 클릭 이벤트 리스너를 추가하는 함수
function addMenuEventListeners() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const contents = document.querySelectorAll('.content');

    menuLinks.forEach(function(menuLink) {
      menuLink.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');

        // 모든 콘텐츠를 숨김
        contents.forEach(function(content) {
          content.classList.remove('active');
        });

        // 클릭한 메뉴에 해당하는 콘텐츠만 보이도록 변경
        document.getElementById(target);
        document.getElementById(target).classList.add('active');
      });
    });
}

// 각 content를 로드하여 메인 콘텐츠에 추가하는 함수
function loadContents() {
  const contentIds = ['goalMenu', 'fineMenu'];
  contentIds.forEach(contentId => {
    fetch(`/html/${contentId}.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementById(contentId).innerHTML = data;
      })
      .catch(error => console.error(`${contentId}를 불러오는 중 오류가 발생했습니다:`, error));
  });
}

  // 페이지 로드 시 메뉴를 로드
  window.onload = function() {
    loadMenu();
    loadContents();
  };