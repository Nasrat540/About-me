import './index.css'
import 'flowbite'

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
    while (--len && window.scrollY + 97 < section[len].offsetTop) {
    }
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll', activeMenu);


document.getElementById("menuicon").addEventListener("click", function () {
    let navList = document.querySelector(".nave-list");
    navList.classList.toggle("show");
});

    document.addEventListener('DOMContentLoaded', function() {
    document.body.style.zoom = '100%';
});

document.addEventListener('DOMContentLoaded', function () {
    const tabsSelect = document.getElementById('tabs');
    const educationTab = document.getElementById('stats');
    const experienceTab = document.getElementById('about');

    function showTab(tabId) {
        if (tabId === 'education') {
            educationTab.classList.remove('hidden');
            experienceTab.classList.add('hidden');
        } else if (tabId === 'experience') {
            educationTab.classList.add('hidden');
            experienceTab.classList.remove('hidden');
        }
    }

    tabsSelect.addEventListener('change', function () {
        showTab(this.value);
    });

    showTab(tabsSelect.value);
});

// read more
document.getElementById('read').addEventListener('click', function () {

    let moreText = document.getElementById('moreText');
    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        this.textContent = 'Read Less';
    } else {
        moreText.classList.add('hidden');
        this.textContent = 'Read More';
    }
})