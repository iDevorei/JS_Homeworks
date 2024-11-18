'use strict';

// *task 1
// Дана строка 'aaa@bbb@ccc'. Замените все @ на  ! с помощью глобального 
// поиска и замены.
// *solution

const replace = () => {
    let str = 'aaa@bbb@ccc';
    let newstr = str.replace(/@/g, '!');

    return newstr;
}

console.log(replace());

// *task 2
// В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту 
// дату в формат 31/12/2025.
// *solution
const changeDate = () => {
    let date = '2025-12-31';
    let regexp = /(\d{4})-(\d{2})-(\d{2})/g;
    let resultDate = date.replace(regexp, '$3/$2/$1');

    return resultDate;
};

console.log(changeDate());

// *task 3
// Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово 
// «javascript» тремя разными способами (через substr, substring, slice).
// *solution

const cutStr = () => {
    let str = 'Я учу javascript!';
    let startOne = str.indexOf('учу');
    let startTwo = str.indexOf('javascript');

    let cutOneSubstr = str.substr(startOne, 3);
    console.log(cutOneSubstr);
    let cutOneSubstring = str.substring(startOne, startOne + 3);
    console.log(cutOneSubstring);
    let cutOneSlice = str.slice(startOne, startOne + 3);
    console.log(cutOneSlice);

    let cutTwoSubstr = str.substr(startTwo, 10);
    console.log(cutTwoSubstr);
    let cutTwoSubstring = str.substring(startTwo, startTwo + 10);
    console.log(cutTwoSubstring);
    let cutTwoSlice = str.slice(startTwo, startTwo + 10);
    console.log(cutTwoSlice);

};

cutStr();

// *task 4
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень 
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
// *solution

const sumArrElems = () => {
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;

    for (let item of arr) {
        sum += Math.pow(item, 3);
    }

    let result = Math.sqrt(sum);

    return result;
};

console.log(sumArrElems());

// *task 5
// Даны переменные a и b. Отнимите от a переменную b и результат 
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную 
// c записалось положительное значение. Проверьте работу скрипта при a и b, 
// равных соответственно 3 и 5, 6 и 1.
// *solution

const plusNumber = (a, b) => {
    let c = Math.abs(a - b);

    return c;
}
console.log(plusNumber(3, 5));

// *task 6
// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
// Для решения этой задачи напишите функцию, которая будет добавлять 0 
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 
// сделает 01.09.2014).
// *solution

function addZero(num) {
    if (num >= 0 && num <= 9) return `0${num}`;
    else return num;
}

let todayDate = new Date();
let needDate = `${addZero(todayDate.getHours())}:${addZero(todayDate.getMinutes())}:${addZero(todayDate.getSeconds())} ${addZero(todayDate.getDate())}.${addZero(todayDate.getMonth() + 1)}.${todayDate.getFullYear()}`;
console.log(needDate);

// *task 7
// Дана  строка 'aa aba abba abbba abca abea'.  Напишите  регулярку,  которая  
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое 
// количество раз, буква 'a'.

let baobab = 'aa aba abba abbba abca abea';
let regexpBaobab = /ab+a/g;
console.log(baobab.match(regexpBaobab));

// *task 8
// Напишите ф-цию строгой проверки ввода номер телефона в 
// международном формате (<код страны> <код города или сети> <номер 
// телефона>). Функция должна возвращать true или false. Используйте 
// регулярные выражения.
// *solution

const checkPhoneNumber = (phoneNumber) => {
    let regexp = /^[+]?\d{2,3}\d{2}\d{7}$/;
    return regexp.test(phoneNumber);
};

// true
console.log(checkPhoneNumber('+375259997766'));
console.log(checkPhoneNumber('80293332211'));
// false
console.log(checkPhoneNumber('80293332211789'));
console.log(checkPhoneNumber('+375259997766123'));

// *task 9
// Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих 
// условия:
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме 
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
// имя может содержать только буквы, цифры, но не быть первыми и 
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов. 
// Функция должна возвращать true или false. Используйте регулярные 
// выражения.
// *solution

function checkEmail(email) {
    let regexp =  /^[a-zA-Z][a-zA-Z0-9][a-zA-Z0-9]+@[a-zA-Z0-9][a-zA-Z0-9._-]{1,10}\.[a-zA-Z]{2,11}$/;

    return regexp.test(email);
}

// true
console.log(checkEmail('test@gmail.com'));
console.log(checkEmail('test@mail.ru'));
console.log(checkEmail('test@gm.so.dot.com'));
// false
console.log(checkEmail('test@gmail.c'));
console.log(checkEmail('12@gmail.com'));
console.log(checkEmail('te@gmail.com'));
console.log(checkEmail('test@g.com'));
console.log(checkEmail('test@gmailzxcvbnm.com'));


// *task 10
// Напишите ф-цию, которая из полного адреса с параметрами и без, 
// *например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3
// *получит адрес доменного имени (https://tech.onliner.by), 
// *остальную часть адреса без параметров (/2018/04/26/smart-do-200/), 
// *параметры (utm_source=main_tile&utm_medium=smartdo200) 
// *и хеш (#zag3).
// В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.

function createArrURL(link) {
    let arr = [];
    let regexp = /^(?<domainName>https:[/][/][^/]+)(?<otherNoParams>[/][^\?]*)?(?<parameters>[?][^#]*)?(?<hash>[#].*)?$/;
    let groups = link.match(regexp).groups;
    // console.log(groups);
    arr.push(groups.domainName);

    if (groups.otherNoParams !== undefined) arr.push(groups.otherNoParams);
    if (groups.parameters !== undefined) arr.push(groups.parameters);
    if (groups.hash !== undefined) arr.push(groups.hash);

    return arr;
}

let url = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
// let url = 'https://tech.onliner.by';

console.log(createArrURL(url));

// *task 1 extra (classwork)
// Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.
// *solution

const randomElement = (arr) => {
    let min = 0;
    let max = arr.length - 1;

    let random = Math.round(Math.random() * (max - min) + min);

    return arr[random];
}

console.log(randomElement([1, 2, -5, 'text', 45, -235]));

// *task 2 extra (classwork)
// Напишите функцию, которая принимает дату рождения и возвращает, сколько лет человеку на данный момент.
// *solution

function howOld(birthday) {
    let dateNow = new Date();
    let dateBirthday = new Date(birthday);
    let diff = dateNow - dateBirthday;
    // console.log(diff);

    let monthsLikeYears = diff / (1000 * 60 * 60 * 24 * 365);
    // console.log(monthsLikeYears);
    let withoutYears = Math.floor(monthsLikeYears);
    // console.log(withoutYears);
    let months = Math.floor((monthsLikeYears - withoutYears).toFixed(1) * 12);
    // console.log(months);

    return `года человека ${withoutYears}, месяцы человека ${months}`;
}

console.log(howOld('1987.04.12'));