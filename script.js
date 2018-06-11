var count = 0
var interval = null

function startTimer () {
  count = 60
  timer()
  // stopTimer()
  interval = setInterval(timer, 1000)
}

function timer () {
  document.getElementById('timer').innerHTML = count--
  console.log(count)
  if (count === -2) {
    clearInterval(interval)
    alert("time's up!")
    document.getElementById('timer').innerHTML = 0
  }
}

function stopTimer () {
  clearInterval(interval)
}
document.getElementById('timer').addEventListener('click', startTimer)
