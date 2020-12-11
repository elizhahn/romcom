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
var btnMakeMyBook = document.querySelector(".create-new-book-button");
var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var formView = document.querySelector(".form-view");
var inputCover = document.querySelector(".user-cover")
var inputTitle = document.querySelector(".user-title");
var inputDescriptor1 = document.querySelector(".user-desc1");
var inputDescriptor2 = document.querySelector(".user-desc2");
var form = document.querySelector("form");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


function leaveHome() {
  homeView.classList.add("hidden");
  btnSaveCover.classList.add("hidden");
  btnRandomCover.classList.add("hidden");
}

function returnHome() {
  homeView.classList.remove("hidden");
  btnSaveCover.classList.remove("hidden");
  btnRandomCover.classList.remove("hidden");
}

window.addEventListener("load", createRandomCover);
btnMakeNewCover.addEventListener("click", showForm);
btnRandomCover.addEventListener("click", createRandomCover);
btnViewSavedCover.addEventListener("click", showSaved);
btnHome.addEventListener("click", showHome);
btnMakeMyBook.addEventListener("click", createNewCover);//Event listener for submitting form
form.addEventListener('submit', handleForm);

//Prevents page reload upon submitting form
function handleForm(event) { event.preventDefault(); }


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
  btnHome.classList.remove("hidden");
}

//When user hits View Saved Covers, saved covers are disiplayed
function showSaved() {
  formView.classList.add("hidden");
  savedView.classList.remove("hidden");
}

//When user hits home, it takes them to the home page
function showHome() {
  savedView.classList.add("hidden");
  formView.classList.add("hidden");
  btnHome.classList.add("hidden");
  returnHome();
}

// When user clicks Make My Book button, new Cover instance is created from
// form input values, is displayed on Home view. Form is hidden. Form
// input values are stored in their respective arrays for future use.
function createNewCover() {
  var createdCover = new Cover(inputCover.value, inputTitle.value, inputDescriptor1.value, inputDescriptor2.value)

  coverImage.src = createdCover.cover;
  title.textContent = createdCover.title;
  descriptor1.textContent = createdCover.tagline1;
  descriptor2.textContent = createdCover.tagline2;
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputDescriptor1.value);
  descriptors.push(inputDescriptor2.value);
  formView.classList.add("hidden");
  btnHome.classList.add("hidden");
  returnHome();
}
