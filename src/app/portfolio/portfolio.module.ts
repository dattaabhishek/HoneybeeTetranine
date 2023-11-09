import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProfileComponent } from './profile/profile.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { SocialComponent } from './social/social.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileNavigationComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ProfileComponent,
    ProfileNavigationComponent,
    SocialComponent
  ]
})
export class PortfolioModule { }
