let questions = [
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
]; 
let currentQuestionIndex = 0; 
let score = 0; 
let selectedDifficulty = 'easy'; 
let usedQuestions = new Set();