'use strict'

const textBlock = document.querySelector('.text-block');
const colorButton = document.querySelector('.change-color');

colorButton.onclick = () => {
    if (textBlock.style.color === 'black') {
        textBlock.style.color = 'purple';
    }
    else {
        textBlock.style.color = 'black';
    }
}