// ALL_CARS = [];

// class Car {
//     constructor(vin, make, model, year) {
//         this.vin = vin;
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// }

// function getPokemon() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             data = JSON.parse(this.responseText);
//             console.log(Object.keys(data));
//             vins = Object.keys(data);
//             for (vin in vins) {
//                 console.log(data[vins[vin]]);
//                 let car = new Car(vins[vin]);
//                 ALL_CARS.push(car);
//                 for (prop in data[vins[vin]]) {
//                     let x = ALL_CARS.pop()
//                     x.model = data[vins[vin]]['model'];
//                     x.make = data[vins[vin]]['make'];
//                     x.year = data[vins[vin]]['model_year'];
//                     ALL_CARS.push(x);
//                 }
//             }
//         }
//     };
//     xhttp.open("GET", "https://raw.githubusercontent.com/mlaw-nycda/empireCommerce/master/cars.json", true);
//     xhttp.send();
// }


// ================================================================================

// function getEvents() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             let alldata = JSON.parse(this.responseText);
//             let data = alldata['data'];
//             console.log(data);
//             let el = document.createElement('img');
//             el.src = `${data[0]['images']['preview_gif']['url']}`;
//             document.getElementsByTagName('body')[0].appendChild(el);
//         }
//     }
//     xhttp.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=WEGk0W6dZ5SCWMnEM6PHOCretv54NgXP&q=goku&limit=25&offset=0&rating=G&lang=en", true);
//     xhttp.send();
// }

// create a loop
// determine what you need to do for each iteration of the loop
// create those elements

class Warrior {
    constructor(name) {
        this.name = name;
        this.hp = 150;
        this.atk = 25;
    }
    attack(target) {
        target.hp -= this.atk;
        console.log(this.name + ' attacked ' + target.name);
    } 
}

class Mage {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.atk = 5;
    }
}



let michael = new Warrior('Michael');
let enemy = new Mage('Rival');
