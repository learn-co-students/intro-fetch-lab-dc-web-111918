// Write your swapi code in this file!
document.addEventListener('DOMContentLoaded', main)
console.log('connected')

function main(){
	getOpeningCrawl();
	getPlanetForm();
	getDroids();
	
}

function getOpeningCrawl(){
	let openingCrawl = document.getElementById('crawlBtn');

	openingCrawl.addEventListener('click', fetchOpeningCrawl);
}

function fetchOpeningCrawl(){
	let fetchOpening = document.getElementById('crawlDiv');

	fetch('https://swapi.co/api/films/1/')
  	.then(res => res.json())
  	.then(crawl => fetchOpening.innerHTML = crawl.opening_crawl);
 }

 function getPlanetForm(){
 	let planetForm = document.getElementById('planetForm');
 	let planetData = document.getElementById('planetData');

 	planetForm.addEventListener('submit', (e) => {
 		e.preventDefault();

 		let planetInput = document.getElementById('planetInput').value;
 		if (planetInput <= 0 || planetInput > 60) {
 			alert('Enter number between 1-60')
 		}

 		fetch(`https://swapi.co/api/planets/${planetInput}`)
		  	.then(res => res.json())
		  	.then(data => {
		  		let planetName = document.createElement('p');
		  		planetName.innerText = data.name;
		  		let planetClimate = document.createElement('p');
		  		planetClimate.innerText = data.climate

		  		planetData.appendChild(planetName);
		  		planetData.appendChild(planetClimate);
		  	})
	 	});
 }

 function getDroids(){
 	let droids2 = document.getElementById('droid-2');
 	let getHome2btn = document.getElementById('droid-2-btn');

 	getHome2btn.addEventListener('click', getHomePlanet);

 	fetch('https://swapi.co/api/people/2/')
 	.then (res => res.json())
 	.then (data => {
 		let droid2Name = document.createElement('span');
 		droid2Name.innerText = data.name;
 		let droid2Height = document.createElement('span');
 		droid2Height.innerText = data.height;
 		let droid2Mass = document.createElement('span');
 		droid2Mass.innerText = data.mass;

 		droids2.appendChild(droid2Name);
 		droids2.appendChild(droid2Height);
 		droids2.appendChild(droid2Mass);
 	})

 	let droids3 = document.getElementById('droid-3');
 	let getHome3btn = document.getElementById('droid-3-btn');

 	getHome3btn.addEventListener('click', getHomePlanet);

 	fetch('https://swapi.co/api/people/3/')
 	.then(res => res.json())
 	.then(data => {
 		let droid3Name = document.createElement('span');
 		droid3Name.innerText = data.name;
 		let droid3Height = document.createElement('span');
 		droid3Height.innerText = data.height;
 		let droid3Mass = document.createElement('span');
 		droid3Mass.innerText = data.mass;

 		droids3.appendChild(droid3Name);
 		droids3.appendChild(droid3Height);
 		droids3.appendChild(droid3Mass);

 	})
 }

 function getHomePlanet(e){
 	console.log(e)
 	let droidId = e.target.dataset['droidNumber']; // either 2 or 3
 	fetch(`https://swapi.co/api/people/${droidId}/`)
	 	.then(res => res.json())
	 	.then(data => {
	 		fetch(data.homeworld)
	 			.then(res => res.json())
	 			.then(data => {
	 				console.log('homeworld data: ', data)
	 			})
	 	});
 	
 }
