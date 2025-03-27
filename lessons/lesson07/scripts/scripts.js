
const input = document.getElementById('favchap');
const button = document.querySelector("button");
const list = document.getElementById("list");
const warning = document.querySelector('.warning')

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function favScripture() {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
        if (!warning.classList.contains('hidden')) {
            warning.classList.add('hidden');
        }
    }
    else {
        warning.classList.remove('hidden');
        input.focus();
    }
}

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
    console.log('What a beautiful trap you have crafted. Please let me know if anyone fell for it.')
}

function setChapterList() {
    localStorage.setItem('favBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('favBomList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

button.addEventListener('click', favScripture);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        favScripture();
    }
});



