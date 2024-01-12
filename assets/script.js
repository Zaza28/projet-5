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

leftArrow.addEventListener("click", function () {
	console.log(slides);
});



rightArrow.addEventListener ("click", function () {
	console.log(slides);
});



function addSpan() {

	document.querySelector(".dots").innerHTML += "<span class='dot'></span>";
	document.querySelector(".dots").innerHTML += "<span class='dot'></span>";
	document.querySelector(".dots").innerHTML += "<span class='dot'></span>";
	document.querySelector(".dots").innerHTML += "<span class='dot'></span>";

}
addSpan();
document.querySelector(".dot").classList.add("dot_selected");

let Index = 0;

for (let i = 0; i < slides.length; i++) {

	let slide = slides[i];

	if (i <= slides.length[0]) {

		let img = document.querySelector(".banner-img");
		img.setAttribute("src", "./assets/images/slideshow/slide1.jpg");
		i++;


	}
	if (i <= slides.length[1]) {
		let img = document.querySelector(".banner-img");
		img.setAttribute("src", "./assets/images/slideshow/slide2.jpg");
		i++;




	}
	if (i <= slides.length[2]) {
		let img = document.querySelector(".banner-img");
		img.setAttribute("src", "./assets/images/slideshow/slide3.jpg");
		i++;


	}

	if (i === slides.length[3]) {
		let img = document.querySelector(".banner-img");
		img.setAttribute("src", "./assets/images/slideshow/slide4.jpg");

	}
}





































