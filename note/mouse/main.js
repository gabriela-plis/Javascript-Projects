const board = document.querySelector(".board");
const cursor = document.querySelector(".cross");
console.log(getComputedStyle(cursor).display)
const body = document.querySelector("body");

board.addEventListener("mousemove", e => {
    
    cursor.style.left = `${e.offsetX}px`;
    cursor.style.top = `${e.offsetY}px`;

});

board.addEventListener("mouseover", () => {
    cursor.style.display = "flex";
});

board.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
// board.addEventListener ("click", e => {
//     console.log (`BOARD`);
// })
// cursor.addEventListener ("click", e => {
//     console.log (`CURSOR`);
// })
// body.addEventListener ("click", e => {
//     console.log (`BODY`);
// })