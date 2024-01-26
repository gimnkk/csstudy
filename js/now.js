const clock = document.getElementById("clock");
const today = document.getElementById("today");
const week = document.getElementById("week");

function calender() {

    let now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var date = ('0' + now.getDate()).slice(-2);
    var dayArray = ["일", "월", "화", "수", "목", "금", "토"];
    var day = dayArray[now.getDay()];
    var dateStr = year + '년 ' + month + '월 ' + date + '일 ' + day + '요일';
    var weekStr = now.getWeek() + "주차"
    today.innerText = dateStr;
    week.innerText = weekStr;
}

function timer() {
    const date = new Date();

    const Hours = String(date.getHours()).padStart(2, "0");
    const Mins = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${Hours}:${Mins}:${seconds}`;
}

Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    var dayOfYear = ((today - onejan + 86400000) / 86400000);
    return Math.ceil(dayOfYear / 7)
};
calender();
timer();
setInterval(timer, 1000);