const questions = [
    {
        question: "Javascript is a ______ language?",
        options: ["Object - Oriented", "Object - Based", "Procedural", "None of the above"],
        answer: "Object - Oriented"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["var", "let", "Both var and let", "Nor of the above"],
        answer: "Both var and let"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        options: ["getElementbyId()", "getElementByClassName()", "Both var and let", "Nor of the above"],
        answer: "Both var and let"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        options: ["document.write()", "console.log()", "window.alert()", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        options: ["Throw an error", "Ignores the statements", "Give a warning", "None of the above"],
        answer: "Ignores the statements"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        options: ["const", "var", "let", "constant"],
        answer: "const"
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        options: ["in", "is in", "exists", "lies"],
        answer: "in"
    },
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        options: ["The contents are displayed by non-JS-based browsers.", "Clears all the cookies and cache.", "Both A and B", "None of the above."],
        answer: "The contents are displayed by non-JS-based browsers."
    },
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        options: ["Boolean", "Undefined", "Object", "Integer"],
        answer: "Object"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        options: ["stringify()", "parse()", "convert()", "None of the above"],
        answer: "stringify()"
    }
];
console.log(questions)

let ques = document.querySelector('.question');
let op1 = document.querySelector('.op1');
let op2 = document.querySelector('.op2');
let op3 = document.querySelector('.op3');
let op4 = document.querySelector('.op4');

let sub_op1 = document.querySelector('.sub-op1');
let sub_op2 = document.querySelector('.sub-op2');
let sub_op3 = document.querySelector('.sub-op3');
let sub_op4 = document.querySelector('.sub-op4');

const count = document.querySelector('.count1');
var timer = document.querySelector('.timer');
const next = document.querySelector('.navigator');
const nextQuestion = document.querySelector('.next');
const nextPage = document.querySelector('.next1');



var timeLeft = 30;
var elem = document.querySelector('.time');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);

    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
        if (timeLeft > 15) {
            document.body.style.backgroundColor = '#CCE2C2';
            timer.style.backgroundColor = '#02A4096E';
            next.style.color = '#01AB08';
        }
        else if (timeLeft < 15) {
            document.body.style.backgroundColor = '#E4E5C7';
            timer.style.backgroundColor = '#C5B1006E';
            next.style.color = '#C58800';
        }
        if (timeLeft < 5) {
            document.body.style.backgroundColor = '#DBADAD';
            timer.style.backgroundColor = '#C50C006E';
            next.style.color = '#C50000';
        }
    }
}


let n = 0;
count.innerHTML = n + 1;

function getQuestion(n) {
    ques.textContent = questions[n].question;
    sub_op1.innerHTML = questions[n].options[0];
    sub_op2.textContent = questions[n].options[1];
    sub_op3.textContent = questions[n].options[2];
    sub_op4.textContent = questions[n].options[3];
    countdown();
}

getQuestion(n);

next.addEventListener('click', () => {
    if (timeLeft <= 0) {
        n = n + 1;
        timeLeft = 30;

        if (n < questions.length) {
            getQuestion(n);
            count.innerHTML = n + 1;
        }
        else {
            n = 0;
            count.innerHTML = n + 1;
            document.querySelector('main').style.display = 'none';
            document.querySelector('.result').style.display = 'block';
            progress.style.width = `${((correctAns * 100) / questions.length)}%`;
            successRate.innerHTML = `${((correctAns * 100) / questions.length)}%`;
            unsuccessRate.innerHTML = `${100 - ((correctAns * 100) / questions.length)}%`;
            atemptedQuestion.innerHTML = `${correctAns}/${questions.length}`;

        }

        timerId = setInterval(countdown, 1000);
        countdown();

        op1.classList.remove('correct');
        op1.classList.remove('wrong');
        op2.classList.remove('correct');
        op2.classList.remove('wrong');
        op3.classList.remove('correct');
        op3.classList.remove('wrong');
        op4.classList.remove('correct');
        op4.classList.remove('wrong');
        correcIcon1.style.display = 'none';
        wrongIcon1.style.display = 'none';
        correcIcon2.style.display = 'none';
        wrongIcon2.style.display = 'none';
        correcIcon3.style.display = 'none';
        wrongIcon3.style.display = 'none';
        correcIcon4.style.display = 'none';
        wrongIcon4.style.display = 'none';
    }
    else {
        document.querySelector('.message').style.opacity = 1;
    }
})

document.querySelector('.options').addEventListener('click', () => {
    document.querySelector('.message').style.opacity = 0;
})

let correcIcon1 = document.querySelector('.correct-icon1');
let wrongIcon1 = document.querySelector('.wrong-icon1');
let correcIcon2 = document.querySelector('.correct-icon2');
let wrongIcon2 = document.querySelector('.wrong-icon2');
let correcIcon3 = document.querySelector('.correct-icon3');
let wrongIcon3 = document.querySelector('.wrong-icon3');
let correcIcon4 = document.querySelector('.correct-icon4');
let wrongIcon4 = document.querySelector('.wrong-icon4');

let correctAns = 0;

