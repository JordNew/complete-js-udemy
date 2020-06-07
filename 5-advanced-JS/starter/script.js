// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.isOfAge = function() {
    // return (2020 - this.yearOfBirth >= 21);
    // if (true) {
    //     console.log('yeah');
    // } else {
    //     console.log('nope');
    // }
    var isOfAge = 2020 - this.yearOfBirth;
    var yesOrNo;
    if (isOfAge >= 21) {
        yesOrNo = true;
        console.log(yesOrNo);
    } else {
        yesOrNo = false;
        console.log(yesOrNo);
    }
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');
var henk = new Person('Henk', 2000, 'student');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

henk.isOfAge();
john.isOfAge();
*/


// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
})
*/

/*
// Primitives vs objects


// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a, b);


// Objects
var obj1 = {
    name: 'John',
    age: 26
}
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/



////////////////////////////////////////
// Lecture: Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
*/



////////////////////////////////////////
// Lecture: Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
            return function(name) {
                console.log('What subject do you teach, ' + name + '?');
            }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Duderino');



function whichMetallicaMember(instrument) {
    if (instrument === 'rythm guitar') {
        return function(name) {
            console.log(name + '\'s favourite Metallica member is James, who plays the ' + instrument);
        }
    } else if (instrument === 'lead guitar') {
        return function(name) {
            console.log(name + '\'s favourite Metallica member is Kirk, who plays the ' + instrument);
        }
    } else if (instrument === 'bass') {
        return function(name) {
            console.log(name + '\'s favourite Metallica member is Jason, who plays the ' + instrument);
        }
    } else if (instrument === 'drums') {
        return function(name) {
            console.log(name + '\'s favourite Metallica member is Lars, who plays the ' + instrument);
        }
    }
}

var lars = whichMetallicaMember('drums');
var james = whichMetallicaMember('rythm guitar');
var jason = whichMetallicaMember('bass');
var kirk = whichMetallicaMember('lead guitar');


lars('Henk');
james('Rob');
jason('Leon');
kirk('Dave Mustaine');

whichMetallicaMember('bass')('Jaapio');
*/



////////////////////////////////////////
// Lecture: IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >=5);
}
game();

(function() {
    var score = Math.random() * 10;
    console.log(score >=5);
})();

// console.log(score);


(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score, score >= 5 - goodLuck);
})(1);
*/


////////////////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
*/
// retirement(66)(1990);

/* 
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
            return function(name) {
                console.log('What subject do you teach, ' + name + '?');
            }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/

///// REFACTORING of the interviewQuestion function, using Closures
// difference: this time only ONE function is returned, instead of MULTIPLE 
// possible functions to return. The if-statement happens WITHIN this function,
// using the job variable -> this is possible thanks to CLOSURES (inner function 
// CLOSES IN on the variables of the outer function, so they can be used even after
// the outer function has stopped running).
/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?')
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('vriendje Stokvis');
interviewQuestion('designer')('Grote Smurf');
interviewQuestion('other')('Sinterklaas');
*/



////////////////////////////////////////
// Lecture: Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
        console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '!');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// .call: emily 'borrows' john's methods 
// >> ('this' is set to 1st argument, in this case emily)
john.presentation.call(emily, 'friendly', 'afternoon');

// .apply: similar to .call, except arguments are passed in an array
// >> ('this' is still set to 1st argument)
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// .bind: generates a COPY of the function (with PRESET ARGUMENTS),
// so it can be STORED somewhere (instead of immediately calling it)
// >> ('this' is set to 1st argument)
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');
*/




////////////////////////////////////////
// CODING CHALLENGE

