'use strict';

// *task 1
// Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию 
// prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. 
// Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в 
// городе %Город% и работаю в компании %Компания%. Мои контактные данные: 
// %Телефон%, %Почта%.».
// *solution

// const userInformtion = () => {
//     let name = prompt('Ваше имя?', 'Аноним');
//     let age = +prompt('Возраст?');
//     let city = prompt('Город проживания?', 'hidden city');
//     let phone = +prompt('Ваш телефон?');
//     let email = prompt('ваш e-mail?', 'hidden e-mail');
//     let company = prompt('Текущее место работы?', 'hidden job');

//     let userYear = new Date().getFullYear() - age;

//     return `Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании "${company}". Мои контактные данные: +${phone}, ${email}.\n${name} родился в ${userYear} году.`;
// };

// console.log(userInformtion());

// *task 2
// Определите по введенному возрасту (исп. значение из задания 1) год рождения. 
// Выведите на экран «%Имя% родился в %Год% году.».
// *solution

// решение записано как продолжение task 1, ибо имеет к нему прямое отношение

// *task 3
// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме 
// вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
// *solution

const stringSum = () => {
    let strNum = '456456';
    let firstThree = +strNum[0] + +strNum[1] + +strNum[2];
    let lastThree = +strNum[strNum.length - 1] + +strNum[strNum.length - 2] + +strNum[strNum.length - 3];
    return (firstThree === lastThree) ? 'Да' : 'Нет';
};

console.log(stringSum());

// *task 4
// Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
// Проверьте работу скрипта при a, равном 1, 0, -3.

const moreThenZero = (a) => {
    return (a > 0) ? 'Верно' : 'Неверно';
};

console.log(moreThenZero(1));
console.log(moreThenZero(0));
console.log(moreThenZero(-3));

// *task 5
// Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, 
// частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в 
// квадрат
// *solution

let a = 10;
let b = 2;

const calculation = () => {
    if ((a + b) > 1) {
        return `Сумма=${a + b}. Квадрат суммы=${(a + b) ** 2}. Разность=${a - b}. Произведение=${a * b}. Частное=${a / b}.`;
    } else {
        return `Сумма=${a + b}. Разность=${a - b}. Произведение=${a * b}. Частное=${a / b}.`;
    };
};

console.log(calculation());

// *task 6
// Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 
//     5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 
//     'Неверно'.
// *solution

const rightOrNot = () => {
    return ((a > 2 && a < 11) || (b >= 6 && b < 14)) ? 'Верно' : 'Неверно';
};

console.log(rightOrNot());

// *task 7
// В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает 
// это число (в первую, вторую, третью или четвертую).
// *solution

const randomNum = (min = 0, max = 60) => {

    return Math.floor(Math.random() * (max - min) + min);
};

let n = randomNum();

const whatTime = () => {
    if (n >= 0 && n <= 15) {
        return 'первая четверть часа';
    } else if (n >=16 && n <=30) {
        return 'вторая четверть часа';
    } else if (n >= 31 && n <= 45) {
        return 'третья четверть часа';
    } else {
        return 'четвёртая четверть часа';
    };
};

console.log(whatTime());

// *task 8
// В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду 
// месяца попадает это число (в первую, вторую или третью).
// *solution

const ramdomDays = (min = 1, max = 31) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let day = ramdomDays();

const decade = () => {
    if (day >= 1 && day <= 11) {
        return 'первая декада';
    } else if (day >= 12 && day <= 21) {
        return 'вторая декада';
    } else {
        return 'третья декада';
    };
};

console.log(day);
console.log(decade());