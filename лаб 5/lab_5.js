// // 1. Функции и замыкания Вариант 1 
// function makeCounter() {
//     let currentCount = 1;
//     return function() {
//         return currentCount++;
//     };
// }
// let counter1 = makeCounter();
// console.log(counter1()); 
// console.log(counter1()); 

// let counter2 = makeCounter();
// console.log(counter2()); 
// console.log(counter2()); 

// Вариант 2 
let currentCount = 1;

function makeCounter() {
    return function(){
        return currentCount++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() );
console.log( counter() );

console.log( counter2() );
console.log( counter2() );
// 2. Каррирование для вычисления объёма прямоугольного параллелепипеда
function volume(length) {
    return function(width) {
        return function(height) {
            return length * width * height;
        };
    };
}

let calcVolume = volume(5)(10)(2); 
console.log(calcVolume); 

// 3. Генератор для управления движением объекта
function* moveObject() {
    let x = 0, y = 0;
    while (true) {
        let direction = yield { x, y };
        switch(direction) {
            case 'up': y += 1; break;
            case 'down': y -= 1; break;
            case 'left': x -= 1; break;
            case 'right': x += 1; break;
        }
    }
}

const mover = moveObject();
console.log(mover.next().value); 
console.log(mover.next('up').value); 
console.log(mover.next('right').value);
console.log(mover.next('down').value);
console.log(mover.next('left').value);

// 4. Переменные в глобальном объекте window
var a = 10;
let b = 20;
window.c = 30;

alert(window.a); // 10
alert(window.b); // undefined
alert(window.c); // 30