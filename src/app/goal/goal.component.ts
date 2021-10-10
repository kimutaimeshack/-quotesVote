import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
  export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'meshack','Kibaki was the best president', 'He does much for kenya','meshack', new Date(2019, 9, 14)),
  ];
 
toggleDetails(index){
  this.goals[index].showDescription = !this.goals[index].showDescription;
}
  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index, 1)
      }
    }
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}