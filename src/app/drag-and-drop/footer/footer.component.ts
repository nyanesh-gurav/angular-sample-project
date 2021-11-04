import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`<h3>This is footer component!!</h3>
  <footer>Contact details</footer>`,
  styleUrls: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
