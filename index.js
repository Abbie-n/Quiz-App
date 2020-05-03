const questionSection = document.getElementById('section-b');
const startQuizBtn = document.getElementById('section-a');
const eachQuestion = document.getElementById('question');
const nextBtn = document.getElementById('next');
const options = document.getElementById('main-quiz-container').children;
const quizOverText1 = document.getElementById('over-text-1');
const quizOverText2 = document.getElementById('over-text-2');
//
startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startQuizBtn.classList.add('hide');
    questionSection.classList.remove('hide');
    quizBody(questionsCounter);
    
}

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
function quizBody(index) {


    //displaying questions
    question = eachQuestion.innerHTML = questions[index].question;

    //displaying options
    option = document.getElementById('0').innerHTML = 'A. ' + questions[index].options[0]
    option = document.getElementById('1').innerHTML = 'B. ' + questions[index].options[1];
    option = document.getElementById('2').innerHTML = 'C. ' + questions[index].options[2];
    option = document.getElementById('3').innerHTML = 'D. ' + questions[index].options[3];

    questionsAnswered = document.getElementById('q-c').innerHTML = questionsCounter + '/' + questions.length;
    score = document.getElementById('s-c').innerHTML = 'Score: ' + scoreCounter;
}

let score;
let scoreCounter = 0;

let questionsAnswered;
let questionsCounter = 0;

function choose(element) {

    for (let i = 0; i <= questions.length; i++) {
        if (element.id == questions[i].answer) {
            element.classList.remove('options');
            element.classList.add('correct');


            document.getElementById(0).classList.add('disabled');
            document.getElementById(1).classList.add('disabled');
            document.getElementById(2).classList.add('disabled');
            nextBtn.classList.remove('hide');

            scoreCounter += 6;
            score = document.getElementById('s-c').innerHTML = 'Score: ' + scoreCounter;

            break;
        } else {
            element.classList.remove('options');
            element.classList.add('wrong');

            document.getElementById(0).classList.add('disabled');

            document.getElementById(1).classList.add('disabled');

            document.getElementById(2).classList.add('disabled');

            document.getElementById(3).classList.add('disabled');

            nextBtn.classList.remove('hide');

            score = document.getElementById('s-c').innerHTML = 'Score: ' + scoreCounter;

            break;
        }
    }
    lockOptions();
}

function lockOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add('disabled');
        if (options[i].id == questions[questionsCounter].answer) {
            options[i].classList.add('correct');
        }
    }
}

function quizOver() {
    questionSection.classList.add('hide');
    
    document.getElementById('quiz-over').classList.remove('hide');
    if (scoreCounter <= 15) {
    quizOverText1.innerHTML = 'Nice Try!';
    quizOverText2.innerHTML = 'You Got ' + scoreCounter;
    } else if (scoreCounter <= 25) {
        quizOverText1.innerHTML = 'Brilliant!';
        quizOverText2.innerHTML = 'You Got ' + scoreCounter;
    } else {
        quizOverText1.innerHTML = 'Just Like A Boss!';
        quizOverText2.innerHTML = 'You Got ' + scoreCounter;}
}
function next() {
    if (questionsCounter == questions.length - 1) {
        quizOver();
        scoreCounter = 0;
    }
        else if (questionsCounter < questions.length - 1) {
            
            nextBtn.classList.add('hide');
            questionsCounter += 1;
            console.log(questionsCounter);
            quizBody(questionsCounter);
            
        }

        

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
        question: 'What country won the very first FIFA World Cup in 1930?',
        options: [
            'Italy',
            'Spain',
            'Uruguay',
            'France'
        ],
        answer: 2
    },
    {
        question: 'What year was the very first model of the iPhone released?',
        options: [
            '2001',
            '2007',
            '1998',
            '2009'
        ],
        answer: 1
    },
    {
        question: 'Which email service is owned by Microsoft?',
        options: [
            'Yahoomail',
            'Gmail',
            'Webmail',
            'Hotmail'
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