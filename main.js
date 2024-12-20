

const quiz = [
    {
        question: 'Q1. ラ',
        choices: [
            'C',
            'D',
            'E',
            'F',
            'G',
            'A',            
            'B',
        ],
        correct: 'A'
    },
    {
        question: 'Q2. ド',
        choices: [
            'C',
            'D',
            'E',
            'F',
            'G',
            'A',            
            'B',
        ],
        correct: 'C'
    },
    {
        question: 'Q3. レ',
        choices: [
            'C',
            'D',
            'E',
            'F',
            'G',
            'A',            
            'B',
        ],
        correct: 'D'
    },
    {
        question: 'Q4. ソ',
        choices: [
            'C',
            'D',
            'E',
            'F',
            'G',
            'A',            
            'B',
        ],
        correct: 'G'
    },
    {
        question: 'Q5. シ',
        choices: [
            'C',
            'D',
            'E',
            'F',
            'G',
            'A',            
            'B',
        ],
        correct: 'B'
    },
    {
        question: 'Q6. ミ',
        choices: [
            'C',
            'D',
            'E',
            'F',
            'G',
            'A',            
            'B',
        ],
        correct: 'E'
    },
    {
        question: 'Q7. ファ',
        choices: [
            'C',
            'D',
            'E',
            'F',
            'G',
            'A',            
            'B',
        ],
        correct: 'F'
    },
    
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

function playSound(){
    let startSound = new Audio('start.mp3');
    startSound.play();
}
