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

let mult_number_1_Element = document.querySelector("#mult_number_1");
let mult_number_2_Element = document.querySelector("#mult_number_2");
let array_mult_Element = document.querySelector("#show_mult_array");
let mult_array_Button = document.querySelector("#calc_mult_array");


let your_cards_Element = document.querySelector("#array_with_cards");
let your_result_Element = document.querySelector("#jack_result");
let jack_calculations_array_Element = document.querySelector("#array_jack_calculations");
let start_jack_Button = document.querySelector("#start_jack");
let new_card_Button = document.querySelector("#new_card");
let jack_clean_Button = document.querySelector("#clean_jack");




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
let array_result = [];
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
let number_of_cards;
let current_card;
let array_of_cards_for_black_jack = [];
let array_card_deskRemain = [];
let array_ready_for_new_card = [];
let jack_final_sum;

// ------------------------------------------
start_jack_Button.addEventListener('click', function () {

    // number_of_cards = Number(number_of_cart_Element.value);

    console.log('Hi!');

    start_game_function(); // return 

})

new_card_Button.addEventListener('click', function () {

    console.log('Hi-Hi!');

    new_card_function(array_ready_for_new_card);

})

jack_clean_Button.addEventListener('click', function () {

    your_cards_Element.innerHTML = '';

    your_result_Element.innerHTML = '';

    array_of_cards_for_black_jack = [];

    deskOfCards_Array = [];

    array_card_deskRemain = [];

    array_ready_for_new_card = [];

})


// ------------------------------------------

mult_array_Button.addEventListener('click', function () {

    let number_01 = Number(mult_number_1_Element.value);

    let number_02 = Number(mult_number_2_Element.value);


    multiples_function(number_01, number_02) // return array_result

    array_mult_Element.innerHTML = array_result.join(", ");

})


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

    showFibonacci_Element.innerHTML = arrayWithFibonacci.join(", ");


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

    power_function(base_X, exponent_N); // return expResult

    expXN_Element.innerHTML = expResult;

})


mult_Button.addEventListener('click', function () {

    mult1Value = Number(mult1_Element.value);
    mult2Value = Number(mult2_Element.value);

    multiply_function(mult1Value, mult2Value); // return multresult

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

    add_function(add1Value, add2Value); //return sum

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

        multiply_function(mult_container, mult_member) // return multresult

        console.log('***' + multresult);

        mult_container = multresult;

        counter++;
    }

    console.log(mult_container);

    multOfAll = mult_container;

    console.log(multOfAll);

    return multOfAll;

}


