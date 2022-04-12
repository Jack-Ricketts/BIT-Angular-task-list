import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TaskItemComponent } from './components/tasks/task-item/task-item.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskNewComponent } from './components/tasks/task-new/task-new.component';

const taskRoutes:Routes=[
  {path:'', component:TasksComponent},
  {path:'new', component:TaskNewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskItemComponent,
    TaskNewComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(taskRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }