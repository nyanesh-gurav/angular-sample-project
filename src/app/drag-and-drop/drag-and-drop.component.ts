import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
  selectedComponent: string;
  dragComponentList = ['Button', 'Table', 'Textbox', 'Divider', 'Time', 'Dropdown', 'Header', 'Footer'];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    this.selectedComponent = this.dragComponentList[event.previousIndex]
    // moveItemInArray(this.dragComponentList, event.previousIndex, event.currentIndex);
  }

}
