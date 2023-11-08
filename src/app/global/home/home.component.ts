import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  profession = "Guitarist / Musician"
  cardContentTitle = "MOONLIGHT SONATA 3RD MOVEMENT | GUITAR METAL COVER";
  name = "HONEYBEE TETRANINE";

  hello ="Hi, I'm Honeybee";
  welcomeNote = 
`I'm a guitarist & I've been playing guitar for around 8 years. My favourite genres are Metal and Rock.

I'm a guitar teacher and a content creator as well. Check out my socials if you want ;)`;

  guitarLessonsButton = "Register for Guitar Classes"
}
