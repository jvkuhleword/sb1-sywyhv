import { Injectable } from '@angular/core';

export interface Interval {
  type: string;
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class TrainingProgramService {
  private program: { [key: number]: { [key: number]: Interval[] } } = {
    1: {
      1: this.generateWeek1Workout(),
      2: this.generateWeek1Workout(),
      3: this.generateWeek1Workout()
    },
    2: {
      1: this.generateWeek2Workout(),
      2: this.generateWeek2Workout(),
      3: this.generateWeek2Workout()
    },
    3: {
      1: this.generateWeek3Workout(),
      2: this.generateWeek3Workout(),
      3: this.generateWeek3Workout()
    },
    4: {
      1: this.generateWeek4Workout(),
      2: this.generateWeek4Workout(),
      3: this.generateWeek4Workout()
    },
    5: {
      1: this.generateWeek5Day1Workout(),
      2: this.generateWeek5Day2Workout(),
      3: this.generateWeek5Day3Workout()
    },
    6: {
      1: this.generateWeek6Day1Workout(),
      2: this.generateWeek6Day2Workout(),
      3: this.generateWeek6Day3Workout()
    },
    7: {
      1: this.generateWeek7Workout(),
      2: this.generateWeek7Workout(),
      3: this.generateWeek7Workout()
    },
    8: {
      1: this.generateWeek8Workout(),
      2: this.generateWeek8Workout(),
      3: this.generateWeek8Workout()
    },
    9: {
      1: this.generateWeek9Workout(),
      2: this.generateWeek9Workout(),
      3: this.generateWeek9Workout()
    }
  };

  getWeeks(): number[] {
    return Object.keys(this.program).map(Number);
  }

  getWorkout(week: number, day: number): Interval[] {
    return this.program[week][day] || [];
  }

  private generateWeek1Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      ...this.repeat(8, [
        { type: 'Run', duration: 60 },
        { type: 'Walk', duration: 90 }
      ]),
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek2Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      ...this.repeat(6, [
        { type: 'Run', duration: 90 },
        { type: 'Walk', duration: 120 }
      ]),
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek3Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      ...this.repeat(2, [
        { type: 'Run', duration: 90 },
        { type: 'Walk', duration: 90 },
        { type: 'Run', duration: 180 },
        { type: 'Walk', duration: 180 }
      ]),
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek4Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      { type: 'Run', duration: 180 },
      { type: 'Walk', duration: 90 },
      { type: 'Run', duration: 300 },
      { type: 'Walk', duration: 150 },
      { type: 'Run', duration: 180 },
      { type: 'Walk', duration: 90 },
      { type: 'Run', duration: 300 },
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek5Day1Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      { type: 'Run', duration: 300 },
      { type: 'Walk', duration: 180 },
      { type: 'Run', duration: 300 },
      { type: 'Walk', duration: 180 },
      { type: 'Run', duration: 300 },
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek5Day2Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      { type: 'Run', duration: 480 },
      { type: 'Walk', duration: 300 },
      { type: 'Run', duration: 480 },
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek5Day3Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      { type: 'Run', duration: 1200 },
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek6Day1Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      { type: 'Run', duration: 300 },
      { type: 'Walk', duration: 180 },
      { type: 'Run', duration: 480 },
      { type: 'Walk', duration: 180 },
      { type: 'Run', duration: 300 },
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek6Day2Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      { type: 'Run', duration: 600 },
      { type: 'Walk', duration: 180 },
      { type: 'Run', duration: 600 },
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek6Day3Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      { type: 'Run', duration: 1320 },
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek7Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      { type: 'Run', duration: 1500 },
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek8Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      { type: 'Run', duration: 1680 },
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private generateWeek9Workout(): Interval[] {
    return [
      { type: 'Warm up walk', duration: 300 },
      { type: 'Run', duration: 1800 },
      { type: 'Cool down walk', duration: 300 }
    ];
  }

  private repeat(times: number, intervals: Interval[]): Interval[] {
    return Array(times).fill(intervals).flat();
  }
}