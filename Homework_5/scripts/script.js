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