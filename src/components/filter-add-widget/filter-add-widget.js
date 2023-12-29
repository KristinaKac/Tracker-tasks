export default class FilterAddWidget {
  constructor(element, addTaskHandler, filterHandler) {
    if (typeof element === 'string') {
      this.element = document.querySelector(element);
    } else {
      this.element = element;
    }

    this.addTaskHandler = addTaskHandler;
    this.filterHandler = filterHandler;

    this.onClickAddTask = this.onClickAddTask.bind(this);
    this.element.addEventListener('submit', this.onClickAddTask);

    this.onFilterTasks = this.onFilterTasks.bind(this);
    this.element.addEventListener('input', this.onFilterTasks);
  }

  onClickAddTask(e) {
    e.preventDefault();

    const input = this.element.querySelector('.input').value;
    const message = document.querySelector('.error');

    // try {
    if (!input.trim()) {
      throw new Error('Пожалуйста, введите корректную задачу.');
    }
    message.innerText = '';
    this.addTaskHandler(input);
    this.element.reset();
    // } catch (error) {
    //   message.innerText = error;
    // }
  }

  onFilterTasks() {
    const input = this.element.querySelector('.input').value;
    this.filterHandler(input);
  }
}
