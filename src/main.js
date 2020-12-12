//Book Cover HTML elements
var coverImage = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var tagLine = document.querySelector(".tagline");
var descriptor1 = document.querySelector(".tagline-1");
var descriptor2 = document.querySelector(".tagline-2");
//Control buttons HTML elements
var btnRandomCover = document.querySelector(".random-cover-button");
var btnMakeNewCover = document.querySelector(".make-new-button");
var btnViewSavedCover = document.querySelector(".view-saved-button");
var btnHome = document.querySelector(".home-button");
var btnSaveCover = document.querySelector(".save-cover-button");
var btnMakeMyBook = document.querySelector(".create-new-book-button");
//Page views HTML elements
var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var formView = document.querySelector(".form-view");
//Form/inputs HTML elements
var inputCover = document.querySelector(".user-cover")
var inputTitle = document.querySelector(".user-title");
var inputDescriptor1 = document.querySelector(".user-desc1");
var inputDescriptor2 = document.querySelector(".user-desc2");
var form = document.querySelector("form");
//Saved book covers/HTML elements
var viewSavedCovers = document.querySelector(".saved-covers-section");
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Event listeners
window.addEventListener("load", createRandomCover);
btnMakeNewCover.addEventListener("click", showForm);
btnRandomCover.addEventListener("click", createRandomCover);
btnViewSavedCover.addEventListener("click", showSaved);
btnHome.addEventListener("click", returnHome);
btnMakeMyBook.addEventListener("click", createNewCover);
form.addEventListener('submit', handleForm);
btnSaveCover.addEventListener('click', saveCover);

//Prevents page reload upon submitting form
function handleForm(event) {
  event.preventDefault();
};

//Hides home view and associated buttons, displays home button
function leaveHome() {
  homeView.classList.add("hidden");
  btnSaveCover.classList.add("hidden");
  btnRandomCover.classList.add("hidden");
  btnHome.classList.remove("hidden");
};

//Event handler for btnHome
//Displays home view and associated buttons, hides home button
function returnHome() {
  homeView.classList.remove("hidden");
  btnSaveCover.classList.remove("hidden");
  btnRandomCover.classList.remove("hidden");
  btnHome.classList.add("hidden");
  formView.classList.add("hidden");
  savedView.classList.add("hidden");
};

// Retrieves random array index
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

//Event handler for btnRandomCover
function createRandomCover() {
  var coverInstance = covers[getRandomIndex(covers)];
  var titleInstance = titles[getRandomIndex(titles)];
  var descrip1Instance = descriptors[getRandomIndex(descriptors)];
  var descrip2Instance = descriptors[getRandomIndex(descriptors)];
  var randomCover = new Cover(coverInstance, titleInstance, descrip1Instance, descrip2Instance);
  coverImage.src = randomCover.cover;
  title.textContent = randomCover.title;
  descriptor1.textContent = randomCover.tagline1;
  descriptor2.textContent = randomCover.tagline2;
  returnHome();
};

//Event handler for btnMakeNewCover
function showForm() {
  leaveHome();
  formView.classList.remove("hidden");
  savedView.classList.add("hidden");
  btnHome.classList.remove("hidden");
};


//Event handler for btnViewSavedCover
function showSaved() {
  savedView.classList.remove("hidden");
  formView.classList.add("hidden");
  leaveHome();
  viewSavedCovers.classList.add("mini-cover");
  for (var i = 0; i < savedCovers.length; i++) {
  viewSavedCovers.innerHTML = `<img class="cover-image" src="${savedCovers[i].cover}"/>
  <h2 class="cover-title">${savedCovers[i].title}</h2>
  <h3 class="tagline">A Tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png"> `;
  };
};


//Event handler for btnMakeMyBook
function createNewCover() {
  // Create new Cover instance using input values from form, display on home view
  var createdCover = new Cover(inputCover.value, inputTitle.value, inputDescriptor1.value, inputDescriptor2.value);
  coverImage.src = createdCover.cover;
  title.textContent = createdCover.title;
  descriptor1.textContent = createdCover.tagline1;
  descriptor2.textContent = createdCover.tagline2;
  returnHome();
  //Update arrays to include input values from form
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputDescriptor1.value);
  descriptors.push(inputDescriptor2.value);
  //Save created Cover to hidden array
  hiddenCover = createdCover;
};

//Checks user's cover for duplicates before adding to Saved Covers array
var hiddenCover = [];
function saveCover() {
  if (!savedCovers.includes(hiddenCover)){
    savedCovers.push(hiddenCover);
  };
};
