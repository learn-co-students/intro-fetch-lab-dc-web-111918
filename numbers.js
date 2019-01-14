// Write your numbers code in this file!
document.addEventListener('DOMContentLoaded', main)
console.log('connected')

function main(){
	factsAbout();
	pickANumber();
	studyHistory();
	allNumber();
}

function factsAbout(){
	let factBtn = document.getElementById('number-one');

	factBtn.addEventListener('click', fetchFacts);
}

function fetchFacts(){
	let factsFetch = document.getElementById('one-facts');
	// let num = Math.floor(Math.random() * 42);

	fetch(`http://numbersapi.com/1/trivia/`)
		.then(res => res.text())
		.then(trivia => {
			console.log(trivia)
			factsFetch.innerHTML = trivia;
		});
}

function pickANumber(){
	let numInput = document.getElementById('pick-a-number');
	numInput.addEventListener('change', numberChanged);
}

function numberChanged(){
	let num = document.getElementById('pick-a-number').value;
	let randomFacts = document.getElementById('random-math-fact');
	if (isNaN(num) || num < 0 || num > 42){
		 randomFacts.innerHTML = 'Enter a valid number between 0 - 42'
	} else {
		fetch(`http://numbersapi.com/${num}/trivia/`)
		.then(res => res.text())
		.then(data => randomFacts.innerHTML = data);	
	}
}

function studyHistory(){
	let currentYear = 2019;
	setInterval(function(){fetchHistory(currentYear--)}, 5000);
}

function fetchHistory(currentYear){
	let historyFacts = document.getElementById('year-history');

	fetch(`http://numbersapi.com/${currentYear}/year`)
	.then(res => res.text())
	.then(yearFacts => historyFacts.innerHTML = yearFacts);
}

function allNumber(){
	let allNumBtn = document.getElementById('all-numbers-button');
	allNumBtn.addEventListener('click', allNumberFacts);
}

function allNumberFacts(){
	let allFacts = document.getElementById('all-the-numbers')
	for (let i = 0; i < 100; i++){
		let num = Math.floor(Math.random() * 200);

		fetch(`http://numbersapi.com/${num}/trivia/`)
			.then(res => res.text())
			.then(data => {
				let factsAll = document.createElement('p')
				factsAll.innerText =  data

				allFacts.appendChild(factsAll);
		})
	}


}






