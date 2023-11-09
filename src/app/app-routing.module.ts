import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileNavigationComponent } from './portfolio/profile-navigation/profile-navigation.component';
import { WipComponent } from './masterclass/wip/wip.component';

const routes: Routes = [
  {path: '', component: ProfileNavigationComponent},
  {path: 'work_in_progress', component: WipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [GuitarLessonsComponent]