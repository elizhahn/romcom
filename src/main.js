
const mainCover = document.querySelector(".main-cover")
var coverImage = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
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
var inputCover = document.querySelector("#cover")
var inputTitle = document.querySelector("#title");
var inputDescriptor1 = document.querySelector("#descriptor1");
var inputDescriptor2 = document.querySelector("#descriptor2");
var viewSavedCovers = document.querySelector(".saved-covers-section");

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Event listeners
btnMakeNewCover.addEventListener("click", showForm);
btnRandomCover.addEventListener("click", createRandomCover);
btnViewSavedCover.addEventListener("click", showSaved);
btnHome.addEventListener("click", returnHome);
btnMakeMyBook.addEventListener("click", createNewCover);
btnSaveCover.addEventListener("click", saveCover);
viewSavedCovers.addEventListener("dblclick", deleteSavedCovers);
window.addEventListener("load", createRandomCover);


//Hides home view and associated buttons, displays home button
function leaveHome() {
  homeView.classList.add("hidden");
  btnSaveCover.classList.add("hidden");
  btnRandomCover.classList.add("hidden");
  btnHome.classList.remove("hidden");
};

//Event handler for btnHome
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

//Displays Cover instance on homepage
function displayCover(cover) {
mainCover.innerHTML = `
  <img class="cover-image" src="${cover.cover}">
  <h2 class="cover-title">${cover.title}</h2>
  <h3 class="tagline">A tale of <span class="tagline-1">${cover.tagline1}</span> and <span class="tagline-2">${cover.tagline2}</span></h3>
  <img class="price-tag" src="./assets/price.png">
  <img class="overlay" src="./assets/overlay.png">`
};

//Refactor createRandomCover
function createRandomCover() {
const cover = covers[getRandomIndex(covers)];
const title = titles[getRandomIndex(titles)];
const tagline1 = descriptors[getRandomIndex(descriptors)];
const tagline2 = descriptors[getRandomIndex(descriptors)];
let randomCover = new Cover(cover, title, tagline1, tagline2);
currentCover = randomCover;
displayCover(randomCover);
returnHome();
}

//Event handler for btnMakeNewCover
function showForm() {
  leaveHome();
  formView.classList.remove("hidden");
  savedView.classList.add("hidden");
  btnHome.classList.remove("hidden");
};

//Event handler for btnMakeMyBook
function createNewCover(event) {
  var createdCover = new Cover(inputCover.value, inputTitle.value, inputDescriptor1.value, inputDescriptor2.value);
  displayCover(createdCover);
  returnHome();
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputDescriptor1.value);
  descriptors.push(inputDescriptor2.value);
  currentCover = createdCover;
  event.preventDefault();
};

function showSaved() {
  savedView.classList.remove("hidden");
  formView.classList.add("hidden");
  leaveHome();
  let miniCovers = "";
  savedCovers.forEach(cover => {
    console.log(savedCovers.title)
    miniCovers += `
    <section class="main-cover mini-cover">
    <img class="cover-image" src="${cover.cover}" id="${cover.id}">
    <h2 class="cover-title" id="${cover.id}">${cover.title}</h2>
    <h3 class="tagline" id="${cover.id}">A tale of <span class="tagline-1">${cover.tagline1}</span> and <span class="tagline-2">${cover.tagline2}</span></h3>
    <img class="price-tag" id="${cover.id}" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>`
  });
  viewSavedCovers.innerHTML = miniCovers
}


//Checks user's cover for duplicates before adding to Saved Covers array
function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  };
};

// Event handler for deleting cover on dblclicking
function deleteSavedCovers(e) {
  var elementId = e.target.getAttribute("id");
    for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id == elementId) {
        savedCovers.splice(i, 1);
      };
    };
  showSaved();
};

//Refactor deleteSavedCovers(e)
// function deleteSavedCovers(e) {
//   const elementId = e.target.getAttribute("id");
//   savedCovers.forEach(cover => {
//     if(savedCovers.id === elementId) {
//       const coverIndex = savedCovers.indexOf(savedCovers.id)
//       savedCovers.splice(coverIndex, 1);
//     }
//   });
//  showSaved();
// };
