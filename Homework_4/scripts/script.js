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

// *task 5
// Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все 
// дни недели, а выходные дни выведите жирным.
// *solution

const daysOfWeek = () => {
    let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'CБ', 'ВС'];

    for (let i = 0; i < week.length; i++) {
        if (week[i] === week.at(-1) || week[i] === week.at(-2)) document.write(`<strong>${week[i]} </strong>`);
        else document.write(`${week[i]} `);
    }
}

daysOfWeek();

// *task 6
// Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, 
// и получите последний элемент массива, используя свойство length.
// *solution

let houses = ['Stark', 'Baratheon', 'Bolton', 'Tully'];
houses.push('Lannister');
console.log(houses);

let lastElem = houses[houses.length - 1];
console.log(lastElem);

console.log(`----------------------------------------`);

// *task 7
// Запросите у пользователя по очереди числовые значения при помощи prompt и 
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое 
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел 
// массива, и выведите его на экран.
// *solution

const arrWithSort = () => {
    let arr = [];
    while(true) {
        let question = prompt('Enter number',);
        if (question === '' || question === null) break;
        arr.push(question);
    }
    console.log(arr);
    // данный метод НЕ изменяет родительский массив
    console.log(arr.toSorted());
    // а вот так мы его сортируем в порядке возрастания
    console.log(arr.toSorted((a, b) => a - b));
}

arrWithSort();

console.log(`----------------------------------------`);

// *task 8
// Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), 
// используя цикл while и метод reverse.
// *solution

const arrReverse = () => {
    let arr = [12, false, 'Текст', 4, 2, -5, 0];
    let arrReverseWhile = [];
    let altReverse;

    let i = arr.length - 1;
    while(i >= 0) {
        arrReverseWhile.push(arr[i]);
        i--;
    }

    console.log(arrReverseWhile);
    // переворачиваю массив НЕ изменяя родительский
    // console.log(altReverse = arr.toReversed());
    // обычный переворот, он изменит родительский массив
    console.log(arr.reverse());

}

arrReverse();

console.log(`----------------------------------------`);

// *task 9
// Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном 
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].
// *solution

const voidElems = () => {
    let arr = [5, 9, 21, , , 9, 78, , , , 6];
    let flag = 0;

    // короткий вариант
    // for(let item of arr) {
    //     if (item === undefined) flag++;
    // }
    // console.log(flag);

    // обычный вариант

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) flag++;
    }

    console.log(`Пустых элементов ${flag}`);
}

voidElems();

console.log(`----------------------------------------`);

// *task 10
// Найдите сумму элементов массива между двумя нулями (первым и последним нулями 
//     в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть 
//     более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или 
//     [1,8,0,13,76,8,7,0,22,0,2,3,2].

const SumBetweenZero = () => {
    let arr = [1,8,0,13,76,8,7,0,22,0,2,3,2];
    let flag = 0;
    let sum = 0;
    let start = arr.indexOf(0);
    let finish = arr.lastIndexOf(0);

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) flag++;
    }

    if (start === -1 || finish === -1 || start === finish) console.log(`Сумма = ${sum}`);
    else {
        for(let i = start + 1; i < finish; i++) {
            sum += arr[i];
        }
        console.log(`Сумма = ${sum}`);
    }
}

SumBetweenZero();

console.log(`----------------------------------------`);

// *task 11
// Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает 
// пользователь. Например: высота = 5, на экране:
// *solution

const triangle = () => {
    let stars = '';
    let max = +prompt('Введите число - основание для пирамиды');
    // let max = 7;
    let maxLength = max;

    for(let i = 0; i < maxLength; i++) {
        for(let j = 0; j < maxLength; j++) {
            if (j < (max - 1)) stars += ` `;
            else stars += ` ^`;
        }
        max--;
        stars += `\n`;
    }

    console.log(stars);

}

triangle();

console.log(`----------------------------------------`);

