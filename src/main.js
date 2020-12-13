//Book Cover HTML elements
var coverImage = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
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
//Saved book covers/HTML elements
var viewSavedCovers = document.querySelector(".saved-covers-section");
//User's saved covers
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
//Holds cover instance
var currentCover;


// Event listeners
window.addEventListener("load", createRandomCover);
btnMakeNewCover.addEventListener("click", showForm);
btnRandomCover.addEventListener("click", createRandomCover);
btnViewSavedCover.addEventListener("click", showSaved);
btnHome.addEventListener("click", returnHome);
btnMakeMyBook.addEventListener("click", createNewCover);
btnSaveCover.addEventListener("click", saveCover);
viewSavedCovers.addEventListener("dblclick", deleteSavedCovers);


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
  currentCover = randomCover;
  displayCover(randomCover);
  returnHome();
};

//Displays Cover instance on homepage
function displayCover(cover) {
  coverImage.src = cover.cover;
  title.textContent = cover.title;
  descriptor1.textContent = cover.tagline1;
  descriptor2.textContent = cover.tagline2;
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
  viewSavedCovers.innerHTML = "";
    for (var i = 0; i < savedCovers.length; i++) {
    viewSavedCovers.innerHTML += `<section class="main-cover mini-cover">
      <img class="cover-image" src="${savedCovers[i].cover}" id="${savedCovers[i].id}">
      <h2 class="cover-title" id="${savedCovers[i].id}">${savedCovers[i].title}</h2>
      <h3 class="tagline" id="${savedCovers[i].id}">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" id="${savedCovers[i].id}" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </section>`;
    };
};


//Event handler for btnMakeMyBook
function createNewCover(event) {
  // Create new Cover instance using input values from form, display on home view
  var createdCover = new Cover(inputCover.value, inputTitle.value, inputDescriptor1.value, inputDescriptor2.value);
  displayCover(createdCover);
  returnHome();
  //Update arrays to include input values from form
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputDescriptor1.value);
  descriptors.push(inputDescriptor2.value);
  //Save created Cover to hidden array
  currentCover = createdCover;
  event.preventDefault();
};

//Checks user's cover for duplicates before adding to Saved Covers array
function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  };
};

//Event handler for deleting cover on dblclicking
function deleteSavedCovers(e) {
  var elementId = e.target.getAttribute("id");
    for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id == elementId) {
        savedCovers.splice(i, 1);
      };
    };
  showSaved();
};
