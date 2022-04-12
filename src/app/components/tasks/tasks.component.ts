import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/TasksModel';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks:Tasks[] = [];

  constructor(private tasksService:TasksService) {
    tasksService.load();
    this.tasks=tasksService.tasks;  
  }

  ngOnInit(): void {
  }

  public addNewTask(task:HTMLInputElement, priority:HTMLSelectElement){
    if (task.value!=''){
      this.tasksService.add(task.value, priority.value);
      task.value='';
    }
  }
}
