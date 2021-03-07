const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".minute-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const timeNow = new Date();
  const seconds = timeNow.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360 + 90);
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = timeNow.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360 + 90);
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = timeNow.getHours();
  const hoursDegrees = ((hours / 60) * 360 + 45);
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);