import { EventEmitter, Injectable } from '@angular/core';
import { Tasks } from '../models/TasksModel';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks:Tasks[]=[];
  public onTaskChange=new EventEmitter();
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
    this.onTaskChange.emit();
  }

  public remove(i:number){
    this.tasks.splice(i, 1);
    this.save();
    this.onTaskChange.emit();
  }

  public get(index:number){
    return this.tasks[index];
  }

  public update(index:number, task:string, priority:string){
    this.tasks[index].task=task;
    this.tasks[index].priority=priority;
    this.save();
  }

  public getTaskCount(){
    return this.tasks.length;
  }

  public getTaskCountPriority(){
    let urgent:number=0;
    let highPriority:number=0;
    let lowPriority:number=0;
    let routine:number=0;
    this.tasks.forEach(task=>{
      if(task.priority=='Urgent'){
        urgent++;
      }
      if(task.priority=='High priority'){
        highPriority++;
      }
      if(task.priority=='Low priority'){
        lowPriority++;
      }
      if(task.priority=='Routine'){
        routine++;
      }
    })
    return `Urgent tasks: ${urgent}, High Priority tasks: ${highPriority}, Low Priority tasks: ${lowPriority}, Routine tasks: ${routine}`
  }
}
