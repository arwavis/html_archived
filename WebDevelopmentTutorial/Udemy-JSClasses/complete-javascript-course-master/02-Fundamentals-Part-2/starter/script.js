'use strict'; // This will activate strict Mode and this is very important to activate.

//juice example of using function.

/*
function fruits(nOApples, nOOranges) {
    console.log(`The given parameters are ${nOApples} apples and ${nOOranges} oranges`)

    const juice = `Prepare the juice with ${nOApples} apples and ${nOOranges} oranges`
    return juice;
}
let appleJuice = fruits(5, 0);
console.log(appleJuice);
//You can also call this function as below.

console.log(fruits(5, 0));
*/

//****************************************************************************************************************************************** */
// Calculate Age using function declaration
/*
function calAge1(birthYear) {
    let todaysDate = new Date();
    let currentYear = todaysDate.getFullYear();
    //The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date.
    return currentYear - birthYear;
}

console.log(`My current age is ${calAge1(1983)}`);

// You can also write the above function as an anonymous funciton by storing the function to a vriable. (Function Expression).

let calAge2 = function(birthYear) {
    let todaysDate = new Date();
    let currentYear = todaysDate.getFullYear();
    //The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date.
    return currentYear - birthYear;
}

console.log(`My current age is ${calAge2(1981)}`);

// Arrow function for the above function.

let todaysDate = new Date();
let currentYear = todaysDate.getFullYear();

let calAge3 = birthYear => currentYear - birthYear;
console.log(`My current age is ${calAge3(1982)}`)

// Multiple code in Arrow Function : Let's try and calcualte retirement.

let ageOfRetirement = birthYear => {
    let age = currentYear - birthYear;
    let retirement = 60 - age;
    return retirement;
}
console.log(`My retirement will in ${ageOfRetirement(1983)} years`)

// Or you can write the same as below with an additional paramenter.

let ageOfRetirement2 = (birthYear, firstName) => {
    let age = currentYear - birthYear;
    let retirement = 60 - age;
    return (`${firstName} retires in ${retirement} years`);
}
console.log(ageOfRetirement2(1983, "Ram"));
console.log(ageOfRetirement2(1985, "Raj"));

// Calling function from a funciton : Lesson 36

function cutPieces(fruits) {
    return fruits * 4;
}

function fruitProcessor(nOApples, nOOranges) {

    let applePieces = cutPieces(nOApples);
    let orangePieces = cutPieces(nOOranges);
    console.log(applePieces);
    console.log(orangePieces);

    console.log(`The given parameters are ${nOApples} apples and ${nOOranges} oranges`)
    const juice = `Prepare the juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

// Code Chllenge 1
/*
let calcAverage = (score1, score2, score3) => {
    let average = Math.floor((score1 + score2 + score3) / 3);
    return average;

}
console.log("Data One");
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

let checkWin = function(avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dophins Win 🏆${avgDolphins} Vs ${avgKoalas}`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas Win 🏆 ${avgKoalas} Vs ${avgDolphins}`);
    } else {
        console.log("No one Wins ⭐️");
    }
}

console.log(checkWin(scoreDolphins, scoreKoalas));

/*console.log("Data Two");

let avgDophinsDataTwo = calcAverage(85, 54, 41);
let avgKoalasDataTwo = calcAverage(23, 34, 27);
console.log(avgDophinsDataTwo, avgKoalasDataTwo);

let checkWinnerTwo = function(avgDolhinsTwo, avgKoalasTwo) {

    if (avgDolhinsTwo >= avgKoalasDataTwo) {
        console.log(`Dolphins Win 🏆${avgDolhinsTwo} Vs ${avgKoalasTwo}`);
    } else if (avgKoalasTwo >= avgDolhinsTwo) {
        console.log(`Koalas Win 🏆 ${avgKoalasTwo} Vs ${avgDolhinsTwo}`);
    } else {
        console.log("No one Wins ⭐️!");
    }
}
console.log(checkWinnerTwo(avgDophinsDataTwo, avgKoalasDataTwo));

*/
/*
// anther way to write this code is not create additional variable and just edit the values
// Data Two
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
// Here checkwinner will get the scores from new values inputed in the above two lines. no need of another if condition. Simply call the checkWin Function
console.log(checkWin(scoreDolphins, scoreKoalas));
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//Code Challeng 2 - Arrays.
/*
let calcTip = function(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = (bill * 15) / 100;
    } else {
        tip = (bill * 20) / 100;
    }
    return tip;
};

// you can also write the above code with ternary operation like below
/*
let calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}*/
/*
const Bills = [125, 555, 44];
console.log("Bill value: " + Bills);

let tips1 = calcTip(Bills[0]);
let tips2 = calcTip(Bills[1]);
let tips3 = calcTip(Bills[2]);

//console.log(tips1, tips2, tips3);
const tips = [tips1, tips2, tips3];
//You can write the above as below without creating a variable.
//const tips = [calcTip(Bills[0]), calcTip(Bills[1]), calcTip(Bills[2])];

console.log("Tips: " + tips);

const total = [Bills[0] + tips[0], Bills[1] + tips[1], Bills[2] + tips[2]]
console.log("Total: " + total);
*/

