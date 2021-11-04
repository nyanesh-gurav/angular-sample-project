import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';   
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { WellListComponent } from './well-list/well-list.component';
import { WellComponent } from './well/well.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './drag-and-drop/table/table.component';
import { ButtonComponent } from './drag-and-drop/button/button.component';
import { TextboxComponent } from './drag-and-drop/textbox/textbox.component';
import { DividerComponent } from './drag-and-drop/divider/divider.component';
import { TimeComponent } from './drag-and-drop/time/time.component';
import { DropdownComponent } from './drag-and-drop/dropdown/dropdown.component';
import { HeaderComponent } from './drag-and-drop/header/header.component';
import { FooterComponent } from './drag-and-drop/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WellListComponent,
    WellComponent,
    DragAndDropComponent,
    TableComponent,
    ButtonComponent,
    TextboxComponent,
    DividerComponent,
    TimeComponent,
    DropdownComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    DragDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
