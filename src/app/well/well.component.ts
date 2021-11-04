import { Component, OnInit, Output, EventEmitter, Input, ViewChild,ElementRef } from '@angular/core';
import { WellModel } from "../model/well.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit {
  wellModel: WellModel = new WellModel();
  disableSourceKey: boolean = true;
  types = ['ris', 'esp'];
  message = 'Message from child!';

  @Input()
  sourceKey: number;
  @Input()
  date: Date;
  @Output()
  wellObj: EventEmitter<WellModel> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.wellModel.sourceKey = this.sourceKey;
    if (this.date) {
      this.disableSourceKey = true;

    }
  }
  onSubmit() {
    this.wellObj.emit(this.wellModel);
    this.wellModel = new WellModel();
  }
}
