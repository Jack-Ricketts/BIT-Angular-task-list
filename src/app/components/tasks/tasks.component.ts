import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/TasksModel';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks:Tasks[] = [];
  constructor() {
    let data=localStorage.getItem('tasks');
    if (data!=null){
      this.tasks=JSON.parse(data);
    }
   }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  ngOnInit(): void {
  }

  public addNewTask(task:HTMLInputElement, priority:HTMLSelectElement){
    if (task.value!=''){
      this.tasks.push({
        task  : task.value,
        priority : priority.value
      });
      task.value='';
      this.saveTasks();
    }
  }

  public removeTask(i:number){
    this.tasks.splice(i, 1);
    this.saveTasks();
  }
}
