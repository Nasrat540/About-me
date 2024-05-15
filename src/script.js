
let words = document.querySelectorAll('.word');

let toggleWords = () => {
    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;

    words.forEach(word => word.style.opacity = "0");

    setInterval(() => {
        words[currentWordIndex].style.opacity = "0";
        currentWordIndex = (currentWordIndex === maxWordIndex) ? 0 : currentWordIndex + 1;

        words[currentWordIndex].style.opacity = "1";
    }, 3000)
};

toggleWords()


let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll',activeMenu);


document.getElementById("menuicon").addEventListener("click", function() {
    let navList = document.querySelector(".navelist");
    navList.classList.toggle("show");
});
