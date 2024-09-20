    import {correctAns, length} from "./script.js";

let progress = document.querySelector('.progress');
let successRate = document.querySelector('.green-value');
let unsuccessRate = document.querySelector('.red-value');
let atemptedQuestion = document.querySelector('.que-value');

progress.style.width = `${((correctAns * 100) /length)}%`;
successRate.innerHTML = `${((correctAns * 100) / length)}%`;
unsuccessRate.innerHTML = `${100 - ((correctAns * 100) / length)}%`;
console.log(`${((correctAns * 100) /length)}%`)