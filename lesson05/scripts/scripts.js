const input = document.getElementById('favchap');
const button = document.querySelector("button");
const list = document.getElementById("list");

function favScripture() {
    if (input.value != '') {
        const listItem = document.createElement('li');
        const delButton = document.createElement('button');
        const scripture = input.value;
        input.value = '';

        listItem.textContent = scripture;

        delButton.textContent = "❌";
        listItem.append(delButton);

        list.append(listItem);

        delButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        input.focus();
    }
}

button.addEventListener('click', favScripture);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        favScripture();
    }
});