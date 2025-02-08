document.addEventListener('DOMContentLoaded', function () {
    const switchInput = document.querySelector('.switch input[type="checkbox"]');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const logo = document.querySelector('.logo')

    if (localStorage.getItem('darkMode') === 'enabled') {
        switchInput.check = true;
        themeStylesheet.setAttribute('href', 'styles/dm-colors-and-fonts.css');
        logo.setAttribute('src', 'images/dm-willingboro-logo.svg')
    }

    switchInput.addEventListener('change', function () {
        if (switchInput.checked) {

            themeStylesheet.setAttribute('href', 'styles/dm-colors-and-fonts.css');
            logo.setAttribute('src', 'images/dm-willingboro-logo.svg')
            localStorage.setItem('darkMode', 'enabled');
        } else {

            themeStylesheet.setAttribute('href', 'styles/colors-and-fonts.css');
            logo.setAttribute('src', 'images/willingboro-logo.svg')
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});