'use strict';

// *task 1
// Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию 
// prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. 
// Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в 
// городе %Город% и работаю в компании %Компания%. Мои контактные данные: 
// %Телефон%, %Почта%.».
// *solution

const userInformtion = () => {
    let name = prompt('Ваше имя?', 'Аноним');
    let age = +prompt('Возраст?');
    let city = prompt('Город проживания?', 'hidden city');
    let phone = +prompt('Ваш телефон?');
    let email = prompt('ваш e-mail?', 'hidden e-mail');
    let company = prompt('Текущее место работы?', 'hidden job');

    let userYear = new Date().getFullYear() - age;

    return `Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании "${company}". Мои контактные данные: +${phone}, ${email}.\n\n${name} родился в ${userYear} году.`;
};

console.log(userInformtion());

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

console.log(decade());

// *task 9
// Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы 
// (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты 
// вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, 
// недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», 
// соответственно.
// *solution

const showYearsInfo = () => {
    const ramdomDays = (min = 1, max = 3650) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let keyDay = ramdomDays();
    let years = Math.ceil(keyDay / 365);
    let months = Math.ceil(keyDay / 31);
    let weeks = Math.ceil(keyDay / 7);
    let hours = Math.ceil(keyDay * 24);
    let minutes = Math.ceil(hours * 60);
    let seconds = Math.ceil(minutes * 60);

    if (keyDay < 365 && keyDay < 31 && weeks < 7) {
        return `Меньше года, Меньше месяца, Меньше недели, ${hours} ч., ${minutes} мин., ${seconds} сек.`;
    } else if (keyDay < 365 && keyDay < 31) {
        return `Меньше года, Меньше месяца, ${weeks}-ая неделя, ${hours} ч., ${minutes} мин., ${seconds} сек.`;
    } else if (keyDay < 365) {
        return `Меньше года, ${months}-й месяц, ${weeks}-ая неделя, ${hours} ч., ${minutes} мин., ${seconds} сек.`;
    } else {
        return `${years}-й год, ${months}-й месяц, ${weeks}-ая неделя, ${hours} ч., ${minutes} мин., ${seconds} сек.`;
    };
};
console.log(showYearsInfo());

// *task 10
// Напишите скрипт, который по введенному дню (исп. значение переменной из 8 
//     задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 
//     т.д.). Скрипт определение поры года написать через switch.
// *solution

const monthAndSeason = () => {
    const ramdomDays = (min = 1, max = 365) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let day = ramdomDays();
    let month;

    if (day >= 1 && day <= 31) {
        month = 1;
        console.log('1 January');
    } else if (day > 31 && day <= 59) {
        month = 2;
        console.log('2 February');
    } else if (day > 59 && day <= 90) {
        month = 3;
        console.log('3 March');
    } else if (day > 90 && day <= 120) {
        month = 4;
        console.log('4 April');
    } else if (day > 120 && day <= 151) {
        month = 5;
        console.log('5 May');
    } else if (day > 151 && day <= 181) {
        month = 6;
        console.log('6 June');
    } else if (day > 181 && day <= 212) {
        month = 7;
        console.log('7 July');
    } else if (day > 212 && day <= 243) {
        month = 8;
        console.log('8 August');
    } else if (day > 243 && day <= 273) {
        month = 9;
        console.log('9 September');
    } else if (day > 273 && day <= 304) {
        month = 10;
        console.log('10 October');
    } else if (day > 304 && day <= 334) {
        month = 11;
        console.log('11 November');
    } else {
        month = 12;
        console.log('12 December');
    };

    switch (month) {
        case 1:
        case 2:
        case 12:
            return 'Зима';

        case 3:
        case 4:
        case 5:
            return 'Весна';

        case 6:
        case 7:
        case 8:
            return 'Лето';

        case 9:
        case 10:
        case 11:
            return 'Осень';

        default:
            return 'Wrong season!';
    };
};
// monthAndSeason();
console.log(monthAndSeason());

