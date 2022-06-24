const questionEl = document.getElementById("question");
const a_textEl = document.getElementById("a_text");
const b_textEl = document.getElementById("b_text");
const c_textEl = document.getElementById("c_text");
const d_textEl = document.getElementById("d_text");
const buttonEl = document.getElementById("submit");
const quizEl = document.getElementById("quiz");
const answerEl = document.querySelectorAll('.answer');

const quizData= [
    {
        question: 'How old is Sam?',
        a: '10',
        b: '20',
        c: '19',
        d: '25',
        correct: 'c',
    }, {
        question: 'Who is Sam\'s favourite Blackpink Member?',
        a: 'Lisa',
        b: 'Jennie',
        c: 'Rose',
        d: 'Jisoo',
        correct: 'a',
    }, {
        question: 'Who is Sam\'s favourite F1 Driver?',
        a: 'Sebastian Vettel',
        b: 'Max Verstappen',
        c: 'Lewis Hamilton',
        d: 'Fernando Alonso',
        correct: 'b',
    }, {
        question: 'Which Soccer Club does Sam Support?',
        a: 'Manchester United',
        b: 'Liverpool',
        c: 'Manchester City',
        d: 'Arsenal',
        correct: 'a',
    }
]

let currentQuestion = 0;
let answerOption = undefined;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswer();
    const currentQuestionData = quizData[currentQuestion]; 
    questionEl.innerHTML = currentQuestionData.question;
    a_textEl.innerHTML = currentQuestionData.a;
    b_textEl.innerHTML = currentQuestionData.b;
    c_textEl.innerHTML = currentQuestionData.c;
    d_textEl.innerHTML = currentQuestionData.d;
}

function deselectAnswer() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

function getSelected(){
    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })

    return answer; 
}

buttonEl.addEventListener("click", function(){

    const answer = getSelected();

    if (answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = '<h2>Your score is ' + score + '/'+ quizData.length+'</h2> <button onclick="location.reload()">Reload</button>';
        }
    }
})