import { Component, OnInit } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DataModelService } from 'src/app/data-model.service';
import { CenterComponent } from '../center/center.component';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})

export class RightComponent implements OnInit {


constructor( public dataModel: DataModelService) { }
taskname: string = '';
stepname: string = '';
ngOnInit(): void {
  
}
id = 1;
task  = this.dataModel.task;
step = [
  {title:'', id:0, stepName :this.stepname,isImportant:false, isCompleted:false}
];


onSubmit($event:any){
  if($event.keyCode === 13 && this.stepname != '' ){
    if( this.dataModel.step != "Important") {
      const item = {
        title :  this.stepname,
        id : this.id++,
        stepName :  this.dataModel.step,
        isImportant : false,
        isCompleted : false
      }
      this.step.push(item);
      this.stepname = '';
    }
    else {
      const item = {
        title : this.stepname,
        id : this.id++,
        stepName :  this.dataModel.step,
        isImportant : true,
        isCompleted : false
      }
      this.step.push(item);
      this.stepname = '';
    }
  } 
  
}

clickTaskName(param:any) {
  this.dataModel.renderStep(param); 
}

clickStarIcon(param:any) {
  for(let steps of this.step) {
    if(steps.title == param) {
      if(steps.isImportant == true) {
        steps.isImportant = false;
      } else {
        steps.isImportant = true;
      }
    }
  }
  for(let steps of this.dataModel.task) {
    if(steps.title == param) {
      if(steps.isImportant == true) {
        steps.isImportant = false;
      } else {
        steps.isImportant = true;
      }
    }
  }
}

clickRadioButton(param:any) {
  for(let steps of this.step) {
    if(steps.title == param) {
      if(steps.isCompleted == true) {
        steps.isCompleted = false;
      } else {
        steps.isCompleted = true;
      }
    }
  }
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
