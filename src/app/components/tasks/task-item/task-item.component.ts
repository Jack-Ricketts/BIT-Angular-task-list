import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from 'src/app/models/TasksModel';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  @Input() public task:Tasks={task:"",priority:""};;
  @Input() public index:number=0;

  @Output() public afterRemoveTask=new EventEmitter<number>();
  


  ngOnInit(): void {
  }

  public deleteTask(){
    this.afterRemoveTask.emit(this.index);
  }
}