function add_function(add1, add2) {

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

function multiply_function(mult1Value, mult2Value) {

    let counter = 0;

    let number_ofIteration = Number(mult2Value);

    multresult = 0

    while (counter < number_ofIteration) {

        // multresult += Number(mult1Value);

        multresult = add_function(multresult, Number(mult1Value))

        counter++;
    }

    return multresult;
}

function power_function(base_X, exponent_N) {

    let counter = 0;

    let number_ofIteration = Number(exponent_N);

    expResult = 1;

    while (counter < number_ofIteration) {

        expResult = multiply_function(expResult, base_X);  //expResult *= Number(base_X);

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

        factorial = multiply_function(factorial, (miltiplicator - 1)); // factorial = factorial * (miltiplicator - 1); 

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

        fibonacci_number = add_function(arrayWithFibonacci[counter - 2], arrayWithFibonacci[counter - 1]);//fibonacci_number = arrayWithFibonacci[counter - 2] + arrayWithFibonacci[counter - 1];

        // console.log(fibonacci_number);

        arrayWithFibonacci.push(fibonacci_number);

        // console.log(arrayWithFibonacci);

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


function multiples_function(number_01, number_02) {

    array_result = [];

    if (number_01 * number_02 <= 100) {

        let counter = 1;

        let new_array_member = 0;

        while (number_01 * number_02 * counter <= 100) {

            new_array_member = number_01 * number_02 * counter;

            array_result.push(new_array_member);

            counter++;

        }
    } else {

        let message = " We have no solution for these numbers. Please choose other numbers."

        array_result.push(message);

    }
    return array_result;
}

function start_game_function() {  // function will return 2 random cards from the deck of cards

    array_of_cards_for_black_jack = [];

    let deskOfCards_Array = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];

    get_random_card_function(deskOfCards_Array); // array_card_deskRemain, where [0] - card, [1] renew deskOfCards_Array

    array_of_cards_for_black_jack.push(array_card_deskRemain[0]); // add first card to the cards for BlackJack

    deskOfCards_Array = array_card_deskRemain[1]; // renew the desk with card (we just take one card from desk)

    get_random_card_function(deskOfCards_Array); // ran the same function - to get the second card (I'm lazy to write loop just fot two cards)

    array_of_cards_for_black_jack.push(array_card_deskRemain[0]);

    deskOfCards_Array = array_card_deskRemain[1];

    calculate_jack(array_of_cards_for_black_jack); // call function to calculate jack_sum. return jack_sum


    if (jack_sum < 21) {
        your_result_Element.innerHTML = jack_sum;
    } else if (jack_sum > 21) {
        your_result_Element.innerHTML = "BUST!!!";
    } else {
        your_result_Element.innerHTML = "BLACK JACK!!!";
    }


    your_cards_Element.innerHTML = array_of_cards_for_black_jack.toString();

    array_ready_for_new_card = []; // gather information to get new card 

    array_ready_for_new_card.push(array_of_cards_for_black_jack); // array with cards for black jack

    array_ready_for_new_card.push(deskOfCards_Array); //cards that left in desk



    return array_ready_for_new_card;

}



function new_card_function(array_ready_for_new_card) {

    array_of_cards_for_black_jack = array_ready_for_new_card[0];

    deskOfCards_Array = array_ready_for_new_card[1];

    get_random_card_function(deskOfCards_Array); // return array_card_deskRemain, where [0] - card, [1] renew deskOfCards_Array

    array_of_cards_for_black_jack.push(array_card_deskRemain[0]); // add first card to the cards for BlackJack

    deskOfCards_Array = array_card_deskRemain[1]; // renew the desk with card (we just take one card from desk)

    calculate_jack(array_of_cards_for_black_jack); // call function to calculate jack_sum. return jack_sum

    if (jack_sum < 21) {
        your_result_Element.innerHTML = jack_sum;
    } else if (jack_sum > 21) {
        your_result_Element.innerHTML = "BUST!!!";
    } else {
        your_result_Element.innerHTML = "BLACK JACK!!!";
    }


    your_cards_Element.innerHTML = array_of_cards_for_black_jack.toString();

    array_ready_for_new_card = []; // gather information to get new card 

    array_ready_for_new_card.push(array_of_cards_for_black_jack); // array with cards for black jack

    array_ready_for_new_card.push(deskOfCards_Array); //cards that left in desk



    return array_ready_for_new_card;

}

//this function does not change the number for ace. 
function calculate_jack_OLD_(array_of_cards_for_black_jack) {

    counter = 0;
    jack_sum = 0;

    while (counter < array_of_cards_for_black_jack.length) {

        let current_card = array_of_cards_for_black_jack[counter];

        if (current_card !== "J" && current_card !== "K" && current_card !== "Q" && current_card !== "A") {

            jack_sum += Number(array_of_cards_for_black_jack[counter]);

        } else if (current_card === "J" || current_card === "K" || current_card === "Q") {

            jack_sum += 10;

        } else {

            if (jack_sum + 11 > 21) {
                jack_sum += 1;
            } else if (jack_sum + 11 <= 21) {
                jack_sum += 11;
            }

        }

        counter++;
    } // at this point we have jack_sum. Work with this sum

    return jack_sum;

}
// neew (fixed) function
function calculate_jack(array_of_cards_for_black_jack) {
    let counter = 0;
    jack_sum = 0;
    let constant_part_of_jack_sum = 0;
    let sum_of_aces = 0;
    let number_of_aces = 0;

    while (counter < array_of_cards_for_black_jack.length) {

        let current_card = array_of_cards_for_black_jack[counter];

        if (current_card !== "J" && current_card !== "K" && current_card !== "Q" && current_card !== "A") {

            constant_part_of_jack_sum += Number(array_of_cards_for_black_jack[counter]);

        } else if (current_card === "J" || current_card === "K" || current_card === "Q") {

            constant_part_of_jack_sum += 10;

        } else if (current_card === "A") {

            number_of_aces++;

        }

        counter++;
    }

    // at this point we have: 1) constant_part_of_jack_sum (sum of numbers and sum of "J", "K", "Q") 
    //                        2)number of  aces in cards array
    //-----------------
    // we may have  0 or 1 or 2 or 3 or 4 number of aces in our array (if we play with standard deck of card)
    //  so the variable part may be:
    //         0 aces  :  sum = 0
    //         1 aces  :  sum = 1 or 11
    //         0 aces  :  sum = 2 or 12
    //         0 aces  :  sum = 3 or 13
    //         0 aces  :  sum = 4 or 14

    if (number_of_aces === 4) {

        if (constant_part_of_jack_sum + 14 <= 21) {

            sum_of_aces = 14;

        } else {
            sum_of_aces = 4;
        }

    } else if (number_of_aces === 3) {

        if (constant_part_of_jack_sum + 13 <= 21) {

            sum_of_aces = 13;

        } else {
            sum_of_aces = 3;
        }

    } else if (number_of_aces === 2) {

        if (constant_part_of_jack_sum + 12 <= 21) {

            sum_of_aces = 12;

        } else {
            sum_of_aces = 2;
        }

    } else if (number_of_aces === 1) {

        if (constant_part_of_jack_sum + 11 <= 21) {

            sum_of_aces = 11;

        } else {
            sum_of_aces = 1;

        }

    } else {

        sum_of_aces = 0;

    }

    jack_sum = constant_part_of_jack_sum + sum_of_aces;

    return jack_sum;

}

function get_random_card_function(deskOfCards_Array) {

    array_card_deskRemain = [];

    let card_number = Math.round((Math.random() * (deskOfCards_Array.length - 1)));

    current_card = deskOfCards_Array[card_number];

    deskOfCards_Array.splice(card_number, 1); //remove this card from the deck of cards

    array_card_deskRemain.push(current_card);

    array_card_deskRemain.push(deskOfCards_Array);

    return array_card_deskRemain;

}


