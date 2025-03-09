const display = document.querySelector("article");

document.querySelector("#gridView").addEventListener("click", () => {
    display.classList.replace("list", "grid");
});

document.querySelector("#listView").addEventListener("click", () => {
    display.classList.replace("grid", "list");
});

