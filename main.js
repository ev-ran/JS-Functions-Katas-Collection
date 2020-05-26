let add1_Element = document.querySelector('#add1');
let add2_Element = document.querySelector('#add2');
let sum_Element = document.querySelector('#sum');
let sum_Button = document.querySelector('#calc_sum');

let mult1_Element = document.querySelector('#mult1');
let mult2_Element = document.querySelector('#mult2');
let mult_Element = document.querySelector('#mult_result');
let mult_Button = document.querySelector('#calc_mult');

let compare1_Element = document.querySelector('#num1');
let compare2_Element = document.querySelector('#num2');
let isGreater_Element = document.querySelector('#isGreater');
let compare_Button = document.querySelector('#compare');

let avg_Element = document.querySelector('#avg');
let numsForAvg_Element = document.querySelector('#nums_avg');
let avg_Button = document.querySelector('#calc_avg');

let numForFactorial_Element = document.querySelector('#num_to_factorial');
let factorialResult_Element = document.querySelector('#factorial_result');
let factorialShow_Element = document.querySelector('#show_factorial');
let factorial_Button = document.querySelector('#calc_factorial');

let sumAll_Element = document.querySelector('#sumAll');
let numsForsumAll_Element = document.querySelector('#nums_toAdd');
let sumAll_Button = document.querySelector('#calc_sumOfAll');

let multAll_Element = document.querySelector('#multAllResult');
let numsFormultAll_Element = document.querySelector('#nums_toMult');
let multAll_Button = document.querySelector('#calc_multOfAll');

let expX_Element = document.querySelector('#member_X');
let expN_Element = document.querySelector('#member_N');
let expXN_Element = document.querySelector('#exp_result');
let exp_Button = document.querySelector('#calc_exp');

let numberOfFibonacci_Element = document.querySelector("#num_of_Fibonacci");
let showFibonacci_Element = document.querySelector("#show_fibonacci");
let thisFibonacci_Element = document.querySelector("#this_fibonacci");
let fibonacci_button = document.querySelector("#calc_fibonacci");

let numsForSecondLargest_Element = document.querySelector('#nums_for_secondLargest');
let secondLargest_Element = document.querySelector('#secondLargest');
let secondLargest_Button = document.querySelector('#calc_secondLargest');

let stringForVowels_Element = document.querySelector("#test_string");
let isContains_Element = document.querySelector("#isContain");
let numberOfVowels_Element = document.querySelector("#numOfVowels");
let stringWithVouls_Element = document.querySelector("#string_with_vowls");
let containVowels_Button = document.querySelector("#calc_containsVowel");

let calculateTips_Button = document.querySelector("#calc_tips");
let mealCost_Element = document.querySelector("#cost_of_the_meal");
let tips_Element = document.querySelector("#tips")

let someText_Element = document.querySelector("#some_text");
let longestWorls_Button = document.querySelector("#calc_longest_world");
let longestWorld_Element = document.querySelector('#longest_word')
let number_of_symbols_in_longestWorld_Element = document.querySelector('#num_of_symbols')

let someWeaveText_Element = document.querySelector("#some_text_weave");
let numberOfWeave_Element = document.querySelector("#numberOfWave");
let someWeaveResult_Element = document.querySelector("#some_text_weave_result");
let weave_Button = document.querySelector("#calc_wave");

let textForPiglatin_Element = document.querySelector("#some_text_piglatin");
let textResultPiglatin_Element = document.querySelector("#some_text_piglatin_result");
let piglatin_Button = document.querySelector("#calc_piglatin");



let sum;
let sumOfAll;
let multOfAll;
let multresult;
let base_X;
let exponent_N;
let expResult;
let num_for_factorial;
let factorial_array = [];
let array_factorial__factorial_array = [];
let factorial;
let someString;
let arrayWithNumbers = [];
let arrayWithLetters = [];
let arrayWithWords = [];
let arrayWithVowels = [];
let arrayNumVowelsAndVowelsArr = [];
let arrayWithFibonacci = [];
let counter_for_vowels;
let cost_of_meal;
let tips;
let num_for_fibonacci;
let mapWithWords = new Map();
let add1Value;
let add2Value;
let avgNumber;
let number_01;
let number_02;
let isGreater;
let word;

