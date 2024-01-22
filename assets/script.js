const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const banner = document.getElementById("banner");
let leftArrow = document.querySelector(".arrow_left");
let rightArrow = document.querySelector(".arrow_right");
const tagLine = document.querySelector("#banner p");
const image = document.querySelector(".banner-img");
const indexParent = document.querySelector("#banner .dots ");
let index = 0;

leftArrow.addEventListener("click", function () {
  index--;
  if (index === -1) {
    index = slides.length - 1;
  }
  displaySlide(index);
});

rightArrow.addEventListener("click", function () {
  index = index + 1;
  console.log(slides[index]);
  if (index === slides.length) {
    index = 0;
  }
  displaySlide(index);
});

function addSpan() {
  for (let i = 0; i < slides.length; i++) {
    document.querySelector(".dots").innerHTML += "<span class='dot'></span>";
  }
  const listdot = document.querySelectorAll(".dot");

  listdot.forEach((element, i) => {
    element.addEventListener("click", () => {
      index = i;
      displaySlide(index);
    });
  });
}

addSpan();

function displaySlide(newIndex) {

  tagLine.innerHTML = slides[newIndex].tagLine;
  image.setAttribute( "src", "./assets/images/slideshow/" + slides[newIndex].image );
  indexParent.children[newIndex].classList.add("dot_selected");

  Array.from(indexParent.children).forEach((element, i) => {
    if (i === newIndex) {
      element.classList.add("dot_selected");
    } else {
      element.classList.remove("dot_selected");
    }
  });

}

displaySlide(0);
