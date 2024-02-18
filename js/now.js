function updateTimes() {
      // 미국 동부 시간 (뉴욕)
      var eastUsTime = new Date();
      document.getElementById("eastUsTime").innerHTML = "미국 동부<br>" + formatDateTime(eastUsTime, "America/New_York");

      // 미국 서부 시간
      var westUsDate = new Date();
      document.getElementById("westUsTime").innerHTML = "미국 서부<br>" + formatDateTime(westUsDate, "America/Los_Angeles");

      // 한국 시간
      var koreaDate = new Date();
      document.getElementById("koreaTime").innerHTML = "한국<br>" + formatDateTime(koreaDate, "Asia/Seoul");
  }

  function formatDateTime(date, timeZone) {
      var options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
          timeZone: timeZone
      };
      return new Intl.DateTimeFormat('ko-KR', options).format(date);
  }

  // 초기 실행
  updateTimes();

  // 1초마다 업데이트
  setInterval(updateTimes, 1000);

function getWeekNumber(dateString) {
    // 입력된 문자열에서 '년', '월', '일'을 제거하고 공백을 기준으로 분리합니다.
    var parts = dateString.replace(/년|월|일/g, '').split(' ');
    // 분리된 연도, 월, 일 정보를 추출합니다.
    var year = parseInt(parts[0]);
    var month = parseInt(parts[1]) - 1; // JavaScript의 월은 0부터 시작하므로 1을 빼줍니다.
    var day = parseInt(parts[2]);

    // 해당 날짜 정보를 가지고 Date 객체를 생성합니다.
    var date = new Date(year, month, day);

    // 해당 년도의 1월 1일의 날짜를 구합니다.
    var yearStart = new Date(year, 0, 1);

    // 1월 1일이 속한 주의 첫 번째 날짜를 구합니다.
    var firstWeekStart = yearStart;
    // 1월 1일이 월요일 이후에 있는 경우, 첫 번째 주는 그 해의 마지막 날인 12월 31일로 설정합니다.
    if (yearStart.getDay() > 1) {
        firstWeekStart = new Date(year, 0, 8 - yearStart.getDay());
    }

    // 주어진 날짜와 첫 번째 주의 시작일 사이의 경과 일 수를 구합니다.
    var daysDiff = Math.floor((date - firstWeekStart) / 86400000);

    // 주차를 계산합니다.
    var weekNumber = Math.floor(daysDiff / 7) + 1; // 보정이 필요 없습니다.

    return weekNumber;
}

// 테스트를 위해 함수 호출 예시
var inputDate = '2023년 1월 1일';
var weekNumber = getWeekNumber(inputDate); // 보정이 필요 없습니다.
console.log(inputDate + '은(는) ' + (2022 + weekNumber) + '년의 ' + weekNumber + '주차에 해당합니다.');