/*
(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQandA = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log((i + 1) + ' - ' + this.answers[i]);
        }
    }
    
    Question.prototype.isCorrect = function(userInput) {
    
            var correctAnswerNumber = this.correctAnswer + 1;
            
            if ('exit' == userInput || 'quit' == userInput) {
                console.log('exiting game - GOODBYE!! (refresh page to play again)');
                gameVar[1] = 1;
                return gameVar;
            } else if (userInput == correctAnswerNumber) {
                console.log(`>>> Answer #${userInput} is CORRECT! One point earned!`);
                gameVar[0] += 1;
                console.log('SCORE: ' + gameVar[0]);
                console.log('');
            } else {
                console.log(`>>> Nope! Answer #${userInput} was FALSE`);
                console.log('SCORE: ' + gameVar[0]);
                console.log('');
            }
    }
    
    
    var q1, q2, q3, q4, q5, q6, q7, q8, allQuestions;
    // gameVar[0] is score, gameVar[1] is exitcode (0 = keep playing, 1 = exit game)
    var gameVar = [];
    
    q1 = new Question('What is your name?', ['Henk', 'Rob', 'Leon', 'Bert'], 1);
    
    q2 = new Question('What is the sexiest color in the world?', ['green', 'black', 'pink', 'silver', 'maroon'], 3);
    
    q3 = new Question('Who\'s your daddy?', ['James Brown', 'Bootsie Collins', 'Prince', 'Mick Jagger', 'all of the above!'], 4);
    
    q4 = new Question('How soon is now?', ['in a bit', 'later gator', 'too soon, chump', 'what the?'], 0);
    
    q5 = new Question('The most romantic Amsterdam hangout is?', ['Hotel Buiten', 'Lely', 'Toussaint', 'Steiger 4', 'all of the above!'], 4);
    
    q6 = new Question('What\'s for breakfast?', ['Pizza', 'Eggs', 'Yoghurt', 'Guitar'], 3);
    
    q7 = new Question('Who\'s your mommy?', ['Ella', 'Amy', 'Aretha', 'Femke', 'all of the above!'], 4);
    
    q8 = new Question('What better than banana bread', ['More banana bread', 'Carrot cake', 'More banana bread and carrot cake', 'More banana bread and more carrot cake'], 3);
    
    allQuestions = [q1, q2, q3, q4, q5, q6, q7, q8];
    
    var randomNumber = Math.floor(Math.random() * allQuestions.length);
    
    allQuestions[randomNumber].displayQandA();
    
    var userInput = parseInt(prompt('Enter the NUMBER of your answer (or "exit"):'));
    
    allQuestions[randomNumber].isCorrect(userInput);
})();
*/

(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQandA = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log((i + 1) + ' - ' + this.answers[i]);
        }
    }
    
    Question.prototype.isCorrect = function(userInput, callback) {
    
            var correctAnswerNumber = this.correctAnswer + 1;
            var sc;

            if (userInput === correctAnswerNumber) {
                console.log(`>>> Answer #${userInput} is CORRECT! One point earned!`);
                console.log('');

                sc = callback(true);
            } else if (userInput === 'exit' || userInput === 'quit') {
                sc = callback(false);
                console.log('');
                console.log('FINAL SCORE: '+ sc);
                console.log('exiting game - GOODBYE!! (refresh page to play again)');
                return;
            } else {
                console.log(`>>> Nope! Answer #${userInput} was FALSE`);
                console.log('');

                sc = callback(false);
            }
            this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('SCORE: ' + score);
    }
    
    var q1 = new Question('What is your name?', ['Henk', 'Rob', 'Leon', 'Bert'], 1);
    
    var q2 = new Question('What is the sexiest color in the world?', ['green', 'black', 'pink', 'silver', 'maroon'], 3);
    
    var q3 = new Question('Who\'s your daddy?', ['James Brown', 'Bootsie Collins', 'Prince', 'Mick Jagger', 'all of the above!'], 4);
    
    var q4 = new Question('How soon is now?', ['in a bit', 'later gator', 'too soon, chump', 'what the?'], 0);
    
    var q5 = new Question('The most romantic Amsterdam hangout is?', ['Hotel Buiten', 'Lely', 'Toussaint', 'Steiger 4', 'all of the above!'], 4);
    
    var q6 = new Question('What\'s for breakfast?', ['Pizza', 'Eggs', 'Yoghurt', 'Guitar'], 3);
    
    var q7 = new Question('Who\'s your mommy?', ['Ella', 'Amy', 'Aretha', 'Femke', 'all of the above!'], 4);
    
    var q8 = new Question('What better than banana bread', ['More banana bread', 'Carrot cake', 'More banana bread and carrot cake', 'More banana bread and more carrot cake'], 3);
    
    var allQuestions = [q1, q2, q3, q4, q5, q6, q7, q8];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {
    
        var randomNumber = Math.floor(Math.random() * allQuestions.length);
        
        allQuestions[randomNumber].displayQandA();
        
        var userInput = prompt('Enter the NUMBER of your answer (or "exit"):');
        
        if (userInput !== 'exit' && userInput !== 'quit') {
            allQuestions[randomNumber].isCorrect(parseInt(userInput), keepScore);
            nextQuestion();
        } else {
            allQuestions[randomNumber].isCorrect(userInput, keepScore);
        }
    }

    nextQuestion();

})();





















