import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent,
    ViewUserComponent,
    DeleteUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