// ------------------------------------------
piglatin_Button.addEventListener('click', function () {

    let someText = textForPiglatin_Element.value;

    let pig_arrayWithWords = [];

    pig_arrayWithWords = piglatin_function(someText);  // return pig_arrayWithWords

    textResultPiglatin_Element.value = pig_arrayWithWords.join(" ");


})



// ------------------------------------------
weave_Button.addEventListener('click', function () {

    let someText = someWeaveText_Element.value;
    let number = numberOfWeave_Element.value;

    let new_string = weave_function(someText, number);  // return new_string;

    someWeaveResult_Element.value = new_string;


})

// ------------------------------------------

longestWorls_Button.addEventListener('click', function () {

    someString = '';
    someString = (someText_Element.value).toString();

    console.log('***' + someString)

    arrayWithWords_function(someString) // return arrayWithWords

    console.log('arrayWithWords:::' + arrayWithWords);

    mapWithWords_function(arrayWithWords) // return mapWithWords;

    console.log(mapWithWords);

    let maxKey = 0;

    for (let [key, value] of mapWithWords.entries()) {

        if (key > maxKey) {
            maxKey = key;
        }

    }

    console.log('maxKey* - ' + maxKey);

    arrayWithWords = mapWithWords.get(maxKey);

    number_of_symbols_in_longestWorld_Element.innerHTML = maxKey;

    longestWorld_Element.innerHTML = arrayWithWords.join("-***-");

})


fibonacci_button.addEventListener('click', function () {

    num_for_fibonacci = Number(numberOfFibonacci_Element.value);

    fibonacci_function(num_for_fibonacci); // return arrayWithFibonacci

    thisFibonacci_Element.innerHTML = arrayWithFibonacci[num_for_fibonacci - 1];

    showFibonacci_Element.innerHTML = arrayWithFibonacci.join(" * ");


})

factorial_Button.addEventListener("click", function () {

    num_for_factorial = numForFactorial_Element.value;

    factorial_function(num_for_factorial) // return array_factorial__factorial_array

    factorialResult_Element.innerHTML = array_factorial__factorial_array[0];

    console.log((array_factorial__factorial_array[1]).join(" * "));

    someString = (array_factorial__factorial_array[1]).join(" * ");

    factorialShow_Element.innerHTML = someString;


})

exp_Button.addEventListener("click", function () {

    base_X = Number(expX_Element.value);
    exponent_N = Number(expN_Element.value);

    expFunction(base_X, exponent_N); // return expResult

    expXN_Element.innerHTML = expResult;

})


mult_Button.addEventListener('click', function () {

    mult1Value = Number(mult1_Element.value);
    mult2Value = Number(mult2_Element.value);

    multFunction(mult1Value, mult2Value); // return multresult

    mult_Element.innerHTML = multresult;

})


calculateTips_Button.addEventListener('click', function () {

    let cost_of_meal = mealCost_Element.value;

    console.log(cost_of_meal);

    calculateTips(cost_of_meal) //  return tips

    tips_Element.innerHTML = tips;

})


containVowels_Button.addEventListener('click', function () {

    someString = stringForVowels_Element.value;

    console.log(someString);

    arrayWithLetters_function(someString) // return array 'arrayWithLetters' made from someString letters (lowerCase)

    console.log(arrayWithLetters);

    containsVowel(arrayWithLetters); // return arrayNumVowelsAndVowelsArr [numberOfVowels, arrayWithVowels]

    console.log(arrayNumVowelsAndVowelsArr);

    numberOfVowels_Element.innerHTML = arrayNumVowelsAndVowelsArr[0];

    string_with_vowls.innerHTML = arrayNumVowelsAndVowelsArr[1].join('*');

    if (arrayNumVowelsAndVowelsArr[0] == 0) {

        isContains_Element.innerHTML = "No one vowels in this text"

    } else {
        isContains_Element.innerHTML = "We have some vowels in this text";
    }

})

secondLargest_Button.addEventListener('click', function () {

    someString = numsForSecondLargest_Element.value;

    arrayFromString_function(someString);  // return arrayWithNumbers

    arrayWithNumbers.sort(function (a, b) {
        return a - b;
    });  // return the sorted array is ascending sort. Now we have sorted 'arrayWithNumbers'

    console.log(arrayWithNumbers);

    secondLargest_Element.innerHTML = arrayWithNumbers[arrayWithNumbers.length - 2];

})


