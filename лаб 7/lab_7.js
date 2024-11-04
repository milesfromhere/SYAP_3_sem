//1
console.log('1 ---------------------------------------')
const person = {
    name: 'Никитос',
    age: 19,
    
    // Метод приветствия
    greet() {
      console.log(`Привет, я ${this.name}`);
    },
    
    ageAfterYears(years) {
      return this.age + years;
    }
  };
  
  person.greet(); 
  console.log(person.ageAfterYears(5)); 
  console.log('2 ---------------------------------------')
// //2
const car1 = {
    model: 'Машинка Розовенькая',
    year: 2024,
    getInfo() {
      console.log(`Что за машинка?: ${this.model}, Какого годика?: ${this.year}`);
    }
  };
  
  car1.getInfo(); 
  console.log('3 ---------------------------------------')
//3
function Book(title, author) {
    this.title = title;
    this.author = author;
  
    this.getTitle = function() {
      return this.title;
    };
  
    this.getAuthor = function() {
      return this.author;
    };
  }
  const book = new Book('1152', 'Александр Сергеевич');
  console.log(book.getTitle());  
  console.log(book.getAuthor());   
  console.log('4 ---------------------------------------')
//4
const team = {
    players: ['Игрок', 'Киберспортсмен', 'Задрот'],
    
    displayPlayers() {
      this.players.forEach(function(player) {
        console.log(player);
      });
    }
  };
  
  team.displayPlayers();
  console.log('5 ---------------------------------------')

//5
const counter = (function() {
    let count = 0;
  
    return {
      increment() {
        return ++count;
      },
  
      decrement() {
        return --count;
      },
  
      getCount() {
        return count;
      }
    };
  })();
  
  console.log(counter.increment()); 
  console.log(counter.increment()); 
  console.log(counter.decrement()); 
  console.log(counter.getCount());  
  console.log('6 ---------------------------------------')
//6
const item = {};

Object.defineProperty(item, 'price', {
  value: 100,
  writable: true,
  configurable: true
});

console.log(item.price); 

Object.defineProperty(item, 'price', {
  writable: false,
  configurable: false
});

item.price = 200; 
console.log(item.price); 
console.log('7 ---------------------------------------')

//7
const circle = {
    _radius: 5,
  
    get area() {
      return Math.PI * this._radius ** 2;
    },

    get radius() {
      return this._radius;
    },

    set radius(value) {
      if (value > 0) {
        this._radius = value;
      } else {
        console.error('Радиус должен быть положительным числом.');
      }
    }
  };
  
  console.log(circle.area);   
  circle.radius = 10;
  console.log(circle.area);  
  console.log('8 ---------------------------------------') 
//8
const car = {};

Object.defineProperties(car, {
  make: {
    value: 'Машинка',
    writable: true,
    configurable: true
  },
  model: {
    value: 'Красненькая',
    writable: true,
    configurable: true
  },
  year: {
    value: 2025,
    writable: true,
    configurable: true
  }
});

console.log(car.make, car.model, car.year); 

Object.defineProperties(car, {
  make: {
    writable: false,
    configurable: false
  },
  model: {
    writable: false,
    configurable: false
  },
  year: {
    writable: false,
    configurable: false
  }
});

car.make = 'Бибика'; 
console.log(car.make); 

console.log('9 ---------------------------------------')

//9
const numbers = [1, 2, 3];

Object.defineProperty(numbers, 'sum', {
  get() {
    return this.reduce((acc, num) => acc + num, 0);
  },
  configurable: false,
  enumerable: false
});

console.log(numbers.sum); 

console.log('10 ---------------------------------------')

//10
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    get width(){
        return this._width;
    }
    set width(value1) {
        this._width = value1;
    }
    get height(){
        return this._height;
    }
    set height(value2){
        this._height = value2;
    }
    get area() {
        return this._width * this._height;
    }
}
const rectangle = new Rectangle(5,6);
console.log(Rectangle.area);
console.log('11 ---------------------------------------')

//11
class User {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
get fullName(){
    return this.firstName + ' ' + this.lastName;
}
set fullName(name){
    const parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts [1];
}
}
const user = new User('Вова','Анатолий');
console.log(user.fullName);

user.fullName = 'Владимир Вовчик';
console.log(user.firstName);
console.log(user.fullName);
console.log(user.lastName);
console.log('---------------------------------------')