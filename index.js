const questionSection = document.getElementById('section-b');
const startQuizBtn = document.getElementById('section-a');
const eachQuestion = document.getElementById('question');
const nextBtn = document.getElementById('next');
const options = document.getElementById('main-quiz-container').children;
const quizOverText1 = document.getElementById('over-text-1');
const quizOverText2 = document.getElementById('over-text-2');
const emoji = document.getElementById('emoji');

//
startQuizBtn.addEventListener('click', startQuiz);

//function to reveal the quiz screen
function startQuiz() {
    startQuizBtn.classList.add('hide');
    questionSection.classList.remove('hide');
    document.getElementById('header').classList.add('hide');
    startQuizBtn.classList.add('hide');
    quizBody(questionsCounter);

}
//function to restart the quiz
function restartQuiz() {
    document.getElementById('quiz-over').classList.add('hide');
    questionSection.classList.remove('hide');
    nextBtn.classList.add('hide');
    questionsCounter = 0;
    quizBody(questionsCounter);
}

function restart() {
    location.reload();
}

let question;
let option;

//function to add questions and options to the DOM
function quizBody(index) {


    //displaying questions
    question = eachQuestion.innerHTML = questions[index].question;

    //displaying options
    option = document.getElementById('0').innerHTML = 'A. ' + questions[index].options[0]
    option = document.getElementById('1').innerHTML = 'B. ' + questions[index].options[1];
    option = document.getElementById('2').innerHTML = 'C. ' + questions[index].options[2];
    option = document.getElementById('3').innerHTML = 'D. ' + questions[index].options[3];

    questionsAnswered = document.getElementById('q-c').innerHTML = 'Question: ' + (questionsCounter + 1) + ' of ' + questions.length;
    score = document.getElementById('s-c').innerHTML = scoreCounter;
}

let score;
let scoreCounter = 0;

let questionsAnswered;
let questionsCounter = 0;

//onclick function to check if the answer is wrong or correct
function choose(element) {

    for (let i = 0; i < questions.length; i++) {
        if (questionsCounter == i && element.id == questions[i].answer) {
            scoreCounter += 20;
            score = document.getElementById('s-c').innerHTML = scoreCounter;
        } else {
            element.classList.remove('options');
            element.classList.add('wrong');

            score = document.getElementById('s-c').innerHTML = scoreCounter;
        }
    }
    lockOptions();
}

//function to disable options when one has been clicked and to changed the color of the right answer to green even if the wrong answer was selected
function lockOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add('disabled');
        nextBtn.classList.remove('hide');
        if (options[i].id == questions[questionsCounter].answer) {

            options[i].classList.add('correct');
            options[i].classList.remove('wrong');
        }
    }
}

//function to give feedback when quiz is over
function quizOver() {
    questionSection.classList.add('hide');

    document.getElementById('quiz-over').classList.remove('hide');
    if (scoreCounter == 0) {
        quizOverText1.innerHTML = 'Oooops!';
        emoji.innerHTML = '😟'
        quizOverText2.innerHTML = 'You Got Zero points!';
    }
    else if (scoreCounter <= 40) {
        quizOverText1.innerHTML = 'Nice Try!';
        emoji.innerHTML = '🙂'
        quizOverText2.innerHTML = 'You Got ' + scoreCounter + ' points!';
    } else if (scoreCounter <= 80) {
        quizOverText1.innerHTML = 'Brilliant!';
        emoji.innerHTML = '😀'
        quizOverText2.innerHTML = 'You Got ' + scoreCounter + ' points!';
    } else {
        quizOverText1.innerHTML = 'Just Like A Boss!';
        emoji.innerHTML = '😎'
        quizOverText2.innerHTML = 'You Got ' + scoreCounter + ' points!';
    }
}
//onclick function for the next button 
function next() {

    if (questionsCounter == questions.length - 1) {
        quizOver();
        scoreCounter = 0;
    }
    else if (questionsCounter < questions.length - 1) {

        nextBtn.classList.add('hide');
        questionsCounter += 1;
        quizBody(questionsCounter);

    }


    //these take the colour of the options back to start state.
    document.getElementById('0').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('0').classList.add('options');

    document.getElementById('1').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('1').classList.add('options');

    document.getElementById('2').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('2').classList.add('options');

    document.getElementById('3').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('3').classList.add('options');
}


//list of questions to display
let questions = [
    {
        question: 'About how many taste buds does the average human tongue have?',
        options: [
            '2,000',
            "300",
            '10,000',
            "50"
        ],
        answer: 2
    },
    {
        question: 'Which of the following programming language is used to create programs like applets?',
        options: [
            'COBOL',
            'Java',
            'C',
            'Basic'
        ],
        answer: 1
    },
    {
        question: 'What country won the very first FIFA World Cup in 1930?',
        options: [
            'Germany',
            'Italy',
            'Spain',
            'Uruguay'
        ],
        answer: 3
    },
    {
        question: 'What was Twitter’s original name?',
        options: [
            'Twttr',
            'Tweeter',
            'The Tweet',
            'Twitter'
        ],
        answer: 0
    },
    {
        question: 'How many molecules of oxygen does ozone have?',
        options: [
            '1',
            '2',
            '3',
            '4'
        ],
        answer: 2
    },
]