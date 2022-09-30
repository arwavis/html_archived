'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.toUpperCase().slice(0, 3)} to ${to
    .toUpperCase()
    .slice(0, 3)} (${time.replace(':', 'h')})`.padStart(45);
    console.log(output);
}

//******************************************************************************************************************************
// Lesson 120working with String part 1

//******************************************************************************************************************************

const airplane = 'Tap Air Portugal';
const flight = 'A320';

// To get the string out of fligth

console.log(flight[0]);
console.log(flight[1]);
console.log(flight[2]);
console.log(flight[3]);

// Or i can also get it directly from

console.log('B370' [0]);

// I can also get the length of a string using

console.log(airplane.length);
console.log(flight.length);
console.log('B370'.length);

// To get the position number
console.log(airplane.indexOf('r'));

// To get the last index

console.log(airplane.lastIndexOf('r'));

// Using slice in String
console.log(airplane.slice(4));

console.log(airplane.slice(4, 7));

// To get the first word you can also write it as
console.log(airplane.slice(0, airplane.indexOf(' ')));

// To get the last word
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

// Using minus will start extracting from the end
console.log(airplane.slice(-2));
console.log(airplane.slice(1, -1));

// writing a function in string

const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    // Here seat is the value that you will be passing in a function
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log(`${seat} is a middle seat`);
    } else {
        console.log(`${seat} is not a middle seat`);
    }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('12E');

// lowercase and upper case

console.log(airplane.toLowerCase());
console.log(airplane.toUpperCase());

// To correct the passenger name

const passenger = 'aRaVIND';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// compre email

const email = 'hello@hello.com';
// By mistake user inputs his email with space and caps
const userinputemail = '  Hello@Hello.com  \n';
const emailLower = userinputemail.toLowerCase();
console.log(emailLower);
const trimmedemail = emailLower.trim();
console.log(trimmedemail);

console.log(email === trimmedemail);
// The above code can be written as

const normalizedemail = userinputemail.toLowerCase().trim();
console.log(normalizedemail === email);

// convert the pound to dollar

const price = '288.79£';
const priceUs = price.replace('£', '$').replace(',', '.');
console.log(priceUs);

// We can also use replace to replace a whole word. for multiple occurences you can use replaceAll

const announcement =
    'All Passengers come to boarding door 23!, Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
// or you can also try, where g stands for global

console.log(announcement.replace(/door/g, 'gate'));

// Booleans

const plane = 'AirBus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('A3'));
console.log(plane.endsWith('o'));

if (plane.startsWith('AirBus') && plane.endsWith('neo')) {
    console.log('This plane is part of Airbus');
} else {
    console.log('This plane is not part of the Airbus');
}

// Practise excercise

const checkBagagge = function(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('Sorry, you are not allowed to board the plane ✈️');
    } else {
        console.log('Welcome Aboard🛩');
    }
};

checkBagagge('I have a laptop, some food and a pocket Knife');
checkBagagge('Socks and camera');
checkBagagge('Got some snacks and a gun for protection');

//******************************************************************************************************************************
// Lesson 122 working with String part 3

// Split method

console.log('a+very+nice+string'.split('+'));
console.log('Aravind Viswanathan'.split(' '));
// destructuring
const [firstName, lastName] = 'Aravind Viswanathan'.split(' ');

// Lets say i want make the last name in case and add Mr in the front by using join method
console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));

// To capitalize the firsl letter of names

const capitalizeName = function(name) {
    const names = name.split(' ');
    console.log(names);
    const namesUpper = [];

    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
        // or you can also use
        //namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('aravind viswanathan');

// Padding a String

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('aravind'.padStart(23, '+').padEnd(35, '+'));

// how to mask creditcard number using padding.

const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4567890));
console.log(maskCreditCard(8765432190546));
console.log(maskCreditCard(78906543212345678));

// repeat

const runningMessage = 'Bad Weather... All departures Delayed... ';
console.log(runningMessage.repeat(5));

// using repeat in function

const waitingPlanes = function(n) {
    console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

waitingPlanes(5);
waitingPlanes(12);
waitingPlanes(8);

//******************************************************************************************************************************
// coding challenge 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});

//******************************************************************************************************************************

// ******************************************************************************************************************************

// // Data needed for first part of the section

// const openingHours = {
//     thu: {
//         open: 12,
//         close: 22,
//     },
//     fri: {
//         open: 11,
//         close: 23,
//     },
//     sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//     },
// };

// const restaurant = {
//     resname: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     // Calling another property that is outside using Enhanced Object Literals
//     openingHours,

//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery: function({ starterIndex, mainIndex, time, address }) {
//         console.log(
//             `order received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//         );
//     },
//     orderPasta: function(ing1, ing2, ing3) {
//         console.log(
//             `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3} `
//         );
//     },
//     orderPizza: function(mainIngredient, ...otherIngredients) {
//         console.log(mainIngredient);
//         console.log(otherIngredients);
//     },
// };

