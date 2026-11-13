/* Uppgift 2
Har skapat tre olika variabler med tre olika varianter
let, var och const. alla frukter kan skrivas ut då console.log
placeras inuti blocket men endast console.log(fruit2) kan
skrivas ut efter blocket, detta eftersom variabeln fruit2 är 
av varianten var. De andra variablarna ger felmeddelande
eftersom de inte syns utanför blocket. Ingen av variablerna 
kan skrivas ut innan blocket eftersom de inte är definierade
ännu.  */

console.log("---Uppgift 2---");
// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);

{
  let fruit1 = "Apelsin";
  var fruit2 = "Äpple";
  const fruit3 = "Banan";

  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

//console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);

/* Uppgift 3 
Vid användning av let istället för const, 
så kan funktionen skrivas över.
Med funktionsdeklaration:
function add(num1, num2) {
    return num1 + num2;
}
en funktion retunerar det som ska komma ut ur funktionen
i funktionen add returneras en summa i variabeln add.
*/

// const add = (num1, num2) => num1 + num2;
// console.log(add(2, 6));

/* Uppgift 4
En ternary operator är ett kortare sätt att skriva en if-sats. Den tar in ett villkor
för att därefter utvärdera villkoret med ? och därefter följer ett uttryck för om
villkoret är sant : (annars, else) vad som händer om villkoret är falskt. 
Vad skillnaden mellan att använda två (==) och tre (===) likhetstecken är.
Två == kontrollerar om något är lika med eller inte lika med (!=). 
Det sker en implicit typkonverter om ex. "2" jämförs med 2. 
Tre === gör en strikt jämförelse mellan värden och typ. "2" är en sträng och 2
är en siffra. Alltså inte lika, det blir falskt. 
För att kontrollera att parametrarna inte är null så gör jag en strikt jämförelse 
och kontrollerar att det inte !== är null. 
*/
console.log("---Uppgift 4 & 5---");
const add = (num1, num2) => {
  //kontrollerar parametrar mot andra värden.
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);

  console.log(num1 ? "truthy" : "falsy");

  //Testar vad varje villkor i if-satsen skulle ge enskilt.
  // console.log(num1 !== null);
  // console.log(num2 !== null);
  // console.log(num1 !== undefined);
  // console.log(num2 !== undefined);
  // console.log(num1 !== NaN);
  // console.log(num2 !== NaN);

  //för att kontrollera vilka typer som skickas in och att villkoren stämmer
  // console.log(typeof num1);
  // console.log(typeof num2);

  if (
    num1 !== null &&
    num2 !== null &&
    num1 !== undefined &&
    num2 !== undefined &&
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    !Number.isNaN(num1) &&
    !Number.isNaN(num2)
    // num1 !== NaN &&  //detta gav fel returvärde
    // num2 !== NaN
  ) {
    return num1 + num2;
  } else {
    return "Felaktigt input, villkoren uppfylls ej";
  }
};

/* Uppgift 5 
Parametrar är namn på inskickade värden i funktionen. Det sätts när funktionen skapas.
Argument är de värden som skickas in inom parenteserna när funktionen anropas.
Variabel är containers/"behållare" för data, kan vara nummer, strängar, m.m.*/
const num1 = 0;
let arg1;
let sum = false;

/* 
Parametrarna får de värden som skickas in som argument vid anropet. Dvs. false och 1 vid test1. 
Vid jämförelser:
output true eftersom den jämför num1 == 0, där false typkonvertats till värdet 0
output false, eftersom det är en strikt jämförelse, 1 är en siffra och jämförs mot en sträng.
output false, eftersom 1 inte är lika med 0. 
output false vid num1 == NaN, eftersom jämförelse med NaN alltid ger false, till och med NaN == NaN. 
output falsy då num1 är false. 
Villkorsoperatorn:
output (returvärdet) blev först 1 eftersom false typkonverterades till värde 0 och gick därför igenom
villkoren och gav true,(för att num1 !== NaN alltid ger true) ändrade kod till 
typeof num1==="number" istället och !Number.isNaN(num1). Output blev då "Felaktigt input..."*/
console.log("--Test 1--");
console.log(add(sum, 1));

/*
Returvärdet "Felaktig input.." Eftersom "0" är en sträng och inte en siffra
Fick innan typeof.. output 03*/
console.log("--Test 2--");
console.log(add("0", 3));

/*Returvärde "Felaktig input..". num2 är en sträng och inte en siffra.   
Innan typeof blev output: 3num1 */
console.log("--Test 3--");
console.log(add(3, "num1"));

/* Returvärde -5, två siffror som argument och samtliga villkor blir true. 
funktionen räknar ut -5 + 0 = -5*/
console.log("--Test 4--");
console.log(add(-5, num1));

/* Returvärde "Felaktigt output... då arg1 är undefined*/
console.log("--Test 5--");
console.log(add(arg1, 7));

/*Anrop utan argument dvs. num1 och num2 är undefined.
Returvärdet blir därför "Felaktigt input.." */
console.log("--Test 6--");
console.log(add());

console.log("--Utskrift varibler num1 och sum--");
console.log(num1);
console.log(sum);
/* Det sista output för num1 är 0 eftersom det är en variabel utanför funktionen. 
Den ändras inte då den skickas in som argument i funkionen. */
