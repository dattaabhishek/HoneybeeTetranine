import { Component } from '@angular/core';

@Component({
  selector: 'app-guitar-lessons',
  templateUrl: './guitar-lessons.component.html',
  styleUrls: ['./guitar-lessons.component.sass']
})
export class GuitarLessonsComponent {
  selected!: Date | null;
  bookClasses = `Personalized classes`;
  //bookClassesDescription = `This page will be available soon!`
  temp = `Choose and book your personalized class slots 
  for every month in advance and get personalized guidance from me.`;
}
