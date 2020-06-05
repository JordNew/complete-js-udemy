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

var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.displayQandA = function() {

        console.log(this.question);
        var numberOfAnswers = this.answers.length;
        // var randomNumber = Math.floor(Math.random() * Math.floor(numberOfAnswers));
        for (i = 0; i < numberOfAnswers; i++) {
            console.log((i + 1) + ' - ' + this.answers[i]);
            // console.log(this.correctAnswer);
        }
    }
    this.isCorrect = function() {
        var ca = correctAnswer + 1;
        // var z;
        // console.log(ca);
        // switch (prompt('Enter the NUMBER of your answer:')) {
        //     case correctAnswer + 1:
        //         console.log('That is CORRECT! One point earned!');
        //         break;
        //     case 'exit':
        //         console.log('exiting game - GOODBYE!!');
        //         return;    
        //     default:
        //         console.log('Nope!');    
        // }
        
        
        if ('exit' == prompt('Enter the NUMBER of your answer:')) {
            console.log('exiting game - GOODBYE!!');
            return;
        } else if (prompt('Enter the NUMBER of your answer:') == this.correctAnswer + 1) {
            console.log('That is CORRECT! One point earned!');
        } else {
            console.log('Nope!');
        }


        // if (prompt('Enter the NUMBER of your answer:') == this.correctAnswer + 1) {
        //     console.log('That is CORRECT! One point earned!');
        // } else if ('exit' == prompt('Enter the NUMBER of your answer:')) {
        //     console.log('exiting game - GOODBYE!!');
        //     return;
        // } else {
        //     console.log('Nope!');
        // }
    }
}


// var answers1 = ['Henk', 'Rob', 'Leon', 'Bert'];
// var q1 = new Question('What is your name?', answers1, 1);

// var answers2 = ['green', 'black', 'pink', 'silver', 'maroon'];
// var q2 = new Question('What is the sexiest color in the world?', answers2, 3);

// var answers3 = ['James Brown', 'Bootsie Collins', 'Prince', 'Mick Jagger', 'Mel Gibson'];
// var q3 = new Question('Who\'s your daddy?', answers3, 2);

// var answers4 = ['in a bit', 'later gator', 'too soon, chump', 'what the?'];
// var q4 = new Question('How soon is now?', answers4, 0);

// var allQuestions = [q1, q2, q3, q4];

// var randomQandA = function(q) {
//         var numberOfQuestions = q.length;
//         var randomNumber = Math.floor(Math.random() * Math.floor(numberOfQuestions));
//         console.log(q[randomNumber].question);

//         var a = q[randomNumber].answers;
//         // var ca = q[randomNumber].correctAnswer;
//         var numberOfAnswers = a.length;
//         for (i = 0; i < numberOfAnswers; i++) {
//             console.log((i + 1) + ' - ' + a[i]);
//         }
//         q[randomNumber].isCorrect();
//     }   

// randomQandA(allQuestions);


var answers1 = ['Henk', 'Rob', 'Leon', 'Bert'];
var q1 = new Question('What is your name?', answers1, 1);

var answers2 = ['green', 'black', 'pink', 'silver', 'maroon'];
var q2 = new Question('What is the sexiest color in the world?', answers2, 3);

var answers3 = ['James Brown', 'Bootsie Collins', 'Prince', 'Mick Jagger', 'Mel Gibson'];
var q3 = new Question('Who\'s your daddy?', answers3, 2);

var answers4 = ['in a bit', 'later gator', 'too soon, chump', 'what the?'];
var q4 = new Question('How soon is now?', answers4, 0);

var allQuestions = [q1, q2, q3, q4];

(function(q) {
    
    function nextQuestion() {
        askQuestion();
    }
    
    function askQuestion() {
        var numberOfQuestions = q.length;
        var randomNumber = Math.floor(Math.random() * Math.floor(numberOfQuestions));
        console.log(q[randomNumber].question);
        
        var a = q[randomNumber].answers;
        // var ca = q[randomNumber].correctAnswer;
        var numberOfAnswers = a.length;
        for (i = 0; i < numberOfAnswers; i++) {
            console.log((i + 1) + ' - ' + a[i]);
        }
        q[randomNumber].isCorrect();
        // nextQuestion();
    }
    askQuestion();   
}
)(allQuestions);

