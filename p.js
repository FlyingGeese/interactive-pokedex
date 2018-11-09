let pokedex = document.getElementById('pokedex');
let searchbtn = document.querySelector('ul > li');
const ALL_POKEMON = [];

searchbtn.addEventListener('click', searchPokemon);
// get diff coords by determining client with and perform Math
// change background depending on which element
// typewriter text in screen
// flips to stat bars animation
let powerButton = false;
function clickXY(event) {
    if ((event.x > 500 && event.x < 530) && (event.y > 528 && event.y < 571)) {
        alert('down button!');
    } else if ((event.x > 532 && event.x < 570) && (event.y > 506 && event.y < 537)) {
        alert('right button!');
    } else if ((event.x > 466 && event.x < 503) && (event.y > 510 && event.y < 532)) {
        alert('left button!');
    } else if ((event.x > 505 && event.x < 531) && (event.y > 469 && event.y < 507)) {
        alert('up button!');
    }

    if ((event.y > 449 && event.y < 558) && (event.x > 1059 && event.x < 1128)) {
        // alert('searching ...');
        static();
    }
}

function static() {
    document.getElementById('noise').classList.remove('invisible');
    document.getElementById('menu').classList.remove('invisible');
    powerButton = true;
}

function searchPokemon() {
    var q = prompt('Enter Pokemon name or ID number');
    console.log(`You searched for ${q}`);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           var pokemon = JSON.parse(this.responseText);
           console.log(pokemon);
           new Pokemon(pokemon['name'], pokemon['types'][0]['type']['name']);
        }
    };
    xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/id/${q}.json`, true);
    xhttp.send();
}

document.addEventListener("click", clickXY);

class Pokemon {
    constructor(name, element) {
        this.name = name;
        this.element = element;
        ALL_POKEMON.push(this);
    }
}