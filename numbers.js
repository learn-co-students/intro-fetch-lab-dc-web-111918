document.addEventListener('DOMContentLoaded', function(){
  const factOneButton = () => document.querySelector('#number-one').addEventListener('click', getFactOne);
  const pickNumber = document.querySelector('#pick-a-number')
  pickNumber.onchange = factOnChange
  yearFact();
  const hundredRandomFacts = document.querySelector('#all-numbers-button').addEventListener('click', showHundredRandomFacts);
})

function getFact(number) {
  return fetch(`http://numbersapi.com/${number}/trivia`)
  .then(response => response.text())
}

function getYearFact(year) {
  return fetch(`http://numbersapi.com/${year}/year`)
  .then(response => response.text())
}

function getFactOne() {
  getFact('1')
  .then(fact => addFactOne(fact))
}

function addFactOne(fact) {
  document.querySelector('#one-facts').innerText = `${fact}`
}

function factOnChange() {
  const number = document.querySelector('#pick-a-number').value
  const field = document.querySelector('#random-math-fact')
  field.innerText = ''
  if (!isNaN(parseInt(number))) {
    getFact(number)
    .then(fact => field.innerText = `${fact}`)
  }else {
    field.innerText = "Please enter numbers only"
  }
}

function showYearFact(year) {
  const yearDiv = document.querySelector('#year-history')
  const yearFact = getYearFact(year)
  .then(yearFact => yearDiv.innerText = `${yearFact}`)

}

function yearFact() {
  let year = new Date().getFullYear();
  showYearFact(year);
  setInterval(() => {
    year--;
    showYearFact(year)
  }, 5000)
}

function showHundredRandomFacts() {
  const yearDiv = document.querySelector('#all-the-numbers')
  for (var i = 0; i < 100; i++) {
    getFact(Math.floor(Math.random()*100))
    .then (fact => {
      const newElem = document.createElement('div')
      yearDiv.appendChild(newElem)
      newElem.innerText = `${fact}`
    })
  }
}
