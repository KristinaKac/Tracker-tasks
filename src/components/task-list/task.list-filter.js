import { filterBy, containsText } from '../../js/filter';
import RenderTask from '../../js/render';

const filterCb = (input, tasks) => containsText(tasks.task.querySelector('.value').innerText, input);

export default class TaskListFilter {
  constructor(taskList) {
    this.taskList = taskList;
    this.renderTask = new RenderTask(this.taskList);
    this.filterTasks = this.filterTasks.bind(this);
  }

  filterTasks(input) {
    this.taskList.input = input;

    const filterCallback = filterCb.bind(null, input);
    const filterTasks = filterBy(this.taskList.filterItems, filterCallback);

    this.renderTask.renderNoTasks(filterTasks);

    RenderTask.clearList(this.taskList.filterList);

    this.renderTask.renderTasks(filterTasks);
  }
}
