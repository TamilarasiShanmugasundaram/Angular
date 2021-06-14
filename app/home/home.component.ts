import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: ActivatedRoute){ }
   s: string = '';
    ngOnInit() {
      this.router.queryParams.subscribe(params => {
        this.s = params['val'];
      });
    }
  }