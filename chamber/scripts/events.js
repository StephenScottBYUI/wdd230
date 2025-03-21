document.addEventListener('DOMContentLoaded', () =>{
const url = 'https://stephenscottbyui.github.io/wdd230/chamber/data/events.json';
const eventsSpan = document.getElementById('news');

async function newsScroller() {
    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.events);

}

newsScroller();

const displayNews = (events) => {
    events.forEach((event) => {
        let newsItem = document.createElement('span');
        let rawDate = event.date;
        let dateObj = new Date(rawDate);
        let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        let formattedDate = dateObj.toLocaleDateString('en-US', options);

        newsItem.innerHTML = `<strong>${event.name}</strong>: <br class="special-break">${formattedDate}, <br class="special-break"><u>${event.location}</u>, <br class="special-break">${event.description}<br class="special-break"><br class="special-break">`;
        eventsSpan.appendChild(newsItem); 
        
    });
}
});
