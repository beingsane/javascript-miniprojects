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
            break;
        case 1: month = 'February';
            break;
        case 2: month = 'March';
            break;
        case 3: month = 'April';
            break;
        case 4: month = 'May';
            break;
        case 5: month = 'June';
            break;
        case 6: month = 'July';
            break;
        case 7: month = 'August';
            break;
        case 8: month = 'September';
            break;
        case 9: month = 'October';
            break;
        case 10: month = 'November';
            break;
        case 11: month = 'December';
    }
    let html = `<p><strong>Date:</strong> ${date} ${month}, ${year}</p>`;
    dateDiv.innerHTML = html;

    html = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span>`;
    timeDiv.innerHTML = html;
}

setInterval(tick, 1000)
