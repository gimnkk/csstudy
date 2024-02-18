function updateTimes() {
      // 미국 동부 시간 (뉴욕)
      var eastUsTime = new Date();
      document.getElementById("eastUsTime").innerHTML = "<strong>미국 동부 시간:</strong> " + formatDateTime(eastUsTime, "America/New_York");

      // 미국 서부 시간
      var westUsDate = new Date();
      document.getElementById("westUsTime").innerHTML = "<strong>미국 서부 시간:</strong> " + formatDateTime(westUsDate, "America/Los_Angeles");

      // 한국 시간
      var koreaDate = new Date();
      document.getElementById("koreaTime").innerHTML = "<strong>대한민국 시간:</strong> " + formatDateTime(koreaDate, "Asia/Seoul");
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