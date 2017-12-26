const panels = document.querySelectorAll('.flex')

function viewPanel() {
  this.classList.toggle('open')
}

function slideText(e) {
  if (e.propertyName !== 'flex-grow') {return}
  this.classList.toggle('active')
}

panels.forEach(panel => panel.addEventListener('click', viewPanel))
panels.forEach(panel => panel.addEventListener('transitionend', slideText))
