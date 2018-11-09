let pokedex = document.getElementById('pokedex');
// get diff coords by determining client with and perform Math
// change background depending on which element
// typewriter text in screen
// flips to stat bars animation
function clickXY(event) {
    if ((event.x > 500 && event.x < 530) && (event.y > 528 && event.y < 571)) {
        alert('down button!');
    } else if ((event.x > 532 && event.x < 570) && (event.y > 506 && event.y < 537)) {
        alert('right button!');
    }

    if ((event.y > 449 && event.y < 558) && (event.x > 1059 && event.x < 1128)) {
        alert('searching ...');
    }
    // document.body.textContent =
    //     "clientX: " + event.clientX +
    //     " - clientY: " + event.clientY;
}

// right x 533 - 570
// right y 507 - 536

document.addEventListener("click", clickXY);