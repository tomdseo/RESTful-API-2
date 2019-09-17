import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager';
  tasks = [];

  constructor(private _httpService: HttpService){
  }
  ngOnInit() {
    this.getTasksFromService()
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our Data from Component.ts", data)
      for(let d of data) {
        this.tasks.push(d.title);
      }
      console.log(this.tasks);
    })
  }
}


