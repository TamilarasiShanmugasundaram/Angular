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
          if(tasks.categoryName == "Important") {
            this.dataModel.task.splice(tasks.id,1);
          } else {
            for(let userTasks of this.dataModel.task) { 
              if(userTasks.categoryName == "Important" && userTasks.title == param) {
                this.dataModel.task.splice(userTasks.id,1);
                tasks.isImportant = false;
              }
            }
            break;
          }
       
          
        } else  {
          console.log("false")
          tasks.isImportant = true;    
          const item = {
            title :  param,
            id : this.id++,
            categoryName : "Important",
            isImportant : true,
            isCompleted : false
          }
          this.dataModel.task.push(item);
          break;
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