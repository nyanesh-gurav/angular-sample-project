import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template:`<h3>This is dropdown component!!</h3>
  <select class="form-control" id="type" name="type">
      <option *ngFor="let type of types" [value]="type">{{type}}</option>
  </select>`,
  styleUrls: []
})
export class DropdownComponent implements OnInit {
  types:Array<string>=['Type1','Type2','Type3'];
  constructor() { }

  ngOnInit(): void {
  }

}
