import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataModelService } from 'src/app/data-model.service';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent {
  
  id = 1;
  constructor(private router: Router, private dataModel : DataModelService) { }
  category = [
    {title:"My Day", symbol:"fas fa-sun",id:this.id++},  
    {title:"Important", symbol:"fas fa-star",id:this.id++},  
    {title:"Planned", symbol:"fas fa-calendar-alt",id:this.id++},  
    {title:"Assigned to you", symbol:"fas fa-user",id:this.id++},  
    {title:"Tasks", symbol:"fas fa-sun",id:this.id++}
  ];

  inputValue: any = null;
  categoryName: any = null;
  onSubmit($event:any){
    if($event.keyCode === 13 && this.inputValue != null){
       const item = {
        title :  this.inputValue,
        symbol : "fas fa-list",
        id:this.id++
      }
      this.category.push(item);
      this.inputValue = null;
    }
  }
     message: boolean = true;
     @Output() MessageEvent = new EventEmitter<boolean>();
  onClick(param:any) {
    this.dataModel.renderTask(param); 
  }

  
}