op1.addEventListener('click', (e) => {
    if (timeLeft == -1) {
        alert("Time Over! Please move to the next Question")
    }
    else {
        if (sub_op1.textContent === questions[n].answer) {
            op1.classList.add('correct');
            correcIcon1.style.display = 'block';
            wrongIcon1.style.display = 'none';
            correctAns++;
        }
        else {
            op1.classList.toggle('wrong');
            correcIcon1.style.display = 'none';
            wrongIcon1.style.display = 'block';
            if (sub_op2.textContent === questions[n].answer) {
                op2.classList.add('correct');
                correcIcon2.style.display = 'block';
                wrongIcon2.style.display = 'none';
            }
            if (sub_op3.textContent === questions[n].answer) {
                op3.classList.add('correct');
                correcIcon3.style.display = 'block';
                wrongIcon3.style.display = 'none';
            }
            if (sub_op4.textContent === questions[n].answer) {
                op4.classList.add('correct');
                correcIcon4.style.display = 'block';
                wrongIcon4.style.display = 'none';
            }
        }
        timeLeft = -1; 
        elem.innerHTML = timeLeft + 1;
    }
    if (n == 9) {
        nextQuestion.style.display = 'none';
        nextPage.style.display = 'block';
    }
})
op2.addEventListener('click', (e) => {
    if (timeLeft == -1) {
        alert("Time Over! Please move to the next Question")
    }
    else {
        if (sub_op2.textContent === questions[n].answer) {
            op2.classList.add('correct');
            correcIcon2.style.display = 'block';
            wrongIcon2.style.display = 'none';
            correctAns++;
        }
        else {
            op2.classList.toggle('wrong');
            correcIcon2.style.display = 'none';
            wrongIcon2.style.display = 'block';
            if (sub_op1.textContent === questions[n].answer) {
                op1.classList.add('correct');
                correcIcon1.style.display = 'block';
                wrongIcon1.style.display = 'none';
            }
            if (sub_op3.textContent === questions[n].answer) {
                op3.classList.add('correct');
                correcIcon3.style.display = 'block';
                wrongIcon3.style.display = 'none';
            }
            if (sub_op4.textContent === questions[n].answer) {
                op4.classList.add('correct');
                correcIcon4.style.display = 'block';
                wrongIcon4.style.display = 'none';
            }
        }
        timeLeft = -1;
        elem.innerHTML = timeLeft + 1;
    }
    if (n == 9) {
        nextQuestion.style.display = 'none';
        nextPage.style.display = 'block';
    }
})
op3.addEventListener('click', (e) => {
    if (timeLeft == -1) {
        alert("Time Over! Please move to the next Question")
    }
    else {
        if (sub_op3.textContent === questions[n].answer) {
            op3.classList.add('correct');
            correcIcon3.style.display = 'block';
            wrongIcon3.style.display = 'none';
            correctAns++;
        }
        else {
            op3.classList.toggle('wrong');
            correcIcon3.style.display = 'none';
            wrongIcon3.style.display = 'block';
            if (sub_op1.textContent === questions[n].answer) {
                op1.classList.add('correct');
                correcIcon1.style.display = 'block';
                wrongIcon1.style.display = 'none';
            }
            if (sub_op2.textContent === questions[n].answer) {
                op2.classList.add('correct');
                correcIcon2.style.display = 'block';
                wrongIcon2.style.display = 'none';
            }
            if (sub_op4.textContent === questions[n].answer) {
                op4.classList.add('correct');
                correcIcon4.style.display = 'block';
                wrongIcon4.style.display = 'none';
            }
        }
        timeLeft = -1;
        elem.innerHTML = timeLeft + 1;
    }
    if (n == 9) {
        nextQuestion.style.display = 'none';
        nextPage.style.display = 'block';
    }
})
op4.addEventListener('click', (e) => {
    if (timeLeft == -1) {
        alert("Time Over! Please move to the next Question")
    }
    else {
        if (sub_op4.textContent === questions[n].answer) {
            op4.classList.add('correct');
            correcIcon4.style.display = 'block';
            wrongIcon4.style.display = 'none';
            correctAns++;
        }
        else {
            op4.classList.toggle('wrong');
            correcIcon4.style.display = 'none';
            wrongIcon4.style.display = 'block';
            if (sub_op1.textContent === questions[n].answer) {
                op1.classList.add('correct');
                correcIcon1.style.display = 'block';
                wrongIcon1.style.display = 'none';
            }
            if (sub_op2.textContent === questions[n].answer) {
                op2.classList.add('correct');
                correcIcon2.style.display = 'block';
                wrongIcon2.style.display = 'none';
            }
            if (sub_op3.textContent === questions[n].answer) {
                op3.classList.add('correct');
                correcIcon3.style.display = 'block';
                wrongIcon3.style.display = 'none';
            }
        }
        timeLeft = -1;
        elem.innerHTML = timeLeft + 1;
    }
    if (n == 9) {
        nextQuestion.style.display = 'none';
        nextPage.style.display = 'block';
    }
})

let c = 0;
var audio = new Audio('Quiz-audio.mp3');
let play = document.querySelector('#play');
let mute = document.querySelector('.mute');

function playaudio() {

    if (c % 2 == 0) {
        audio.play();
        play.style.display = 'block';
        mute.style.display = 'none';

    }
    else {
        audio.pause()
        play.style.display = 'none';
        mute.style.display = 'block';
    }
    c++;
}

playaudio()

let sound = document.querySelector('.sound');
sound.addEventListener('click', playaudio);

//code for result.html file

let progress = document.querySelector('.progress');
let successRate = document.querySelector('.green-value');
let unsuccessRate = document.querySelector('.red-value');
let atemptedQuestion = document.querySelector('.que-value');

if (document.querySelector('.result').style.display == 'block') {


    
}