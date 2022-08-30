/* Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
*/

//Opprett et JS-dokument og skriv en testbeskjed til «console».

console.log("Kobling med javascript vellykket!")

//Endre navnet i overskriften til noe annet fra JS. 
//Denne kjører altså med en gang nettsiden laster og du vil aldri se det første navnet.

document.getElementById('overskrift').innerHTML = "Halvard den Gigantiske!"

const btn = document.getElementById('btnChangeColor');
var colorArray = ["yellow", "brown", "blue", "red", "black"]

btnChangeColor.addEventListener('click', function onClick(event) {
    document.getElementById('overskrift').innerHTML = "Jada, du trykket på knappen og endret bakgrunnsfarge"
    //var randomColor = Math.floor(Math.random()*16777215).toString(16);
    //document.body.style.backgroundColor = yellow;
    var color = colorArray[Math.floor(Math.random()*colorArray.length)];
    console.log(color);
    document.body.style.backgroundColor = color;
});