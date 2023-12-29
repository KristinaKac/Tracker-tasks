import Task from '../../js/Task';
import RenderTasks from '../../js/render';

export default class TaskListAdd {
  constructor(taskList) {
    this.taskList = taskList;
    this.renderTasks = new RenderTasks(this.taskList);
    this.addTask = this.addTask.bind(this);
  }

  addTask(input) {
    const taskHtml = TaskListAdd.getTaskHTML(input);
    const task = new Task(taskHtml);

    this.taskList.taskItems.push(task);
    this.taskList.filterItems.push(task);

    RenderTasks.clearList(this.taskList.filterList);
    this.renderTasks.renderTasks(this.taskList.filterItems);
    this.renderTasks.renderNoTasks(this.taskList.filterList);

    this.taskList.input = '';
  }

  static getTaskHTML(input) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.id = Date.now();

    const spanValue = document.createElement('span');
    spanValue.className = 'value';
    spanValue.innerText = input;

    const spanStatus = document.createElement('span');
    spanStatus.className = 'status';

    li.appendChild(spanValue);
    li.appendChild(spanStatus);

    return li;
  }
}
