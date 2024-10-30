'use strict';

// *task 1
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти 
// элементы на экран.
// *solution

const showArray = () => {
    let arr = [1, 2, 3, 4, 5];

    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    console.log(``);

    // А вот так ещё короче

    for(let item of arr) {
        console.log(item);
    }
}

showArray();

console.log(`----------------------------------------`);

// *task 2
// Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут 
// быть положительными и отрицательными. Выведите на экран только отрицательные 
// числа, которые больше -10, но меньше -3.

const onlyNegativeNums = () => {
    let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

    // сразу короткий вариант
    for(let item of arr) {
        if (item > -10 && item < -3) console.log(item);
    }

    console.log(``);

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > -10 && arr[i] < -3) console.log(arr[i]);
    }
}

onlyNegativeNums();

console.log(`----------------------------------------`);

// *task 3
// Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и 
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого 
// массива. Запишите ее в переменную result и выведите.
// *solution

// !так создавать функции не хорошо. Одна функция - одно действие
const createNewArray = () => {
    let arr = [];
    let arrWhile = [];
    let result = 0;

    for (let i = 23; i <= 57; i++) {
        arr.push(i);
    }
    console.log(arr);

    let i = 23;
    while(i <= 57) {
        arrWhile.push(i);
        i++;
    }

    console.log(arrWhile);

    for(let i = 0; i < arr.length; i++) {
        result += arr.at(i);
    }

    console.log(`Сумма = ${result}`);

    // А ещё можно вот так: коротко, но сложно

    let result2 = arr.reduce((sum, current) => sum + current);
    // console.log(result2);

}

createNewArray();

console.log(`----------------------------------------`);

// *task 4
// Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. 
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 
// 5.
// *solution

const onlyOneAndTwo = () => {
    let arr = ['10', '20', '30', '50', '235', '3000'];

    // попроще

    for (let item of arr) {
        if (+item[0] === 1 || +item[0] === 2 || +item[0] === 5) console.log(item);
    }

    console.log('');

    // обычный вариант

    for (let i = 0; i < arr.length; i++) {
        if (+arr[i][0] === 1 || +arr[i][0] === 2 || +arr[i][0] === 5) console.log(arr[i]);
    }
}

onlyOneAndTwo();

console.log(`----------------------------------------`);