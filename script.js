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
    let resultMessage = '';
    if (answers.alive === 'yes' && answers.girl === 'yes' && answers.common === 'yes' && answers.girlfriend === 'yes') {
        resultMessage = `
            <p>looks like there is no turning back now! </p>
            <p>Congrats, you are now taken!! </p>
        `;
    } else {
        resultMessage = `
            <p>We could still be friends! 😊</p>
        `;
    }

    // Redirect to a new page with the result
    const resultPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Result</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="container">
                <div class="result">
                    ${resultMessage}
                </div>
            </div>
        </body>
        </html>
    `;

    // Open the result in a new page
    const newWindow = window.open();
    newWindow.document.write(resultPage);
    newWindow.document.close();
}

// Initialize the first question
showQuestion(currentQuestion);