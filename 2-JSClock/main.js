const secondsHand = document.querySelector('.seconds')
const minutesHand = document.querySelector('.minutes')
const hoursHand = document.querySelector('.hours')

function showTime() {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  let secondsDegrees = (seconds * 6) + 90
  secondsHand.style.transform = `translateY(-5px) rotate(${secondsDegrees}deg)`
  let minutesDegrees = (minutes * 6) + 90
  minutesHand.style.transform = `translateY(-5px) rotate(${minutesDegrees}deg)`
  let hoursDegrees = (hours * 30) + 90
  hoursHand.style.transform = `translateY(-5px) rotate(${hoursDegrees}deg)`
}

setInterval(showTime, 1000)
