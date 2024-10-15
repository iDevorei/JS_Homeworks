// *Task 2

// Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9, 
// a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль 
// результат выражений:  
// 5 % 3; 
// 3 % 5; 
// 5 + '3'; 
// '5' – 3; 
// 75 + 'кг'; 
// 785 * 653; 
// 100 / 25; 
// 0 * 0; 
// 0 / 2; 
// 89 / 0; 
// 98 + 2; 
// 5 – 98; 
// (8 + 56 * 4) / 5; 
// (9 - 12) * 7 / (5 + 2); 
// +"123"; 
// 1 || 0; 
// false || true; 
// true > 0. 
// Проверьте (выведите в консоль) каким типам принадлежат переменные.

// *solution

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

// *task 5
// Найдите площадь круга (SKruga) с радиусом 5см (r).
// *solution

const SKruga = (r = 5) => {
    let result = Math.PI * (r ** 2);
    return result;
};

console.log(SKruga());

// *task 6
// Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см (h).
// *solution

const STrap = (a = 5, b = 7, h = 10) => {
    let result = 0.5 * (a + b) * h;
    return result;
};

console.log(STrap());

// *task 7
// Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%), кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной Pereplata.
// *solution

const Pereplata = (S = 2_000_000, p = 0.1, years = 5) => {
    let result = (S * p) * years;
    return result;
};

console.log(Pereplata());

// *task 8
// Решите уравнения (найдите неизвестный x), где a = 8, b = 3: 
// a+2(x-b)=16; 
// b(x+15)=a+6x; 
// x+2x+ax+bx=23780.--- x(1+2+a+b)=23780
// *solution

let a = 8,
    b = 3;

const equation = () => {
    let result = (16 / 2) - (a / 2) + b;
    return result;
};


const equation2 = () => {
    let result = ((15 * b) - a) / (6 - b);
    return result;
};


const equation3 = () => {
    let result = 23780 / (1 + 2 + a + b);
    return result;
};

console.log(`First x = ${equation()}`);
console.log(`Second x = ${equation2()}`);
console.log(`Third x = ${equation3()}`);

// *task 9
// Выведите в консоль стихотворение (соблюдайте все переносы и абзацы): 
// Бывало, спит у ног собака, 
// костер занявшийся гудит, 
// и женщина из полумрака 
// глазами зыбкими глядит. 

// Потом под пихтою приляжет 
// на куртку рыжую мою 
// и мне, задумчивая, скажет: 

// "А ну-ка, спой!.."- и я пою.
// *solution

console.log('Бывало, спит у ног собака,\nкостер занявшийся гудит,\nи женщина из полумрака\nглазами зыбкими глядит.\n\nПотом под пихтою приляжет\nна куртку рыжую мою\nи мне, задумчивая, скажет:\n\n"А ну-ка, спой!.."- и я пою.');


// ========================================================================================================
// решалось в lesson_1

// *task 1
// Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8, 
// true, «true», соответственно. При помощи оператора определения типа (typeof) 
// убедитесь, что переменные принадлежат типам: string, number или boolean. Выведите в 
// консоль (console.log()) типы операторов.
// *solution

let str = 'Привет';
console.log(str, typeof str);

let sum = 123;
console.log(sum, typeof sum);

let num = 15.8;
console.log(num, typeof num);

let flag = true;
console.log(flag, typeof flag);

let txt = 'true';
console.log(txt, typeof txt);

// *task 10
// Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по 
// смыслу предложения (1 абзац, переменная text): 
// 1. «индо земля зашаталась под ногами-и вырос,»; 
// 2. «и заревел он голосом диким...»; 
// 3. «блеснула молния и ударил гром,»; 
// 4. «а так какое-то чудище, страшное и мохнатое,»; 
// 5. «как будто из-под земли, перед купцом:»; 
// 6. «Он подошёл и сорвал аленький цветочек.»; 
// 7. «зверь не зверь, человек не человек,»; 
// 8. «В ту же минуту, безо всяких туч,».
// *solution

let str1 = 'индо земля зашаталась под ногами-и вырос,';
let str2 = 'и заревел он голосом диким...';
let str3 = 'блеснула молния и ударил гром,';
let str4 = 'а так какое-то чудище, страшное и мохнатое,';
let str5 = 'как будто из-под земли, перед купцом:';
let str6 = 'Он подошёл и сорвал аленький цветочек.';
let str7 = 'зверь не зверь, человек не человек,';
let str8 = 'В ту же минуту, безо всяких туч,';
let textPushkin = str6 + str8 + str3 + str1 + str5 + str7 + str4 + str2;

console.log(textPushkin);

// *task
// Создайте две строки: firstName и lastName. Объедините их в одну строку с пробелом между ними и сохраните в новой переменной fullName. Текст переменно должен начинатся с "Меня зовут:.", а заканчиваться "Мне 68 лет."

let firstName = 'Максим';
let lastName = 'Козловский';
let fullName = `Меня зовут ${firstName} ${lastName}. Мне 68 лет.`;
console.log(fullName);

// *task 3
// Напишите скрипт, который находит площадь прямоугольника высотой 23см и 
// шириной 10см, значение высоты и ширины должны хранится в width и height, 
// соответственно, а значение площади должно хранится в числовой переменной SPryam.

const SPryam = () => {
    let width = 10,
        height = 23;
    let result = width * height;
    return result;
};

console.log(SPryam());

// *task 4
// Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром 
// основания равным значению переменной a7 из задания 2, результат поместите в 
// переменную VCilindra.

let height = 10;
let diametr = 4;

let VCilindra = Math.PI * ((diametr * diametr) / 4) * height;

console.log(VCilindra);

// *task
// Создайте переменную original и присвойте ей значение 100. Создайте новую переменную copy и присвойте ей значение original. Измените original на 200, проверьте значения обеих переменных.
// *solution

let original = 100;
let copy = original;
original = 200;

console.log(original);
console.log(copy);

// *task
// Создайте переменную price и присвойте ей значение 100. Затем создайте переменную discount и присвойте ей значение 0.2 (20%). Вычислите цену со скидкой и выведите результат в консоль: "80 руб, вместо 100 руб".
// *solution

let price = 100;
let discount = 0.2;

let newPrice = price - (price * discount);

console.log(`${newPrice} руб, вместо ${price} руб`);

// *task
// Запросите у пользователя два числа А и Б. Выполните сложение двух чисел. Выведите результат в консоль.
// *solution

// let question1 = prompt('Enter number A:');
// let question2 = prompt('Enter nuber B:');
// let sumAB = Number(question1) + Number(question2);

// console.log(sumAB);
// done