// Write your swapi code in this file!
document.addEventListener("DOMContentLoaded", main)

function main(){

initCrawlButton()

initPlanetButton()

initDroidData()

}

function initDroidData(
  // immediately get droid data from API (name, height, mass)
  // get data onto DOM
  // create button for each droid
    // show home planet on click
      // fetch planet data (name) from API (again)
      // show planet data  
)

function initCrawlButton(){
  let crawlButton = document.getElementById('crawlBtn')
  crawlButton.addEventListener('click', crawlButtonHandler)
}

function crawlButtonHandler(){
  fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(json => {
    document.getElementById('crawlDiv').innerText = json.opening_crawl
  })
}


    // get planet data from api

function initPlanetButton(){
    let planetForm = document.getElementById('planetForm')
    planetForm.addEventListener('submit',(e) => e.preventDefault() )
    planetForm.addEventListener('submit', planetButtonHandler)
}

function getPlanetInput(){
    let planetForm = document.getElementById('planetForm')
    // get user input value string from form and parse into integer
    let planetInput = parseInt(document.getElementById('planetInput').value)
    return planetInput
  }

function planetButtonHandler(){
    fetch(`https://swapi.co/api/planets/${getPlanetInput()}`)
    .then(res => res.json())
    // take planet data (json) and post planet name and climate to dom
    .then(json => {
      let planetDiv = document.getElementById('planetData')
      planetData.innerText = `Planet Name: ${json.name} | Planet Climate: ${json.climate}`
    })

}
