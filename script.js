let currentQuestion = 0;
const totalQuestions = document.querySelectorAll('.question').length;
const progress = document.getElementById('progress');
const answers = {
    alive: null,
    girl: null,
    taken: null,
    common: null,
    girlfriend: null
};

function showQuestion(index) {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, i) => {
        question.classList.toggle('active', i === index);
    });
    progress.style.width = `${((index + 1) / totalQuestions) * 100}%`;
}

function setAnswer(question, answer) {
    answers[question] = answer;
}

function nextQuestion() {
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function showResult() {
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
}

// Initialize the first question
showQuestion(currentQuestion);