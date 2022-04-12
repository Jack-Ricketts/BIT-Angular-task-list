import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from 'src/app/models/TasksModel';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {

  constructor(private tasksService:TasksService) { }

  @Input() public task:Tasks={task:"",priority:""};;
  @Input() public index:number=0;

  ngOnInit(): void {
  }

  public deleteTask(){
    this.tasksService.remove(this.index);
  }
}
