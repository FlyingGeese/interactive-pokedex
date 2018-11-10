// let pokedex = document.getElementById('pokedex');
let pwrbtn = document.getElementById('pwrbtn');
const ALL_POKEMON = [];

pwrbtn.addEventListener('click', turnOn);
pwrbtn.addEventListener('click', depressBtn);
// // get diff coords by determining client with and perform Math
// // change background depending on which element
// // typewriter text in screen
// // flips to stat bars animation
let powerButton = false;
let atTop = true;
let atBottom = false;
let screen1 = document.querySelector('div#top-screen > div:first-child');

document.addEventListener("keydown", function (event) {
    let cursor = document.getElementById('cursor');
    // 27 esc
    // up 38
    // if at the top, go to second one
    let dwn = 0;
    let up = 0;
    if (event.which == 40) {
        dwn++;
        let newVal = parseInt(cursor.style.top) + parseInt('19') + '%';
        cursor.style.top = newVal;
    } else if (event.which == 38) {
        let newVal = parseInt(cursor.style.top) - parseInt('19') + '%';
        cursor.style.top = newVal;
    }
})


function turnOn() {
    let screen1 = document.querySelector('div#top-screen > div:first-child');
    let screen2 = document.getElementById('screen2');
    let cursor = document.getElementById('cursor');
    let light = document.getElementById('led');
    let menu = document.querySelectorAll('ul')[0];
    menu.classList.remove('hidden');
    cursor.classList.remove('hidden');
    screen1.style.backgroundImage = 'url(\'noise.gif\')';
    screen2.style.backgroundColor = '#e5e5e5';
    powerButton = true;
    light.classList.remove('pwr-off');
    light.classList.add('pwr-on');
}

function shutdown() {
    powerButton = false;
    let screen2 = document.getElementById('screen2');
    let cursor = document.getElementById('cursor');
    let light = document.getElementById('led');
    let menu = document.querySelectorAll('ul')[0];
    menu.classList.add('hidden');
    cursor.classList.add('hidden');
    screen1.style.background = '#376092';
    screen2.style.backgroundColor = '#376092';
    light.classList.remove('pwr-on');
    light.classList.add('pwr-off');
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

function searchPokemon() {
    var q = prompt('Enter Pokemon name or ID number');
    if (q == undefined || q == '') {
        return console.log('cancelled');
    }
    console.log(`You searched for ${q}`);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           var pokemon = JSON.parse(this.responseText);
           console.log(pokemon);
           let existing_img = document.getElementById('pokemon-img');
           if (existing_img != null) {
               existing_img.remove();
           }
           new Pokemon(pokemon['name'], pokemon['types'][0]['type']['name']);
           screen1.style.backgroundColor = 'gold';
           screen1.style.backgroundImage = 'linear-gradient(gold, red)';
           let img = document.createElement('img');
           if (q.length == 1) {
               var id = `00${q}`;
           } else if (q.length == 2) {
               var id = `0${q}`;
           } else {
               var id = `${q}`;
           }
           img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
           img.id = 'pokemon-img';
           img.classList.add('pokemon-image');
        //    img.height = '300px';
        //    img.width = '300px';
           document.getElementById('top-screen').appendChild(img);
        }
    };
    xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/id/${q}.json`, true);
    xhttp.send();
}

class Pokemon {
    constructor(name, element) {
        this.name = name;
        this.element = element;
        ALL_POKEMON.push(this);
    }
}