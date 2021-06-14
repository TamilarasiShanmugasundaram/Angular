import { Component, OnInit } from '@angular/core';
import { DataModelService } from 'src/app/data-model.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  constructor(public dataModel: DataModelService) { }
  taskname: string = '';
  categoryName: string = '';
  ngOnInit(): void {
    
  }
  
  id = 1;
  
  onSubmit($event:any){
    
    if($event.keyCode === 13 && this.taskname!= '' ){
      if( this.dataModel.categoryName != "Important") {
        
        const item = {
          title :  this.taskname,
          id : this.id++,
          categoryName : this.dataModel.categoryName,
          isImportant : false,
          isCompleted : false
        }
        this.dataModel.task.push(item);
        this.taskname = '';
      }
      else {        
        const item = {
          title :  this.taskname,
          id : this.id++,
          categoryName : this.dataModel.categoryName,
          isImportant : true,
          isCompleted : false
        }
        this.dataModel.task.push(item);
        this.taskname = '';
      }
    }     
  }

  clickTaskName(param:any) {
    this.dataModel.renderStep(param); 
  }

  clickStarIcon(param:any) {
    for(let tasks of this.dataModel.task) {
      if(tasks.title == param) {
        if(tasks.isImportant == true) {
          tasks.isImportant = false;
          alert("imp")
          
        } else  {
          tasks.isImportant = true;          
          alert("not imp")
          const item = {
            title :  param,
            id : this.id++,
            categoryName : "Important",
            isImportant : true,
            isCompleted : false
          }
          this.dataModel.task.push(item);
        }   
      }
    }
  }


  clickRadioButton(param:any) {
    for(let tasks of this.dataModel.task) {
      if(tasks.title == param) {
        if(tasks.isCompleted == true) {
          tasks.isCompleted = false;
        } else {
          tasks.isCompleted = true;
        }
      }
    }
}
   
}