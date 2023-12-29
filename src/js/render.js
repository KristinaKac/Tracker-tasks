export default class RenderTask {
  constructor(taskList) {
    this.taskList = taskList;
  }

  renderTasks(tasks) {
    tasks.forEach((item) => {
      const statusText = item.task.querySelector('.status').innerText;
      if (statusText === 'v') { this.taskList.pinnedList.appendChild(item.task); return; }
      this.taskList.filterList.appendChild(item.task);
    });
  }

  renderNoTasks(item) {
    let noTasks; let
      elements;

    if (Array.isArray(item)) {
      noTasks = this.taskList.filterList.querySelector('.no-found');
      elements = item.length;
    } else {
      noTasks = item.querySelector('.no-found');
      elements = [...item.querySelectorAll('.task-item')].length;
    }
    if (elements === 0) {
      noTasks.classList.remove('hidden');
    } else {
      noTasks.classList.add('hidden');
    }
  }

  static clearList(list) {
    [...list.querySelectorAll('.task-item')].forEach((item) => item.remove());
  }
}