// restaurant.orderDelivery({
//     time: '22.30',
//     address: 'bangalore, India',
//     mainIndex: 2,
//     starterIndex: 2,
// });

//******************************************************************************************************************************
//MAPS
//******************************************************************************************************************************

// const rest = new Map();
// rest.set('Name', 'Classico Italiano');
// rest.set(1, 'Fierence, Italy');
// rest.set(2, 'Lisbon, Portugal');

// console.log(rest);

// rest
//     .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'we are open')
//     .set(false, 'we are closed');

// console.log(rest.get('Name'));
// console.log(rest.get(true));
// console.log(rest.get('categories'));

// // You can use the mps to compare and provide results.
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // using in a dom element
// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);

// // To find size
// console.log(rest.size);

// //MAPS ITERATION

// const question = new Map([
//     ['question', 'what is the best programming language in the world'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JS'],
//     [4, 'Python'],
//     ['correct', 3],
//     [true, 'Correct 🎉'],
//     [false, 'Try Again!'],
// ]);

// console.log(question);

// //Convert Object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Looping in Maps
// console.log(question.get('question'));
// for (const [key, values] of question) {
//     if (typeof key === 'number') console.log(`option ${key}: ${values}`);
// }
// const answer = Number(prompt('Your Answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //convert Map to an Array

// console.log(...question);

//******************************************************************************************************************************
//SET - Note there are no indexes in Set.
//******************************************************************************************************************************
// const orderSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pasta',
//     'Rizatto',
//     'Pizza',
//     'Pasta',
// ]);

// console.log(orderSet);

// console.log(orderSet.size); // To get the size of the set
// console.log(orderSet.has('Pizza')); // to check if a value is present in a Set
// orderSet.add('bread'); // to add a new value in the Set , even if you mention twice it will add only one unique value.
// orderSet.add('bread');
// console.log(orderSet);
// orderSet.delete('Rizatto'); // to delete an element from Set

// console.log(orderSet);

// Sets are iterable and we can loop over them

// for (const order of orderSet) console.log(order);

// examlpe

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'waiter', 'chef'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// const staffUniqueArray = [...new Set(staff)];
// console.log(staffUniqueArray);

// If we want to convert a set into array using spread method

//*********************************************************************************************************************************

// // Advance looping

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // Normal Loopong:

// for (let i = 0; i < menu.length; i++) {
//     console.log(menu[i]);
// }

// // for-of loop

// for (const item of menu) console.log(item);

// // To get index using for of

// for (const item of menu.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}`);
// }

// // using destructuring we can get the same result

// for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
// }

// // longer method if we are not using optional chaining

// if (restaurant.openingHours && restaurant.openingHours.fri)
//     console.log(restaurant.openingHours.fri.open);

// // OPtional chaining.
// //console.log(restaurant.openingHours.mon ?.open);
// //console.log(restaurant.openingHours.thu?.open);
// // // spread operator exapmple

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // for (const day of days) {
// //     const open = restaurant.openingHours[day] ? .open ? ? 'closed';
// //     console.log(`On ${day}, we open at ${open}`);
// // }

// // Property Names
// const propertyNames = Object.keys(openingHours);
// console.log(propertyNames);

// let openStr = `we are open on ${propertyNames.length} days: `;

// for (const day of propertyNames) {
//     openStr += `${day}, `;
// }
// console.log(openStr);

// // Property Values

// const values = Object.values(openingHours);
// console.log(values);

// // Entries of Object
// const entry = Object.entries(openingHours);
// console.log(entry);

// const arr = [7, 8, 9];
// const normalArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(normalArr);
// // Using the spread operator we can simplify the above by using below example.
// const sArr = [1, 2, ...arr];
// console.log(sArr);

// // rest pattern

// // others is bascially rest of the elements , can be any name.

// const [k, l, ...others] = [1, 2, 3, 4, 5];
// console.log(k, l, others);

// // using rest in functions

// const add = function(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mashrooms', 'onion', 'olives', 'spinach');
// // using this method if i need to add additional item to main menu then I can add as below

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// // The above will create new array and it will not alter the actual mainMenu in the Restaurant object.
// console.log(restaurant.mainMenu);

// //if i need to add both main menu then use ...restaurant.main menu  instead of ...newMenu and starter menu then i can write it as,

// const commenu = [...newMenu, ...restaurant.starterMenu];
// console.log(commenu);

