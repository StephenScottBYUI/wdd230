const display = document.querySelector("article");

document.querySelector("#gridView").addEventListener("click", () => {
    display.classList.replace("list", "grid");
});

document.querySelector("#listView").addEventListener("click", () => {
    display.classList.replace("grid", "list");
});

//JSON Member list display;

const url = 'https://stephenscottbyui.github.io/wdd230/chamber/data/members.json';
const directoryList = document.getElementById('directoryList');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);

}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let bizName = document.createElement('h3');
        let bizImage = document.createElement('img');
        let bizAddress = document.createElement('p');
        let bizPhone = document.createElement('p');
        let bizWebsite = document.createElement('p');
        let bizMembership = document.createElement('p');
        let bizDescription = document.createElement('p');

        bizName.textContent = `${member.name}`;
        bizImage.setAttribute('src', member.image);
        bizImage.setAttribute('alt', `This is an image of ${member.name}'s logo`)
        bizImage.setAttribute('loading', 'lazy')
        bizImage.setAttribute('width', '100');
        bizImage.setAttribute('height', '100');
        bizAddress.innerHTML = `<strong>Address:</strong> ${member.address}`;
        bizPhone.innerHTML = `<strong>Phone:</strong> ${member.phone}`;
        bizWebsite.innerHTML = `<strong>Website:</strong> ${member.website}`;
        bizMembership.innerHTML = `<strong>Member Level:</strong> ${member.membership_level}`;
        bizDescription.textContent = `${member.description}`;
        card.setAttribute('class', 'section');

        card.appendChild(bizName);
        card.appendChild(bizImage);
        card.appendChild(bizDescription);
        card.appendChild(bizAddress);
        card.appendChild(bizPhone);
        card.appendChild(bizWebsite);
        card.appendChild(bizMembership);


        directoryList.appendChild(card);

    })
}
