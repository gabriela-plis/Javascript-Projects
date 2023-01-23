const personalData2 = {
    name : "Maciej",
    forname : "Plis",
    age : 23,
    // zapis skórcony od introduceMyself: function () {}
    introduceMyself() {
       return `I'm ${this.name} ${this.forname} and I'm ${this.age} years old`;
    }
}

const personalData = {
    name : "Gabriela",
    forname : "Plis",
    age : 23,
    // zapis skórcony od introduceMyself: function () {}
    introduceMyself() {
       return `I'm ${this.name} ${this.forname} and I'm ${this.age} years old`;
    }
}





//--DODANIE ZMIENNEJ/METODY DO OBIEKTU

//zmiennej

personalData.hobby = "embroidery";

console.log(personalData.hobby)

//funkcji, przy czym musi mieć zapis obiekt.nazwaFunkcji = function() {}

personalData.showMyHobby = function() {
    return `My hobby is ${this.hobby}`;
}

console.log(personalData.showMyHobby()); 

//usunięcie z obiektu - też można zmienne

delete personalData.showMyHobby;
console.log(personalData); 

// czy użycie funkcji poniżej w środku z log.console byłoby lepsze? wyświetli i zwróci undefinied
// personalData.introduceMyself();

//tu musze dać tekst w return - inaczej pokaże tylko undefinied
// console.log(personalData.introduceMyself());

console.log(personalData.introduceMyself());




//==PRZYPISANIE DO ZMIENNEJ
let myFornameIs = personalData.forname;
console.log(myFornameIs);




//--DESTRUKTURYZACJA
//przepisanie z obiektu na zmienne - zmienne muszą być w nawiasach klamerkowych
// const {name, forname, age} = personalData;

//te same nazwy powstałych zmiennych co klucze
const {name, forname, age} = personalData;
console.log(forname);

// inne nazwy powstałych zmiennych
const {
    name : yourName,
    forname : yourForname,
    age : yourAge
} = personalData;
console.log(yourAge);

//opcja jw z tym, że ustawiam wartość domyślną - jesli nie zostanie wypełniona wartość na podstawie obiektu to ona się wyświetli
const {
    name : yourName2 = "none",
    forname : yourForname2 = "none",
    age : yourAge2 = "none"
} = personalData;

//destrukturyzacja pozwala np na przekazanie do funkcji nie całego obiektu tylko część jego właściwości
function showUser ( {name, forname} ) {
    console.log(`It's ` + name + forname);
}

showUser(personalData);

//takie przekazywanie do funkcji przydaje się, gdy jest wiele argumentów, gdyż w obiekcie kolejność kluczy nie ma znaczenia

function print({name3, speed, color, food}) {
    console.log(`
        Nazwa : ${name3}
        Szybkość : ${speed}
        Kolor : ${color}
        Ulubione jedzenie : ${food}
    `);
}

//skróconym zapisem stworzony obiekt i przekazany do funkcji
print({
    name3 : "Szamson",
    speed : 10000,
    food : "Mięso",
    color : "brown",
})

//lub jeżeli mam już wcześniej zmienne
//mogę stworzyć obiekt z takimi kluczami:

const name3 = "Szamson";
const speed = 10000;
const color = "brown";
const food = "mięso";
const type = "dog";

//kolejność nie ma znaczenia
print({name3, food, speed, type, color});
//! gdy przy tworzeniu funkcji dodam domyślne wartości nie bede musiała podawać wszystkich arg.


//przepisanie z tablicy na zmienne - zmienne obojętna nazwa i nawiasy kwadratowe
const catNames = ["Percia", "Persefona", "Sjergiej", "Kieciej"];
const [name1, name2] = catNames;
console.log(name1);

//puste miejsce - pominięcie wartości
const [nameA, , nameC] = catNames;
console.log(nameA);
console.log(nameC);
//jw mogę ustawić wartość domyślną
//gdy mam tablicę [a,b] to mogę zamienić kolejność przez [a,b] = [b,a]




//--DESTRUKTYZACJA I REST

//dzięki połaczeniu destruktyzacji i operatora rest (ten sam syntax jak dla spread) możemy pominąć jakąś właściwość/właściwości. Operator rest musi być na końcu
const {age : testAge, name : testName, ...other} = personalData;
console.log(testAge);
console.log(testName)
console.log(other);




//--ITERACJA

//pętla for in używana w obiektach często, klucz - nazwa zmiennej w obiekcie. Dostanie się do wartości przez nazwaobiektu[key]
for (let key in personalData) {
    if (personalData.hasOwnProperty(key)) {
        console.log("Klucz: ", key);
        console.log("Wartość: ", personalData[key]);
    }
}

//for of i wtedy stosuję metodę obiektu Object o nazwie keys. Zwraca tablicę stringów z klucz-wartość. 
for (let key1 of Object.keys(personalData)) {
    console.log("Klucz: ", key1);
    console.log("Wartość: ", personalData[key1]);
}

//for of i wtedy stosuję metodę obiektu Object o nazwie values. Zwraca tablicę stringów tylko wartości - bez kluczy. Zwróć uwagę jak metoda się wyświetliła.
for (let key2 of Object.values(personalData)) {
    console.log("Value: ", key2);
    // console.log("Wartość: ", personalData[key2]);
}




//--KOPIOWANIE OBIEKTÓW

//Obiekt, tablica wskazują na coś więc nie mogę zrobić perfidnej kopii tzw płaskiej a=b

//używając ... syntax
let personalDataCopy = {...personalData};
console.log(personalDataCopy);

//używając Object.assing(cel, ..źródła)

personalDataCopy = Object.assign( {} , personalData );
console.log(personalDataCopy);

//możemy dać dwa obiekty do jednej zmiennej  przy okazji - przy czym jeśli powielają się nazwy(klucze) właściwości będą one tak jak ostatnie źródło
personalDataCopy = Object.assign( {}, personalData, personalData2);
console.log(personalDataCopy);

//! jeśli w obiekcie coś wskazuje na inny obiekt to przy kopiowaniu zostanie skopiowana tylko referencja do tego obiektu wewnątrz!! Wtedy kopiowanie głęboke np korzystanie z obiektu JSON
