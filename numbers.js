document.addEventListener('DOMContentLoaded', function() {
  whatYear()
})

function choice(){
  return document.querySelector('#pick-a-number')
}

function randomMathFact(){
  return document.querySelector('#random-math-fact')
}

function yearHistory(){
  return document.querySelector('#year-history')
}

function hundredNumbers(){
  return document.querySelector('#all-the-numbers')
}
function whatYear(){
  let year = new Date().getFullYear()
  currentYearFact(year)
  setInterval(function(){
    year --
    currentYearFact(year)
  },5000)
}

function currentYearFact(year){
  fetch(`http://numbersapi.com/${year}/trivia`)
  .then(response=>response.text())
  .then(data=>{
    yearHistory().innerHTML = data
  })
}



document.querySelector('#number-one').addEventListener("click",function(){
  numberOne()
})

function numberOne(){
  fetch('http://numbersapi.com/1/trivia')
  .then (response => response.text())
  .then(data =>{
  document.querySelector('#one-facts').innerHTML = data
  })
}

choice().addEventListener("change",function(e){
  e.preventDefault
  let number = choice().value
  if (isNaN(number)) {
      randomMathFact().innerHTML= ('please enter a valid number')
    } else {
      pickNumber(number)
    }
})

function pickNumber(number){
  fetch(`http://numbersapi.com/${number}/trivia`)
  .then(response=>response.text())
  .then(data =>{
  randomMathFact().innerHTML = data
  })
}
document.querySelector('#all-numbers-button').addEventListener('click',function(){
  getAllNumbers()})


function getAllNumbers(){
  fetch('http://numbersapi.com/1..100')
  .then(response=>response.json())
  .then(numbers => {
    let html = '<ul>'
    for (key in numbers) {
      html += `<li>${numbers[key]}</li>`
    }
    html += '</ul>'
    hundredNumbers().innerHTML = html
  })
}
