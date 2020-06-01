/***************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/


/***************************** 
* Variables mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried );

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried );

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/



/*
* Basic operators
*/

/*
var year, yearJohn, yearJohn;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Yeehaw!');
var x;
console.log(typeof x);
*/



/*******************************
* Operator precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 -6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x); 
x += 10;
console.log(x);
x--;
console.log(x);
*/
  

/*******************************
* CODING CHALLANGE 1
*/

/*
var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark;
massJohn = 80;
massMark = 75;
heightJohn = 1.76;
heightMark = 1.82;

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);
console.log(bmiJohn, bmiMark);

isHigher = bmiJohn > bmiJohn;
console.log(isHigher);

console.log('If I say that Mark has a greater BMI than John, then that is' + ' ' + isHigher);
*/



/*******************************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark;
massJohn = 80;
massMark = 175;
heightJohn = 1.76;
heightMark = 1.82;

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}

// isHigher = bmiJohn > bmiJohn; 
// console.log(isHigher);
// console.log('If I say that Mark has a greater BMI than John, then that is' + ' ' + isHigher);
*/


/*******************************
* Boolean logic
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/



/*******************************
* The Ternary Operator and Switch Statements
*/

/*
var firstName = 'John';
var age = 15;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/*
if (age >= 18) {
    console.log('beer');
} else {
    console.log('juice');
}
*/

/*
// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;    
    case 'driver': 
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer': 
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
*/


/*
age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case (age >= 20 && age < 30):
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
8?


/*******************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;

height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}


// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/



/*******************************
* CODING CHALLENGE 2
*/

/*
var avgScoreJohn = (110 + 320 + 103) / 3;
console.log('John has an average score of ' + avgScoreJohn + '.');

var avgScoreMike = (116 + 95 + 123) / 3;
console.log('Mike has an average score of ' + avgScoreMike + '.');

var avgScoreMary = (97 + 134 + 102) / 3;
console.log('Mary has an average score of ' + avgScoreMary + '.');
*/

// switch (true) {
//     case avgScoreJohn > avgScoreMike:
//         console.log('With ' + avgScoreJohn + ' , John has a higher average score than Mike');
//         break;
//     case avgScoreJohn < avgScoreMike:
//         console.log('With ' + avgScoreMike + ' , Mike has a higher average score than John');
//         break;
//     default:
//         console.log('John\'s average is ' + avgScoreJohn + ' , Mike\'s average is ' + avgScoreMike + ' ; it\'s a draw!!');
// }

/*
switch (true) {
    case avgScoreJohn > avgScoreMike && avgScoreJohn > avgScoreMike:
        console.log('John WINS with average ' + avgScoreJohn + '!! (Mike: ' + avgScoreMike + ' , Mary: ' + avgScoreMary + ')');
        break;
    case avgScoreMike > avgScoreJohn && avgScoreMike > avgScoreMary:
        console.log('Mike WINS with average ' + avgScoreMike + '!! (John: ' + avgScoreJohn + ' , Mary: ' + avgScoreMary + ')');
        break;
    case avgScoreMary > avgScoreJohn && avgScoreMary > avgScoreMike:
        console.log('Mary WINS with average ' + avgScoreMary + '!! (Mike: ' + avgScoreMike + ' , John: ' + avgScoreJohn + ')');
        break;
    default:
        console.log('John ' + avgScoreJohn + ' , Mike ' + avgScoreMike + ' , Mary ' + avgScoreMary + ' ; it\'s a draw!!');
}
*/


/*******************************
* Functions
*/

/*
function calcuteAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calcuteAge(1990);
var ageMike = calcuteAge(1948);
var ageJane = calcuteAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calcuteAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/
 

/*******************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

/*

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives an uber in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/


/*******************************
* Arrays
*/

/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop()
john.pop()
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/


/*******************************
* CODING CHALLENGE 3
*/

