// Dropdown menu in header
const languageDropdownList = document.getElementById('languageDropdownList');
const notificationDropdownList = document.getElementById('notificationDropdownList');
const profileDropdownList = document.getElementById('profileDropdownList');
const profile = document.getElementById('profile');

function toggleLang(type) {
    if(type === 'language') {
        notificationDropdownList.classList.remove('active');
        profileDropdownList.classList.remove('active-profile');
        profile.classList.remove('rotate');
        languageDropdownList.classList.toggle('active');
    } else if(type === 'notification') {
        languageDropdownList.classList.remove('active');
        profileDropdownList.classList.remove('active-profile');
        profile.classList.remove('rotate');
        notificationDropdownList.classList.toggle('active');
    } else {
        notificationDropdownList.classList.remove('active');
        languageDropdownList.classList.remove('active');
        profileDropdownList.classList.toggle('active-profile');
        profile.classList.toggle('rotate');
    }
}

// Navigation
let navTab = document.getElementsByClassName('nav-tab');
for(let i = 0; i < navTab.length; i++) {
    navTab[i].addEventListener('click', function(e) {
        for(let j = 0; j < navTab.length; j++) {
            navTab[j].classList.remove("active-nav");
        }
        e.currentTarget.classList.add("active-nav");
    })
}

// accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("rotate");
        let panel = this.nextElementSibling;
        if (panel.style.height) {
            panel.style.height = null;
        } else {
            panel.classList.toggle("active-panel");
        } 
});
}