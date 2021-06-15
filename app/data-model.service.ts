import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataModelService {
   
  constructor() { }

  categoryName: string = '';
  tasks: string = '';
  taskName: string = '';
  step: string = '';
  id = 1;
  flag :number = 0 ;
  task = [
    {title:'', id:0, categoryName :this.categoryName,isImportant:false, isCompleted:false}
  ];


  renderTask(categoryName: string ) {
    this.categoryName = categoryName;
    this.tasks = categoryName;   
  }
  renderStep(taskName : string) {
    for(let tasks of this.task) {
      if(tasks.title == taskName) {
        this.flag = tasks.id;
      }
    }
      this.taskName = taskName;
      this.step = taskName;
  }
}
