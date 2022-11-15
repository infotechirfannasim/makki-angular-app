import {Component} from '@angular/core';

@Component({
  selector: 'student-component',
  templateUrl: '../template/student.template.html'
})
export class StudentComponent {

  name: string | undefined = 'irafn';
  sum: number | undefined;
  counting: number = 0;
  num1: number = 0;
  num2: number = 0;
  sum1: number = 0;

  sumMethod() {
    this.sum = 5 + 6;
  }

  doCounting() {
    this.counting++;
  }

  resetCounting() {
    this.counting = 0;
  }

  doSum() {
    this.sum1 = this.num1 + this.num2;
  }
}
