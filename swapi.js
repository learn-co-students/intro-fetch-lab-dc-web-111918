document.addEventListener('DOMContentLoaded', function(){
  crawlButton();
  findPlanetButton();
  showDroids();

})

function getOpeningCrawlInfo(){
   fetch('https://swapi.co/api/films/1/')
   .then(response => response.json())
   .then(crawlText => addOppeningCrawltoPage(crawlText))
}

function getPlanetInfo(num) {
  fetch(`https://swapi.co/api/planets/${num}/`)
  .then(response => response.json())
  .then(planetInfo => addPlanetInfotoPage(planetInfo))
}

function getDroidInfo(num){
  return fetch(`https://swapi.co/api/people/${num}/`)
  .then(response => response.json())
}

function addOppeningCrawltoPage(text){
  const crawlDiv = document.querySelector('#crawlDiv');
  crawlDiv.innerText = text.opening_crawl;
}

function addPlanetInfotoPage(planetData) {
  const planetDataDiv = document.querySelector('#planetData');
  planetDataDiv.innerHTML = `<div>Name: <b>${planetData.name}</b></div><div>Climate: <b>${planetData.climate}</b></div>`
}

function findPlanet(event) {
  event.preventDefault();
  const planetNum = document.querySelector('#planetInput').value
  if (isInputValid(planetNum)) {
    getPlanetInfo(planetNum);
  }else {
    document.querySelector('#planetData').innerText = "Please enter planet number from 1 to 61"
  }
}

function isInputValid(input) {
  if ((parseInt(input) > 0 && parseInt(input) < 62)) {
    return true
  }else
  return false
}

function showDroids() {
  const droids = [2,3];
  droids.forEach(droidId => {
    getDroidInfo(droidId)
    .then(info => createDroids(info, droidId))
  })
  document.querySelector('#droid-2').addEventListener('click', findDroidPlanet);

  document.querySelector('#droid-3').addEventListener('click', findDroidPlanet);

}

function createDroids(info, droidId) {
  let droid = document.querySelector(`#droid-${droidId}`)
  droid.innerHTML = `<span><b>Name:</b> ${info.name}</span><span><b>Height:</b> ${info.height}</span><span><b>Mass:</b> ${info.mass}</span><button id='droid-${droidId}'>Planet</button>`
}

function findDroidPlanet(event) {
  const num = event.target.id

  if (num === 'droid-2') {
    getPlanetInfo(1)
  }else {
    getPlanetInfo(8)
  }
}

const crawlButton = () => document.querySelector('#crawlBtn').addEventListener('click', getOpeningCrawlInfo);

const findPlanetButton = () => document.querySelector('#findPlanet').addEventListener('click', findPlanet);
