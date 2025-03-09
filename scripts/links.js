const baseURL = "https://stephenscottbyui.github.io/wdd230/";
const linksURL = "https://stephenscottbyui.github.io/wdd230/data/links.json";
const fullList = document.getElementById('linkList');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);

}

getLinks();

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        let listItem = document.createElement('li');
        let lessonSpan = document.createElement('span');

        lessonSpan.textContent = `Lesson ${lesson.lesson}: `;
        lessonSpan.style.fontWeight = "bold";


        listItem.appendChild(lessonSpan);

        let listContent = lessonLinks(lesson.links);

        fullList.appendChild(listItem);
        listItem.appendChild(listContent);

    })
}

const lessonLinks = (links) => {
    let listContainer = document.createElement('span');

    links.forEach((link) => {

        let lessonLink = document.createElement('a');

        lessonLink.setAttribute('href', link.url);
        lessonLink.textContent = `${link.title}`;
        listContainer.setAttribute('class', 'list-container');
        listContainer.appendChild(lessonLink);
    });

    return listContainer;
}