import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { WellModel} from "../model/well.model";
import { WellComponent } from "../well/well.component";


@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss']
})
export class WellListComponent implements OnInit {
  wellList: Array<WellModel> = [];
  sourceKey: number;
  disableSourceKey:boolean;
  date:Date;
  @ViewChild(WellComponent) child;
  @ViewChild('srcKey') source: ElementRef;
  message: string;
  constructor() { }

  ngOnInit(): void {
    this.wellList=[
      new WellModel("TestRLSWell01","ris",100001),
      new WellModel("TestRLSWell02","esp",100001),
      new WellModel("TestRLSWell03","ris",100001),
      new WellModel("TestRLSWell04","esp",100001),
      new WellModel("TestRLSWell05","ris",100001),
      new WellModel("TestRLSWell06","esp",1000012),

    ];
  }
  addWell(well: WellModel) {
    console.log("addWell", well);
    this.wellList.push(well);
  }
  onSourceKey(){
    this.date=new Date()
  }
  ngAfterViewInit() {
    this.message = this.child.message; 
  }

}
