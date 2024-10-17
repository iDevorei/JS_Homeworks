'use strict';

// *task 1
// Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию 
// prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. 
// Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в 
// городе %Город% и работаю в компании %Компания%. Мои контактные данные: 
// %Телефон%, %Почта%.».

// Если возраст:
//  - от 0 до 12 - вывести <name> is a child
//  - с 12 до 18 - вывести <name> is a teenager
//  иначе 
//  - вывести Steve is an adult
// Решить задачу 3 способами:
// 1 if-else
// 2 switch.
// 3 Условный (тернарный) оператор
// *solution

const userInformtion = () => {
    let name = prompt('Ваше имя?', 'Аноним');
    let age = +prompt('Возраст?');
    let city = prompt('Город проживания?', 'hidden city');
    let phone = +prompt('Ваш телефон? (только числа)');
    let email = prompt('ваш e-mail?', 'hidden e-mail');
    let company = prompt('Текущее место работы?', 'hidden job');
    let userAgeStatus;

    let userYear = new Date().getFullYear() - age;

    (age == 0) ? age = 'hidden' : age;
    (phone == 0) ? phone = 'hidden phone' : phone;

    if (age >= 0 && age < 12) {
        userAgeStatus = `${name} is a child`;
    } else if (age >= 12 && age < 18) {
        userAgeStatus = `${name} is a teenager`;
    } else if (typeof age !== "number") {
        userAgeStatus = `${name} is an Unknown`;
    } else {
        userAgeStatus = `${name} is an adult`;
    }

    // тоже самое, но через тернарный оператор
    (age >= 0 && age < 12) ? userAgeStatus = `${name} is a child` : (age >= 12 && age < 18) ?  userAgeStatus = `${name} is a teenager` : (typeof age !== "number") ? userAgeStatus = `${name} is an Unknown` : userAgeStatus = `${name} is an adult`;

    // тоже самое, но через конструкцию switch
    switch (true) {
        case (age >= 0 && age < 12):
            userAgeStatus = `${name} is a child`;
            break;
        case (age >= 12 && age < 18):
            userAgeStatus = `${name} is a teenager`;
            break;
        case (typeof age !== "number"):
            userAgeStatus = `${name} is an Unknown`;
            break;
        default:
            userAgeStatus = `${name} is an adult`;
            break;
    }

    return `Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании "${company}". Мои контактные данные: +${phone}, ${email}.\n\n${name} родился в ${userYear} году.\n\n${userAgeStatus}`;
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
let sum = a + b;
let difference = a - b;
let multiply = a * b;
let divide = a / b;

const calculation = () => {
    if ((sum) > 1) {
        return `Сумма=${sum}. Квадрат суммы=${sum ** 2}. Разность=${difference}. Произведение=${multiply}. Частное=${divide}.`;
    } else {
        return `Сумма=${sum}. Разность=${difference}. Произведение=${multiply}. Частное=${divide}.`;
    }
}

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

// Решить задачу используя (switch)
switch (true) {
    case (n >= 0 && n <= 15):
        console.log('первая четверть часа');
        break;
    case (n >=16 && n <=30):
        console.log('вторая четверть часа');
        break;
    case (n >=31 && n <=45):
        console.log('третья четверть часа');
        break;
    case (n >=45 && n <=59):
        console.log('четвёртая четверть часа');
        break;
    default:
        console.log('error');
        break;
}

// это через if else
const whatTime = () => {
    if (n >= 0 && n <= 15) {
        return 'первая четверть часа';
    } else if (n >=16 && n <=30) {
        return 'вторая четверть часа';
    } else if (n >= 31 && n <= 45) {
        return 'третья четверть часа';
    } else {
        return 'четвёртая четверть часа';
    }
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
// это рандомное число, вроде, должно быть от 1 до 31
let day = ramdomDays();

const decade = () => {
    if (day >= 1 && day <= 11) {
        return 'первая декада';
    } else if (day >= 12 && day <= 21) {
        return 'вторая декада';
    } else {
        return 'третья декада';
    }
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

    if (keyDay < 7) {
        return `Меньше года, Меньше месяца, Меньше недели, ${hours} ч., ${minutes} мин., ${seconds} сек.`;
    } else if (keyDay < 31) {
        return `Меньше года, Меньше месяца, ${weeks}-ая неделя, ${hours} ч., ${minutes} мин., ${seconds} сек.`;
    } else if (keyDay < 365) {
        return `Меньше года, ${months}-й месяц, ${weeks}-ая неделя, ${hours} ч., ${minutes} мин., ${seconds} сек.`;
    } else {
        return `${years}-й год, ${months}-й месяц, ${weeks}-ая неделя, ${hours} ч., ${minutes} мин., ${seconds} сек.`;
    }
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

    const monthName = () => {
        if (day >= 1 && day <= 31) {
            month = 1;
            return '1 January';
        } else if (day > 31 && day <= 59) {
            month = 2;
            return '2 February';
        } else if (day > 59 && day <= 90) {
            month = 3;
            return '3 March';
        } else if (day > 90 && day <= 120) {
            month = 4;
            return '4 April';
        } else if (day > 120 && day <= 151) {
            month = 5;
            return '5 May';
        } else if (day > 151 && day <= 181) {
            month = 6;
            return '6 June';
        } else if (day > 181 && day <= 212) {
            month = 7;
            return '7 July';
        } else if (day > 212 && day <= 243) {
            month = 8;
            return '8 August';
        } else if (day > 243 && day <= 273) {
            month = 9;
            return '9 September';
        } else if (day > 273 && day <= 304) {
            month = 10;
            return '10 October';
        } else if (day > 304 && day <= 334) {
            month = 11;
            return '11 November';
        } else {
            month = 12;
            return '12 December';
        }
    };

    console.log(monthName());

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
    }
};

console.log(monthAndSeason());

// *task 
// Пользователь вводит два числа. Найти и вывести (в alert) максимальное из двух чисел. Учтите вариант равенства чисел
// *solution

// это рандомизатор чисел от 1 до 36_500
const ramdomNum = (min = 1, max = 36500) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');

// симуляция ввода чисел, вместо промта
// let num1 = ramdomNum();
// let num2 = ramdomNum();

if (num1 > num2) {
    // console.log(`${num1} больше`);
    alert(`${num1} больше`)
} else if (num1 < num2) {
    // console.log(`${num2} больше`);
    alert(`${num2} больше`)
} else {
    // console.log('Они равны');
    alert('Они равны');
}

// *task
// Необходимо написать программу, которая проверяет пользователя на знание таблицы умножения. Пользователь сам вводит два целых однозначных числа через promt. Затем вводит результат умножения и в результате должен увидеть на экране правильно он ответил или нет (результат вывести в alert) 
// *solution

const tableYouKnow = () => {
    // const ramdomSimpleNum = (min = 1, max = 9) => {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // };

    // let firstNum = ramdomSimpleNum();
    let firstNum = +prompt('Введите первое число, которое умножим');
    // let secondNum = ramdomSimpleNum();
    let secondNum = +prompt('Введите второе число, которое умножим на первое');
    // let userAnswer = firstNum * secondNum + 1;
    let userAnswer = +prompt('Введите ответ умножения первых двух чисел');
    let RightAnswer = firstNum * secondNum;

    if (userAnswer === RightAnswer) {
        // return `Правильно, это ${RightAnswer}`;
        return alert(`Правильно, это ${RightAnswer}`);
    } else if (userAnswer !== RightAnswer) {
        // return `Неправильно!`;
        return alert(`Неправильно`);
    } else {
        // return 'Error! Need Number.';
        return alert(`Error! Need Number.`);
    }
};

tableYouKnow();

// *task
// Дана строка состоящая из символов, например ‘abcde’. Проверить, что первым символом этой строки является буква ‘a’. Если это так вывести слова ‘да’, в противном случае выведите ‘нет’
// *solution

let firstLetterStr = 'abcde';

// через if else 
if (firstLetterStr[0] === 'a') {
    console.log('Да');
} else {
    console.log('Нет');
}

// через тернарный оператор
(firstLetterStr[0] === 'a') ? console.log('Да') : console.log('Нет');

// *через switch

switch (true) {
    case (firstLetterStr[0] === 'a'):
        console.log('Да');
        break;

    default:
        console.log('Нет');
        break;
}

// *task
// У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто «лягут» на третью и треугольника не получится.
// Пользователь вводит поочерёдно через prompt длины трех сторон. Используя конструкцию if..else (один раз), напишите код, который должен определять, может ли существовать треугольник при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной. Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.
// *solution

let side1 = +prompt('Первая сторона, введите число', '0');
let side2 = +prompt('Вторая сторона, введите число', '0');
let side3 = +prompt('Третья сторона, введите число', '0');

let sol1 = side1 + side2;
let sol2 = side1 + side3;
let sol3 = side2 + side3;

if (side1 === 0 || side2 === 0 || side3 === 0) {
    console.log(`Error! Стороны должны быть больше нуля`);
} else if (sol1 < side3 || sol2 < side2 || sol3 < side1) {
    console.log('Error! Такой треугольник не может существовать');
} else if (isNaN(side1) === true || isNaN(side2) === true || isNaN(side3) === true) {
    console.log('Error! Введите число!');
} else {
    console.log('Такой треугольник возможен');
}