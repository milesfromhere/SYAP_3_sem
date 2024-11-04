//1
console.log("1 --------------------------");
let Cube = {
    color: "yellow",
    size: "big",
};

const miniCube = Object.assign({}, Cube, {size: "mini"});
console.log("Куб 1 = ", Cube);
console.log("Куб 2 = ",miniCube);

let Circle = {
    color: "white",
    size: "big"
}
const greenCircle = Object.assign({}, Circle, {color: "green"});
console.log("Круг 1 = ",Circle)
console.log("Круг 2 = ",greenCircle)
let Triangle = {
    color: "white",
    size: "big",
    lines: 1
}
const trippleTriangle = Object.assign({}, Triangle,{lines: 3});
console.log("Угольник 1 = ",Triangle);
console.log("Угольник 2 = ",trippleTriangle);

//2 
console.log("2 --------------------------");

class Human {
    constructor(firstName = "Никитос", lastName = "Бондарик", birthYear = 2005, address = "Пушкина 52") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this._age = 2024 - birthYear; 
        this.address = address;
    }

    get age() {
        return 2024 - this.birthYear;
    }

    set birthYear(year) {
        if (year > 0) {
            this._birthYear = year;
            this._age = 2024 - year;
        } else {
            console.log("Маловато");
        }
    }

    changeAddress(newAddress) {
        this.address = newAddress;
    }

    displayInfo() {
        console.log(`Имя: ${this.firstName}, Фамилия: ${this.lastName}, Возраст: ${this.age}, Адрес: ${this.address}`);
    }
}

class Student extends Human {
    constructor(firstName, lastName, birthYear, address, faculty, course, group, studentID) {
        super(firstName, lastName, birthYear, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.studentID = studentID;
    }

    changeCourse(newCourse) {
        this.course = newCourse;
    }

    changeGroup(newGroup) {
        this.group = newGroup;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Faculty {
    constructor(name, numberOfGroups, numberOfStudents) {
        this.name = name;
        this.numberOfGroups = numberOfGroups;
        this.numberOfStudents = numberOfStudents;
        this.students = []; 
    }

    addStudent(student) {
        this.students.push(student);
        this.numberOfStudents++;
    }

    changeNumberOfGroups(newNumberOfGroups) {
        this.numberOfGroups = newNumberOfGroups;
    }

    changeNumberOfStudents(newNumberOfStudents) {
        this.numberOfStudents = newNumberOfStudents;
    }

    getDev() {
        return this.students.filter(student => student.studentID[2] === '3').length;
    }

    getGroup(group) {
        return this.students.filter(student => student.group === group);
    }
}

const human = new Human();
human.displayInfo();

const student = new Student("Вовчик", "Пупкин", 1998, "Ленина 10", "ФИТ", 9, "ПОИТ-9", "71201300");
student.displayInfo();
console.log("Полное имя студента:", student.getFullName());

const faculty = new Faculty("Факультет информационных технологий", 10, 200);
faculty.addStudent(student);

console.log("Количество студентов специальности ДЭВИ:", faculty.getDev());
console.log("Список студентов группы ПОИТ-9:", faculty.getGroup("ПИ-9"));