//Задача 1: Список товаров с использованием Set
class ProductList {
    constructor() {
        this.products = new Set();
    }

    addProduct(product) {
        this.products.add(product);
        console.log(`Товар "${product}" добавлен.`);
    }

    removeProduct(product) {
        if (this.products.has(product)) {
            this.products.delete(product);
            console.log(`Товар "${product}" удален.`);
        } else {
            console.log(`Товар "${product}" не найден.`);
        }
    }

    hasProduct(product) {
        return this.products.has(product);
    }

    countProducts() {
        return this.products.size;
    }

    listProducts() {
        console.log("Список товаров:", [...this.products]);
    }
}

// Пример использования
const productList = new ProductList();
productList.addProduct("Яблоки");
productList.addProduct("Бананы");
productList.listProducts();
productList.removeProduct("Яблоки");
console.log("Есть ли товар 'Яблоки'?", productList.hasProduct("Яблоки"));
console.log("Количество товаров:", productList.countProducts());

//Задача 2: Список студентов с использованием Set
class Student {
    constructor(id, group, fullName) {
        this.id = id;
        this.group = group;
        this.fullName = fullName;
    }
}

class StudentList {
    constructor() {
        this.students = new Set();
    }

    addStudent(student) {
        this.students.add(student);
        console.log(`Студент ${student.fullName} добавлен.`);
    }

    removeStudentById(id) {
        for (let student of this.students) {
            if (student.id === id) {
                this.students.delete(student);
                console.log(`Студент с номером ${id} удален.`);
                return;
            }
        }
        console.log(`Студент с номером ${id} не найден.`);
    }

    filterByGroup(group) {
        return [...this.students].filter(student => student.group === group);
    }

    sortById() {
        return [...this.students].sort((a, b) => a.id - b.id);
    }

    listStudents() {
        console.log("Список студентов:", [...this.students]);
    }
}

// Пример использования
const studentList = new StudentList();
studentList.addStudent(new Student(1, "Группа 9", "Бондарик Никита"));
studentList.addStudent(new Student(2, "Группа 2", "Егор Аврусивич"));
studentList.listStudents();
studentList.removeStudentById(1);
console.log("Студенты группы 9:", studentList.filterByGroup("Группа 9"));
console.log("Студенты по номерам:", studentList.sortById());

//Задача 3: Хранилище товаров с использованием Map
class ProductStorage {
    constructor() {
        this.products = new Map();
    }

    addProduct(id, name, quantity, price) {
        this.products.set(id, { name, quantity, price });
        console.log(`Товар "${name}" добавлен с ID: ${id}.`);
    }

    removeProductById(id) {
        if (this.products.has(id)) {
            this.products.delete(id);
            console.log(`Товар с ID: ${id} удален.`);
        } else {
            console.log(`Товар с ID: ${id} не найден.`);
        }
    }

    removeProductsByName(name) {
        for (let [id, product] of this.products) {
            if (product.name === name) {
                this.products.delete(id);
                console.log(`Товар "${name}" удален.`);
            }
        }
    }

    updateQuantity(id, quantity) {
        if (this.products.has(id)) {
            this.products.get(id).quantity = quantity;
            console.log(`Количество товара с ID: ${id} обновлено на ${quantity}.`);
        } else {
            console.log(`Товар с ID: ${id} не найден.`);
        }
    }

    updatePrice(id, price) {
        if (this.products.has(id)) {
            this.products.get(id).price = price;
            console.log(`Цена товара с ID: ${id} обновлена на ${price}.`);
        } else {
            console.log(`Товар с ID: ${id} не найден.`);
        }
    }

    getTotalCount() {
        return this.products.size;
    }

    getTotalPrice() {
        let total = 0;
        for (let product of this.products.values()) {
            total += product.price * product.quantity;
        }
        return total;
    }

    listProducts() {
        console.log("Список товаров:");
        this.products.forEach((product, id) => {
            console.log(`ID: ${id}, Название: ${product.name}, Количество: ${product.quantity}, Цена: ${product.price}`);
        });
    }
}

// Пример использования
const productStorage = new ProductStorage();
productStorage.addProduct(1, "Яблоки", 10, 100);
productStorage.addProduct(2, "Бананы", 5, 50);
productStorage.listProducts();
productStorage.updateQuantity(1, 15);
productStorage.updatePrice(2, 60);
console.log("Количество товаров в хранилище:", productStorage.getTotalCount());
console.log("Общая стоимость товаров:", productStorage.getTotalPrice());
productStorage.removeProductById(1);
productStorage.removeProductsByName("Бананы");

//Задача 4: Кеширование результатов функции 
class Cache {
    constructor() {
        this.cache = new WeakMap();
    }

    memoize(fn) {
        return (...args) => {
            const key = { args };
            
            if (this.cache.has(key)) {
                console.log('Возвращаем данные из кэша');
                return this.cache.get(key);
            }

            const result = fn(...args);
            this.cache.set(key, result);
            console.log('Результат вычисления сохранён в кэше');
            return result;
        };
    }
}

// Пример функции
const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Пример использования кеша
const cache = new Cache();
const memoizedFibonacci = cache.memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Вычисляет и кэширует
console.log(memoizedFibonacci(15)); 
console.log(memoizedFibonacci(5));  
