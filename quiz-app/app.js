const btn = document.querySelector('.btn')
const quiz = document.querySelector('.quiz')
const quizs = [
  {
    question: 'What does HTML stand for?',
    answers: [
      'Hypertext Markup Language',
      'Hypertext Markdown Language',
      'Hyperloop Machine Language',
      'Helicopters Terminals Motorboats Lamborginis',
    ],
    correct: 0,
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      'Central Style Sheets',
      'Cascading Style Sheets',
      'Cascading Simple Sheets',
      'Cars SUVs Sailboats',
    ],
    correct: 1,
  },
  {
    question: 'What year was JavaScript launched?',
    answers: ['1996', '1995', '1994', 'None of the above'],
    correct: 1,
  },
  {
    question: 'Which language runs in a web browser?',
    answers: ['Java', 'C', 'Python', 'Javascript'],
    correct: 3,
  },
]
function renderQuiz(quizData) {
  quiz.innerHTML = `
    <h3 class="quiz__question">${quizData.question}</h3>
    <ul>
        <div class="quiz__question__item">
            <input type="radio" name="answer" id="0">
            <label for="0">
                <li><span>${quizData.answers[0]}</span></li>
            </label>
        </div>
        <div class="quiz__question__item">
            <input type="radio" name="answer" id="1">
            <label for="1">
                <li><span>${quizData.answers[1]}</span></li>
            </label>
        </div>
        <div class="quiz__question__item">
            <input type="radio" name="answer" id="2">
            <label for="2">
                <li><span>${quizData.answers[2]}</span></li>
            </label>
        </div>
        <div class="quiz__question__item">
            <input type="radio" name="answer" id="3">
            <label for="3">
                <li><span>${quizData.answers[3]}</span></li>
            </label>
        </div>
    </ul>
  `

  const inputs = document.querySelectorAll('input')
  let answer = -1
  userAnswers.push(answer)
  inputs.forEach(input => {
    input.addEventListener('change', () => {
      answer = input.getAttribute('id')
      userAnswers.pop()
      userAnswers.push(answer)
    })
  })
}
function renderResult(correctNumber) {
  const h1 = document.createElement('h3')
  h1.innerHTML = `You answered ${correctNumber}/4 questions correctly`
  quiz.innerHTML = ''
  quiz.appendChild(h1)
  btn.innerHTML = '<a href="./quiz-app.html">Reload</a>'
}
const userAnswers = []
let currentQuiz = 0
renderQuiz(quizs[currentQuiz])
btn.addEventListener('click', () => {
  if (currentQuiz < 3) {
    renderQuiz(quizs[++currentQuiz])
  } else {
    let correct = 0
    userAnswers.forEach((answer, index) => {
      if (+answer === quizs[index].correct) {
        correct++
      }
    })
    renderResult(correct)
  }
})
