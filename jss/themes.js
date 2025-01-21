function toggleDarkMode(event) {
    event.preventDefault(); // Prevent the default action of the link
    var element = document.body;
    element.classList.toggle("dark-mode");
    var isDarkMode = element.classList.contains("dark-mode");
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    updateThemeStyles(isDarkMode);
}

function updateThemeStyles(isDarkMode) {
    var headerText = document.querySelector('.headertext');
    var footerText = document.querySelector('.footername');
    var footerLink = document.querySelector('.uvodnifooter');
    var footerLogo = document.querySelector('.link-body-emphasis img');
    var navLinks = document.querySelectorAll('.nav-link');
    var mainPageLinks = document.querySelectorAll('.mainpage a');
    if (isDarkMode) {
        headerText.style.color = "white";
        footerText.style.color = "white";
        footerLink.style.color = "white";
        footerLogo.style.filter = "invert(1)";
        navLinks.forEach(link => link.style.color = "white");
        mainPageLinks.forEach(link => link.style.color = "white");
    } else {
        headerText.style.color = "";
        footerText.style.color = "";
        footerLink.style.color = "";
        footerLogo.style.filter = "";
        navLinks.forEach(link => link.style.color = "");
        mainPageLinks.forEach(link => link.style.color = "");
    }
}

function applySavedTheme() {
    var savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'enabled') {
        document.body.classList.add('dark-mode');
        updateThemeStyles(true);
    }
}

document.addEventListener('DOMContentLoaded', applySavedTheme);