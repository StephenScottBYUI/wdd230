document.addEventListener('DOMContentLoaded', function () {

    const dateLoaded = document.querySelector('#hiddenDate');
    const currentDate = Date.now().toString();



    if (!dateLoaded) {
        dateSubmited();
    }

    else {
        localStorage.setItem('loadedDate', currentDate);
        dateLoaded.value = currentDate;
    }

    function dateSubmited() {
        const submitedDate = document.querySelector('#submited');
        const timestamp = localStorage.getItem('loadedDate');
        let date = new Date(parseInt(timestamp)).toLocaleString();

        submitedDate.textContent = date;

    }
});