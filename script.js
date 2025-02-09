const answers = {
    alive: null,
    girl: null,
    taken: null,
    common: null,
    girlfriend: null
};

function setAnswer(question, answer) {
    answers[question] = answer;
    document.querySelectorAll(`.${question}`).forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.${answer}[onclick*="${question}"]`).classList.add('active');
}

document.getElementById('proposalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthday = document.getElementById('birthday').value;

    if (answers.alive === 'yes' && answers.girl === 'yes' && answers.common === 'yes' && answers.girlfriend === 'yes') {
        document.getElementById('result').innerHTML = `
            <p>Welp, looks like there is no turning back now! 😂😂</p>
            <p>Congrats, you are now taken!! 💑</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `
            <p>We could still be friends! 😊</p>
        `;
    }
});