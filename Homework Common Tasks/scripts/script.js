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

// *task 6
// 6. Шифр Цезаря: Напишите функцию, которая шифрует латинскую строку с помощью шифра Цезаря с заданным сдвигом. Например: "table" со сдвигом 2 будет "vcdng". Каждая буква "table" имеет свой номер в таблице ASCI (116, 97, 98, 108, 101). Создайте вторую функцию, которая будет расшифровывать текст, если передать правильный ключ сдвига.
// *solution

// table
// 2
// vcdng

// функция-шифратор
function createEncryptCaesar(string, step) {
    let encryptStr = '';
    let encryptArr = [];

    for (let i = 0; i < string.length; i++) {
        encryptArr.push(string.codePointAt(i));
    };

    for (let i = 0; i < encryptArr.length; i++) {
        encryptStr += String.fromCodePoint(encryptArr[i] + step);
    };

    return console.log(encryptStr);
}

createEncryptCaesar('table', 2);
createEncryptCaesar('Hello, world!', 1);

// функция-дешифратор
// расшифровывает, если подбирать step нужной величины
function createDecryptCaesar(code, step) {
    let decryptStr = '';
    let decryptArr = [];

    for (let i = 0; i < code.length; i++) {
        decryptArr.push(code.codePointAt(i))
    };

    for (let i = 0; i < decryptArr.length; i++) {
        decryptStr += String.fromCodePoint(decryptArr[i] - step)
    }

    return console.log(decryptStr);
}

createDecryptCaesar('vcdng', 2);
createDecryptCaesar('Ifmmp-!xpsme"', 1);

// *task 7
// 7. Напишите программу, которая генерирует случайным образом новый пароль, состоящий из 8 чисел (параметром можно задавать длину) и возвращает результат. По желанию, доработайте функцию: сделайте генератор паролей из латинских символов, целых чисел и специальных символов: _-,.&*^$#@+=!; минимум один большой символ, одна цифра, один спец. символ.
// *solution

// рандомизатор пароля из чисел
function randomPass(passLength = 8) {
    let arrPass = [];
    const randomNum = () => {
        let min = 0;
        let max = 9;
        return Math.round(Math.random() * (max - min) + min);
    };

    for (let i = 0; i < passLength; i++) {
        arrPass.push(randomNum());
    };

    return arrPass.join('');
}

let testNumPass = randomPass();
console.log(testNumPass);

// доработанный генератор, где должно быть:
// qwertyuiopasdfghjklzxcvbnm
// QWERTYUIOPASDFGHJKLZXCVBNM
// 1234567890
// _-,.&*^$#@+=!
// минимум один большой символ
// одна цифра
// один спец. символ

// !минусы этого генератора:
// если делать через return, то при провале проверки в переменную полетит undefined

