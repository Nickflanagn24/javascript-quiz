const questions = [
    // Sample placeholder questions
    { 
        image: 'path/to/image1.jpg', 
        options: ["Movie A", "Movie B", "Movie C", "Movie D"], 
        correctAnswer: 0, 
        hints: ["Hint 1 for Q1", "Hint 2 for Q1"] 
    },
    { 
        image: 'path/to/image2.jpg', 
        options: ["Movie A", "Movie B", "Movie C", "Movie D"], 
        correctAnswer: 1, 
        hints: ["Hint 1 for Q2", "Hint 2 for Q2"] 
    },
    // add 27 more questions
];
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let difficulty = "";
let hintsAvailable = 0;

// Initial setup on page load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startQuizButton").addEventListener("click", startQuiz);
});

function startQuiz() {
    // Get difficulty from selector and set hints available
    difficulty = document.getElementById("difficultySelector").value;
    hintsAvailable = difficulty === "Easy" ? 2 : difficulty === "Medium" ? 1 : 0;

    // Randomly select 10 questions
    selectedQuestions = shuffleArray(questions).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    const questionData = selectedQuestions[currentQuestionIndex];
    document.getElementById("questionImage").src = questionData.image;
    const options = document.querySelectorAll(".answer-option");

    options.forEach((option, index) => {
        option.textContent = questionData.options[index];
        option.classList.remove("correct", "incorrect");
        option.onclick = () => checkAnswer(index);
    });
    
    displayHints();
}

function displayHints() {
    const hintButtons = document.querySelectorAll(".hint-button");
    const hintBox = document.getElementById("hintBox");
    hintBox.style.display = "none";
    hintButtons.forEach((button, index) => {
        button.style.display = index < hintsAvailable ? "inline-block" : "none";
        button.onclick = () => showHint(index);
    });
}

function showHint(index) {
    const hintBox = document.getElementById("hintBox");
    hintBox.textContent = selectedQuestions[currentQuestionIndex].hints[index];
    hintBox.style.display = "block";
}

function checkAnswer(selectedIndex) {
    const questionData = selectedQuestions[currentQuestionIndex];
    const options = document.querySelectorAll(".answer-option");

    if (selectedIndex === questionData.correctAnswer) {
        options[selectedIndex].classList.add("correct");
        score += difficulty === "Easy" ? 1 : difficulty === "Medium" ? 2 : 3;
        playSound("correct");
    } else {
        options[selectedIndex].classList.add("incorrect");
        playSound("incorrect");
    }

    setTimeout(() => {
        currentQuestionIndex++;
        currentQuestionIndex < selectedQuestions.length ? displayQuestion() : endQuiz();
    }, 1000);
}

function endQuiz() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("scoreDisplay").textContent = `Your score: ${score}`;
    document.getElementById("endScreen").style.display = "block";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



