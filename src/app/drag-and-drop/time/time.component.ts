import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  template: `<h3>This is time component!!</h3>
            <p>System date and time: {{currentdate | date:'medium'}}<p>`,
  styleUrls: []
})
export class TimeComponent implements OnInit {

  constructor() { }
  currentdate = new Date();
  ngOnInit(): void {
  }

}
