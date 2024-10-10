import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { TrainingProgramService } from '../services/training-program.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weeks: number[];

  constructor(
    private routerExtensions: RouterExtensions,
    private trainingProgramService: TrainingProgramService
  ) {}

  ngOnInit() {
    this.weeks = this.trainingProgramService.getWeeks();
  }

  onWeekTap(week: number) {
    this.routerExtensions.navigate(['/workout', week, 1]);
  }
}