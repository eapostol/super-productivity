import { Pipe, PipeTransform } from '@angular/core';
import { TaskWithSubTasks } from './task.model';

export const filterDoneTasks = (tasks: TaskWithSubTasks[], currentTaskId: string, isFilterDone: boolean, isFilterAll: boolean): any => {
  return isFilterDone
    ? tasks.filter(task => !task.isDone)
    : isFilterAll ? tasks.filter(task => task.id === currentTaskId) : tasks;
};

@Pipe({
  name: 'filterDoneTasks'
})
export class FilterDoneTasksPipe implements PipeTransform {
  transform = filterDoneTasks;
}
