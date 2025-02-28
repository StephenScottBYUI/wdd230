
const ratingInput = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");
const password = document.getElementById("password");
const confPassword = document.getElementById("re-password");;
const passMatch = document.getElementById('notMatch');

ratingInput.addEventListener("input", function () {
    ratingValue.textContent = ratingInput.value;
});

document.getElementById('sign-in').addEventListener('submit', function (event) {
    let pass = password.value;
    let confirmPassword = confPassword.value;


    if (pass !== confirmPassword) {
        event.preventDefault();
        passMatch.textContent = " - Passwords do not match!";
        confPassword.value = "";
        confPassword.focus();
    } else {
        passMatch.textContent = "";
    }
})