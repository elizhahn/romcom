//Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagLine = document.querySelector(".tagline");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");



var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomCover(){
  var coverIndex = getRandomIndex(covers);
  var titleIndex = getRandomIndex(titles);
  coverImage.src = covers[coverIndex];
  title.textContent = titles[titleIndex];
  var randomDescrip1 = getRandomIndex(descriptors);
  var randomDescrip2 = getRandomIndex(descriptors);
  descriptor1.innerText = descriptors[randomDescrip1];
  descriptor2.innerText = descriptors[randomDescrip2];
}

window.addEventListener('load', createRandomCover());
