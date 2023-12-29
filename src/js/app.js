import TaskList from '../components/task-list/task-list';
import FilterAddWidget from '../components/filter-add-widget/filter-add-widget';
import TaskListAdd from '../components/task-list/task-list-add';
import TaskListFilter from '../components/task-list/task.list-filter';

const taskList = new TaskList('.task-list');

const taskListAdd = new TaskListAdd(taskList);
const taskListFilter = new TaskListFilter(taskList);

new FilterAddWidget('.form', taskListAdd.addTask, taskListFilter.filterTasks);
