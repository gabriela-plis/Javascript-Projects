//--UŻYCIE TEMPLATE

const cowContainer = document.querySelector(".cow_container");
const addBtn = document.querySelector(".add_button");
const textToHide = document.querySelector(".default_content");
const imageToHide = document.querySelector(".farmer_image");

let cowNumber = 0;

addBtn.addEventListener ("click", () => {

    const cow = createCow();

    cowContainer.append(cow);

    document.querySelectorAll(".cow")[document.querySelectorAll(".cow").length-1].scrollIntoView();
    

    textToHide.style.display = "none";
    imageToHide.style.display = "none";

    cowContainer.style.flexFlow = "column wrap";
    cowContainer.style.justifyContent = "space-evenly";
})

cowContainer.addEventListener("click", e => {
    if (e.target.classList.contains("delete_button")) {
        e.target.closest(".cow").remove();
    }

    const cow = document.querySelector(".cow");
    if ( !cowContainer.contains(cow)) {
        textToHide.style.display = "block";
        imageToHide.style.display = "block";

        cowContainer.style.flexFlow = "row wrap";
        cowContainer.style.justifyContent = "center";
    }
})

const createCow = () => {
    if ("content" in document.createElement("template")) {

        cowNumber++;

        const cowTemplate = document.querySelector(".cow_template");
        const cow = cowTemplate.content.cloneNode(true);

        const numberText = document.createTextNode(`${cowNumber}`);
        const placeForText = cow.querySelector(".cow_number");
        placeForText.append(numberText);

        return cow;
    }
}




//--UŻYCIE CREATE ELEMENT 

// const cowContainer = document.querySelector(".cow_container");
// const addBtn = document.querySelector(".add_button");

// let cowNumber = 0;

// addBtn.addEventListener ("click", () => {

//     const cow = createCow();

//     cowContainer.append(cow);
// })

// cowContainer.addEventListener("click", e => {
//     if (e.target.classList.contains("delete_button")) {
//         e.target.closest(".cow").remove();
//     }
// })

// const createDeleteBtn = () => {
//     const deleteBtn = document.createElement("button");
//     deleteBtn.classList.add("delete_button");
//     deleteBtn.innerText = `Sell a cow!`;

//     deleteBtn.addEventListener("click", () => {
//         deleteBtn.closest(".cow").remove();
//     })

//     return deleteBtn;
// }

// const createCow = () => {
//     const cow = document.createElement("div");
//     cow.classList.add("cow");
//     cow.innerHTML = `I am <img class="cow_image" src="cow.png" alt="muu!" width="50" height="50"> number ${cowNumber} </div>`

//     const deleteBtn = createDeleteBtn();
    
//     cow.append(deleteBtn);

//     return cow;
// }