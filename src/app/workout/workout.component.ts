import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingProgramService, Interval } from '../services/training-program.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  week: number;
  day: number;
  intervals: Interval[];
  currentIntervalIndex: number = 0;
  timeRemaining: number = 0;
  isRunning: boolean = false;
  timer: any;

  constructor(
    private route: ActivatedRoute,
    private trainingProgramService: TrainingProgramService
  ) {}

  ngOnInit() {
    this.week = +this.route.snapshot.params['week'];
    this.day = +this.route.snapshot.params['day'];
    this.intervals = this.trainingProgramService.getWorkout(this.week, this.day);
    this.resetTimer();
  }

  toggleWorkout() {
    if (this.isRunning) {
      this.pauseWorkout();
    } else {
      this.startWorkout();
    }
  }

  startWorkout() {
    this.isRunning = true;
    this.timer = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        this.nextInterval();
      }
    }, 1000);
  }

  pauseWorkout() {
    this.isRunning = false;
    clearInterval(this.timer);
  }

  nextInterval() {
    if (this.currentIntervalIndex < this.intervals.length - 1) {
      this.currentIntervalIndex++;
      this.resetTimer();
    } else {
      this.pauseWorkout();
    }
  }

  selectInterval(index: number) {
    this.currentIntervalIndex = index;
    this.resetTimer();
    if (this.isRunning) {
      this.pauseWorkout();
      this.startWorkout();
    }
  }

  resetTimer() {
    this.timeRemaining = this.intervals[this.currentIntervalIndex].duration;
  }

  get currentInterval(): Interval {
    return this.intervals[this.currentIntervalIndex];
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}