compare_Button.addEventListener('click', function () {

    number_01 = Number(compare1_Element.value);
    number_02 = Number(compare2_Element.value);

    greaterThan_function(number_01, number_02) //return  isGreater

    isGreater_Element.innerHTML = isGreater;
})



sum_Button.addEventListener('click', function () {

    add1Value = Number(add1_Element.value);
    add2Value = Number(add2_Element.value);

    sumFunction(add1Value, add2Value); //return sum

    sum_Element.innerHTML = sum;

})

avg_Button.addEventListener('click', function () {

    someString = numsForAvg_Element.value;

    avgFunction(someString); // return avgNumber

    console.log('***' + avgNumber);

    avg_Element.innerHTML = avgNumber;
    // console.log(arrayWithNumbers);


})

sumAll_Button.addEventListener("click", function () {

    someString = numsForsumAll_Element.value;

    sumAll_function(someString); // return sumOfAll

    sumAll_Element.innerHTML = sumOfAll;

})

multAll_Button.addEventListener("click", function () {

    someString = numsFormultAll_Element.value;

    // console.log(someString);

    multAll_function(someString);  // return multOfAll


    multAll_Element.innerHTML = multOfAll;

})


function greaterThan_function(number_01, number_02) {


    if (number_01 > number_02) {
        isGreater = true;
    } else {
        isGreater = false;
    }

    return isGreater;
}

function avgFunction(someString) {

    arrayFromString_function(someString);  //return arrayWithNumbers

    let counter = 0;
    let sum = 0;
    while (counter < arrayWithNumbers.length) {
        sum += Number(arrayWithNumbers[counter]);
        counter++;
    }
    // console.log(sum);
    // console.log(counter);
    avgNumber = sum / counter;

    return avgNumber;
}

function sumAll_function(someString) {

    arrayFromString_function(someString);  //return arrayWithNumbers

    let counter = 0;
    sumOfAll = 0;

    while (counter < arrayWithNumbers.length) {

        sumOfAll += Number(arrayWithNumbers[counter]);

        counter++;
    }

    return sumOfAll;

}

function multAll_function(someString) {

    arrayFromString_function(someString);  //return arrayWithNumbers

    console.log(arrayWithNumbers);

    let counter = 0;
    let mult_container = 1;
    let mult_member;
    multOfAll = 0;

    multOfAll = 0

    while (counter < (arrayWithNumbers.length)) {

        mult_member = arrayWithNumbers[counter];

        multFunction(mult_container, mult_member) // return multresult

        console.log('***' + multresult);

        mult_container = multresult;

        counter++;
    }

    console.log(mult_container);

    multOfAll = mult_container;

    console.log(multOfAll);

    return multOfAll;

}


function sumFunction(add1, add2) {

    sum = (add1 + add2);

    return sum;
}

function arrayFromString_function(someString) {
    arrayWithNumbers = [];

    someString = someString.trim();
    someString = someString.split(" ").join("*");
    arrayWithNumbers = someString.split("*");

    // console.log(arrayWithNumbers);

    return arrayWithNumbers;

}

function arrayWithLetters_function(someString) {

    arrayWithLetters = [];

    someString = someString.trim();

    someString = someString.toLowerCase();

    someString = someString.split(" ").join("");

    arrayWithLetters = someString.split("");

    console.log(arrayWithLetters);

    return arrayWithLetters;
}

function containsVowel(arrayWithLetters) {

    let counter = 0;

    counter_for_vowels = 0;

    arrayWithVowels = [];

    arrayNumVowelsAndVowelsArr = [];

    while (counter < arrayWithLetters.length) {

        let currentLetter = arrayWithLetters[counter];

        console.log('***' + currentLetter);

        if (currentLetter == 'a' || currentLetter == 'e' || currentLetter == 'i' || currentLetter == 'o' || currentLetter == 'u') {

            counter_for_vowels++;

            arrayWithVowels.push(currentLetter);

        }
        counter++;
    }

    // console.log("counter_for_vowels:::" + counter_for_vowels);
    // console.log("arrayWithVowels:::" + arrayWithVowels);

    arrayNumVowelsAndVowelsArr.push(counter_for_vowels);
    arrayNumVowelsAndVowelsArr.push(arrayWithVowels);

    return arrayNumVowelsAndVowelsArr;
}

