function getMembers() {
  let range = '멤버!A:D';
  var settings = {
    "url": "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetsId + "/values/" + range + "?key=" + apiKey,
    "method": "GET",
    "timeout": 0,
    "success": function (response) {
      setCombo(response.values);
    }

  };

  $.ajax(settings).done(function (response) {
    console.debug(response);
  });
}

function setCombo(members) {
  //member[] = [id, registDate, name, active]; 
  members.forEach(member => {
    if (member[3] === 'TRUE') {
      let option = '';
      option = '<option value="' + member[0] + '" class="comboOpt">' + member[2] + '</option>';
      $('#name').append(option);
    }
  });
}

getMembers();

/**
 * 휴식 여부에 따라 목표 입력창 제어
 */
$("#rest").change(function () {
  if ($(this).is(':checked')) {
    $("#goal").attr("required", false);
    $("#goal").attr("disabled", true);
  } else {
    $("#goal").attr("required", true);
    $("#goal").attr("disabled", false);
  }
});

function submitForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var goal = document.getElementById("goal").value;
    var rest = document.getElementById("rest").checked;

    console.log("이름:", name);
    console.log("목표:", goal);
    console.log("휴식:", rest);

    // 여기에 서버로 데이터를 전송하거나 다른 작업을 수행하는 코드를 추가하세요.
    // 현재 날짜를 얻기 위해 Date 객체를 사용합니다.
        var currentDate = new Date();

        // 한국 시간 기준으로 현재 요일을 가져옵니다. (0: 일요일, 1: 월요일, ..., 6: 토요일)
        var currentKoreaDay = (currentDate.getUTCDay() + 9) % 7;

        // 미국 동부 시간 기준으로 현재 요일을 가져옵니다. (0: 일요일, 1: 월요일, ..., 6: 토요일)
        var currentEastUSDay = (currentDate.getUTCDay() - 5) % 7;
        var currentWestUSDay = (currentDate.getUTCDay() - 8) % 7;

        // 한국 시간 기준으로 월요일이 아닌 경우에는 제출을 막습니다. (월요일은 1)
        if (currentKoreaDay !== 1) {
          alert("한국 시간 기준으로 월요일에만 목표를 제출할 수 있습니다.");
          event.preventDefault(); // 폼 제출을 막습니다.
        }

        // 미국 시간 기준으로 월요일이 아닌 경우에는 제출을 막습니다. (월요일은 1)
        if (currentEastUSDay !== 1) {
          alert("미국 시간 기준으로 월요일에만 목표를 제출할 수 있습니다.");
          event.preventDefault(); // 폼 제출을 막습니다.
        }



}


function addGoal(goalData) {
  var range = '목표!A:B';
  var valueInputOption = 'RAW';
  var insertDataOption = 'INSERT_ROWS';

  var requestBody = {
    'range': range,
    'majorDimension': 'ROWS',
    'values': [
      [goalData.date, goalData.description]
    ]
  };

  var request = gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: 'your_spreadsheet_id',
    range: range,
    valueInputOption: valueInputOption,
    insertDataOption: insertDataOption,
    resource: requestBody
  });

  request.then(function(response) {
    console.log('Goal added successfully:', response);
    // 추가한 후에 필요한 작업 수행
  }, function(reason) {
    console.error('Error adding goal:', reason.result.error.message);
  });
}