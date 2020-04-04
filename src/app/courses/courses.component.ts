import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses', //can be changed also can be property
  // selector: '[app-courses]',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  title = 'Courses';
  courseTitle = 'empty';
  courseInstructor = ''; //without defualt value to be changable unless >>>
  // creationMessage = 'No New Courses Created!..';

  isThereAnNewCourse = false;
  noNewCoursesMsg = 'No New Courses Created!..';
  newCoursesMsg = '';
  courses = []; //now we can loop


  //lifecycle hocks

  //first call the constructor 
  constructor() { }

  //then calling ngOnInit -- best practice to initalize(default values) the var here
  ngOnInit(): void {

    this.courses = [
      {
        id: 1,
        title: 'Angular',
        instructor: 'Mohammed Gnedy',
        isAvailabel: true
      },
      {
        id: 2,
        title: 'Flutter',
        instructor: 'Caroline Adel',
        isAvailabel: true
      },
      {
        id: 3,
        title: 'Agile',
        instructor: 'Ghada Kadous',
        isAvailabel: true
      },
      {
        id: 4,
        title: 'NodeJS',
        instructor: 'Mohammed Mahdy',
        isAvailabel: true
      },
      {
        id: 5,
        title: 'Kotlin',
        instructor: '----',
        isAvailabel: false
      }

    ];

  }

  onClick(ev) {
    console.log(ev);

    if (this.courseTitle != 'empty') {
      // this.creationMessage = `${this.courseTitle} Course Created Successfully`;
      this.newCoursesMsg = `${this.courseTitle} Course Created Successfully`;
      this.isThereAnNewCourse = true;
      this.courses.push({
        id: 0,
        title: this.courseTitle,
        instructor: '----',
        isAvailabel: true
      });

    } else {
      // this.creationMessage = 'Please enter course name!!';
      this.noNewCoursesMsg = 'Please enter course name!!';
    }

  }

  onInput(ev) {
    console.log(ev.target.value);
    this.courseInstructor = ev.target.value;
  }

}
