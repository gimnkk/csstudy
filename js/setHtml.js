const members = JSON.parse(JSON.stringify(memberList));

function setCombo() {
    $('#members').append('<option value="" selected disabled hidden>이름 선택</option>');
    members.forEach(element => {
        if (element.active == "Y") {
            let option = '';
            option = '<option value="' + element.id + '" class="comboOpt">' + element.name + '</option>';
            $('#members').append(option);
        }
    });
}

setCombo();