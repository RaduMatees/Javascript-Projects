const secretCode = 'radu'
let pressed = []

window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  pressed.splice(0, pressed.length - secretCode.length)
  if (pressed.join('').includes(secretCode)){
    cornify_add()
  }
  console.log(pressed)
})
