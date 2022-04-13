import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public taskCount:number=0;
  public taskCountUrgent:string='';
  constructor(private taskServices:TasksService) { 
    this.taskCountUrgent=this.taskServices.getTaskCountPriority();
    this.taskCount=this.taskServices.getTaskCount();

    this.taskServices.onTaskChange.subscribe(()=>{
      this.taskCountUrgent=this.taskServices.getTaskCountPriority();
      this.taskCount=this.taskServices.getTaskCount();
    });
  }
    
  ngOnInit(): void {
    
  }
}
