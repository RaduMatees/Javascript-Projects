const input = document.querySelector('#input');
const outputs = [document.querySelector('#gramsOutput'), document.querySelector('#kgOutput'),
document.querySelector('#ozOutput'), document.querySelector('#lbsOutput')];
const cards = document.querySelectorAll('.card');
input.disabled = true;
let measUnit;

cards.forEach(card => card.addEventListener('click', function(){
  input.disabled = false;
  measUnit = this.dataset.mu;
  input.placeholder = `Enter ${measUnit}:`;
  // if it's not the first click on a card
  if (input.value) {
    outputs.map((output, i) => output.innerHTML = resolve(input.value, measUnit)[i]);
  }
}))

input.addEventListener('input', function() {
  let value = this.value;
  outputs.map((output, i) => output.innerHTML = resolve(value, measUnit)[i]);
})

function resolve(userInput, userUnit){
  let results = [];
  let grams, kilograms, ounces, pounds;
  if (userUnit === 'pounds'){
    grams = userInput/0.0022046;
    kilograms = userInput/2.2046;
    ounces = userInput*16;
    pounds = userInput;
  }
  if (userUnit === 'grams'){
    grams = userInput;
    kilograms = userInput/1000;
    ounces = userInput*0.035274;
    pounds = userInput*0.00220462262185;
  }
  if (userUnit === 'kilograms'){
    grams = userInput*1000;
    kilograms = userInput;
    ounces = userInput*35.27396195;
    pounds = userInput*2.20462262185;
  }
  if (userUnit === 'ounces'){
    grams = userInput/0.035274;
    kilograms = userInput/35.27396195;
    ounces = userInput;
    pounds = userInput*0.0625;
  }
  results.push(grams, kilograms, ounces, pounds);
  return results;
}