function calculateTips(cost_of_meal) {

    tips = Math.round(Number(cost_of_meal) * 0.2);

    return tips;
}

function multFunction(mult1Value, mult2Value) {

    let counter = 0;

    let number_ofIteration = Number(mult2Value);

    multresult = 0

    while (counter < number_ofIteration) {
        multresult += Number(mult1Value);

        counter++;
    }

    return multresult;
}

function expFunction(base_X, exponent_N) {

    let counter = 0;

    let number_ofIteration = Number(exponent_N);

    expResult = 1;

    while (counter < number_ofIteration) {

        expResult *= Number(base_X);

        counter++;
    }
    return expResult;
}

function factorial_function(num_for_factorial) {

    factorial = 1;

    factorial_array = [];

    array_factorial__factorial_array = [];

    let miltiplicator = Number(num_for_factorial) + 1;


    while (miltiplicator > 1) {

        factorial = factorial * (miltiplicator - 1);

        factorial_array.push(miltiplicator - 1);

        miltiplicator--;

    }

    array_factorial__factorial_array.push(factorial);

    array_factorial__factorial_array.push(factorial_array);

    return array_factorial__factorial_array;
}

function fibonacci_function(num_for_fibonacci) {

    arrayWithFibonacci = [];

    arrayWithFibonacci[0] = 0;

    arrayWithFibonacci[1] = 1;

    let counter = 2;

    let fibonacci_number;

    while (counter < num_for_fibonacci) {

        fibonacci_number = arrayWithFibonacci[counter - 2] + arrayWithFibonacci[counter - 1];

        console.log(fibonacci_number);

        arrayWithFibonacci.push(fibonacci_number);

        console.log(arrayWithFibonacci);

        counter++;

    }

    return arrayWithFibonacci;

}

function arrayWithWords_function(someString) {

    arrayWithWords = [];

    someString = someString.trim();
    // console.log('11:: ' + someString);

    someString = someString.toString().replace(" '  ' | '   ' | '    '  ", " ' ' ");
    // console.log('22:: ' + someString);

    arrayWithWords = someString.split(" ");

    return arrayWithWords;

}

function mapWithWords_function(arrayWithWords) { // map: [number od letters in word : array with words the same length]

    mapWithWords.clear();

    let counter_words = 0;

    let lengthOfWord = 0;


    while (counter_words < arrayWithWords.length) {

        let currentWord = arrayWithWords[counter_words];

        lengthOfWord = currentWord.length;


        if (!mapWithWords.has(lengthOfWord)) {

            let new_Array = [];

            new_Array.push(currentWord);

            mapWithWords.set(lengthOfWord, new_Array);

        } else {

            let array = mapWithWords.get(lengthOfWord); // get array_words_same_length

            if (!array.includes(currentWord)) {

                array.push(currentWord);

                mapWithWords.set(lengthOfWord, array);
            }
        }

        counter_words++;

    }

    return mapWithWords;
}

function weave_function(someString, number) {

    let number_slice = Number(number);

    let string_initial = someString;

    let string_work = someString;

    let string_length = Number(someString.length);

    let numberOfWeave = Math.floor(string_length / number_slice);

    let counter = 0;

    let new_string = '';


    while (counter < numberOfWeave) {

        let string_01 = string_work.slice(0, number_slice);

        let string_02 = string_work.slice(number_slice);

        let new_string_test = new_string + string_01.slice(0, (string_01.length - 1)) + 'x';

        if (string_initial[new_string_test.length - 1] === ' ') {

            new_string = new_string + string_01.slice(0, (string_01.length - 1)) + ' ';

        } else {

            new_string = new_string + string_01.slice(0, (string_01.length - 1)) + 'x';
        }

        string_work = string_02;

        counter++;
    }

    new_string = new_string + string_work;

    return new_string;
}

function piglatin_function(someString) {

    arrayWithWords_function(someString) // return arrayWithWords

    let counter = 0;

    let pig_arrayWithWords = [];

    while (counter < arrayWithWords.length) {

        let currentWord = arrayWithWords[counter];
        
        let pigWord = currentWord.slice(1) + currentWord[0] + "ay";

        pig_arrayWithWords.push(pigWord);

        counter++;

    }

    return pig_arrayWithWords;
}
