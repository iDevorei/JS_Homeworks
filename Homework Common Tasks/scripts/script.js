'use strict';

// *task 1
// 1. Напишите функцию, которая добавляет в существующий массив (можно пустой) города Беларуси. Если в качестве параметра ничего не передается в функцию, то при каждом ее вызове, новый город запрашивается через prompt, иначе новые города можно добавить одним параметром - текстом городов через запятую. Выведите получившийся массив в алфавитном порядке.
// *solution

let citiesArr = [];

function getCities(citiesStr) {
    if (citiesStr === undefined) {
        let city = prompt('Напишите город Беларуси');
        citiesArr.push(city);
        return citiesArr.sort();
    } else {
        citiesArr = citiesStr.split(', ').sort();
        return citiesArr;
    }
}

console.log(getCities('Минск, Гродно, Кричев, Червень, Фаниполь'));
// console.log(cities());
// console.log(cities());
// console.log(cities());

// *task 2
// 2. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы вывести в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев". Создайте массив с расстояниями до городов от Минска (нулевой км). Выведите информацию о расстоянии между Иваном и Максимом. Предусмотрите возможность запрашивать расстояние между другими людьми.
// *solution

let arrNamesAndCities = [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']];

// вывести в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев".
for (let i = 1; i < arrNamesAndCities.length; i++) {
    for (let j = 0; j < arrNamesAndCities[i].length; j++) {
        console.log(`${arrNamesAndCities[i - 1][j]} из ${arrNamesAndCities[i][j]}`);
    };
};

// Создайте массив с расстояниями до городов от Минска (нулевой км)
let arrKmFromMinsk = [0, 345, 300, 200];

// возможность запрашивать расстояние между другими людьми
const calcDistance = (a = 0, b = 3) => {
    a = +prompt(`Введите число, от какого человека будем считать расстояние\nИван - 0\nКатя - 1\nОльга - 2\nМаксим - 3`);
    b = +prompt(`Введите число, до какого человека будем считать расстояние\nИван - 0\nКатя - 1\nОльга - 2\nМаксим - 3`);
    let finalResult = arrKmFromMinsk[a] + arrKmFromMinsk[b];
    let result = `Расстояние между ${arrNamesAndCities[0][a]} и ${arrNamesAndCities[0][b]} = ${finalResult}km`;
    return result;
};

// console.log(distance());

// *task 3
// 3. Напишите функцию, которая принимает две даты и возвращает количество дней между ними. В зависимости от значения, выведите: "дата уже близко" (< 3 дней), "еще есть время" (от 3 до 7), "далековато еще" (> 7 дней).
// *solution

function showHowManyDays(dateOne, dateTwo) {
    let a = new Date(dateOne);
    let b = new Date(dateTwo);
    let c;
    (a < b) ? c = b - a : c = a - b;
    let days = Math.floor(c / (1000 * 60 * 60 * 24));
    if (days < 3) {
        console.log('Дата уже близко');
    } else if (days >=3 && days < 7) {
        console.log('еще есть время');
    } else {
        console.log('далековато еще');
    };
}

showHowManyDays('2024.06.14', '2024.06.15');
showHowManyDays('2024.06.10', '2024.06.15');
showHowManyDays('2024.06.01', '2024.06.15');
showHowManyDays('2024.06.15', '2024.06.11');

// *task 4
// 4. Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта. В зависимости от температуры, выведите предупреждение: "сегодня прохладнее, чем обычно" (от 5 до 10), "одевайтесь теплее" (от 0 до 5), "сегодня очень холодно" (меньше 0 и до -5), "оставайтесь дома" (< -5).
// *solution

function celsiusToFahrenheit(celsius) {
    let convert = ((celsius * (9 / 5)) + 32).toFixed(1);
    let result = +convert;
    // из рассчёта, что имеется в виду градусы Фаренгейта
    if (result > 5 && result <= 10) return console.log('сегодня прохладнее, чем обычно');
    else if (result >= 0 && result <= 5) return console.log('одевайтесь теплее');
    else if (result < 0 && result >= -5) return console.log('сегодня очень холодно');
    else if (result < -5) return console.log('оставайтесь дома');
}

celsiusToFahrenheit(-14);
celsiusToFahrenheit(-15);
celsiusToFahrenheit(-19);
celsiusToFahrenheit(-25);

// *task 5
// 5. Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.
// *solution

function randomElement(arr) {
    let min = 0;
    let max = arr.length - 1;
    let random = Math.round(Math.random() * (max - min) + min);

    return console.log(arr[random]);;
}
randomElement([-23, 15, 'test', ['text', 235], 326]);