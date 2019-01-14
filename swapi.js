function crawl() {
let crawlButton = document.querySelector('#crawlBtn')
crawlButton.addEventListener('click', function(){
  getOpeningCrawl()
})
}
function getOpeningCrawl() {
  let crawlDiv = document.querySelector('#crawlDiv')
  fetch('https://swapi.co/api/films/1/')
  .then(response => response.json())
  .then(jsonData => {
    crawlDiv.innerHTML = jsonData.opening_crawl
  })
  .catch(error => {alert('Something went wrong')})
}
function getPlanetForm() {
  let formPlanet = document.getElementById('planetForm')
  formPlanet.addEventListener('submit', function(e) {
    e.preventDefault();
    let input = document.getElementById('planetInput')
    let inputNum = parseInt(input.value)
    if (inputNum > 0 && inputNum < 62) {
      getPlanet(inputNum)
    } else {
      alert("Not a valid planet Id")
    }
  })
}
function getPlanet(inputNum) {
  fetch(`https://swapi.co/api/planets/${inputNum}`)
  .then(response => response.json())
  .then(jsonData => {
    planetData.innerHTML = `Planet Name: ${jsonData.name}, Climate: ${jsonData.climate}`
  })
  .catch(error => {alert('Something went wrong')})
}
crawl();
getPlanetForm();

function droidTwo(){
  return document.querySelector('#droid-2')
}
function droidThree(){
  return document.querySelector('#droid-3')
}

function createButton(droid, droidId, droidNumber,divId,planetId){
  button = document.createElement("button");
  button.id = droidId
  button.innerText = droidNumber
  droid.appendChild(button)
  info = document.createElement("div")
  info.id = divId
  droid.appendChild(info)
  planet = document.createElement("div")
  planet.id = planetId
  droid.appendChild(planet)
}

//------------------------Droid Stuff-------------------------------------
createButton(droidTwo(),"droidTwo","Droid thing two","DroidTwoInfo","planetTwo")
createButton(droidThree(),"droidThree","Droid thing Three","DroidThreeInfo","planetThree")

droidTwo().addEventListener('click', function(){
  getDroidTwo()
  homePlanetDroidTwo()
})

function getDroidTwo(){
  fetch('https://swapi.co/api/people/2')
  .then(response=>response.json())
  .then(jsonData=>{
    document.querySelector('#DroidTwoInfo').innerHTML = `Name: ${jsonData.name},  Mass: ${jsonData.mass}, height: ${jsonData.height}`
  })
  .catch(error=>{alert("Something went wrong")})
}

function homePlanetDroidTwo(){
fetch('https://swapi.co/api/planets/1/')
.then(response=>response.json())
.then(jsonData=>{
document.querySelector('#planetTwo').innerHTML = `Home Planet: ${jsonData.name}, Terrain: ${jsonData.terrain}, Population: ${jsonData.population}`
})
.catch(error=>{alert("something went wrong")})
}


//--------------------------Droid3----------------------------------------
droidThree().addEventListener('click', function(){
  getDroidThree()
  homePlanetDroidThree()
})

function getDroidThree(){
  fetch('https://swapi.co/api/people/3')
  .then(response=>response.json())
  .then(jsonData=>{
    document.querySelector('#DroidThreeInfo').innerHTML = `Name: ${jsonData.name},  Mass: ${jsonData.mass}, height: ${jsonData.height}`
  })
  .catch(error=>{alert("Something went wrong")})
}

function homePlanetDroidThree(){
  fetch('https://swapi.co/api/planets/8/')
  .then(response=>response.json())
  .then(jsonData=>{
  document.querySelector('#planetThree').innerHTML = `Home Planet: ${jsonData.name}, Terrain: ${jsonData.terrain}, Population: ${jsonData.population}`
  })
  .catch(error=>{alert("something went wrong")})
}




  //get info name, height, mass
  // when button is clicked home planet
        //get Api and info for home planet

  //get info name, height, mass
  // when button is clicked home planet
      //get Api and info for home planet