// *task 1 extra
// Найдите сумму элементов массива (3, -5, "23", 0, "0", 1, -9)
// *solution

const sumArrElem = () => {
    let arr = [3, -5, "23", 0, "0", 1, -9];
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += +arr[i];
    }

    console.log(`Сумма = ${sum}`);
}

sumArrElem();

console.log(`----------------------------------------`);

// *task 2 extra
// Посчитайте кол-во отрицательных, положительных элементов, а также  элементов со строчным типом данных.
// *solution

const PlusMinStr = () => {
    let arr = [3, -5, "23", 0, "0", 1, -9];
    let counterPlus = 0;
    let counterMin = 0;
    let counterStr = 0;

    for(let i = 0; i < arr.length; i++) {
        if (+arr[i] < 0) {
            counterMin++;
        } else if (typeof arr[i] === typeof 'string') {
            counterStr++;
        } else {
            counterPlus++;
        }
    }
    
    console.log(counterPlus, counterMin, counterStr);
}

PlusMinStr();

console.log(`----------------------------------------`);

// *task 3 extra
// Найдите максимальный и минимальный элементы массива [23, 2, 0, , -2, 56, 12, 11]. Выведите эти элементы и их сумму
// *soluton

const arrMinMaxSum = () => {
    let arrMinMax = [23, 2, 0, , -2, 56, 12, 11];
    let maxNum = -Infinity;
    let minNum = Infinity;

    for(let i = 0; i < arrMinMax.length; i++) {
        if (+arrMinMax[i] > +maxNum) maxNum = arrMinMax[i];
        if (+arrMinMax[i] < +minNum) minNum = arrMinMax[i];
    }

    let sum = maxNum + minNum;
    console.log(maxNum, minNum, sum);
}

arrMinMaxSum();

console.log(`----------------------------------------`);

// *task 4 extra
// Создайте произвольный массив и выведите его перевернутую версию (создав новый массив), например: [0, ‘N’, 98, ‘Text’, 3, 5] => [5, 3, ‘Text’, 98, ‘N’, 0]
// *solution

const arrToReverse = () => {
    let arr = [0, 'N', 98, 'Text', 3, 5];
    let arrRev = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        arrRev.push(arr[i]);
    }

    console.log(arrRev);
}

arrToReverse();

console.log(`----------------------------------------`);

// *task 5 extra
// Есть два массива с числовыми значениями одинаковой длины. Создайте третий массив с суммами элементов данных массивов. Например:  [12,4,0] + [8,7,6] = [20, 11, 6].
// *solution

const sumOfArrs = () => {
    let arr1 = [12,4,0];
    let arr2 = [8,7,6];
    let arr3 = [];

    for(let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i] + arr2[i]);
    }

    console.log(arr3);
}

sumOfArrs();

console.log(`----------------------------------------`);

// *task 6 extra
// Дан массив целых чисел (минимум 6 элементов). Проверить, есть ли в нем одинаковые элементы. Вывести в консоль: “Есть повторки!”, “Нет повторов”.
// *solution

const checkDoubleNums = () => {
    let arr = [45, 2, 0, 23, 15, 2, 4, 9];
    let check = false;

    for(let i = 0; i < arr.length; i++) {
        let index = arr.indexOf(arr[i]);
        if (index !== -1 && index !== i) check = true;
    }

    console.log(check ? `Есть повторы` : `Нет повторов`);
}

checkDoubleNums();

console.log(`----------------------------------------`);

// *task 7 extra
// Создайте массив из пяти имен и выведите их на экран те из них, которые начинаются с определенной буквы, которая вводится с клавиатуры.
// *solution

const arrNames = () => {
    let arr = ['Arya', 'Margaery', 'Tyrion', 'Tywin', 'Cersei'];
    let arrNames = [];
    let letter = 'T';

    for(let i = 0; i < arr.length; i++) {
        if (arr[i][0] === letter) {
            arrNames.push(arr[i])
        }
    }
    console.log(arrNames);
}

