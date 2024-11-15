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

// *task 12
// Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер 
// группы студента и выводящую введённые данные в следующем виде:
// ***************************** 
// * Домашняя работа: «Функции» * 
// * Выполнил: студент гр. W4017  * 
// * Иванов Иван Иванович             * 
// ***************************** 
// Размер рамки должен определятся автоматически по самой длинной строке. 
// Рамку вывести в консоль.
// *solution

function card(lastName, firstName, secondName, group) {
    let firstStr = `Домашняя работа: «Функции»`;
    let secondStr = `Выполнил: студент гр. ${group}`;
    let thirdStr = `${lastName} ${firstName} ${secondName}`;
    let result = '';
    let lineStars = '';
    let maxLength = firstStr.length;
    if (maxLength < secondStr.length) maxLength = secondStr.length;
    if (maxLength < thirdStr.length) maxLength = thirdStr.length;
    // console.log(maxLength);

    for (let i = 1; i <= (maxLength + 4); i++) {
        lineStars += '*';
    }

    let firstWidth = firstStr.length;
    for (let i = 1; i <= (maxLength - firstWidth); i++) {
        firstStr += ' ';
    }

    let secondWidth = secondStr.length;
    for (let i = 1; i <= (maxLength - secondWidth); i++) {
        secondStr += ' ';
    }

    let thirdWidth = thirdStr.length;
    for (let i = 1; i <= (maxLength - thirdWidth); i++) {
        thirdStr += ' ';
    }

    firstStr = '* ' + firstStr + ' *';
    secondStr = '* ' + secondStr + ' *';
    thirdStr = '* ' + thirdStr + ' *';


    result = `${lineStars}\n${firstStr}\n${secondStr}\n${thirdStr}\n${lineStars}`;
    console.log(result);
}

card('Stark', 'John', 'Nedovich', 'NG1024');

// *task 13
// Напишите ф-цию, которая должна проверить правильность ввода адреса 
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:

// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме 
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
// быть первыми и последними в адресе, и идти подряд, например: «..», «@.», 
// «.@» или «@@», «_@», «@-», «--» и т.п. 

// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
// имя может содержать только буквы, цифры, но не быть первыми и 
// единственными в имени, и точку; 

// c. после последней точки и после @, домен верхнего уровня (ru, by, com и 
// т.п.) не может быть длиной менее 2 и более 11 символов.
// *solution

function checkEmail(mail) {
    let check;
    let symbols = '1234567890qwertyuiopasdfghjklzxcvbnm@_-.';
    let checkTrueChars = symbols.split('');
    // console.log(checkTrueChars);
    let superSymbols = '@_-.';
    let checkTrueSymbols = superSymbols.split('');
    // console.log(checkTrueSymbols);
    let abcAndNums = '1234567890qwertyuiopasdfghjklzxcvbnm.';
    let abcAndNumsArr = abcAndNums.split('');
    let onlyNumsAndDot = '1234567890.';
    let onlyNumsAndDotArray = onlyNumsAndDot.split('');

    // весь адрес не должен содержать русские буквы и спецсимволы, кроме 
    // одной «собачки», знака подчеркивания, дефиса и точки
    for (let i = 0; i < mail.length; i++) {
        if (checkTrueChars.indexOf(mail[i]) === -1) {
            check = false;
            break;
        }
    }

    // они (спецсимволы) не могут быть первыми и последними в адресе,
    if (checkTrueSymbols.indexOf(mail.at(0)) > -1 || checkTrueSymbols.indexOf(mail.at(-1)) > -1) check = false;

    // и идти подряд (нельзя)
    for (let i = 0; i < mail.length; i++) {
        if (checkTrueSymbols.indexOf(mail[i]) > -1 && checkTrueSymbols.indexOf(mail[i + 1]) > -1) {
            check = false;
            break;
        }
    }

    // имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
    // имя может содержать только буквы, цифры, но не быть первыми и 
    // единственными в имени, и точку

    // после последней точки и после @, домен верхнего уровня (ru, by, com и 
    //     т.п.) не может быть длиной менее 2 и более 11 символов

    let emailBeforeDog = mail.slice(0, mail.lastIndexOf('@'));
    let emailAfterDog = mail.slice((mail.lastIndexOf('@') + 1), mail.lastIndexOf('.'));
    let emailAfterDot = mail.slice((mail.lastIndexOf('.') + 1));

    if (emailBeforeDog.length <= 2 || emailAfterDog.length <= 2 || emailAfterDog.length > 11 || emailAfterDot.length < 2 || emailAfterDot.length > 11) {
        check = false;
    }

    // имя может содержать только буквы, цифры, но не быть первыми и 
    // единственными в имени, и точку
    for (let i = 0; i < emailBeforeDog.length; i++) {
        if (abcAndNumsArr.indexOf(emailBeforeDog[i]) === -1) {
            check = false;
            break;
        }
    }

    // цифры, но не быть первыми

    for (let i = 0; i < onlyNumsAndDotArray.length; i++) {
        if (onlyNumsAndDotArray[i] === emailBeforeDog.at(0)) {
            check = false;
            break;
        }
    }

    
    if (check === undefined) check = true;
    return check;
}
console.log(checkEmail('test@gmail.com'));
console.log(checkEmail('te st@mail.com'));
console.log(checkEmail('test@.mail.by'));
console.log(checkEmail('тest@mail.de'));
console.log(checkEmail('_test@mail.ru'));

// *task 1 extra
// Создайте массив с числами и длиной массива от 5 до 8 на выш выбор. Необходимо найти и вывести наименьшее число в массиве
// используйте внутри функции уже созданные функции для создания массива и поиска мин значения

