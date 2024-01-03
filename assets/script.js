// clique sur les flèches de direction 

let flèchesDirectionLeft = document.querySelector(".arrow_left");

flèchesDirectionLeft.addEventListener("click", function(){
	console.log("vous avez cliqué sur la flèche gauche")
});

let flèchesDirectionRight = document.querySelector(".arrow_right");

flèchesDirectionRight.addEventListener("click", function(){
	console.log("vous avez cliqué sur la flèche droite")
});

//carrousel
const slides = [

	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}

]

//points de carrousel


