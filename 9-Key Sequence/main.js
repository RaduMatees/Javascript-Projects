const secretCode = 'javascript'
let pressed = []

window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  if (pressed.join('').includes(secretCode)){
    cornify_add()
    pressed = []
  }
})