function hardRandomPass(passLength = 8) {
    let strPass = '';
    let strLowerAbc = 'qwertyuiopasdfghjklzxcvbnm';
    let strUpperAbc = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let nums = '1234567890';
    let specialSymbs = '_-,.&*^$#@+=!';
    let allSymb = strLowerAbc + strUpperAbc + nums + specialSymbs;

    const randomNum = () => {
        let min = 0;
        let max = allSymb.length - 1;
        return Math.round(Math.random() * (max - min) + min);
    };

    const generatePass = () => {
        for(let i = 0; i < passLength; i++) {
            strPass += allSymb[randomNum()];
        };

        return strPass;
    };

    generatePass();

    let checkNums = /\d/.test(strPass);
    let checkLowerAbc = /[A-Z]/.test(strPass);
    let checkUpperAbc = /[a-z]/.test(strPass);
    let checkSpecSymbs = /[-_,.&*^$#@+=!]/.test(strPass);

    if (checkNums && checkLowerAbc && checkUpperAbc && checkSpecSymbs) {
        console.log(strPass);
    } else {
        strPass = '';
        hardRandomPass();
    };
}

hardRandomPass();

// *task 8
// 8. Создайте функцию, которая создает произвольный HTML-элемент в <body> в виде круга/овала/квадрата/прямоугольника. Функция должна принимать параметры: width, height, radius, color; создавать запись "<div style="width: 200px; height: 100px, border-radius: 5px; background-color: red;"></div>". Данное значение добавляйте через document.write. Подумайте о том, как сделать случайную генерацию фигур по вызову функции без параметров.
// *solution

// document.write("<div style='width: 200px; height: 100px; border-radius: 5px; background-color: orange;'></div>");

function createRandomFigure(width, height, borderRadius, bGColor) {

    let strColors = 'IndianRed  LightCoral  Salmon  DarkSalmon  LightSalmon  Crimson  Red  FireBrick  DarkRed  Pink  LightPink  HotPink  DeepPink  MediumVioletRed  PaleVioletRed  LightSalmon  Coral  Tomato  OrangeRed  DarkOrange  Orange  Gold  Yellow  LightYellow  LemonChiffon  LightGoldenrodYellow  PapayaWhip  Moccasin  PeachPuff  PaleGoldenrod  Khaki  DarkKhaki  Lavender  Thistle  Plum  Violet  Orchid  Fuchsia  Magenta  MediumOrchid  MediumPurple  BlueViolet  DarkViolet  DarkOrchid  DarkMagenta  Wheat  BurlyWood  Tan  RosyBrown  SandyBrown  Goldenrod  DarkGoldenRod  Peru  Chocolate  SaddleBrown  Sienna  Black  Gray  Silver  White  Fuchsia  Purple  Red  Maroon  Yellow  Olive  Lime  Green  Aqua  Teal  Blue  Navy  GreenYellow  Chartreuse  LawnGreen  Lime  LimeGreen  PaleGreen  LightGreen  MediumSpringGreen  SpringGreen  MediumSeaGreen  SeaGreen  ForestGreen  Green  DarkGreen  YellowGreen  OliveDrab  Olive  Aqua  Cyan  LightCyan  PaleTurquoise  Aquamarine  Turquoise  MediumTurquoise  DarkTurquoise  CadetBlue  SteelBlue  LightSteelBlue  White  Snow  Honeydew  MintCream  Azure  AliceBlue  GhostWhite  WhiteSmoke  Seashell  Beige  Gainsboro  LightGrey  LightGray  Silver  DarkGray  DarkGrey  Gray  Grey  DimGray  DimGrey  LightSlateGray  LightSlateGrey  SlateGray  SlateGrey  DarkSlateGray  DarkSlateGrey';

    let arrColors = strColors.split('  ');

    const randomNums = () => {
        let min = 10;
        let max = 800;
        return Math.round(Math.random() * (max - min) + min);
    };

    if (width === undefined) width = randomNums();

    if (height === undefined) height = randomNums();

    const randomRaduis = () => {
        let min = 0;
        let max = 800;
        return Math.round(Math.random() * (max - min) + min);
    };

    if (borderRadius === undefined) borderRadius = randomRaduis();

    const randomBGColor = () => {
        let min = 0;
        let max = arrColors.length - 1;
        return arrColors[Math.round(Math.random() * (max - min) + min)];
    };

    if (bGColor === undefined) bGColor = randomBGColor();

    let result = document.write(`<div style='width: ${width}px; height: ${height}px; border-radius: ${borderRadius}px; background-color: ${bGColor};'></div>`);
    
    return result;
}

// createRandomFigure();

// *task 9
// 9. [18+] Создайте функцию-цензор, которая проверяет текст на наличие нецензурных слов и заменяет их на "#". 
// Пример текста: 
// "В сером городе, где каждый день напоминал предыдущий, одиночество казалось нестерпимым. Люди сливались в одну серую массу, а Яна, сжав кулаки, прокладывала путь сквозь толпу. "Какая же нахрен жизнь!" – думала она, чувствуя, как ветер шутит с ее волосами. Бросив взглянуть на небо, она заметила, что даже облака выглядят опустошенно. "Почему у всех так легко? Почему я, черт побери, должна каждый раз зажмуриваться от этой скуки?" Она присела на старую скамейку в парке и, посмотрев на прохожих, вдруг почувствовала, как на душе легло тяжелое бремя. "Да нахрен с ним, может, стоит просто сбежать?" – прошептала она, уже представляя, как дерзко покидает этот серый мир. В её сердце разгорелось пламя, и, поднимаясь, она с готовностью шагнула навстречу жизни. Ей не нужны были никакие фальшивые улыбки, лишь свобода и возможность быть собой. Бляха, она заслуживала этого! И, стиснув зубы, уверенно направилась в неизвестность, где ждала её настоящая сказка."
// Нецензурные слова: "нахрен", "черт", "бляха".
// Предусмотрите возможность расширения проверяемых слов в тексте.
// *solution

let someSext = 'В сером городе, где каждый день напоминал предыдущий, одиночество казалось нестерпимым. Люди сливались в одну серую массу, а Яна, сжав кулаки, прокладывала путь сквозь толпу. "Какая же нахрен жизнь!" – думала она, чувствуя, как ветер шутит с ее волосами. Бросив взглянуть на небо, она заметила, что даже облака выглядят опустошенно. "Почему у всех так легко? Почему я, черт побери, должна каждый раз зажмуриваться от этой скуки?" Она присела на старую скамейку в парке и, посмотрев на прохожих, вдруг почувствовала, как на душе легло тяжелое бремя. "Да нахрен с ним, может, стоит просто сбежать?" – прошептала она, уже представляя, как дерзко покидает этот серый мир. В её сердце разгорелось пламя, и, поднимаясь, она с готовностью шагнула навстречу жизни. Ей не нужны были никакие фальшивые улыбки, лишь свобода и возможность быть собой. Бляха, она заслуживала этого! И, стиснув зубы, уверенно направилась в неизвестность, где ждала её настоящая сказка. Сношать его конём, а сверху трактором!';

// в первый параметр закидываем текст для проверки на цензурные слова
// во втором параметре перечисляем через запятую и пробел, какие слова хотим цензурить, сколько угодно слов
function censor(text, banWords) {
    let arrBanWords = banWords.split(', ');
    // как оказалось, через сокращённую запись (литерал) в регулярки нельзя вставлять переменные, а задумка идёт именно через массив переменных, который переделается в строку для регулярки
    let regexp = new RegExp(`(${arrBanWords.join('|')})[а-яА-Я]*`, 'gi');
    // console.log(text.replace(regexp, '###'));
    let result = text.replace(regexp, '###');
    return result;
}

let censorText = censor(someSext, 'нахрен, черт, бляха, чёрт, сношать');
console.log(censorText);

// *task 10
// 10. Создайте функцию-конструктор или отдельный простой объект "Тамагочи" с минимальным набором функций: включение, выключение, вывод общей информации о состоянии (имя, дата рождения, здоровье по 5-бальной шкале, сытость по 5 шкале, сон в часах от 0 до 8), покормить, спать. При включении "друга" запрашивается имя, автоматически добавляется дата рождения, и все показатели состояния устанавливаются в максимальные значения. Каждую минуту (или 1 час, как вы захотите), показатель сытости уменьшается на одну единицу. Каждый раз, когда сытость доходит до 1 и меньше, то уменьшается здоровье на 1 единицу. Если "друг" не спал больше 6 часов, то каждый последующий час здоровье уменьшается на 1 единицу. Чтобы восстановить здоровье, нужно быть сытым и хорошо спать: при каждом вызове метода "покормить" или "спать" соотв. параметры увеличиваются на 1 единицу. Каждый раз, когда параметры сон и сытость приходят к значению 5, то здоровье увеличивается на 1 единицу, но не может превышать максимального значения. По вашему желанию, функции тамагочи могут быть улучшены или добавлены новые. Проявите фантазию!
// *solution

// ?кормёжка и сон бесполезны, ибо для них нужно сохранять изменения, а при сохранении страница обновляется, а значит, питомец перерождается и все показатели на максимуме 
// TODO что можно делать с тамагочей:
// myPet.turnOn(); - включение тамагочи
// myPet.info(); - информация о тамагоче
// myPet.giveFood() - дать поесть
// myPet.goToSleep() - уложить спать
// myPet.turnOff() - выключить тамагочу, и единственный способ остановить таймеры

function Tamagotchi() {

    // this.name,
    // this.birthday,
    // this.health,
    // this.hungry,
    // this.sleepy,

    this.turnOnOff = true,
    // this.name = prompt(`Как зовут вашего питомца?`, `Пирожочек`),
    this.name = 'Пирожочек',
    // без понятия, как фиксировать дату автоматически, поэтому выставляем вручную
    this.birthday = new Date(),
    this.health = 5,
    this.hungry = 5,
    this.sleepy = 8,
    // !как ЭТО автоматически выключить???!!!
    setInterval(() => this.itWantEat(), 60000),
    setInterval(() => this.itWantSleep(), 60000),

    // включить тамагочу
    // this.turnOn = function() {
    //     // this.name = prompt(`Как зовут вашего питомца?`, `Пирожочек`),
    //     this.name = 'Пирожочек',
    //     // без понятия, как фиксировать дату автоматически, поэтому выставляем вручную
    //     this.birthday = new Date(),
    //     this.health = 5,
    //     this.hungry = 5,
    //     this.sleepy = 8,
    //     // !как ЭТО автоматически выключить???!!!
    //     setInterval(() => this.itWantEat(), 60000),
    //     setInterval(() => this.itWantSleep(), 60000)
    //     // this.nothing
    // },

    // информация о тамагоче
    this.info = function() {
        if (this.turnOnOff === false) {
            console.log(`Тамагочи выключен, информация недоступна`);
        } else {
            console.log(`Имя ${this.name}\nДата рождения ${this.birthday}\nЗдоровье ${this.health}\nСытость ${this.hungry}\nБодрость ${this.sleepy}`);
        };
    },

    // дать поесть
    this.giveFood = function() {
        if (this.health === 5 && this.hungry < 5) {
            this.hungry += 1;
            console.log(`Покормлен. Сытость = ${this.hungry}`);
        } else if (this.health < 5 && this.health >= 1) {
            this.health +=1;
            console.log(`Покормлен. Голоден. Здоровье = ${this.health}`);
        } else if (this.health === 5 && this.hungry === 5) {
            console.log(`Питомец не голоден`);
        } else if (this.health <= 0) {
            console.log(`Невозможно покормить то, чего нет`);
            this.turnOnOff = false;
        } else if (this.turnOnOff === false) {
            console.log(`В начале включите тамагочу`);
        }
    },

    // уложить спать
    this.goToSleep = function() {
        if ((this.sleepy < 8 && this.sleepy > 0) && this.health === 5) {
            this.sleepy += 1;
            console.log(`Поспал. Бодрость = ${this.sleepy}`);
        } else if ((this.sleepy < 8 && this.sleepy > 0) && this.health < 5) {
            this.sleepy += 1;
            this.health += 1;
            console.log(`Поспал. Бодрость = ${this.sleepy}. Похорошел. Здоровье = ${this.health}`);
        } else if (this.sleepy === 8 && this.health === 5) {
            console.log(`Бодрый и здоровый, спать не хочет!`);
        } else if (this.sleepy < 0) {
            console.log(`Зомби не спят...`);
        } else if (this.turnOnOff === false) {
            console.log(`В начале включите тамагочу`);
        } else if (this.sleepy === 8 && this.health < 5) {
            console.log(`Бодрый, не уснёт.`);
        }
    },

    // уменьшение сытости и/или здоровья
    this.itWantEat = function() {
        if (this.turnOnOff === true) {
            if (this.health <= 5 && this.hungry <= 5 && this.hungry >= 1) {
                this.hungry -= 1;
                console.log(`Проголодался. Сытость = ${this.hungry}`);
            } else if (this.health <= 5 && this.health > 0 && this.hungry === 0) {
                this.health -= 1;
                console.log(`Голодает! Сытость = ${this.hungry}. Здоровье = ${this.health}`);
            } else if (this.health <= 0 && this.hungry === 0) {
                console.log(`${this.name} помер с голодухи\nТамагоча выключается.`);
                this.turnOnOff = false;
            }
        } else {
            console.log(`Невозможно, тамагоча выключен.`);
        }
    },

    // уменшьшение бодрости
    this.itWantSleep = function() {
        if (this.turnOnOff === true) {
            if (this.sleepy <= 8 && this.sleepy > 2) {
                this.sleepy -= 1;
                console.log(`Подустал. Хочет вздремнуть. Бодрость = ${this.sleepy}`);
            } else if (this.sleepy <= 2 && this.sleepy > 0 && this.health <= 5 && this.health > 0) {
                this.sleepy -= 1;
                this.health -= 1;
                console.log(`Устал, бледнеет. Бодрость = ${this.sleepy}. Здоровье = ${this.health}`);
            } else if (this.sleepy === 0 && this.health <= 5 && this.health > 0) {
                this.health -= 1;
                console.log(`Устал. Спааааать. Бодрость = ${this.sleepy}. Здоровье = ${this.health}`);
            } else if (this.sleepy === 0 && this.health === 0) {
                console.log(`${this.name} стал бессоным зомби. Тамагоча выключается.`);
                this.turnOnOff = false;
            }
        } else {
            console.log(`Нет. Тамагоча выключен.`);
        }
    },

    // выключение тамагочи
    this.turnOff = function() {
        console.log(`Тамагоча выключается и перестаёт существовать, бездушное ты создание.`);
        this.turnOnOff = false,
        this.name = undefined,
        this.birthday = undefined,
        this.health = undefined,
        this.hungry = undefined,
        this.sleepy = undefined,
        clearInterval();
    }
}

// *что можно делать с тамагочей дублирование:
// myPet.turnOn(); - включение тамагочи
// myPet.info(); - информация о тамагоче
// myPet.giveFood() - дать поесть
// myPet.goToSleep() - уложить спать
// myPet.turnOff() - выключить тамагочу, и единственный способ остановить таймеры


// let myPet = new Tamagotchi();

// *task 7 version 2.0
// 7. Напишите программу, которая генерирует случайным образом новый пароль, состоящий из 8 чисел (параметром можно задавать длину) и возвращает результат. По желанию, доработайте функцию: сделайте генератор паролей из латинских символов, целых чисел и специальных символов: _-,.&*^$#@+=!; минимум один большой символ, одна цифра, один спец. символ.
// *solution
// доработанный генератор, где должно быть:
// qwertyuiopasdfghjklzxcvbnm
// QWERTYUIOPASDFGHJKLZXCVBNM
// 1234567890
// _-,.&*^$#@+=!
// минимум один большой символ
// одна цифра
// один спец. символ

function hardPass(passLength = 8) {
    let strLowerAbc = 'qwertyuiopasdfghjklzxcvbnm';
    let strUpperAbc = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let nums = '1234567890';
    let specialSymbs = '_-,.&*^$#@+=!';
    let arrPass = [];

    // рандомизатор, понадобится
    const randomNum = (maximum) => {
        let min = 0;
        let max = maximum.length - 1;
        return Math.round(Math.random() * (max - min) + min);
    };

    // генерируем строку со случайными малыми буквами
    for (let i = 0; i < passLength; i++) {
        arrPass.push(strLowerAbc[randomNum(strLowerAbc)]);
    };

    // задаём условия для случайной генерации, если символов 5 или меншьне, то генерация пароля немного меняется
    if (passLength > 5) {
        for (let i = 1; i < arrPass.length; i++) {

            if (i % 2 === 0) {
                arrPass[i] = strUpperAbc[randomNum(strUpperAbc)];
            };
    
            if (i % 3 === 0) {
                arrPass[i] = nums[randomNum(randomNum)];
            };
    
            if (i % 5 === 0) {
                arrPass[i] = specialSymbs[randomNum(specialSymbs)];
            };
        };
    
        for (let i = arrPass.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arrPass[i], arrPass[j]] = [arrPass[j], arrPass[i]];
        };
    
        return arrPass.join('');

    } else if (passLength <= 5 && passLength >= 4) {
        for (let i = 0; i < arrPass.length; i++) {
            if (i === 1) {
                arrPass[i] = specialSymbs[randomNum(specialSymbs)];
            };
            if (i === 2) {
                arrPass[i] = nums[randomNum(randomNum)];
            };
            if (i === 3) {
                arrPass[i] = strUpperAbc[randomNum(strUpperAbc)];
            };
        };

        for (let i = arrPass.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arrPass[i], arrPass[j]] = [arrPass[j], arrPass[i]];
        };
    
        return arrPass.join('');

    } else {
        return `Error!!! Слишком мало символов для надёжного пароля.`
    }
}

let testPass = hardPass();
console.log(testPass);