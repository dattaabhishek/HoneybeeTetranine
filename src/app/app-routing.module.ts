import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileNavigationComponent } from './portfolio/profile-navigation/profile-navigation.component';

const routes: Routes = [
  {path: '', component: ProfileNavigationComponent}
  // {path: 'guitar-lessons', component: GuitarLessonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [GuitarLessonsComponent]