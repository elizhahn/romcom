
# title: RomCom 

A [Front-End Project](https://github.com/turingschool-examples/romcom/) by [Elizabeth Hahn](https://github.com/elizhahn) and [Jessica Justice](https://github.com/m1073496)
* Project Manager: [Kayla Wood](https://github.com/kaylaewood)


1. [Overview](#overview)
2. [Learning Goals](#learning-goals)
3. [Technologies](#technologies)
4. [Features](#features)
5. [Challenges](#challenges)
6. [Wins](#wins)
7. [Future Additions](#future-additions)


## Overview

This is a Turing School of Software and Design Module 1 project. The project consists of adding dynamic behaviors to a static website. We were tasked with creating the following dynamic behaviors:

* Dispalying random romance novel covers on the landing page
* Adding functionality to buttons in order to change page views and capture user input values
* Displaying user input as a new romance novel cover
* Added button functionality to save and display saved romance novel covers
* Added user ability to remove saved covers


## Learning Goals

* Write clean, DRY JavaScript to store our data
* Use a provided class by creating object instances using the `new` keyword
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM


## Technologies

* HTML
* CSS
* Javascript
* Git
* GitHub
* [GitHub Pages Site](https://elizhahn.github.io/romcom/)

---
## Features

+ [Desktop Layout](#desktop-layout)
+ [Create Random Cover](#create-random-cover)
+ [Make Your Own Cover](#create-your-own-cover)
+ [Save Cover](#save-cover)
+ [Delete Cover](#delete-cover)


## DeskTop Layout

When user visits the page, a random romance cover should be displayed in the window on the landing page. When the user refreshes the page, a new romance cover should be generated and displayed.

![](https://media.giphy.com/media/PYMrHBhtQPjTWZc4Ro/giphy.gif)


## Create Random Cover

To generate a new random cover, the user can click the button "Show New Random Cover" button and a new romance cover will be displayed.

![](https://media.giphy.com/media/rprUfuQuuLDMGqlvNp/giphy.gif)


## Make Your Own Cover
To create their own cover, the user can select the "Make Your Own Cover" button and enter values in each input field. To see their new cover, the user can then click "Make My Book". This button should take the user to the main view and display their new cover.

![](https://media.giphy.com/media/cNBrxuiVZxnlfBtFkV/giphy.gif)


## Save Cover
To save their created cover, the user can select the "Save Cover" button. This button should save unique covers, no matter how many times this button is clicked. To view all saved covers, the user can select the "View Saved Covers" button.

![](https://media.giphy.com/media/sC4zvGyLEPvAKHlWkh/giphy.gif)


## Delete Cover

To delete a cover, all a user needs to do is be in the saved covers section after clicking "View Saved Covers", and then double click on the cover they wish to delete. The cover should disappear from view.

![](https://media.giphy.com/media/1HWz2qho2fsvVk4I72/giphy.gif)


---
## Challenges

* Figuring out how to manipulate CSS styling with JavaScript.
* Figuring out how to target a DOM event upon double-click, and manipulating associated data.
* GitHub.


---
## Wins

* Collaborating well on our first Paired Project, and helping each other understand new and complex concepts.
* Successfully applying correct CSS elements to create a beautiful display.
* Learning how to apply new concepts with every iteration.
* Practice debugging.

---
## Future Additions

* Implement data validation and error handling into form (disable the Make My Book button until all fields are filled, provide error messages if data entered is incorrect).
* When a user single-clicks a saved cover, create a Modal to view it larger
* Allow users to drag-and-drop saved covers into whatever order they want them to appear
