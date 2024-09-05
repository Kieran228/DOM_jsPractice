//! DOM SELECTION SECTION
//? Four main types of selection elements from HTML

//* 1. getElementByID
let listItemThree = document.getElementById("thirdListItem")

//* 2. getElementsByClassName
let headerColumns = document.getElementsByClassName("col-6")
console.log(headerColumns)

//? Can call single indexes of that HTML COLLECTION
console.log(headerColumns[1])

//* 3. querySelector/querySelectorAll
//? Both of these dom selections do the same as above but uses CSS styling selection.
let listItemOne = document.querySelector(".aboutMe li:first-child")

let allListItems = document.querySelectorAll(".aboutMe li")
console.log(allListItems)

let description = document.querySelector(".textSide p:first-child");


//* innerHTML is a DOM method to change text.
description.innerHTML = "Bob Ross was a calm and amazing painter, that tragically died to smoking."

//* .style gives you the option of changing the elements css properties from Javascript
//! https://www.we3schools.com/cssref/index.php
//? Reference to each javascript styling syntax
description.fontSize = "25px"

//! Adding Properties Values to an array of nodes
//? Make sure when you're calling a method for DOM element to ONLY affect one item at a time.
let allPTags = document.querySelectorAll(".textSide p")

//? TARGET AN INDEX OF THAT ARRAY LIST OF NODES TO CHANGE THE PROPERTIES
allPTags[1].style.fontSize = "60px"

function changeParagraphColor() {
    for (let i = 0; i < allPTags.length; i++) {
        const element = allPTags[i]

        allPTags[i].style.color = "tomato"
    }
}

changeParagraphColor();
//? EventListeners are waiting for a type of event to fire off ("Click", "Hover", "keydown" etc.) and if the event is clicked a function will run

let imageElement = document.querySelector(".imageSide img");
let pFirstColumns = document.querySelectorAll(".firstCol p")

function recolorParagraphs() {
    for (let i = 0; i < pFirstColumns.length; i++) {
        pFirstColumns[i].style.color = "yellow"
    }
}

imageElement.addEventListener("click", recolorParagraphs)


//* Getting text from an input box
let firstName = document.getElementById("fName")
let signUpbutton = document.getElementById("completeSignUp");

fNameInfo = ""

// console.log(firstName)

//? This event listener is consisently tracking input changes
// firstName.addEventListener("input", () => {
//     fNameInfo = firstName.value
//     console.log(fNameInfo)
// })



// This eventListener will run if a button is pressed
signUpbutton.addEventListener("click", () => {
    if (firstName.value == false) {
        confirm("Can't Submit an Empty Value")
    } else {
        fNameInfo = firstName.value;
        console.log(fNameInfo)
    }
})

//! CREATING ELEMENTS AND REMOVING

//? Creating Elements
//todo this creates a <p></p> element in the new container
let paragraphFirstBox = document.createElement("p");
//todo this changes the text value of the newly created p element
paragraphFirstBox.innerHTML = "Hello World!"
console.log(paragraphFirstBox);
//? creates a new div in the new container
let divSecondBox = document.createElement("div");
console.log(divSecondBox);

//? Sending these created elements to the index.html page
let divFirstBox = document.querySelector(".firstBox");
console.log(divFirstBox);

//* Append
divFirstBox.append(paragraphFirstBox);

//? Adding another column to a row class
let creationRow = document.querySelector(".creationOfElements .row");
console.log(creationRow);

creationRow.append(divSecondBox);

divSecondBox.classList.add("col-4")
divFirstBox.classList.remove("d-none")

