document.addEventListener('DOMContentLoaded', function() {
    const bannerBox = document.getElementById("banner");
    const today = new Date().getDay();


    if (today >= 1 && today <= 3) {
        let bannerText = document.createElement('p');
        let closeButton = document.getElementById('close-button');
        let xIcon = document.createElement('img');

        xIcon.setAttribute('src', 'images/x-mark.png');
        xIcon.setAttribute('alt', 'close button');
        xIcon.setAttribute('class', 'close_button');



        closeButton.setAttribute('style', 'background: none; border: none; cursor: pointer;');
        closeButton.appendChild(xIcon);

        bannerText.textContent = 'Come join us this Wednesday at 7pm for the Willingboro Chamber of Commerce meet and greet!';

        bannerBox.appendChild(bannerText);

    }
    else {
        bannerBox.setAttribute('class', 'visually-hidden');
        console.log(today);
    };

});

const button = document.getElementById('close-button');


function closeBanner() {
    const bannerBox = document.getElementById("banner");
    bannerBox.setAttribute('class', 'visually-hidden');

};

button.addEventListener('click', closeBanner);