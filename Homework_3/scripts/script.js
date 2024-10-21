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
// *solution
console.log('------------------------------------');

for(let i = 50; i >= 1; i -= 5) {
    console.log(i);
}

for(let i = 50; i >= 1; i -= 10) {
    console.log(i);
}

// *task
// Выведите в консоль фразу "Hello World!" в обратном порядке.
// *solution
console.log('------------------------------------');

let str = 'Hello World!';
let strRev = '';
for(let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
}

console.log(strRev);

// *task
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