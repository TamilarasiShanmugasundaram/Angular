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
  task = [
    {title:'', id:this.id++, categoryName :this.categoryName,isImportant:false, isCompleted:false}
  ];


  renderTask(categoryName: string ) {
    this.categoryName = categoryName;
    this.tasks = categoryName;   
  }
  renderStep(taskName : string) {
      this.taskName = taskName;
      this.step = taskName;
  }
}
