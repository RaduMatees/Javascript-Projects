const image = document.querySelector('img')
const inputs = document.querySelectorAll('input')

function updateChange(){
  const suffix = this.dataset.size || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', updateChange))
inputs.forEach(input => input.addEventListener('mousemove', updateChange))
