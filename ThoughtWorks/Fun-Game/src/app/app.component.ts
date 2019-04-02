import { Component } from '@angular/core';
import { GameService } from './common/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fun-Game';
  info: any;
  taskData: any;
  constructor(
    private service: GameService
  ) {

  }
  getInstructions() {
    this.service.getInstructions().subscribe(data => {
      this.info = data;
    })
  }

  task_1() {
    this.service.getAndPostTask_1().subscribe(x => {
      this.taskData = x;
    });
  }


  task_2() {
    this.service.getAndPostTask_2().subscribe(x => {
      this.taskData = x;
    });
  }


  task_3() {
    this.service.getAndPostTask_3().subscribe(x => {
      this.taskData = x;
    });
  }

  task_4() {
    this.service.getAndPostTask_4().subscribe(x => {
      this.taskData = x;
    });
  }
}
