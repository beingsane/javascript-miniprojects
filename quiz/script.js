const correctAnswers = ['C','A','C','B','A','B','A','C','A','B'];
const form = document.querySelector('#quiz');

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

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 10;
        }
    });
});
