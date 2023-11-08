import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { GuitarLessonsComponent } from './guitar-lessons/guitar-lessons.component';
import { SocialsComponent } from './socials/socials.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    HireMeComponent,
    GuitarLessonsComponent,
    SocialsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class GlobalModule { }
