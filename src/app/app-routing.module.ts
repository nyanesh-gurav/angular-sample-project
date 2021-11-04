import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { WellListComponent } from "./well-list/well-list.component";
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component";

const routes: Routes = [
  {path:'',redirectTo:'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'welllist', component: WellListComponent },
  { path: 'draganddrop', component: DragAndDropComponent },
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
