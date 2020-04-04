import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
   //vars : type script make data types availabel
  // @Input() title: string;
  // @Input() instructor: string;
  // @Input() isAvailabel: boolean;

  // @Input() courseData;


  @Input('courseData') course; //courseData : is elias name

  constructor() { 
    // this.title = 'Angular';
    // this.instructor = 'Mohammed Gnedy';
    // this.isAvailabel = Math.random() > 0.5;
  }

  ngOnInit(): void {
  }

}
