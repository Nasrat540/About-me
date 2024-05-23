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
    let navList = document.querySelector(".navelist");
    navList.classList.toggle("show");
});

    document.addEventListener('DOMContentLoaded', function() {
    document.body.style.zoom = '100%';
});

document.addEventListener('DOMContentLoaded', function () {
    // Tab buttons
    const tabs = document.querySelectorAll('[data-tabs-target]');
    const tabContents = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs and tab contents
            tabs.forEach(t => t.classList.remove('active', 'bg-white', 'text-gray-900'));
            tabContents.forEach(tc => tc.classList.add('hidden'));

            // Activate the clicked tab and corresponding tab content
            tab.classList.add('active', 'bg-white', 'text-gray-900');
            document.querySelector(tab.dataset.tabsTarget).classList.remove('hidden');
        });
    });

    // Dropdown for mobile
    const tabSelect = document.getElementById('tabs');
    tabSelect.addEventListener('change', function () {
        const selectedTab = document.querySelector(this.value);

        // Deactivate all tab contents
        tabContents.forEach(tc => tc.classList.add('hidden'));

        // Activate the selected tab content
        selectedTab.classList.remove('hidden');
    });
});
