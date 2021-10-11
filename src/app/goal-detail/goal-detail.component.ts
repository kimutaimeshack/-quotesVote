import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  qoutelikes: number;
  qoutedisLikes: number;

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
 
  constructor() {
    this.qoutelikes = 0;
    this.qoutedisLikes = 0;
  }
  Upvote(): boolean {
    this.qoutelikes += 1;
    return false;
  }

  Downvote(): boolean {
    this.qoutedisLikes += 1;
    return false;
  }

  ngOnInit() {
  }

}