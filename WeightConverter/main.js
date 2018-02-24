const input = document.querySelector('#lbsInput');
const output = document.querySelector('#output');
output.style.visibility = 'hidden';

input.addEventListener('input', function() {
  output.style.visibility = 'visible';
  let lbs = this.value;
  document.querySelector('#gramsOutput').innerHTML = (lbs/0.0022046).toFixed(2);
  document.querySelector('#kgOutput').innerHTML = (lbs/2.2046).toFixed(2);
  document.querySelector('#ozOutput').innerHTML = lbs*16;
})