arrNames();

// *task 8 extra
// Если в одномерном массиве имеются три подряд идущих одинаковых элемента, то переменной r присвоить значение истина
// *solution

const threeLikeOne = () => {
    let arr = [1, 2, 3, 3, 3, 4, 5];
    let r = false;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
            r = true;
            break;
        }
    }
    console.log(r);
}

threeLikeOne();

console.log(`----------------------------------------`);

// *task 9 extra
// Заданы два массива. Один содержит наименование услуг, а другой – расценки за эти услуги. Удалите из обоих массивов все элементы, которые по цене равняются n  рублей. Выведите оба массива и удаленные элементы.
// *solution

const serviceAndPrice = () => {
    let services = ['service one', 'service two', 'service three', 'service four'];
    let price = [10, 20, 30, 40];
    let n = 20;
    let indexN = 0;
    let delPrice;
    let delServ;

    for(let i = 0; i < price.length; i++) {
        if (n === price[i]) {
            indexN = price.indexOf(n);
            delPrice = price.splice(indexN, 1);
            delServ = services.splice(indexN, 1);
        }
        console.log(`Услуга ${services[i]}: $${price[i]}`);
    }
    console.log(`Удалена услуга ${delServ}: $${delPrice}`);
}

serviceAndPrice();

console.log(`----------------------------------------`);

// *task 10 extra
// Найти номер и значение первого найденного отрицательного элемента массива.
// *solution

const negativeElem = () => {
    let arr = [21, 11, 7, -3, 9, -5, 8];
    let numNegative = 0;
    let indexNegative;

    // одним циклом
    // for(let item of arr) {
    //     if (item < 0) {
    //         numNegative = item;
    //         break;
    //     }
    // }
    // indexNegative = arr.indexOf(numNegative);
    // console.log(indexNegative);
    // console.log(numNegative);

    // другим циклом
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            numNegative = arr[i];
            break;
        }
    }
    indexNegative = arr.indexOf(numNegative);
    console.log(`Число ${numNegative}, его индекс ${indexNegative}`);
}

negativeElem();

console.log(`----------------------------------------`);

// *task 11 extra
// Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива на противоположные по знаку. Например, задан массив [1, -5, 0, 3, -4]. После преобразования должно получиться [-1, 5, 0, -3, 4].
// *solution

const changeNums = () => {
    let arr = [1, -5, 0, 3, -4];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[i] = -arr[i]
        }
    }

    console.log(arr);
}

changeNums();

console.log(`----------------------------------------`);

// *task 13 extra
// Поменяйте местами максимальный и минимальных элементы в массиве.
// *solution 

const changeMinMax = () => {
    let arr = [11, 12, 1, 14, 15, 99, 18];
    let maxElem = -Infinity;
    let minElem = Infinity;
    let maxIndex;
    let minIndex;
    let buffer = 0;

    for(let i = 0; i < arr.length; i++) {
        if (maxElem < arr[i]) maxElem = arr[i];
        if (minElem > arr[i]) minElem = arr[i];
    }
    maxIndex = arr.indexOf(maxElem);
    minIndex = arr.indexOf(minElem);
    buffer = arr[minIndex];
    arr[minIndex] = arr[maxIndex];
    arr[maxIndex] = buffer;
    console.log(arr);
}

changeMinMax();

console.log(`----------------------------------------`);

// *task 14 extra
// Выполните сортировку массива с разными числовыми элементами.
// *solition

const arrSort = () => {
    let arr = [1, -5, 0, 2, 11, 22, 212];

    // безопасная сортировка
    // let sortSave = arr.toSorted();
    // console.log(sortSave);

    // обычная сортировка
    console.log(arr.sort());

    // сортировка по возрастанию
    console.log(arr.sort((a, b) => a - b));
}

arrSort();