import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent {
  profession = "Guitarist / Musician"
  cardContentTitle = "MOONLIGHT SONATA 3RD MOVEMENT | GUITAR METAL COVER";
  name = "HONEYBEE TETRANINE";

  hello ="Hi, I'm Honeybee";
  welcomeNote = 
`I'm a guitarist & I've been playing guitar for around 8 years. My favourite genres are Metal and Rock.

I'm a guitar teacher and a content creator as well. Check out my socials if you want.`;

  guitarLessonsButton = "Register for Guitar Classes"
}
