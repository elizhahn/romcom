
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
var btnMakeMyBook = document.querySelector(".create-new-book-button");//3rd iteration
var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var formView = document.querySelector(".form-view");
var inputCover = document.querySelector(".user-cover");///vars below will be on Jessica's branch
var inputTitle = document.querySelector(".user-title");
var inputDescriptor1 = document.querySelector(".user-desc1");
var inputDescriptor2 = document.querySelector(".user-desc2");
var form = document.querySelector("form");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

window.addEventListener("load", createRandomCover);
btnMakeNewCover.addEventListener("click", showForm);
btnRandomCover.addEventListener("click", createRandomCover);
btnViewSavedCover.addEventListener("click", showSaved);
btnHome.addEventListener("click", showHome);
form.addEventListener('submit', handleForm);

function handleForm(event) { event.preventDefault(); }

function leaveHome() {
  homeView.classList.add("hidden");
  btnSaveCover.classList.add("hidden");
  btnRandomCover.classList.add("hidden");
  btnHome.classList.remove("hidden");
}

function returnHome() {
  homeView.classList.remove("hidden");
  btnSaveCover.classList.remove("hidden");
  btnRandomCover.classList.remove("hidden");
  btnHome.classList.add("hidden");
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//When user hits show new random button, a new cover is displayed
function createRandomCover() {
  var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
  coverImage.src = randomCover.cover;
  title.textContent = randomCover.title;
  descriptor1.textContent = randomCover.tagline1;
  descriptor2.textContent = randomCover.tagline2;
}
//When user hits Make Your Own Cover, the view changes to the form
function showForm() {
  leaveHome();
  formView.classList.remove("hidden");
}

//When user hits View Saved Covers, saved covers are disiplayed
function showSaved() {
  formView.classList.add("hidden");
  savedView.classList.remove("hidden");
  leaveHome();
}

//when user hits home, it takes them to the home page
function showHome() {
  savedView.classList.add("hidden");
  formView.classList.add("hidden");
  returnHome();
}
