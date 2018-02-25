const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const screen = player.querySelector('.fullscreen')
let rangeFlag = false

function togglePlay() {
  video.paused ? video.play() : video.pause()
}

function updateButton() {
  const icon = this.paused ? '▶' : '▮▮'
  toggle.textContent = icon
}

function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = percent + "%"
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

function makeFullScreen() {
  video.webkitEnterFullScreen();
}

toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
skipButtons.forEach(skip => skip.addEventListener('click', handleSkip))
ranges.forEach(range => range.addEventListener('change' ,handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove' ,() => {
  if (rangeFlag) {handleRangeUpdate}
}))
ranges.forEach(range => range.addEventListener('mousedown' ,() => rangeFlag = true))
ranges.forEach(range => range.addEventListener('mouseup' ,() => rangeFlag = false))

let mouseDown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => {
  if (mouseDown) {scrub(e)}
})
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)

screen.addEventListener('click', makeFullScreen)
