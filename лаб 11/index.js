class Task {
    constructor(id, title) {
      this.id = id;
      this.title = title;
      this.isCompleted = false;
    }
  
    setTitle(newTitle) {
      this.title = newTitle;
    }
  
    toggleStatus() {
      this.isCompleted = !this.isCompleted;
    }
  }
  
  class Todolist {
    constructor(id, title) {
      this.id = id;
      this.title = title;
      this.tasks = []; 
    }
  
    setTitle(newTitle) {
      this.title = newTitle;
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    filterTasks(isCompleted) {
      return this.tasks.filter(task => task.isCompleted === isCompleted);
    }
  }
  
  
  const todoList1 = new Todolist(1, 'Очень важные дела');
  const todoList2 = new Todolist(2, 'Не очень важные');
  
  const task1 = new Task(1, 'Купить покушать');
  const task2 = new Task(2, 'Помыться');
  const task3 = new Task(3, 'Покушать');
  
  todoList1.addTask(task1);
  todoList1.addTask(task2);
  todoList1.addTask(task3);
  
  const task4 = new Task(4, 'Сдать курсовой');
  const task5 = new Task(5, 'Прийти на все пары');
  
  todoList2.addTask(task4);
  todoList2.addTask(task5);
  
  task3.toggleStatus(); 
  task4.toggleStatus(); 
  
  console.log('Выполненные задачи в первом списке:', todoList1.filterTasks(true));
  console.log('Невыполненные задачи во втором списке:', todoList2.filterTasks(false));
  