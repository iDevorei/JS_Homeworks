'use strict';

// Например, функции, начинающиеся с "show" обычно что-то показывают.

// Функции, начинающиеся с…

// "get…" – возвращают значение,
// "calc…" – что-то вычисляют,
// "create…" – что-то создают,
// "check…" – что-то проверяют и возвращают логическое значение, и т.д.

// *task 1
// Сделайте функцию, которая отнимает от первого числа второе и делит на 
// третье. Числа передаются параметром.
// *solution

const calcThreeNumbers = (a, b, c) => (a - b) / c;

console.log(calcThreeNumbers(10, 4, 2));

// *task 2
// Сделайте функцию, которая возвращает куб числа и его квадрат. Число 
// передается параметром.
// *solution

const calcCubeAndSquare =  number => `Число ${number}, квадрат = ${Math.pow(number, 2)}, куб = ${Math.pow(number, 3)}`;

let result = calcCubeAndSquare(2);
console.log(result);

// *task 3
// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.
// *solution

function min(a, b) {
    return (a < b) ? a : b;
}

function max(a, b) {
    return (a < b) ? b : a;
}

// *task 4
// Напишите две функции: первая ф-ция должна возвращать массив с 
// числовыми значениями, диапазон которых должен вводиться пользователем 
// с клавиатуры; вторая – выводить полученный массив.
// *solution

function createArr() {
    let start = 2;
    // let start = +prompt(`Введите число, начало массива`);
    let finish = 8;
    // let finish = +prompt(`Введите число, конец массива`);
    let arr = [];

    if (start < finish) {
        for(let i = start; i <= finish; i++) {
            arr.push(i);
        }
    } else {
        for (let i = finish; i <= start; i++) {
            arr.push(i);
        }
    }

    return arr;
}

function showArr(arr) {
    return console.log(arr);
}

result = showArr(createArr());

// *task 5
// Сделайте функцию isEven() (even - это четный), которая параметром 
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть 
// функция возвращает true, если нечетное — false.
// *solution

function isEven(number) {
    return number % 2 === 0;
}

// *task 6
// Напишите ф-цию, в которую передается массив с целыми числами. 
// Верните новый массив, где останутся лежать только четные из этих чисел. 
// Для этого используйте вспомогательную функцию isEven из предыдущей 
// задачи.
// *solution

let someArr = [2, 3, 6, 5, 23, 22, 111, 100, -4, -5];
function getEvenArr(arr) {
    let evenArr = [];
    for(let item of arr) {
        if (isEven(item)) evenArr.push(item);
    }
    return evenArr;
}

console.log(getEvenArr(someArr));

// *task 7
// Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные 
//     циклы):
//     1 
//     22 
//     333 
//     4444 
//     55555 
//     666666 
//     7777777 
//     88888888
//     999999999
//     Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. 
//     параметр, непредусмотренный ф-цией по умолчанию - один любой символ, 
//     кроме пробела, то пирамида должна быть нарисована этим символом
// *solution

const getBasisFoTreangle = () => {
    // let number = +prompt('Введите число для основания греугольника');
    let number = 9;
    return number;
}

const getNonStandartSymbol = () => {
    // let symbol = prompt(`Если хотите, можете ввести не стандартный символ`);
    let symbol = '*';
    if (!symbol) return 1;
    else return symbol;
}

const createTreangle = (basis, elem) => {
    let str = '';
    let basisLength = basis;
    for(let i = 0; i < basisLength; i++) {
        for(let j = 0; j < basisLength; j++) {
            if (j < (basis - 1)) str += ``;
            else str += elem;
        }
        if (!isNaN(elem)) elem++;
        basis--;
        str += `\n`;
    }
    return str;
}

console.log(createTreangle(getBasisFoTreangle(), getNonStandartSymbol()));

// *task 8
// Напишите ф-цию, которая рисует равнобедренный треугольник из 
// звездочек.
// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.
// *solution

const rightTriangle = (height, symbol) => {
    for(let i = 1; i <= height; i++) {
        let line = '';

        for(let j = 1; j <= (height - i); j++) {
            line += ' ';
        }

        for(let k = 1; k <= ((i * 2) - 1); k++) {
            line += symbol;
        }

        console.log(line);
    }
}

rightTriangle(7, '*');

const showInvertedTriangle = (height, symbol) => {
    for(let i = height; i > 0; i--) {
        let line = '';

        for(let j = 1; j <= (height - i); j++) {
            line += ' ';
        }

        for(let k = 1; k <= ((i * 2) - 1); k++) {
            line += symbol;
        }

        console.log(line);
    }
}

showInvertedTriangle(7, '*');

// *task 9
// Напишите ф-цию, которая возвращает массив заполненный числами 
// Фибоначи от 0 до 1000.
// *solution

const getFibonachi = () => {
    let fibonachiArray = [];
    let i = 0;
    let flag = 1000;

    while(true) {
        if (i === 0 || i === 1) {
            fibonachiArray.push(i)
        } else {
            let formulaFibonach = fibonachiArray[i - 1] + fibonachiArray[i - 2];
            if (formulaFibonach >= flag) break;
            fibonachiArray.push(formulaFibonach);
        }
        i++;
    }
    return fibonachiArray;
}

let arrWithFibonachi = getFibonachi();
console.log(arrWithFibonachi);

// *task 10
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
// опять сложите его цифры. И так, пока сумма не станет однозначным числом 
// (9 и менее). Исп. Рекурсию.
// *solution

function calcNumberPerNine(number) {
    let numToStr = String(number);
    // console.log(numToStr);
    let sum = 0;

    for(let i = 0; i < numToStr.length; i++) {
        sum += +numToStr[i];
    }

    if(sum >= 9) return calcNumberPerNine(sum)
    else return 'Done';
}

console.log(calcNumberPerNine(654998989));

// *task 11
// Дан массив с числами (передается параметром). Выведите 
// последовательно его элементы, используя рекурсию и не используя цикл.
// *solution

function showLastElems(arr, i = 0) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) return showLastElems(arr, i)
}

showLastElems([1, 2, 5, 45, 15]);