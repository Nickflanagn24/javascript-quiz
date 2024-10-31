const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const questionImage = document.getElementById("question-image");
const answerButtons = document.querySelectorAll(".answer-button");
const scoreDisplay = document.getElementById("score-display");
const difficultySelector = document.getElementById("difficulty-selector");
const hintButtons = document.querySelectorAll(".hint-button");

let currentQuestionIndex = 0;
let score = 0;
let selectedDifficulty;
let questions;

const DIFFICULTY_POINTS = { easy: 1, medium: 2, hard: 3 };