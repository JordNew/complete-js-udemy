 // Lecture: let and const


// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);


// ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

/*
// ES5
function driversLicence5(passedTest) {

    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;

    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);


// ES6
function driversLicence6(passedTest) {

    // console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);




let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

*/


/////////////////////////////////////
// Lecture: Blocks and IIFEs
/*
{
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(c);
*/


/////////////////////////////////////
// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}


// ES5
console.log('This is ' + firstName + '. He was born in  ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old biiaaaaatch.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.startsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/


/////////////////////////////////////
// Lecture: Arrow Functions
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/


/////////////////////////////////////
// Lecture: Arrow functions 2

/*
// ES5 
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
// box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

const box66 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();



function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    // console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr6 = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr6);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);

*/



/////////////////////////////////////
// Lecture: Destructuring

/*
// ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];

// ES6
const [name6, age6] = ['John', 26];
console.log(name6);
console.log(age6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);




function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
*/


/////////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/

// ES5
/*
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    } else {
        boxesArr5[i].textContent = 'I changed to blue!';
    }
}
*/

// ES6
/*
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    } else {
        cur.textContent = 'I changed to blue!';
    }
}

// ES5
var ages = [12, 17, 8, 11, 44, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
})
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/


/////////////////////////////////////
// Lecture: Spread operator
/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/


/////////////////////////////////////
// Lecture: Rest Parameters

// ES5
/*
function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    var today = new Date().getFullYear();
    argsArr.forEach(function(cur) {
        console.log((today - cur) >= 18);
    })
}

// isFullAge5(1990, 1999, 1965);
// isFullAge5(2012, 1990, 1999, 2005, 1965);

// ES6
function isFullAge6(...years) {
    const today = new Date().getFullYear();
    years.forEach(cur => console.log( today - cur >= 30));
}

isFullAge6(1990, 1999, 1965);
console.log('woohoo!!');
isFullAge6(2012, 1990, 1999, 2005, 1965);



// ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    var today = new Date().getFullYear();
    argsArr.forEach(function(cur) {
        console.log((today - cur) >= limit);
    })
}

isFullAge5(21, 1990, 1999, 1965);
// isFullAge5(2012, 1990, 1999, 2005, 1965);

// ES6
function isFullAge6(limit, ...years) {
    const today = new Date().getFullYear();
    years.forEach(cur => console.log(today - cur >= limit));
}

isFullAge6(25, 1990, 1999, 1965);
isFullAge6(23, 2012, 1990, 1999, 2005, 1965);
*/



/////////////////////////////////////
// Lecture: Default Parameters

// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this. firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 'Lopez', 1983, 'Spanish')
*/

// ES6
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Chinese') {
    this. firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 'Lopez', 1983, 'Spanish')
*/


/////////////////////////////////////
// Lecture: Maps
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer - ring-a-ding-ding!!');
question.set(false, 'Nope! Try again');

console.log(question.get('question'));
// console.log(question.size);


if (question.has(4)) {
    // question.delete(4);
    // console.log('Yep, 4 is present!')
}

// question.clear();


// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}.`));

for (let [key, value] of question.entries()) {
    
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`)
    }
}

const ans = parseInt(prompt('Enter the NUMBER of your answer'));
console.log(question.get(ans === question.get('correct')));
*/


/////////////////////////////////////
// Lecture: Classes

// ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
// john5.calculateAge();


// ES6

// IMPORTANT NOTES on ES6 CLASSES
// 1. class definitions are NOT hoisted --> they need to be implemented BEFORE they can be used
// 2. only METHODS can be added to classes (not properties)
// >> no problem, because inheriting properties to object instances is not a good practice anyway
// 3. adding STATIC METHODS is possible, but is not very useful in many cases


class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/



/////////////////////////////////////
// Lecture: Classes and Subclasses
/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/





/////////////////////////////////////
// CODING CHALLENGE 8


// PARKS
/*
class Park {
    constructor(name, buildYear, trees, area) {
        this.name = name;
        this.buildYear = buildYear;
        this.trees = trees;
        this.area = area;
    }
    calcDensity() {
        console.log(`${this.name} has a tree density of ${this.trees / this.area} trees per square km`)
    }
    has1000() {
        if (this.trees >= 1000) {
            console.log(`${this.name} has more than a thousand trees. To be exact: ${this.trees}.`)
        } else {
            console.log(`${this.name} has less than a thousand trees. To be exact: ${this.trees}.`)
        }
    }
}

const wileyPark = new Park('Wiley Park', 1920, 1800, 2);
const leidseHout = new Park('Leidse Hout', 1900, 4200, 6);
const panBos = new Park('Panbos', 1886, 3700, 7);
const hotzPark = new Park('Hotzpark', 1989, 60, 0.5);

const parks = [wileyPark, leidseHout, panBos, hotzPark];


function calcAvgAge(parks) {
    let totalYears = 0;
    for (const park of parks) {
    // console.log(totalYears);
    totalYears += new Date().getFullYear() - park.buildYear;
    // console.log(totalYears);
    }    
    // return totalYears;
    
    console.log(`Our ${parks.length} parks have an average age of ${totalYears / parks.length} years.`);
    // console.log('totalYears: ' + totalYears);
}


// const displayAllDensity = parks.map(park => park.calcDensity());


function displayAllDensity(parks) {
    for (park of parks) {
        park.calcDensity();
    }
}


// const display1000 = parks.map(el => el.has1000());
    

function display1000(parks) {
    for (park of parks) {
        park.has1000();
    }
}

console.log('----PARKS REPORT----');
console.log('');
console.log(' >>> AVERAGE AGE:');
calcAvgAge(parks);
console.log('');
console.log(' >>> TREE DENSITY:');
displayAllDensity(parks);
console.log('');
console.log(' >>> TREE QUANITITY:');
// console.log(display1000);
display1000(parks);
console.log('');
console.log('----STREETS REPORT----');


// STREETS

// ... 
*/


///////////////////////////


// Solution from Jonas:

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; // km2
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`)
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }

}

const allParks = [  new Park('Wiley Park', 1972, 3, 340), 
                    new Park('Leidse Hout', 1946, 5, 2900), 
                    new Park('Panbos', 1907, 4.2, 3280), 
                    new Park('Hotzpark', 1989, 0.4, 28)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    // [3, 5, 6]

    return [sum, sum / arr.length];
}


function reportParks(parks) {

    console.log('---PARKS REPORT----');

    // Density
    parks.forEach(el => el.treeDensity());

    // Average age
    const ages = parks.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages)
    console.log(`Our ${parks.length} parks have an average age of ${avgAge} years.`);

    // Which parks have > 1000 trees?
    for (park of parks) {
        const i = parks.indexOf(park);
        if (park.numTrees >= 1000) {
            // indexes.push(parks.indexOf(park));
            console.log(`${parks[i].name} has more than 1000 trees.`);  
        }
    }
    
    // THE BELOW CODE (JONAS' SOLUTION) ONLY SUFFICES WHEN THERE IS ONLY ONE PARK WITH >1000 TREES, FOR IT DOES NOT ITERATE
    // const i = parks.map(el => el.numTrees).findIndex(el => el >= 1000);
    // console.log(`${parks[i].name} has more than 1000 trees.`);

}



function reportStreets(s) {
    console.log('---STREETS REPORT----');
    // Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);























