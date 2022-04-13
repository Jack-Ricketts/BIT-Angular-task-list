import { Injectable } from '@angular/core';
import { Tasks } from '../models/TasksModel';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks:Tasks[]=[];
  constructor() { }

  public load(){
    let data=localStorage.getItem('tasks');
    if (data!=null){
      this.tasks=JSON.parse(data);
    }
  }

  private save(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public add(task:string, priority:string){
      this.tasks.push({
        task: task,
        priority: priority
      });;
      this.save();
  }

  public remove(i:number){
    this.tasks.splice(i, 1);
    this.save();
  }

  public get(index:number){
    return this.tasks[index];
  }

  public update(index:number, task:string, priority:string){
    this.tasks[index].task=task;
    this.tasks[index].priority=priority;
    this.save();
  }
}
