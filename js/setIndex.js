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
}