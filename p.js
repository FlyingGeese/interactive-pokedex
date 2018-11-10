// let pokedex = document.getElementById('pokedex');
let pwrbtn = document.getElementById('pwrbtn');
// const ALL_POKEMON = [];

pwrbtn.addEventListener('click', turnOn);
pwrbtn.addEventListener('click', depressBtn);
// // get diff coords by determining client with and perform Math
// // change background depending on which element
// // typewriter text in screen
// // flips to stat bars animation
let powerButton = false;


function turnOn() {
    let screen = document.querySelector('div#top-screen > div:first-child');
    screen.style.backgroundImage = 'url(\'noise.gif\')';
    powerButton = true;
}

function depressBtn() {
    let btn = document.querySelector('#pwrbtn');
    btn.style.transform = 'scale(0.88)';
    // btn.style.boxShadow = '1px 1px 100px black';
    setTimeout(unpressBtn, 250);
}

function unpressBtn() {
    let btn = document.querySelector('#pwrbtn');
    // box-shadow: 10px 10px 5px grey;
    btn.style.transform = 'scale(1)';
}

// function searchPokemon() {
//     var q = prompt('Enter Pokemon name or ID number');
//     console.log(`You searched for ${q}`);
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//            var pokemon = JSON.parse(this.responseText);
//            console.log(pokemon);
//            new Pokemon(pokemon['name'], pokemon['types'][0]['type']['name']);
//         }
//     };
//     xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/id/${q}.json`, true);
//     xhttp.send();
// }

// document.addEventListener("click", clickXY);

// class Pokemon {
//     constructor(name, element) {
//         this.name = name;
//         this.element = element;
//         ALL_POKEMON.push(this);
//     }
// }