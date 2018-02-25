const buttons = document.querySelectorAll('.button')

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.button[data-key="${e.keyCode}"]`)
  if (!audio) {return}
  audio.currentTime = 0
  audio.play()
  key.classList.add('active')
}

function removeClass(e){
  if (e.propertyName !== 'transform') {return}
  this.classList.remove('active')
}

window.addEventListener('keydown', playSound)
buttons.forEach(button => button.addEventListener('transitionend', removeClass))
