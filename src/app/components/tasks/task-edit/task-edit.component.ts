import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  public index:number=0;
  public task:string='';
  public priority:string='';

  constructor(
    private tasksService:TasksService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.params['index'];
    const task=this.tasksService.get(this.index);
    this.task=task.task;
    this.priority=task.priority;
  }
  
  public update(){
    this.tasksService.update(this.index, this.task, this.priority);
    this.router.navigate(['/'])
  }

}
