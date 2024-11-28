'use strict';

// *task 1
// 1. Напишите функцию, которая добавляет в существующий массив (можно пустой) города Беларуси. Если в качестве параметра ничего не передается в функцию, то при каждом ее вызове, новый город запрашивается через prompt, иначе новые города можно добавить одним параметром - текстом городов через запятую. Выведите получившийся массив в алфавитном порядке.
// *solution

let citiesArr = [];

function cities(citiesStr) {
    if (citiesStr === undefined) {
        let city = prompt('Напишите город Беларуси');
        citiesArr.push(city);
        return citiesArr.sort();
    } else {
        citiesArr = citiesStr.split(', ').sort();
        return citiesArr;
    }
}

console.log(cities('Минск, Гродно, Кричев, Червень, Фаниполь'));
// console.log(cities());
// console.log(cities());
// console.log(cities());