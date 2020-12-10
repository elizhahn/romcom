
var coverImage = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagLine = document.querySelector(".tagline");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");
var btnRandomCover = document.querySelector(".random-cover-button");
var btnMakeNewCover = document.querySelector(".make-new-button");
var btnViewSavedCover = document.querySelector(".view-saved-button");
var btnHome = document.querySelector(".home-button");
var btnSaveCover = document.querySelector(".save-cover-button");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


window.addEventListener('load', createRandomCover);

btnMakeNewCover.addEventListener('click', showCoverForm);

btnRandomCover.addEventListener('click', createRandomCover);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomCover() {
  var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
  coverImage.src = randomCover.cover;
  title.textContent = randomCover.title;
  descriptor1.textContent = randomCover.tagline1;
  descriptor2.textContent = randomCover.tagline2;
}

function showCoverForm() {
  homeView.classList.add("hidden");
  btnSaveCover.classList.add("hidden");
  btnRandomCover.classList.add("hidden");
  formView.classList.remove("hidden");
  btnHome.classList.remove("hidden");
}
