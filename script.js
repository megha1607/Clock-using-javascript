const hourHand = document.getElementById("hourHand");
const minHand = document.getElementById("minHand");
const secHand = document.getElementById("secHand");

setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    hours %= 12;
    const min = date.getMinutes();
    const sec = date.getSeconds();
    hourHand.style.transform = `rotate(${hours * 30}deg)`;
    minHand.style.transform = `rotate(${min * 6}deg)`;
    secHand.style.transform = `rotate(${sec * 6}deg)`;
}, 1000);