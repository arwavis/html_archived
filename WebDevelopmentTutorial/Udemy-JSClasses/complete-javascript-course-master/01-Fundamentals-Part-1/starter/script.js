/*let math = 40 + 20 * 10 - 2 + 23 / 2;
console.log(math);

let my_Country = "India";
let my_Continent = "Asia";
let my_Country_Population = "3 Million";

console.log("I live in: " + my_Country);
console.log("My country is in " + my_Continent + " continent");
console.log("My Countries Population is: " + my_Country_Population);

let isIsland = false;
let language;

console.log("Is Island: " + typeof isIsland);
console.log("My Language is : " + typeof language);
console.log("My Country is: " + typeof my_Country);
console.log("My Continent is: " + typeof my_Continent);
console.log("My Contries Population is: " + typeof my_Country_Population);

*/
//-------------------------------------------------------------------------------------------------------------------------------------------

//Coding Challenge 1 : BMI Calculator

/*

let markWeightFirstData = 78;
let markHeightFirstData = 1.69;

let johnWeightFirstData = 92;
let johnHeightFirsData = 1.95;

let markWeightSecondData = 95;
let markheightSecondData = 1.88;

let johnWeightSecondData = 85;
let johnHeightSecondData = 1.76;

console.log("First Data Comparison");
let markBMIFirstData = Math.floor(markWeightFirstData / markHeightFirstData ** 2);
console.log(markBMIFirstData);

let johnBMIFirstData = Math.floor(johnWeightFirstData / johnHeightFirsData ** 2);
console.log(johnBMIFirstData)

const markHigherBMIFirstData = markBMIFirstData > johnBMIFirstData;
console.log(markHigherBMIFirstData);

if (markBMIFirstData > johnBMIFirstData) {
    console.log("Mark's BMI is greater than John's BMI and the Value is : " + " " + markBMIFirstData);
} else
    console.log("John's BMI is greater that Mark's BMI and the Value is: " + "" + johnBMIFirstData);

console.log("Second Data Comparison");
let markBMISecondData = Math.floor(markWeightSecondData / markheightSecondData ** 2);
console.log(markBMISecondData);

let johnBMISecondData = Math.floor(johnWeightSecondData / johnHeightSecondData ** 2);
console.log(johnBMISecondData)

const markHigherBMISecondData = markBMISecondData > johnBMISecondData;
console.log(markHigherBMISecondData);

if (markBMISecondData > johnBMISecondData) {
    console.log("Mark's BMI is greater than John's BMI and the Value is : " + " " + markBMISecondData);
} else
    console.log("John's BMI is greater that Mark's BMI and the Value is: " + "" + johnBMISecondData);

    */
//****************************************************************************************************************** */
// Template literals example, Also helps writing multiple lines of code.
/*
const firstName = "Aravind";
const lastName = "Viswanathan";
const birthYear = 1983;
const currentYear = 2021;
const job = "Team Lead";

const myDetails = `I'am ${firstName} ${lastName} and I'am ${currentYear-birthYear} old and I'am a ${job} in EFI`
console.log(myDetails);

// First way to write multiple lines in JS.

const multipleLines = 'String \n\
multiple \n\
lines'
console.log(multipleLines);

// with Template literals

const multipleLinesTL = `String 
multiple
lines`

console.log(multipleLinesTL);
*/