// //using functions to get the orderpasta details from the restaurant object using spread operator.

// const ingredients = [
//     // prompt("Let's make pasta! Ingredient 1?"),
//     // prompt('Ingredient 2 ?'),
//     // prompt('ingredient 3 ?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // destructuring an object, You need to always specify the exact name of the properties.
// const { resname, openingHours, categories } = restaurant;
// console.log(resname, openingHours, categories);
// // or you can also write this as if you want to call a different name.

// const {
//     resname: restaurantname,
//     openingHours: hours,
//     categories: foodcategory,
// } = restaurant;
// console.log(restaurantname, hours, foodcategory);

// // giving menu a default value and setting starterMenu a default value which will reflect if there is no value avaialble for startmenu in the object.

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutatingvariable

// // let a = 111;
// // let b = 234;

// // const obj = { a: 23, b: 34, c: 56 };
// // // if you are calling this object destructuring use it in open and closing braces and only then it will work
// // ({ a, b } = obj);
// // console.log(a, b);

// // nested objects
// const {
//     fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // I can assign values like this.
// // const arr = [1, 2, 3];
// // const x = arr[0];
// // const y = arr[1];
// // const z = arr[2];

// // Or you can simply call like this as you learnt in python

// // const [a, b, c] = arr;
// // console.log(a, b, c);

// // destructuring the above example of restaurant
// // const [first, second;
// = restaurant.categories;
// // if you want to pick first and third, leave a space
// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // // If we need to switch secondary and main then assign it to a temp variable
// // // long method
// // // let temp = main;
// // // main = secondary;
// // // secondary = temp;

// // // console.log(main, secondary);

// // //second method using destruction here you do not need a temp variable
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nester array
// const nested = [2, 3, [4, 5]];
// // destructuring nested array
// const [i, , j] = nested;
// console.log(i, j);

// // destructure inner array
// const [a, , [b, c]] = nested;
// console.log(a, b, c);
//******************************************************************************************************************************
// CODE Challenge 1
//******************************************************************************************************************************

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

//  1.Createoneplayerarrayforeachteam(variables'players1'and 'players2')
// const [players1, players2] = game.players;
// console.log(players1, players2);

// 2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk1, ...fieldPlayers1] = players1;
// console.log(gk1, fieldPlayers1);

// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk2, fieldPlayers2);
// 3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// 4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5. Based on the game.odds object,create one variable for each odd(called 'team1', 'draw' and 'team2')

// const {
//     odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// 6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const printGoals = function(...players) {
//     console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);
// 7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.\\

// team1 < team2 && console.log('Team 1 is more likely to win');
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

//******************************************************************************************************************************

//CODING CHALLENGE 2
//******************************************************************************************************************************

// Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// use .entries() function to get the list of entries in the array.
//de-structure the array to i (for index) and player for number of players.

// for (const [i, player] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}. ${player}`);
// }

// Use a loop to calculate the average odd and log it to the console(We already studied how to calculate averages, you can go check if you don't remember)

// const odds = Object.values(game.odds);
// let average = 0;

// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(`The average of odds is ${average}`);

/*
                        Print the 3 odds to the console,but in a nice formatted way,exactly like this:
                        Odd of victory Bayern Munich: 1.33 
                        Odd of draw: 3.25
                        Odd of victory Borrussia Dortmund: 6.5
                        Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
                        */

// const {
//     odds: { team1, x: draw, team2 },
// } = game;

// console.log(`Odd of victory Bayern Munich: ${team1}`);
// console.log(`Odd of draw: ${draw}`);
// console.log(`Odd of victory borrussia Dortmund: ${team2}`);

// // or

// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr} ${odd}`);
// }

/*Bonus:Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
                             {
                               Gnarby: 1,
                               Hummels: 1,
                               Lewandowski: 2
                        }
                        */

// const scorers = {};
// for (const player of game.scored) {
//     scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//******************************************************************************************************************************
// CODE CHALLENGE - 3
//******************************************************************************************************************************

/*
                        Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
                        Your tasks:
                        */
// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

//Create an array'events'of the different game events that happened(no duplicates)
// console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];
// console.log(events);

//After the game has finished,is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents.values());

//Compute and log the following string to the console:"An event happened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//     `An event happened,on average, every ${90 / gameEvents.size} minutes`
// );
//Loop over'gameEvents'and log each element to the console,marking whether it's in the first half or second half (after 45 min) of the game, like this:
//[FIRST HALF] 17: ⚽   GOAL

// for (const [min, event] of gameEvents) {
//     const half = min <= 45 ? 'First' : 'Second';
//     console.log(`[${half}Half]  ${min}: ${event}`);
// }