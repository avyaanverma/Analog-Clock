// console.log(secTime);
setInterval(() => {
    const secondHand = document.getElementById('second')
    const minuteHand = document.getElementById('minute')
    const hourHand = document.getElementById('hour')

    const date = new Date()
    let secTime = (date.getSeconds());
    let minuteTime = (date.getMinutes());
    let hourTime = (date.getHours());
    if (hourTime>12){
        hourTime = hourTime - 12;
    }
    

    secondHand.style.transform = `rotate(${(6*secTime)}deg)`;
    minuteHand.style.transform = `rotate(${(6*minuteTime)}deg)`;
    hourHand.style.transform = `rotate(${30*hourTime + minuteTime/2}deg)`;
}, 1000);
