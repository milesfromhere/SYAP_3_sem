// Задание 1
function basicOperation(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 'Invalid operation';
    }
}

let result = basicOperation('+', 5, 10); 
console.log('Задание 1 =',result);

// Задание 2 - возвращает сумму кубов всех чисел до n включительно
function sumOfCubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i ** 3;
    }
    return sum;
}

console.log('Задание 2 =',sumOfCubes(3)); 

// Задание 3 - возвращает среднее арифметическое всех элементов массив
function averageOfArray(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

console.log('Задание 3 =',averageOfArray([1, 2, 3, 4, 5])); 

// Задание 4 - возвращает строку, состоящую только из символов английского алфавита
function reverseString(str) {
    let reversed = str.split('').reverse().join('');
    return reversed.replace(/[^a-zA-Z]/g, '');
}

console.log('Задание 4,1 =',reverseString('JavaScript'));
console.log('Задание 4,2 =',reverseString('JavaScr53? ipt'));

// Задание 5 - повторяет n колличество раз
function repeatString(n, s) {
    return s.repeat(n);
}

console.log('Задание 5 =',repeatString(3, 'abc')); 

// Задание 6 - Функция возвращает массив arr3, которые содержит строки из arr1, но не входящие в arr2.
function arrayDiff(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

console.log('Задание 6 =',arrayDiff(['a', 'b', 'c'], ['b', 'c'])); 