import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfComponent } from './conf/conf.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonalComponent } from './personal/personal.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  {
    path: 'system', component: SystemComponent
  },

  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
