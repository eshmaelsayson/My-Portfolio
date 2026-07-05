const words = [

"Applied Computer Science Graduate",

"Software Developer",

"Web Developer",

"Problem Solver"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

const current = words[wordIndex];

if(!isDeleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

isDeleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

isDeleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,isDeleting ? 50 : 100);

}

typeEffect();