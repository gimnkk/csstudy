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
      $('#members').append(option);
    }
  });
}

getMembers();

/**
 * 휴식 여부에 따라 목표 입력창 제어
 */
$("#rest").change(function () {
  if ($(this).is(':checked')) {
    $("#targetText").attr("required", false);
    $("#targetText").attr("disabled", true);
  } else {
    $("#targetText").attr("required", true);
    $("#targetText").attr("disabled", false);
  }
});
