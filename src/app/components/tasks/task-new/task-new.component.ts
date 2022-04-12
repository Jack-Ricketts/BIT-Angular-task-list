import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  constructor(private tasksService:TasksService, private router:Router) { }

  ngOnInit(): void {
  }

  public addNewTask(task:HTMLInputElement, priority:HTMLSelectElement){
    if (task.value!=''){
      this.tasksService.add(task.value, priority.value);
      task.value='';
      this.router.navigate(['/']);
    }
  }

}
