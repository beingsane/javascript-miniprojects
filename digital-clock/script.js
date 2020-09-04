// const clock = document.querySelector('#clock');
const dateDiv = document.querySelector('#date');
const timeDiv = document.querySelector('#time');

let tick = () => {
    const dateNow = new Date();
    const date = dateNow.getDate();
    let month = dateNow.getMonth();
    const year = dateNow.getFullYear();
    const hours = dateNow.getHours() < 10 ? "0" + dateNow.getHours() : dateNow.getHours();
    const minutes = dateNow.getMinutes() < 10 ? "0" + dateNow.getMinutes() : dateNow.getMinutes();
    const seconds = dateNow.getSeconds() < 10 ? "0" + dateNow.getSeconds() : dateNow.getSeconds();

    switch(month){
        case 0: month = 'January';
        case 1: month = 'February';
        case 2: month = 'March';
        case 3: month = 'April';
        case 4: month = 'May';
        case 5: month = 'June';
        case 6: month = 'July';
        case 7: month = 'August';
        case 8: month = 'September';
        case 9: month = 'October';
        case 10: month = 'November';
        case 11: month = 'December'; 
    }
    let html = `<p><strong>Date:</strong> ${date} ${month}, ${year}</p>`;
    dateDiv.innerHTML = html;

    html = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span>`;
    timeDiv.innerHTML = html;
}

setInterval(tick, 1000)