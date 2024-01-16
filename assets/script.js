//carrousel
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const banner = document.getElementById("banner");
let leftArrow = document.querySelector(".arrow_left");
let rightArrow = document.querySelector(".arrow_right");
let index = 0;

leftArrow.addEventListener("click", function () {
	index--;
	if (index === -1) {
		index = 3;
		

	}
	console.log(slides[index]);
	tagLine.innerHTML = slides[index].tagLine;
	image.setAttribute("src", "./assets/images/slideshow/" + slides[index].image);
	indexParent.children[index].classList.add("dot_selected");


});

rightArrow.addEventListener("click", function () {
	index = index + 1;
	console.log(slides[index])
	if (index === 4) {
		index = 0;
	}
	indexParent.children[index].classList.add("dot_selected");
	tagLine.innerHTML = slides[index].tagLine;
	image.setAttribute("src", "./assets/images/slideshow/" + slides[index].image);

});

const dotsSelected = document.querySelectorAll(".dot")
const tagLine = document.querySelector('#banner p');
const image = document.querySelector('.banner-img');
const indexParent = document.querySelector("#banner .dots ")

function addSpan() {
	document.querySelector(".dots").innerHTML += "<span class='dot'></span>";
	document.querySelector(".dots").innerHTML += "<span class='dot'></span>";
	document.querySelector(".dots").innerHTML += "<span class='dot'></span>";
	document.querySelector(".dots").innerHTML += "<span class='dot'></span>";

	const listdot = document.querySelectorAll(".dot")
	console.log(listdot);

	listdot.forEach((element, i) => {

		element.addEventListener("click", () => { 
			index = i;
			element.classList.add("dot_selected");
			image.setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
			tagLine.innerHTML = slides[i].tagLine;

		});
		// element.classList.remove("dot_selected");




	});
}

addSpan();


