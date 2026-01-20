let questionsDB = [];
let useQuestionDB = [];
let index = 0;
let userScore = 0;
let userAnswers = [];

const questionContainer = document.getElementById("questionContainer");
const submitBtn = document.getElementById("submit");
const scoreContainer = document.getElementById("score");

async function fetchData() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error while fetching data", error);
        return { results: [] };
    }
}

initialize();

async function initialize() {
    const data = await fetchData();
    questionsDB = data.results;
    useQuestionDB = [...questionsDB];
    index = 0;
    userScore = 0;
    userAnswers = [];
    scoreContainer.innerHTML = "";
    submitBtn.textContent = "Next";
    renderUI(index);
}

function renderUI(index) {
    questionContainer.innerHTML = "";

    const currentQuestion = useQuestionDB[index];

    let options = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer
    ];

    shuffleArray(options);

    const card = document.createElement("div");
    card.className = "showQuestion";

    let optionsHTML = "";
    options.forEach((option, i) => {
        optionsHTML += `
            <label>
                <input type="radio" name="answer" value="${option}">
                ${option}
            </label><br>
        `;
    });

    card.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        ${optionsHTML}
    `;

    questionContainer.appendChild(card);

    if (index === useQuestionDB.length - 1) {
        submitBtn.textContent = "Submit";
    } else {
        submitBtn.textContent = "Next";
    }
}

submitBtn.addEventListener("click", nextButton);

function nextButton() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Please select an option");
        return;
    }

    const answer = selectedOption.value;
    userAnswers[index] = answer;

    if (answer === useQuestionDB[index].correct_answer) {
        userScore++;
    }

    index++;

    if (index < useQuestionDB.length) {
        renderUI(index);
    } else {
        submitHandler();
    }
}

function submitHandler() {
    questionContainer.innerHTML = "";
    submitBtn.style.display = "none";
    scoreContainer.innerHTML = `
        <h2>Your Score: ${userScore} / ${useQuestionDB.length}</h2>
        <button id="restart">Restart Quiz</button>
    `;

    document.getElementById("restart").addEventListener("click", () => {
        submitBtn.style.display = "block";
        initialize();
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
