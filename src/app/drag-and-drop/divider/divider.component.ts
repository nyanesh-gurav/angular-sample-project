import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  template:`
  <h3>This is divider component!!</h3>
  <hr>
  `,
  styleUrls: []
})
export class DividerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
