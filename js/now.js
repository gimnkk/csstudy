var clockTarget = document.getElementById("clock");

function clock() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var clockDate = date.getDate();
    var day = date.getDay();
    var weekStr = date.getWeek();
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    clockTarget.innerText = `${year}년 ${month + 1}월 ${clockDate}일 ${week[day]}요일 ${weekStr}주차 ` +
        `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

 Date.prototype.getWeek = function () {
     var onejan = new Date(this.getFullYear(), 0, 1);
     var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
     var dayOfYear = ((today - onejan + 86400000) / 86400000);
     return Math.ceil(dayOfYear / 7)
 };

function init() {
    clock();
    setInterval(clock, 1000);
}

init();

// const clock = document.getElementById("clock");
// const today = document.getElementById("today");
// const week = document.getElementById("week");

// function calender() {

//     let now = new Date();
//     var year = now.getFullYear();
//     var month = ('0' + (now.getMonth() + 1)).slice(-2);
//     var date = ('0' + now.getDate()).slice(-2);
//     var dayArray = ["일", "월", "화", "수", "목", "금", "토"];
//     var day = dayArray[now.getDay()];
//     var dateStr = year + '년 ' + month + '월 ' + date + '일 ' + day + '요일';
//     var weekStr = now.getWeek() + "주차"
//     today.innerText = dateStr;
//     week.innerText = weekStr;
// }



// function timer() {
//     const date = new Date();

//     const Hours = String(date.getHours()).padStart(2, "0");
//     const Mins = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");

//     clock.innerText = `${Hours}:${Mins}:${seconds}`;
// }


// calender();
// timer();
// setInterval(timer, 1000);