// JORD attempt #1
/*
function calculatePayment(bill) {
    var tip;

    if (bill < 50) {
        tip = bill * 0.2;
        total = bill + tip;
        console.log('Bill: ' + bill);
        console.log('Tip (20%): ' + tip);
        console.log('Total amount to pay: ' + total);
    } else if (bill >= 50 && bill < 200) {
        tip = bill * 0.15;
        total = bill + tip;
        console.log('Bill: ' + bill);
        console.log('Tip (15%): ' + tip);
        console.log('Total amount to pay: ' + total);
        // return tip;
    } else {
        tip = bill * 0.1;
        total = bill + tip;
        console.log('Bill: ' + bill);
        console.log('Tip (10%): ' + tip);
        console.log('Total amount to pay: ' + total);
    }

}  
/********
// var bill1 = 124;
// var bill2 = 48;
// var bill3 = 268;
********/
/*
var tip1 = calculatePayment(124);
var tip2 = calculatePayment(48);
var tip3 = calculatePayment(268);

var tips = [tip1, tip2, tip3];
console.log(tips);

/**********
// var totals = [calculatePayment(124), calculatePayment(48), calculatePayment(268)];
// console.log(totals);
**********/

//// Solution from video

/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(10));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);
*/


/*******************************
* Objects and properties
*/

/*

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

// Manipulate object property values: 1) dot notation, 
john.job = 'designer';
// or 2) bracket notation (string value)
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);



/*******************************
* Objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1989,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);


/*******************************
* CODING CHALLENGE 4
*/
/*

// Jord attempt #1

var john = {
    fullName: 'John Smith',
    mass: 80,
    height: 1.76,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};

john.calcBMI();
console.log(john);

// var mark = {};
// mark['fullName'] = 'Mark Jones';
// mark['mass'] = 90;
// mark['height'] = 1.95;
// mark['calcBMI'] = function() { this.BMI = this.mass / (this.height * this.height); }
// console.log(mark);

var mark = {
    fullName: 'Mark Jones',
    mass: 70,
    height: 1.76,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};

mark.calcBMI();
console.log(mark);

function highestBMI(person1, person2) {
    if (person1.BMI > person2.BMI) {
        console.log(person1.fullName + ' has the highest BMI, namely ' + person1.BMI + '.');
    } else if (person2.BMI > person1.BMI) {
        console.log(person2.fullName + ' has the highest BMI, namely ' + person2.BMI + '.');
    } else {
        console.log('Identical BMI\'s!!');
    }
}

highestBMI(john, mark);


//// Solution from video

var john = {
    fullName: 'John Smith',
    mass: 80,
    height: 1.76,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.bmi; // this is action is required, see assignment text
    }
};

var mark = {
    fullName: 'Mark Miller',
    mass: 80,
    height: 1.76,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.bmi; // this is action is required, see assignment text
    }
};

if (john.calcBMI() > mark.calcBMI()) { // calculate & read at the same time; this is possible because this.bmi was RETURNED from the method
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higer BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}




/*******************************
* Loops and iteration
*/

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// For loop
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/


// continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0 ; i--) {
    console.log(john[i]);
    john.pop();
}
console.log(john);
*/


/*******************************
* CODING CHALLENGE 5
*/

// tipCalculator from earlier challenge:
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(10));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);
*/

// Jord's attempt #1 (doesn't quite work, almost though ... )
/*
var billsJohn = {
    values: [124, 48, 268, 180, 42],
    calcTip: function () {
        this.tips = [];
        this.finalPaidAmounts = [];
        
        var percentage;
        for (i = 0; i < this.values.length; i++) {
            if (this.values[i] < 50) {
                percentage = .2;
            } else if (this.values[i] >= 50 && this.values[i] < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips.push(percentage * this.values[i]);
            this.finalPaidAmounts.push(this.values[i] + this.tips[i]);
            }
        console.log('John tipped: ' + this.tips);
        console.log('John paid in total: ' + this.finalPaidAmounts);
        }
    }

billsJohn.calcTip();


var billsMark = {
    values: [77, 375, 110, 45],
    tips: [],
    finalPaidAmounts: [],
    calcTip: function () {
        var percentage;
        for (i = 0; i < this.values.length; i++) {
            if (this.values[i] < 100) {
                percentage = .2;
            } else if (this.values[i] >= 100 && this.values[i] < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips.push(percentage * this.values[i]);
            this.finalPaidAmounts.push(this.values[i] + this.tips[i]);
            }
        console.log('Mark tipped: ' + this.tips);
        console.log('Mark paid in total: ' + this.finalPaidAmounts);
        }
    }

billsMark.calcTip();

var tipsJohn = billsJohn.tips;
var tipsMark = billsMark.tips;

function calcAverageTip(tips) {
    var sum = 0;
    for (i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    var avg = sum / tips.length;
    console.log('average tip: ' + avg);
}

var avgTipJohn = calcAverageTip(tipsJohn);
var avgTipMark = calcAverageTip(tipsMark);
*/



/*******************************
* 
*/













