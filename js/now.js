const clock = document.getElementById("clock");

function timer(){
    const date = new Date();

    const Hours = String(date.getHours()).padStart(2,"0");
    const Mins = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${Hours}:${Mins}:${seconds}`;
}
timer();
setInterval(timer,1000);