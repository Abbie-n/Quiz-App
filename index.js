const questionSection = document.getElementById('section-b');
const startQuizBtn = document.getElementById('section-a');
const eachQuestion = document.getElementById('question');

//
startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startQuizBtn.classList.add('hide');
    questionSection.classList.remove('hide');
    quizBody(questionsCounter);
}
let question;
let options;
function quizBody(index) {


    //displaying questions
    question = eachQuestion.innerHTML = questions[index].question;

    //displaying options
    options = document.getElementById('0').innerHTML = 'A. ' + questions[index].options[0]
    options = document.getElementById('1').innerHTML = 'B. ' + questions[index].options[1];
    options = document.getElementById('2').innerHTML = 'C. ' + questions[index].options[2];
    options = document.getElementById('3').innerHTML = 'D. ' + questions[index].options[3];
}

let score;
let scoreCounter = 0;

let questionsAnswered;
let questionsCounter = 0;

function choose(element) {
    
    for (let i = 0; i < questions.length; i++) {
        if (element.id == questions[i].answer) {
            element.classList.remove('options');
            element.classList.add('correct');

            document.getElementById(0).classList.add('disabled');
            document.getElementById(1).classList.add('disabled');
            document.getElementById(2).classList.add('disabled');

            scoreCounter += 2;
            score = document.getElementById('s-c').innerHTML = 'Total Score Obtained: ' + scoreCounter;

            break;
        } else {
            element.classList.remove('options');
            element.classList.add('wrong');

            document.getElementById(0).classList.add('disabled');

            document.getElementById(1).classList.add('disabled');

            document.getElementById(2).classList.add('disabled');

            document.getElementById(3).classList.remove('options');
            document.getElementById(3).classList.add('correct');

            score = document.getElementById('s-c').innerHTML = 'Total Score Obtained: ' + scoreCounter;

            break;
        }
    }
}

function next() {
    questionsCounter += 1;
    questionsAnswered = document.getElementById('q-c').innerHTML = 'Total Questions Answered: ' + questionsCounter + '/' + questions.length;
    quizBody(questionsCounter);

    document.getElementById('0').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('0').classList.add('options');

    document.getElementById('1').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('1').classList.add('options');

    document.getElementById('2').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('2').classList.add('options');

    document.getElementById('3').classList.remove('correct', 'wrong', 'disabled');
    document.getElementById('3').classList.add('options');
}

function previous() {
    questionsCounter -= 1;
    
    questionsAnswered = document.getElementById('q-c').innerHTML = 'Total Questions Answered: ' + questionsCounter + '/' + questions.length;
    quizBody(questionsCounter);
}

//list of questions to display
let questions = [
    {
        question: 'What technology is used to make telephone calls over the Internet possible?',
        options: [
            'Bluetooth',
            'Ethernet',
            'NFC',
            'VoIP'
        ],
        answer: 3
    },
    {
        question: 'How technology is used to make telephone calls over the Internet possible?',
        options: [
            'Bluetooth',
            'Ethernet',
            'NFC',
            'VoIP'
        ],
        answer: 3
    },
    {
        question: 'Why technology is used to make telephone calls over the Internet possible?',
        options: [
            'Bluetooth',
            'Ethernet',
            'NFC',
            'VoIP'
        ],
        answer: 3
    },
    {
        question: 'When technology is used to make telephone calls over the Internet possible?',
        options: [
            'Bluetooth',
            'Ethernet',
            'NFC',
            'VoIP'
        ],
        answer: 3
    },
    {
        question: 'Could technology is used to make telephone calls over the Internet possible?',
        options: [
            'Bluetooth',
            'Ethernet',
            'NFC',
            'VoIP'
        ],
        answer: 3
    },
]