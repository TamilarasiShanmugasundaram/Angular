import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataModelService } from 'src/app/data-model.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent  {

  constructor(private router: ActivatedRoute, public dataModel:DataModelService) { }
}
  






  // public initialPage: boolean = false;
  // ngDoCheck() {
  //   console.log("do check");
  //   this.router.queryParams.subscribe(params => {
  //     this.initialPage = params['val'];
  //  });
  // }

  // message:boolean = false;

  // receiveMessage($event: boolean) {
  //   alert("page");
  //   this.message = $event
  // }
