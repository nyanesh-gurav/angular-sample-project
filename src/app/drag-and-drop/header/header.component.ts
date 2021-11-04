import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`<h3>This is header component!!</h3><header>
  <h1>Angular sample project</h1>
</header>`,
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
