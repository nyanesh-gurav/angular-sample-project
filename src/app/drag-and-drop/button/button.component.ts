import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<h3>This is button component!!</h3>
  <button class="btn btn-primary">Click Me!</button>`,
  styleUrls: []
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