//******************************************************************************************************************** */
// CONDITIONS and using Template Literals
/*
let markWeightFirstData = 78;
let markHeightFirstData = 1.69;

let johnWeightFirstData = 92;
let johnHeightFirsData = 1.95;

let markWeightSecondData = 95;
let markheightSecondData = 1.88;

let johnWeightSecondData = 85;
let johnHeightSecondData = 1.76;

console.log("First Data Comparison");
let markBMIFirstData = Math.floor(markWeightFirstData / markHeightFirstData ** 2);
console.log(markBMIFirstData);

let johnBMIFirstData = Math.floor(johnWeightFirstData / johnHeightFirsData ** 2);
console.log(johnBMIFirstData)

const markHigherBMIFirstData = markBMIFirstData > johnBMIFirstData;
console.log(markHigherBMIFirstData);

if (markBMIFirstData > johnBMIFirstData) {
    console.log(`Mark's BMI is higher than John's. Mark's BMI is  (${markBMIFirstData}) which is higher than John's  BMI (${johnBMIFirstData})`);
} else {
    console.log(`John's BMI is higher than Mark's. John's BMI is (${johnBMIFirstData}) whihc is higher than Mark's  BMI (${markBMIFirstData})`);
}

console.log("Second Data Comparison");
let markBMISecondData = Math.floor(markWeightSecondData / markheightSecondData ** 2);
console.log(markBMISecondData);

let johnBMISecondData = Math.floor(johnWeightSecondData / johnHeightSecondData ** 2);
console.log(johnBMISecondData)

const markHigherBMISecondData = markBMISecondData > johnBMISecondData;
console.log(markHigherBMISecondData);

if (markBMISecondData > johnBMISecondData) {
    console.log(`Mark's BMI is higher than John's. Mark's BMI is  (${markBMISecondData}) which is higher than John's BMI (${johnBMISecondData})`);
} else {
    console.log(`John's BMI is higher than Mark's. John's BMI is (${johnBMISecondData}) which is higher that Mark's BMI (${markBMISecondData})`);
}

console.log(`Iam ${23} years Old`)
*/
//-------------------------------------------------------------------------------------------------------------------------------------------
/* Challenge 3:
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § 
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//ACTUAL CODE:

const dolphinsDataOneAvg = Math.floor((96 + 108 + 89) / 3);
const koalasDataoneAvg = Math.floor((88 + 91 + 110) / 3);

console.log("Data One Average: ");
console.log(dolphinsDataOneAvg + "%");
console.log(koalasDataoneAvg + "%");

let dolphinsCount = 0;
let KoalasCount = 0;

if (dolphinsDataOneAvg > koalasDataoneAvg) {
    console.log("Team Dolphin Wins");
    dolphinsCount++;
} else if (koalasDataoneAvg > dolphinsDataOneAvg) {
    console.log("Team Koalas wins");
    KoalasCount++;
} else if (dolphinsDataOneAvg === koalasDataoneAvg) {
    console.log("Both wins the Trophy")
    dolphinsCount++;
    KoalasCount++;
}

console.log("dolphinsCount: " + dolphinsCount);
console.log("koalasCount: " + KoalasCount);

const dolphinsBonus1 = Math.floor((97 + 112 + 101) / 3);
const koalasBonus1 = Math.floor((109 + 95 + 123) / 3);

console.log("Bonus 1: ")
console.log(dolphinsBonus1 + "%");
console.log(koalasBonus1 + "%");

if (dolphinsBonus1 > koalasBonus1 && dolphinsBonus1 >= 100) {
    console.log("Dolphin Wins");
    dolphinsCount++;
} else if (koalasBonus1 > dolphinsBonus1 && koalasBonus1 >= 100) {
    console.log("Koalas Wins");
    KoalasCount++;
} else if (dolphinsBonus1 === koalasBonus1 && dolphinsBonus1 >= 100 && koalasBonus1 >= 100) {
    console.log("Both the team Wins the Trophy")
    dolphinsCount++;
    KoalasCount++;
} else {
    console.log("No one wins the Trophy");
}

console.log("dolphinsCount: " + dolphinsCount);
console.log("koalasCount: " + KoalasCount);

const dolphinsBonus2 = Math.floor((97 + 112 + 101) / 3);
const koalasBonus2 = Math.floor((109 + 95 + 106) / 3);

console.log("Bonus 2: ")
console.log(dolphinsBonus2 + "%");
console.log(koalasBonus2 + "%");

if (dolphinsBonus2 > koalasBonus2 && dolphinsBonus2 >= 100) {
    console.log("Dolphin Wins");
    dolphinsCount++;
} else if (koalasBonus2 > dolphinsBonus2 && koalasBonus2 >= 100) {
    console.log("Koalas Wins");
    KoalasCount++;
} else if (dolphinsBonus2 === koalasBonus2 && dolphinsBonus2 >= 100 && koalasBonus2 >= 100) {
    console.log("Both the team Wins the Trophy")
    dolphinsCount++;
    KoalasCount++;

} else {
    console.log("No one wins the Trophy");
}

console.log("dolphinsCount: " + dolphinsCount);
console.log("koalasCount: " + KoalasCount);

if (dolphinsCount > KoalasCount) {
    console.log("Dolphins win's the overall Match");
} else if (KoalasCount > dolphinsCount) {
    console.log("Koalas win's the Overall Match")

} else {
    console.log(`Dolphins scored ${dolphinsCount} and Koalas scored ${KoalasCount} and this is a tie`)
}*/

// Code Challinge 4

const bill = 275;
let usualTip = (bill * 15) / 100;
let differentTip = (bill * 20) / 100;
// console.log(usualTip);
//let totalUsualTip = bill + usualTip;
//let totalDifferentTip = bill + differntTip;
// const billTwo = 40;
// const billThree = 430;

console.log("Writing code using If-Else")
if (bill >= 50 && bill <= 300) {
    console.log(`The bill was ${bill} and the tip was ${usualTip} and the total value is ${bill + usualTip}`)
} else {
    console.log(`The bill was ${bill} and the tip was ${differentTip} and the total value is ${bill + differentTip}`)
}

console.log(" Writing the same code using Ternary Operation")
console.log(`The bill was ${bill} and the tip was ${ bill>=50 && bill<=300 ? usualTip : differentTip} and the total value is ${bill>=50 && bill<=300 ? (bill + usualTip) : (bill + differentTip)}`);

// EasyWay


let tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)