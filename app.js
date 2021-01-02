
const name = " in New Year";
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav_link");
const testBtn = document.querySelector('#testBtn');

console.log(navLinks);

function sayHello() {
    let message = "hello javascript" + name;
    console.log(message);
}

sayHello();

function simpleMath(a, b) {
    let result = a + b;
    return result;
}

let sum = simpleMath(127, 22);

console.log(sum);


window.addEventListener("scroll", checkScroll) ;         
document.addEventListener("DOMContentLoaded", checkScroll) ;


function checkScroll() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {

        header.classList.add('red');

    } else {

        header.classList.remove('red')

    }

}


testBtn.addEventListener("click", function() {
    console.log('clicked');
});


for(let navItem of navLinks) {
    navItem.addEventListener("click", function() {
        console.log('link clicked');
    });
}





   
    
