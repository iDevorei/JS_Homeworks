'use strict';

// *task 1
// Выведите числа от 1 до 50 и от 35 до 8.
// *solution

const twoCycles = () => {
    let i = 1;
    let j = 50;

    for(;i <= 50; i++) {
        console.log(i);
    }

    console.log('------------------------------------');

    for(; j >= 0; j--) {
        if (j > 35 || j < 8) continue;
        console.log(j);
    }
};

twoCycles();

// *task 2
// Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа 
// тегом <br /> друг от друга, чтобы получить столбец, а не строку.
// *solution
console.log('------------------------------------');

const from89To11 = () => {
    let i = 89;
    while(i >= 11) {
        document.write(`${i}<br>`);
        i--;
    }
};

from89To11();

// *task 3
// С помощью цикла найдите сумму чисел от 0 до 100.
// *solution
console.log('------------------------------------');

const sumFrom0To100 = () => {
    let sum = 0;
    for(let i = 0; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
};

sumFrom0To100();

// *task 4
// Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 
// (1+2+3).
// *solution
console.log('------------------------------------');

const sumOfNum = () => {
    let num = 5;
    let sumNum = 0;
    for(let i = sumNum; i <= num; i++) {
        sumNum += i;
        switch (i) {
            case 1:
                console.log(sumNum);
                break;
            case 2:
                console.log(sumNum);
                break;
            case 3:
                console.log(sumNum);
                break;
            case 4:
                console.log(sumNum);
                break;
            case 5:
                console.log(sumNum);
                break;
        }
    }
};

sumOfNum();

// *task 5
// Выведите чётные числа от 8 до 56. Решить задание через while и for.
// *solution
console.log('------------------------------------');

const evenNumers = () => {
    for(let i = 8; i <= 56; i++) {
        if (i % 2 !== 0) continue;
        console.log(i);
    }

    let i = 8;
    while(i <= 56) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
};

evenNumers();

// *task 6
// Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде: 
// 2*2 = 4 
// 2*3 = 6 
// 2*4 = 8 
// 2*5 = 10 
// ... 
// 3*1=3 
// 3*2=6 
// 3*3=9 
// 3*4=12 
// ... 
// Для решения задачи используйте вложенные циклы
// *solution
console.log('------------------------------------');

const tablemult = () => {
    let res;
    for(let i = 2; i <= 9; i++) {
        console.log('');
        for(let k = 1; k <= 10; k++) {
            res = i * k;
            console.log(`${i} * ${k} = ${res}`);
        }
    }
};

tablemult();

// *task 7
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет 
// меньше 50. Какое число получится? Посчитайте количество итераций, необходимых 
// для этого (итерация - это проход цикла), и запишите его в переменную num.
// *solution
console.log('------------------------------------');

const actionN = () => {
    let n = 1000;
    let num = 0;
    for(let i = Infinity; true; i--) {
        num++;
        n /= 2;
        if (n <= 50) {
            break;
        }
    }

    console.log(`кол-во итераций ${num}`);
    console.log(n);

    // второй вариант решения

    let m = 1000;
    let num2 = 0;
    while(m >= 50) {
        num2++;
        m /= 2;
    }
    console.log(`кол-во итераций ${num2}`);
    console.log(m);
};

actionN();

// *task 8
// Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до 
// тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите 
// общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не 
// число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь 
// может ввести отрицательное значение.
// *solution

const numForUser = () => {
    let sum = 0;
    let arithmetic = 0;
    let counter = 0;
    let intermediate = 0;

    while(true) {
        let num = Number(prompt('Enter Number(конец: ноль или пусто)', ''));

        if (isNaN(num)) {
            sum = 0;
            arithmetic = 0;
            alert('Error! Not a Number!!!');
            break;
        } else if (num === 0) break;

        sum += num;
        counter++;
        intermediate = sum / counter;
        arithmetic = Math.round(intermediate);
    }

    console.log(`сумма = ${sum}, среднее = ${arithmetic}`);
};

numForUser();

// *task 9
// Дана строка с числами разделенными пробелами 
// «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.
// *solution

// !хочется найти ещё какое-то решение
const strMaxMin = () => {
    let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
    let maxNum = -Infinity;
    let minNum = Infinity;
    let flag = '';
    let newStr = str.split(' ');

    for(let i = 0; i <= newStr.length; i++) {
        flag = newStr[i];
        if (+maxNum < +flag) {
            maxNum = +flag;
        }
        if (+minNum > +flag) {
            minNum = +flag;
        }
    }

    console.log(`Max Number = ${maxNum}\nMin Number = ${minNum}`);
};

strMaxMin();

// *task 10
// Дано произвольное целое число n. Написать программу, которая: 
// a. разбивает число n на цифры и выводит их на экран; 
// b. подсчитывает сколько цифр в числе n; 
// c. находит сумму цифр числа n;
// d. меняет порядок цифр числа n на обратный.
// Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.
// *solution

const actionWithNumber = ()=> {
    let num = 123456;
    let numToStr = String(num);
    let sumOfNum = 0;
    let numRev = '';

    for(let i = numToStr.length; i > 0; i--) {
        sumOfNum += i;
        numRev += i;
    }

    console.log(`Вводится число ${numToStr}. Цифр в числе ${numToStr.length}. Сумма цифр = ${sumOfNum}. Обратный порядок ${numRev}`);
};

actionWithNumber();

// *решались в lesson_3

// *task 
// Выведите на экран числа от 15 до 78 исключая четные
// *solution
console.log('------------------------------------');

for(let i = 15; i <= 78; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

// *task
// Необходимо вывести на экран числа от 50 до 1 с шагом 5 и 10.
// дополнительно: Необходимо вывести на экран числа от 50 до 1 с шагом 2, 5 и 10. Решите задачу двумя циклами.
// *solution
console.log('------------------------------------');

const from50To1 = () => {
    for(let i = 50; i >= 1; i -=2) {
        console.log(i);
    }
    for(let i = 50; i >= 1; i -= 5) {
        console.log(i);
    }
    
    for(let i = 50; i >= 1; i -= 10) {
        console.log(i);
    }

    let i = 50;
    while(i >= 1) {
        console.log(i);
        i -= 10;
    }

    i = 50;
    while(i >= 1) {
        console.log(i);
        i -= 5;
    }

    i = 50;
    while(i >= 1) {
        console.log(i);
        i -= 2;
    }
};

from50To1();

// *task
// Выведите в консоль фразу "Hello World!" в обратном порядке.
// *solution
console.log('------------------------------------');

let str = 'Hello World!';
let strRev = '';
for(let i = (str.length - 1); i >= 0; i--) {
    strRev += str[i];
}

console.log(strRev);

// *task - это task 6 extra
// Написать с помощью цикла while «переворот» числа. Другими словами, нужно создать новое число, у которого цифры шли бы в обратном порядке (например: 472 -> 274).
// *solution
console.log('------------------------------------');

let num = 472;
let strWhat = String(num);
let i = strWhat.length - 1;
let buffer = '';
while(i >= 0) {
    buffer += strWhat[i];
    i--;
}

console.log(Number(buffer));

// *Дополнительные задачи

// *task 1 extra - аналог task 1
// *task 2 extra - аналог task 3 extra => решалось ранее в блоке lesson_3

// *task 4 extra
// 4. Найдите сумму чисел от 1 до 50, а также сумму этих же чисел, исключая четные.
// *solution

const sumOfNumOdd = () => {
    let sum = 0;
    let sumOdd = 0;
    for(i = 1; i <= 50; i++) {
        sum += i;
        if (i % 2 !== 0) {
            sumOdd += i;
        }
    }
    console.log(`Сумма, исключая чётные ${sumOdd}\nСумма ${sum}`);
};

sumOfNumOdd();

// *task 5 extra
// Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.
// *solution

const userNumber = () => {
    // let userNum = 5;
    let userNum = +prompt('Введите положительное число');
    let sumUserNum = 0;
    for(let i = 1; i <= userNum; i++) {
        sumUserNum += i;
    }
    console.log(`сумма чисел от 1 до ${userNum} = ${sumUserNum}`);
};

userNumber();

// *task 6 extra решено в блоке lesson_3

// *task 7 extra
// Найти самую большую цифру в целом числе.
// *solution

const bigNum = () => {
    const ramdomNums = (min = 1, max = 9999) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // это рандомное число
    let num = ramdomNums();
    let numToStr = String(num);
    let BiggestNum = -Infinity;
    let flag = '';

    for(let i = 0; i <= numToStr.length - 1; i++) {
        flag = numToStr[i];
        if (BiggestNum < +flag) {
            BiggestNum = flag;
        }
    }
    console.log(`Наибольшая цифра в числе ${num} = ${BiggestNum}`);
};

bigNum();

// *task 8 extra
// Вычислить сумму первой и последней цифр целого числа.
// *solution

// ?зачем тут вообще нужен цикл
const numFirstLast = () => {
    let num = 6234;
    let numToStr = String(num);
    let firstFlag;
    let lastFlag;
    let sum;
    for(let i = 0; i <= numToStr.length - 1; i++) {
        firstFlag = +numToStr[0];
        lastFlag = +numToStr[numToStr.length - 1];
        sum = firstFlag + lastFlag;
    };
    console.log(`Сумма первой и последнй цифры числа ${num} = ${sum}`);
};

numFirstLast();

// *task 9 extra
// Посчитайте и выведете кол-во встречающихся чисел в строке “В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.”
// *solution

const findNumber = () => {
    let str = 'В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.';
    let counter = 0;

    for(let i = 0; i <= str.length - 1; i++) {
        if ((str[i] == +str[i]) && (str[i] != ' ')) {
            counter++;
        }
    }
    console.log(`Чисел в строке ${counter}`);
};

findNumber();

// *task 10 extra
// Нарисуйте в консоле браузера прямоугольный треугольник заполненный символом #.
// #
// ##
// ###
// ####
// #####
// *solution

const triangle = () => {
    let tring = '';
    let max = 4;
    for(let i = 0; i <= max; i++) {
        tring += '*';
        console.log(tring);
    }
};

triangle();

// *task 12 extra
// Посчитать, сколько раз встречается определенная цифра в введенной последовательности чисел. Количество вводимых чисел и цифра, которую необходимо посчитать вводится пользователем.
// *solution

// !этот код жутко тормозит
// !работает только, если нужно найти однозначное число
const numIntoNum = () => {
    let numb = +prompt('ВВедите число, в котором будем искать цифру');
    let numbToStr = String(numb);
    let num = +prompt('Введите цифру, которую будем искать');
    let count = 0;
    for(let i = 0; i <= numbToStr - 1; i++) {
        if (+numbToStr[i] === num) {
            count++;
        }
    }
    console.log(`Цифра ${num} встречается ${count} раз(а).`);
};

numIntoNum();