const questions = [
    {
        question: "Укажите устаревшие приемы в веб-дизайне:",
        answers: [
            {text: "Макеты на основе сетки", isCorrect: false},
            {text: "Эффект тиснения", isCorrect: true},
            {text: "Использование инфографики", isCorrect: false},
            {text: "Оптимизация размеров изображения", isCorrect: false}
        ]
    },
    {
        question: "Кернинг - это:",
        answers: [
            {
                text: "Операция изменения расстояния между буквами, выполняется на компьютере автоматически по заданным параметрам",
                isCorrect: false
            },
            {text: "Цифра, обозначающая порядковый номер страницы", isCorrect: false},
            {text: "Операция изменения расстояния между буквами, которая выполняется вручную", isCorrect: true},
            {text: "Графически выделенные нижние и верхние окончания букв и знаков", isCorrect: false}
        ]
    },
    {
        question: "Чем отличается символ многоточия от трех точек?",
        answers: [
            {text: "Обычные точки меньше по размеру", isCorrect: false},
            {text: "Обычные точки крупнее", isCorrect: true},
            {text: "Расстояние между обычными точками меньше", isCorrect: false},
            {text: "Многоточие можно использовать в тексте несколько раз", isCorrect: false}
        ]
    },
    {
        question: "Композиционный центр позволяет:",
        answers: [
            {text: "Создавать оптическую иллюзию", isCorrect: false},
            {text: "Преобразовывать композицию", isCorrect: false},
            {text: "Управлять вниманием зрителя", isCorrect: true},
            {text: "Создавать акцент", isCorrect: false}
        ]
    },
    {
        question: "К какой части текста относится заголовок, если интерлиньяж снизу заголовка меньше, чем сверху?",
        answers: [
            {text: "К нижней части текста", isCorrect: true},
            {text: "Относится к обеим частям текста", isCorrect: false},
            {text: "К верхней части текста", isCorrect: false},
            {text: "Не относится к тексту", isCorrect: false}
        ]
    }
];

const results = [
    {
        title: "Любознательный джун",
        descr: "Тебя впереди ожидает большой,<br/>но очень интересный путь!",
        img: "./images/img11.png"
    },
    {
        title: "Любознательный джун",
        descr: "Тебя впереди ожидает большой,<br/>но очень интересный путь!",
        img: "./images/img11.png"
    },
    {title: "Уверенный миддл", descr: "У тебя неплохой результат!<br/>ты уверенный миддл!", img: "./images/img10.png"},
    {title: "Уверенный миддл", descr: "У тебя неплохой результат!<br/>ты уверенный миддл!", img: "./images/img10.png"},
    {title: "Заряженный сениор", descr: "У тебя высокий результат,<br/>ты большой молодец!", img: "./images/img12.png"}
];

const state = {
    currentQuestion: 0,
    score: 0,
    showResult: false
};

const quizContainer = document.getElementById('quizContainer');

function renderQuiz() {
    if (state.showResult) {
        quizContainer.innerHTML = renderResult();
        document.getElementById('restartButton').addEventListener('click', restartQuiz);
    } else {
        quizContainer.innerHTML = renderQuestion();
        const answerButtons = document.querySelectorAll('.answerButton');
        answerButtons.forEach(button => {
            button.addEventListener('click', () => handleAnswerClick(button.dataset.isCorrect === 'true'));
        });
    }
}

function renderResult() {
    return `
        <div class="Quiz result">
            <div class="result">
                <img src="${results[state.score].img}"/>
                <h2>${state.score}/${questions.length}</h2>
                <h3>${results[state.score].title}</h3>
                <p>${results[state.score].descr}</p>
                <button id="restartButton">Пройти тест снова</button>
            </div>
        </div>
    `;
}

function renderQuestion() {
    return `
        <div class="Quiz">
            <div class="progress-bar">
                ${questions.map((_, index) => `
                    <div class="progress-block ${index <= state.currentQuestion ? 'filled' : ''}"></div>
                `).join('')}
            </div>
            <div class="quest">
                <div class="question-number">
                    ${String(state.currentQuestion + 1).padStart(2, '0')}
                </div>
                <div class="question-text">${questions[state.currentQuestion].question}</div>
            </div>
            <div class="answers">
                ${questions[state.currentQuestion].answers.map((answer, index) => `
                    <button class="answerButton" data-is-correct="${answer.isCorrect}">
                        ${answer.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function handleAnswerClick(isCorrect) {
    if (isCorrect) {
        state.score++;
    }

    const nextQuestion = state.currentQuestion + 1;
    if (nextQuestion < questions.length) {
        state.currentQuestion = nextQuestion;
    } else {
        state.showResult = true;
    }

    renderQuiz();
}

function restartQuiz() {
    state.currentQuestion = 0;
    state.score = 0;
    state.showResult = false;
    renderQuiz();
}

renderQuiz();