import { Component } from '@angular/core';
import { courseService } from '../course.service';

@Component({
  selector: 'course',
  template: `
  <div (click) = "onDivClicked()">
  <button (click) = "onSave()">Save</button>
  </div>
  <input (keyup.enter)="onKeyUp()"/>
  `
})
export class CourseComponent {
title ="List of Courses";

onSave(){
  console.log("Save was Clicked");
}
onDivClicked(){
  console.log("Div was clicked");
}
onKeyUp(){
  console.log("Enter was Pressed"); 
}
}


