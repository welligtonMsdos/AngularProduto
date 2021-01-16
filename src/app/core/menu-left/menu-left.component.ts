import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {

  @ViewChild(MatMenuTrigger, { static: false}) trigger!: MatMenuTrigger;
  
  constructor() { }

  ngOnInit(): void {
  }

  openMenu():void{
    this.trigger.openMenu();
  }

}
