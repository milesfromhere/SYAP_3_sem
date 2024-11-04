// //Задание 1
// let a = 5
// let name = "Name"
// let i = 0
// let double = 0.23
// let result = 1/0
// let answer = true
// let no = null
// console.log (typeof(a),typeof(name),typeof(i),typeof(double),typeof(result),typeof(answer),typeof(no))

// //Задание 2
// let a = 45 * 21
// let b = 5 * 5
// let answer = a/b
// console.log("В квадрат поместится", Math. floor(answer), "квадратов")

// //Задание 3
// let i = 2
// console.log(i++, ++i)
// let a = ++i // увеличивает потом возврашает
// let b = i++ // возвращает потом увеличивает
// console.log(a,b)

// //Задание 4
// console.log('Котик' > 'котик' ? true : false); //false
// console.log('Котик' > 'китик' ? true : false); //false
// console.log('Кот' > 'Котик' ? true : false); //false
// console.log('Привет' > 'Пока' ? true : false); //true
// console.log(73 > '53' ? true : false); //true
// console.log(false > 0 ? true : false); //false
// console.log(54 > true ? true : false); //true
// console.log(123 > false ? true : false); //true
// console.log(true > '3' ? true : false); //false
// console.log(3 > '5mm' ? true : false); //false
// console.log(8 > '-2' ? true : false); //true
// console.log(34 > '34' ? true : false); //false
// console.log(null > undefined ? true : false); //false

// //Задание 5
// const teacherName = "Кудлацкая Марина Фёдоровна";
// const userInput = prompt("Пожалуйста, введите ваше имя или ФИО:");
// const lowercaseInput = userInput.toLowerCase();
// const lowercaseTeacherName = teacherName.toLowerCase();

// const teacherComponents = lowercaseTeacherName.split(" ");
// const userWords = lowercaseInput.split(" ");

// let match = false;
// for (const userWord of userWords) {
//   if (teacherComponents.includes(userWord)) {
//     match = true;
//     break; 
//   }
// }

// if (match) {
//   alert('Введенные вами данные верные.');
// } else {
//   alert('Введенные вами данные неверные.');
// }

//Задание 6
let ex_1 = prompt(`Сдал ли студент экзамен по математике? (ДА - "+", НЕТ - "-")`);
let ex_2 = prompt(`Сдал ли студент экзамен по русскому? (ДА - "+", НЕТ - "-")`);
let ex_3 = prompt(`Сдал ли студент экзамен по английскому? (ДА - "+", НЕТ - "-")`);

if (ex_1 == '+' && ex_2 == '+' && ex_3 == '+') {
    alert(`Студент переведён на второй курс!`);
} else if (ex_1 == '-' && ex_2 == '-' && ex_3 == '-') {
    alert(`Студент отчислен!`);
} else if (ex_1 == '-' || ex_2 == '-' || ex_3 == '-') {
    alert(`Студента ожидает пересдача!`);
}

// //Задание 7
// let ex7_1 = true + true;
// console.log(ex7_1);
// let ex7_2 = 0 + "5";
// console.log(ex7_2);
// let ex7_3 = 5 + "mm";
// console.log(ex7_3);
// let ex7_4 = 8 / Infinity;
// console.log(ex7_4);
// let ex7_5 = 9 * "\n9";
// console.log(ex7_5);
// let ex7_6 = null - 1;
// console.log(ex7_6);
// let ex7_7 = "5" - 2;
// console.log(ex7_7);
// let ex7_8 = "5px" - 3;
// console.log(ex7_8);
// let ex7_9 = true - 3;
// console.log(ex7_9);
// let ex7_10 = 7 || 0;
// console.log(ex7_10);

// //Задание 8 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.forEach(function(item){
//     if (item % 2){
//     console.log(item%2,"мм")}
//     else{console.log(item+2)}
// })

// //Задание 9 
// let week = ["понедельнику", "вторнику", "среде", "четвергу", "пятнице", "субботе", "воскресенью"];
// let choice_week = prompt(`Введите число:`) - 1;
// alert(`Данная цифра соответствует ${week[choice_week]}`);
// //через объект !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let week = {
//   1:"Понедельнику",
//   2:"Вторкнику",
//   3:"Среде",
//   4:"Четвергу",
//   5:"Пятнице",
//   6:"Субботе",
//   7:"Воскресенью"
// };
// let choice_week = prompt(`Введите число:`);
// alert(`Данная цифра соответствует ${week[choice_week]}`);

// //Задание 10 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function combineStrings( extraValue= "Nikita", defaultValue = "Default", user) {
//     if (user === undefined) {
//       return `Параметры: ${extraValue}, ${defaultValue}, отсутствует`;
//     } else {
//       return `Параметры: ${extraValue}, ${defaultValue}, ${user}`;
//     }
//   }
//   const user = prompt("Введите третий параметр:");
//   const result = combineStrings(undefined, user);
//   alert(result);

// //Задание 11
// function paramsDeclaration(a, b) {
//   if (a === b) {
//     return 4 * a; 
//   } else {
//     return a * b; 
//   }
// }

// const paramsExpression = function(a, b) {
//   if (a === b) {
//     return 4 * a; 
//   } else {
//     return a * b; 
//   }
// };

// const paramsArrow = (a, b) => (a === b ? 4 * a : a * b);

// const sideA = parseFloat(prompt("Введите длину стороны A:"));
// const sideB = parseFloat(prompt("Введите длину стороны B:"));

// const resultDeclaration = paramsDeclaration(sideA, sideB);
// const resultExpression = paramsExpression(sideA, sideB);
// const resultArrow = paramsArrow(sideA, sideB);

// if (sideA === sideB) {
//   alert(`Это квадрат, его периметр: ${resultDeclaration}`);
// } else {
//   alert(`Это прямоугольник, его площадь (Function Declaration): ${resultDeclaration}`);
// }

// if (sideA === sideB) {
//   alert(`Это квадрат, его периметр: ${resultExpression}`);
// } else {
//   alert(`Это прямоугольник, его площадь (Function Expression): ${resultExpression}`);
// }

// if (sideA === sideB) {
//   alert(`Это квадрат, его периметр: ${resultArrow}`);
// } else {
//   alert(`Это прямоугольник, его площадь (Arrow Function): ${resultArrow}`);
// }