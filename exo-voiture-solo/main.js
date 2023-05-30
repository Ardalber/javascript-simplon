document.getElementById('contact').style.width = '80px'
document.getElementById('contact').style.backgroundColor = 'green'

let engineStatus = false
let speed = 0
let tank = 50
let distance = 0
let engineSpeed = 0

function startAndStop () {
  if (engineStatus === false) {
    engineStatus = true
    document.getElementById('engine').textContent = ' ON'
    document.getElementById('contact').textContent = 'STOP'
    document.getElementById('contact').style.backgroundColor = 'red'
  } else {
    engineStatus = false
    document.getElementById('engine').textContent = 'OFF'
    document.getElementById('contact').textContent = 'START'
    document.getElementById('contact').style.backgroundColor = 'green'
  }
}

function increaseSpeed () {
  if (engineStatus === true && speed <= 210) {
    speed += 10
    document.getElementById('speed').textContent = `${speed}` + ' KM/H '
    setDistance()
  }
}

function decreaseSpeed () {
  if (speed >= 10) {
    speed -= 10
    document.getElementById('speed').textContent = `${speed}` + ' KM/H '
  }
}

function setDistance () {
  if (speed > 0) {
    distance += 10
    document.getElementById('distance').textContent = `${distance}` + ' KM  '
  }
}
setInterval(setDistance, 1000)