let createArray = (start, finish) => {
    let array = [];

    if (start < finish) {
        for (let i = start; i <= finish; i++) {
            array.push(i);
        }
    } else {
        for (let i = finish; i < start; i++) {
            array.push(i);
        }
    }

    return array;
}

function getMinInArr(arr) {
    let minNum = Infinity;
    
    for(let i = 0; i < arr.length; i++) {
        minNum = min(arr[i], minNum);
    }
    return minNum;
}

let arrForMinInArr = createArray(4, 10);
console.log(getMinInArr(arrForMinInArr));
console.log(getMinInArr(createArray(8, 15)));

// *task 2 extra
// "Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию"

// Напишите функцию findLongestWord(str), которая принимает строку в качестве параметра и находит самое длинное слово в строке.
let someString = 'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию';

const findLongestWord = (str) => {
    let strToArr = str.split(' ');
    let longWord = '';
    for(let i = 0; i < strToArr.length; i++) {
        if (strToArr[i].length > longWord.length) {
            longWord = strToArr[i];
        }
    }
    return longWord;
}

console.log(findLongestWord(someString));


// лучшее решение

const findLongestWordTrue = (str) => {
    let strToArr = str.split(' ');
    let sortedArray = strToArr.sort((a, b) => a.length - b.length);
    return sortedArray.at(-1);
}

console.log(findLongestWordTrue(someString));

// *task 3 extra
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.
// *solution

function calcNumberPerNine(number) {
    let numToStr = String(number);
    console.log(numToStr);
    let sum = 0;

    for(let i = 0; i < numToStr.length; i++) {
        sum += +numToStr[i];
    }

    if(sum >= 9) return calcNumberPerNine(sum)
    else return 'Done';
}

console.log(calcNumberPerNine(654998989));

// *task 4 extra
// Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.
// *solution

function showLastElems(arr, i = 0) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) return showLastElems(arr, i)
}

showLastElems([1, 2, 5, 45, 15]);

// *task 5 extra
// Напишите функцию, которая проверяет, является ли переданная строка палиндромом.
// *solution

const isPalindrome = (word) => {
    const tlc = word.toLowerCase();
    const reverse = tlc.split('').reverse().join('');
    const compare = (tlc === reverse);
    return compare;
}

console.log(isPalindrome('anana'));
console.log(isPalindrome('AnaNa'));
console.log(isPalindrome('banana'));

// *task 6 extra
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// *solution

function anagramma(word, subword) {
    let strToArr = word.split('');

    for(let i = 0; i < subword.length; i++) {
        if (strToArr.indexOf(subword[i]) === -1) return false;
    }
    return true;
}

console.log(anagramma('жизнедеятельность', 'дятел'));

// *task 7 extra
// Функция обратного порядка: Создайте функцию reverseString(str), которая принимает строку и возвращает её в обратном порядке
// *solution

const reverseString = (str) => str.split('').reverse().join('');

let reverseStr = reverseString('Just some text');
console.log(reverseStr);

// *task 8 extra
// Функция для уникальных значений: Напишите функцию uniqueValues(arr), которая принимает массив и возвращает новый массив с уникальными значениями
// *solution

function uniqueValues(arr) {
    let unicVals = [];

    for (let i = 0; i < arr.length; i++) {
        if (unicVals.indexOf(arr[i]) === -1) unicVals.push(arr[i]);
    }

    return unicVals;
}

let unicResult = uniqueValues([5, -3, 'text', -3, 23, 15, 21, 15, 15, 57]);
console.log(unicResult);

// *task 9 extra
// Функция находит общие элементы в двух массивах: Напишите функцию intersection(arr1, arr2), которая находит и возвращает общие элементы в двух массивах
// *solution

function intersection(arr1, arr2) {
    let resultArr = [];
    let biggestArr = [];
    let bufferArr = [];

    if (arr1.length > arr2.length) {
        biggestArr = arr1;
        bufferArr = arr2;
    } else {
        biggestArr = arr2;
        bufferArr = arr1;
    }
    // console.log(bufferArr);
    // console.log(biggestArr);

    for (let i = 0; i < bufferArr.length; i++) {
        if (biggestArr.indexOf(bufferArr[i]) !== -1 && resultArr.indexOf(bufferArr[i]) === -1) resultArr.push(bufferArr[i]);
    }

    return resultArr;
}

let resultElems = intersection([4, 24, 'text', 5, 23, 23, 23, -89, -1, 45, 4, 57, 4, 123], ['text', -1, 23, 23, 46, 23, -75, -89, 57]);
console.log(resultElems);

// *task 10 extra
// Функция поиска элемента в массиве: Напишите функцию contains(arr, value), которая проверяет, содержится ли значение в массиве
// *solution

function contains(arr, value) {

    for (let item of arr) {
        if (arr.indexOf(value) !== -1) return true;
        else return false;
    }

}

let resultContains = contains([23, 45, 'text', 57, 89, -123, 759], 45);
console.log(resultContains);

// *task 11 extra
// Функция конвертации температуры: Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта
// *solution

const celsiusToFahrenheit = (celsius) => {
    let convert = ((celsius * (9 / 5)) + 32).toFixed(1);
    let result = +convert;
    return console.log(`Градус Цельсия ${celsius} C = градус Фаренгейта ${result} F`);
}

celsiusToFahrenheit(10);

// *task 12 extra
// Напишите функцию createArr(), которая создает массив, заполняемый "руками" (например, через prompt()), пока пользователь не введет пустую строку. Функция должна вернуть созданный массив.
// *solution

// esc = null
// отмена = null
// ок = пустая строка

function createArr1() {
    let arr = [];

    while(true) {
        let question = prompt('Enter number');
        if (question === '') break;
        else if (question === null) continue;
        arr.push(question);
    }

    return arr;
}

// console.log(createArr1());