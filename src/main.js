const pageHeading = document.querySelector('h1');
pageHeading.textContent = 'Brilliant Title';

// function lightMap(map) {
//   map.
// }

let arenaText = document.querySelector('#arenamap');
let colors = ['black', 'green'];

function swapColors() {
    this.style.color = colors[1];
    this.style.backgroundColor = colors[0];
    colors.unshift(colors.pop())
}

arenaText.addEventListener('click', swapColors)

let bottomButton = document.querySelector('button');

function setUserName() {
    if(localStorage.getItem('name')) {
        let name = "";
        while (name === "") {
            name = prompt('Enter your damn name, fucker.');
            localStorage.setItem('name', name);
            pageHeading.textContent = 'Welcome, ' + name;
        }
    }
    else {
        let storedName = localStorage.getItem('name');
        pageHeading.textContent = 'Welcome, ' + storedName;}
}



bottomButton.addEventListener('click', setUserName)