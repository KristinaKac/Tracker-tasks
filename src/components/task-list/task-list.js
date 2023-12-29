import TaskListFilter from './task.list-filter';
import RenderTask from '../../js/render';

export default class TaskList {
  constructor(elements) {
    if (typeof elements === 'string') this.elements = [...document.querySelectorAll(elements)];

    [this.pinnedList, this.filterList] = this.elements;

    this.taskListFilter = new TaskListFilter(this);
    this.renderTasks = new RenderTask(this);

    this.taskItems = [];
    this.filterItems = [];
    this.input = '';

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.pinnedList.addEventListener('click', this.onChangeStatus);
    this.filterList.addEventListener('click', this.onChangeStatus);

    this.renderTasks.renderNoTasks(this.pinnedList);
  }

  onChangeStatus(e) {
    if (!e.target.className.includes('status')) return;
    const status = e.target;
    const task = e.target.closest('.task-item');
    if (status.innerText === 'v') { this.fromPinToFilter(task); return; }
    this.fromFilterToPin(task);
  }

  fromPinToFilter(item) {
    const element = this.taskItems.find((el) => el.task.dataset.id === item.dataset.id);
    element.task.querySelector('.status').innerText = '';
    this.filterItems.push(element);
    this.reloadTasks();
  }

  fromFilterToPin(item) {
    const element = this.taskItems.find((el) => el.task.dataset.id === item.dataset.id);
    const elementFilter = this.filterItems.findIndex((e) => e.task.dataset.id === item.dataset.id);
    this.filterItems.splice(elementFilter, 1);
    element.task.querySelector('.status').innerText = 'v';
    this.reloadTasks();
  }

  reloadTasks() {
    RenderTask.clearList(this.filterList);
    RenderTask.clearList(this.pinnedList);

    this.renderTasks.renderTasks(this.taskItems);
    this.renderTasks.renderNoTasks(this.pinnedList);

    this.taskListFilter.filterTasks(this.input);
  }
}
