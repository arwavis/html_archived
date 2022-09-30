// Remember, we're gonna use strict mode in all scripts now!

'use strict';

/*
Problem 1: 
Calculate the amplitude of the temperature. 
Amplitude is highest value of an array minus lowest value of an array
ignore any errors
*/
/*
const temperature1 = [8, 21, 42, 7, 12, 'error', -4, -7, -8, -14];
const temperature2 = [10, 56, 23, 41, 'error', -7, -11, -18];
const temperature3 = temperature1.concat(temperature2);
console.log(temperature3);

const calcTempAmplitude = function(temp) {
    let max = temp[0];
    let min = temp[0];

    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue;

        if (temp[i] > max) {
            max = temp[i];
        }
        if (temp[i] < min) {
            min = temp[i];
        }
    }

    console.log(max, min);
    return max - min;
};

const amplitude = console.log(calcTempAmplitude(temperature3));
console.log(amplitude);
*/

// Convert given celcius to Kelvin byt adding celcius to 273
/*
const calctemperature = function() {
    const measurement = {
        type: 'temp',
        unit: 'kelvin',
        value: Number(prompt('Enter a value in celcius')),
    };

    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(calctemperature());
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}C ... ${data1[1]}C ... ${data1[2]}C ...`);

const printForecast = function(arr) {
    let str = ' ';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}ºC in ${i + 1} days ... `;
    }
    console.log('...' + str);
};

console.log(printForecast(data2));