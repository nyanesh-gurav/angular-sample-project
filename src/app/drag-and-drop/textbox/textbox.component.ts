import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  template: `<h3>This is textbox component!!</h3>
            <input class="form-control">`,
  styleUrls: []
})
export class TextboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