// Objects
/*
const me = {
    firstName: 'Aravind',
    lastName: 'Viswanathan',
    age: 2021 - 1983,
    job: 'Admin',
    friends: ['Ram', 'Raj', 'Suresh']
};

console.log(me);
console.log("My last name is : " + me.lastName);
console.log("My last name is : " + me['lastName']);

const nameKey = 'Name';

console.log(me['first' + nameKey]);
console.log(me['last' + nameKey]);

// to add object to me

me.location = 'India';
// You can either add using . or [];
me['email'] = 'v_ramerwd@SpeechGrammarList.com';
console.log(me);

const interstedIn = prompt("What is that you are interested in Me, firstName, lastName, age, job, friends?");
console.log(interstedIn);

if (me[interstedIn]) {
    if (me[interstedIn] === me['friends']) {
        console.log("My " + interstedIn + " are: " + me[interstedIn]);
    } else {
        console.log("My " + interstedIn + " is: " + me[interstedIn]);
    }
} else {
    console.log("There is no data available for the choice you selected.");
}

//console.log("I have " + me[interstedIn].length + " " + interstedIn + " and my best freind is: " + me.friends[1]);
// OR
console.log(`${me.firstName} has ${me.friends.length} friends and his best friend is ${me.friends[0]}`)
*/

//Object Method.

/*const me = {
    firstName: 'Aravind',
    lastName: 'Viswanathan',
    birthYear: 1983,
    job: 'Admin',
    friends: ['Ram', 'Raj', 'Suresh'],
    hasDriversLicense: true,

    calcAge: function(birthYear) {
        return 2021 - birthYear;
    }
};

//How to call the function from an object

console.log(me.calcAge(1983));
//or
console.log("My age is: " + me.calcAge(me.birthYear));

// OR you can call as 

console.log(me['calcAge'](1983));
*/

// using this method.
/*
const me = {
    firstName: 'Aravind',
    lastName: 'Viswanathan',
    currentYear: 2021,
    birthYear: 1983,
    job: 'Admin',
    friends: ['Ram', 'Raj', 'Suresh'],
    hasDriversLicense: false,

    calcAge: function() {
        console.log(this);
        return this.currentYear - this.birthYear;
    },

    getSummary: function() {
        return `${this.firstName} is ${this.calcAge()} years Old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} Driver's License`

    }
};

//How to call the function from an object

//console.log(me.calcAge());
//console.log(`${me.firstName} is ${me.calcAge()}-years old ${me.job} and he has a driver's License`)

// Direct Callingg.
if (me.hasDriversLicense) {
    console.log(`${me.firstName} is ${me.calcAge()}-year old ${me.job} and he has a driver's License`)
} else {
    console.log(`${me.firstName} is ${me.calcAge()}-year old ${me.job} and he has no driver's License`)

}

// Calling a method.

console.log(me.getSummary());
*/

//Coding Challeng 3
/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {

        return Math.floor(this.mass / this.height ** 2);
    }

}

console.log(mark.calcBMI());

const john = {

    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {

        return Math.floor(this.mass / this.height ** 2);
    }
}

console.log(john.calcBMI());

if (john.calcBMI() > mark.calcBMI()) {

    console.log(`${john.firstName} ${john.lastName} BMI (${john.calcBMI()}) is greate than ${mark.firstName} ${mark.lastName} BMI (${mark.calcBMI()})`);
} else {
    console.log(`${mark.firstName} ${mark.lastName} BMI (${mark.calcBMI()}) is greater than ${john.firstName} ${john.lastName} BMI (${john.calcBMI()})`);
}*/

// for loop example.

/*
for (let rep = 0; rep < 11; rep++) {
    console.log("Lifting Weigths repetetion " + rep + " `🏋️‍♂️")
}

const me = [
    'Aravind',
    'Viswanathan',
    2021 - 1983,
    'Admin', ['Ram', 'Raj', 'Suresh'],
    true
];

const types = [];

for (let i = 0; i < me.length; i++) {
    console.log(me[i]);

    //types[i] = typeof me[i];
    //or
    types.push(typeof me[i]);

}
console.log(types);

*/
/*
const year = [1997, 2007, 2013, 1983];

let age = [];

for (let i = 0; i < year.length; i++) {
    console.log(year[i]);
    age.push(2021 - year[i]);
}

console.log(age);

//continue and break

const me = [
    'Aravind',
    'Viswanathan',
    2021 - 1983,
    'Admin', ['Ram', 'Raj', 'Suresh'],
    true
];

console.log("Continue")

for (let i = 0; i < me.length; i++) {

    if (typeof me[i] !== "string") continue;
    console.log(me[i], typeof me[i]);
}

console.log("Break")

for (let i = 0; i < me.length; i++) {

    if (typeof me[i] === "number") break;
    console.log(me[i], typeof me[i]);
}*/

// Reverse loop (Printing Backwards)
/*
const me = [
    'Aravind',
    'Viswanathan',
    2021 - 1983,
    'Admin', ['Ram', 'Raj', 'Suresh'],
    true
];

for (let i = me.length - 1; i >= 0; i--) {
    console.log(me[i]);
}

// Nested Loop

for (let workout = 1; workout <= 3; workout++) {
    console.log(`Excercise Workout ${workout}`)

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Excercise ${workout}: No of repretition ${rep}`)
    }
}

// while loop

let rep = 1;
while (rep <= 10) {
    console.log(`No of repetion ${rep}`);
    rep++;
}*/

// CODE CHALLENGE 4.

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

// for (let i = 0; i <= bills.length; i++) {
//     console.log(bills[i]);
// }

for (let i = 0; i < bills.length; i++) {
    console.log('Bills: ' + bills);
}

let calcTip = function(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = (bill * 15) / 100;
    } else {
        tip = (bill * 20) / 100;
    }
    return tip;
};

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
}

console.log('Tips: ' + tips);

for (let i = 0; i < bills.length; i++) {
    const total = calcTip(bills[i]) + bills[i];
    totals.push(total);
}

console.log('Total: ' + totals);

let calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
};

console.log('Average of Totals: ' + calcAverage(totals));
console.log('Average of Bills: ' + calcAverage(bills));
console.log('Average of tips : ' + calcAverage(tips));