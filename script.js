const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hyperloop Machine Language",
    c: "Hyperlink Markup Language",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
  },
  {
    question: "In which year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerBtns = document.querySelectorAll(".answer-btn");
const questionEl = document.getElementById("question");
const nextBtn = document.getElementById("next-btn");

let currentQuiz = 0;
let score = 0;
let answered = false;

function loadQuiz() {
  answered = false;
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  answerBtns.forEach((btn) => {
    const id = btn.id;
    btn.innerText = currentQuizData[id];
    btn.classList.remove("correct", "wrong");
  });
  nextBtn.style.display = "none";
}

answerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (answered) return;
    answered = true;
    const correct = quizData[currentQuiz].correct;
    if (btn.id === correct) {
      btn.classList.add("correct");
      score++;
    } else {
      btn.classList.add("wrong");
      document.getElementById(correct).classList.add("correct");
    }
    nextBtn.style.display = "block";
  });
});

nextBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
});

loadQuiz();
