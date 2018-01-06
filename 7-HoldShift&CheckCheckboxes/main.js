const checkboxes = document.querySelectorAll('input[type = checkbox]')
let lastCheck

function startSelecting(e) {
  if (e.shiftKey && lastCheck.checked){
    let toCheck = false
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        toCheck = !toCheck
      }
      if (toCheck) {
        checkbox.checked = true
      }
    })
  }
  lastCheck = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', startSelecting))
