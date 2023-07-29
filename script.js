



// console.log(secTime);
setInterval(() => {
    const secondHand = document.getElementById('second')
    const minuteHand = document.getElementById('minute')
    const hourHand = document.getElementById('hour')

    const date = new Date()
    let secTime = (date.getSeconds());
    let minuteTime = (date.getMinutes());
    let hourTime = (date.getHours());


    secondHand.style.transform = `rotate(${(6*secTime)}deg)`;
    minuteHand.style.transform = `rotate(${(6*minuteTime)}deg)`;
    hourHand.style.transform = `rotate(${((30*hourTime) + (minuteHand/2))}deg)`;
}, 1000);
