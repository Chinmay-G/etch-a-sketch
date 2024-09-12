'use strict';

const body = document.querySelector('body');
const container = document.querySelector('.container');

const button = document.querySelectorAll('button');
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const numberOfSquares = document.getElementById('numberOfSquares');
const sliderVal = document.getElementById('sliderVal');
const clear = document.getElementById('clear');
const random = document.getElementById('random');
const color = document.getElementById('color');

let div = [];
let n

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];
    return color;
};

// numberOfSquares.value = 16;
function sliderChange(val) {
    document.getElementById('sliderVal').innerHTML = val + 'x' + val;
    container.innerHTML = '';
    n = val * val;
    for (let i = 1; i <= n; i++) {
        div[i] = document.createElement('div');
        div[i].style.width = `${600 / val}px`;
        div[i].style.height = `${600 / val}px`;
        document.querySelector('.container').appendChild(div[i]);

        div[i].addEventListener('mouseover', function () {
            div[i].style.background = getRandomColor();
        });
    }
    return val;
};

// Light Mode
light.addEventListener('click', function () {
    container.style.backgroundColor = 'white';
    body.style.backgroundColor = 'lightgoldenrodyellow';
    body.style.color = 'black';
    for (let i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = 'blanchedalmond';
        button[i].style.color = 'black';
    }
    numberOfSquares.style.backgroundColor = 'rgb(253, 230, 199)';
    sliderVal.style.backgroundColor = 'rgb(255, 214, 152)';
    sliderVal.style.border = 'solid rgb(251, 225, 186) 5px';
    color.style.backgroundColor = 'blanchedalmond';
});

// Dark mode
dark.addEventListener('click', function () {
    container.style.backgroundColor = 'black';
    body.style.backgroundColor = 'crimson';
    body.style.color = 'white';
    for (let i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = 'brown';
        button[i].style.color = 'white';
    }
    numberOfSquares.style.backgroundColor = 'brown';
    sliderVal.style.backgroundColor = 'brown';
    sliderVal.style.border = 'solid rgb(171, 64, 64) 5px';
    color.style.backgroundColor = 'brown';
});

// Clear Screen
clear.addEventListener('click', function () {
    for (let i = 1; i <= n; i++)
        div[i].style.backgroundColor = 'transparent';
});

// Select random colors 
random.addEventListener('click', function () {
    for (let i = 1; i <= n; i++) {
        div[i].addEventListener('mouseover', function () {
            div[i].style.background = getRandomColor();
        });
    }
});

// Select user selected color
color.addEventListener('click', function () {
    for (let i = 1; i <= n; i++) {
        div[i].addEventListener('mouseover', function () {
            div[i].style.background = color.value;
        });
    }
});

sliderChange(16);