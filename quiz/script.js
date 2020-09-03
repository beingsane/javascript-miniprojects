const correctAnswers = ['C','A','C','B','A','B','A','C','A','B'];
const form = document.querySelector('#quiz');
const result = document.querySelector('#result div span');
const resultDiv = document.querySelector('#result');
const correctTick = document.querySelectorAll('.check');
const allInputs = document.querySelectorAll('input');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
        form.q6.value,
        form.q7.value,
        form.q8.value,
        form.q9.value,
        form.q10.value,
    ];

    let q = 1;
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 10;
        }
    });

    correctTick.forEach(tick => {
        tick.style.display = 'inline';
    })
        

    resultDiv.classList.remove('d-none');
    allInputs.forEach(input => {
        input.disabled = true;
        input.style.cursor = 'not-allowed';
    });
    document.documentElement.scrollTop = 0;
    let i = 0;
    const timer = setInterval(() => {
        result.textContent = i + "%";
        if(i === score){
            clearInterval(timer);
        }
        i++;
    }, 20)

});
