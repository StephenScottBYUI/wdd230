const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);

}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birth = document.createElement('p');
        let birthPlace = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = `Date of Birth: ${prophet.birthdate}`
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `This is an image of ${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute('loading', 'lazy')
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        card.setAttribute('class', 'item')

        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
}