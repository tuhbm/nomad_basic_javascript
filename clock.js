const clockContainer = document.querySelector(".js-clock"),
      clockTitle = document.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${compileTime(hours)}:${compileTime(minutes)}:${compileTime(seconds)}`;
    console.log('getTime');
}

function compileTime(time) {
    return time < 10 ? `0${time}` : time;
}

function init() {
    setInterval(getTime, 1000);
}

init();