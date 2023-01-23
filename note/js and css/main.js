//--JAKI STYL MA ELEMENT? GET

const lastBtn = document.querySelector("button:last-child");


//getComputedStyle(element, pseudoelement) pokazuje styl danego elementu zarówno wbudowany jak i z zewnętrznego pliku
//już po przeliczeniu czyli 1rem = 16px (najczęściej)

const styles = getComputedStyle(lastBtn);
console.log(styles);

const width = styles.backgroundColor; // jeśli brak zwróci undefinied
console.log(width); 

const width2 = styles.getPropertyValue("background-color");  // jeśli brak zwróci pusty ciąg
console.log(width2); //wyposzczególnienie tego co nas interesuje na dwa sposoby

console.log(getComputedStyle(lastBtn).backgroundColor); //skrótowo

//Element.style pokazuje styl danego elementu tylko wbudowany!
const bgColor = lastBtn.style.backgroundColor;
console.log(bgColor); 

const bgColor2 = lastBtn.style.getPropertyValue("background-color");
console.log(bgColor2); //puste pole, bo wyświetla tylko to co nadane przez html

lastBtn.style.backgroundColor = "orange"; //nadałam styl przez js

const bgColorAfter = lastBtn.style.backgroundColor;
console.log(bgColorAfter); //widoczny

const bgColorAfter2 = lastBtn.style.getPropertyValue("background-color");
console.log(bgColorAfter2);

//--USTAWIANIE STYLU SET

const firstBtn = document.querySelector("button:first-child");

firstBtn.style.backgroundColor = "rgb(210, 100, 100)"; //zmiana koloru przy użyciu element.style
firstBtn.style.cssText = `background-color: bisque; border: 10px solid black` //dodanie, nadpisanie stylu - wiele właściwości

firstBtn.style.setProperty("background-color", "blue");

firstBtn.setAttribute("style", "background-color: pink; width:150px")

getComputedStyle(firstBtn).setProperty("background-color", "red"); //nie zadziała. getComputedStyle zwraca obiekt, który jest tylko do odczytu!
