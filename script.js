var count = 0
var interval = null

function startTimer () {
  count = 5
  timer()
  // stopTimer()
  interval = setInterval(timer, 1000)
}

var timerElement = document.getElementById('timer')
function timer () {
  timerElement.innerHTML = count--
  console.log(count)
  if (count === -2) {
    clearInterval(interval)
    timerElement.innerHTML = "Time's Up. Click Again?"
    timerElement.style.fontSize = '50px'
  }
}

function stopTimer () {
  clearInterval(interval)
}
document.getElementById('timer').addEventListener('click', startTimer)
