const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const myCities = []
const input = document.querySelector('.search-input')
const suggestions = document.querySelector('.suggestions')

fetch(endpoint).then(blob => blob.json()).then(data => myCities.push(...data))

function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function addSuggestions() {
  let matches = wordsToMatch(this.value, myCities) // should return an array of matched cities or states
  let html = matches.map(match => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = match.city.replace(regex, `<span class='hl'>${this.value}</span>`)
    const stateName = match.state.replace(regex, `<span class='hl'>${this.value}</span>`)
    return `
      <li>
        ${cityName}, ${stateName}
        <span class='population'>${numberWithCommas(match.population)}</span>
      </li>
    `
  }).join('')
  suggestions.innerHTML = html
}

function wordsToMatch(userInput, cities) {
  return cities.filter(city => {
    let regex = new RegExp(userInput, 'gi')
    return city.city.match(regex) || city.state.match(regex)
  })
}

input.addEventListener('change', addSuggestions)
input.addEventListener('keyup', addSuggestions)
